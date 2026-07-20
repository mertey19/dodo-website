"use client";

import { trackAnalyticsEvent } from "@/lib/analytics";
import { buildContactWhatsappUrl } from "@/lib/contact";
import { CheckCircle2, MessageCircle } from "lucide-react";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";

type FormErrors = Partial<Record<"name" | "phone" | "message", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [notice, setNotice] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

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
    setNotice(false);

    const firstError = (Object.keys(nextErrors) as Array<keyof FormErrors>)[0];
    if (firstError) {
      const refs = { name: nameRef, phone: phoneRef, message: messageRef };
      window.requestAnimationFrame(() => refs[firstError].current?.focus());
      return;
    }

    const whatsappUrl = buildContactWhatsappUrl(name, phone, message);
    setNotice(true);
    trackAnalyticsEvent("contact_whatsapp_open");
    const openedWindow = window.open(whatsappUrl, "_blank");
    if (openedWindow) openedWindow.opener = null;
    else window.location.assign(whatsappUrl);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-[2rem] border border-burgundy/10 bg-white p-6 shadow-soft sm:p-8">
      <h2 className="font-display text-3xl font-semibold text-ink">İletişim formu</h2>
      <p className="mt-3 text-sm leading-6 text-muted">Bilgilerinizi yazın; form, mesajınızı cihazınızda hazırlayıp WhatsApp görüşmesine aktarır.</p>
      {Object.keys(errors).length > 0 && (
        <p role="alert" className="mt-5 rounded-xl border border-red/25 bg-red/5 p-4 text-sm font-semibold text-red">
          Lütfen işaretlenen alanları kontrol edin.
        </p>
      )}
      <div className="mt-7 space-y-5">
        <label className="block">
          <span className="form-label">Ad soyad</span>
          <input ref={nameRef} name="name" type="text" autoComplete="name" className="form-control mt-2" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
          {errors.name && <span id="name-error" className="form-error">{errors.name}</span>}
        </label>
        <label className="block">
          <span className="form-label">Telefon</span>
          <input ref={phoneRef} name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="05XX XXX XX XX" className="form-control mt-2" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} />
          {errors.phone && <span id="phone-error" className="form-error">{errors.phone}</span>}
        </label>
        <label className="block">
          <span className="form-label">Mesaj</span>
          <textarea ref={messageRef} name="message" rows={5} className="form-control mt-2 resize-y" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />
          {errors.message && <span id="message-error" className="form-error">{errors.message}</span>}
        </label>
      </div>
      <button type="submit" className="button-primary mt-6 w-full justify-center"><MessageCircle size={18} aria-hidden="true" /> WhatsApp’ta Gönder</button>
      <p className="mt-4 text-xs leading-5 text-muted">
        Form verileri bu sitede saklanmaz. Devam ettiğinizde bilgileriniz WhatsApp’a aktarılır. Ayrıntılar için <Link href="/gizlilik" className="font-bold text-red underline-offset-4 hover:underline">gizlilik bilgilendirmesini</Link> okuyun.
      </p>
      {notice && (
        <div role="status" className="mt-5 flex gap-3 rounded-xl border border-emerald-700/25 bg-emerald-50 p-4 text-sm leading-6 text-ink">
          <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-700" size={19} aria-hidden="true" />
          <p>Mesajınız hazırlandı; WhatsApp görüşmesi açılıyor.</p>
        </div>
      )}
    </form>
  );
}
