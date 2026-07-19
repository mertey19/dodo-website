"use client";

import { AlertCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";

type FormErrors = Partial<Record<"name" | "phone" | "message", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [notice, setNotice] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const nextErrors: FormErrors = {};

    if (name.length < 2) nextErrors.name = "Lütfen adınızı ve soyadınızı yazın.";
    if (!/^[+\d][\d\s()-]{9,}$/.test(phone)) nextErrors.phone = "Geçerli bir telefon numarası yazın.";
    if (message.length < 10) nextErrors.message = "Mesajınız en az 10 karakter olmalıdır.";

    setErrors(nextErrors);
    setNotice(Object.keys(nextErrors).length === 0);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-[2rem] border border-burgundy/10 bg-white p-6 shadow-soft sm:p-8">
      <h2 className="font-display text-3xl font-semibold text-ink">İletişim formu</h2>
      <p className="mt-3 text-sm leading-6 text-muted">Sorunuzu bırakın; mesaj gönderme altyapısı bağlanana kadar WhatsApp üzerinden bize ulaşabilirsiniz.</p>
      <div className="mt-7 space-y-5">
        <label className="block">
          <span className="form-label">Ad soyad</span>
          <input name="name" type="text" autoComplete="name" className="form-control mt-2" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
          {errors.name && <span id="name-error" className="form-error">{errors.name}</span>}
        </label>
        <label className="block">
          <span className="form-label">Telefon</span>
          <input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="05XX XXX XX XX" className="form-control mt-2" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} />
          {errors.phone && <span id="phone-error" className="form-error">{errors.phone}</span>}
        </label>
        <label className="block">
          <span className="form-label">Mesaj</span>
          <textarea name="message" rows={5} className="form-control mt-2 resize-y" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />
          {errors.message && <span id="message-error" className="form-error">{errors.message}</span>}
        </label>
      </div>
      <button type="submit" className="button-primary mt-6 w-full justify-center"><Send size={18} aria-hidden="true" /> Mesajı Kontrol Et</button>
      {notice && (
        <div role="status" className="mt-5 flex gap-3 rounded-xl border border-gold/35 bg-gold/10 p-4 text-sm leading-6 text-ink">
          <AlertCircle className="mt-0.5 shrink-0 text-red" size={19} aria-hidden="true" />
          <p>Mesaj gönderme altyapısı henüz bağlanmadı. WhatsApp üzerinden iletişime geçebilirsiniz.</p>
        </div>
      )}
    </form>
  );
}
