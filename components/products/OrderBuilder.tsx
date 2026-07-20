"use client";

import { products } from "@/data/products";
import { trackAnalyticsEvent } from "@/lib/analytics";
import { buildOrderWhatsappUrl } from "@/lib/contact";
import { MessageCircle, ShoppingBasket, Trash2, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type OrderBuilderProps = {
  open: boolean;
  selections: Record<string, string>;
  onClose: () => void;
  onQuantityChange: (productId: string, quantity: string) => void;
  onRemove: (productId: string) => void;
  onClear: () => void;
};

export function OrderBuilder({
  open,
  selections,
  onClose,
  onQuantityChange,
  onRemove,
  onClear,
}: OrderBuilderProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [note, setNote] = useState("");

  const selectedProducts = useMemo(
    () => products.filter((product) => Object.hasOwn(selections, product.id)),
    [selections],
  );
  const isComplete =
    selectedProducts.length > 0 &&
    selectedProducts.every((product) => selections[product.id]?.trim().length > 0);
  const orderUrl = isComplete
    ? buildOrderWhatsappUrl(
        selectedProducts.map((product) => ({
          productName: product.name,
          quantity: selections[product.id],
        })),
        note,
      )
    : undefined;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="order-builder-title"
      className="fixed inset-y-0 left-auto right-0 m-0 h-dvh max-h-none w-full max-w-lg border-0 bg-cream p-0 text-ink shadow-2xl backdrop:bg-ink/70"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4 border-b border-burgundy/10 bg-white px-5 py-5 sm:px-7">
          <div>
            <p className="eyebrow text-red">WhatsApp Siparişi</p>
            <h2 id="order-builder-title" className="mt-2 font-display text-3xl font-semibold">
              Sipariş listeniz
            </h2>
            <p className="mt-1 text-sm text-muted">{selectedProducts.length} ürün seçildi</p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="grid size-11 shrink-0 place-items-center rounded-full border border-burgundy/15 text-burgundy transition-colors hover:bg-burgundy hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red"
            aria-label="Sipariş listesini kapat"
          >
            <X aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-7">
          {selectedProducts.length > 0 ? (
            <>
              <ul className="space-y-4">
                {selectedProducts.map((product) => (
                  <li key={product.id} className="rounded-2xl border border-burgundy/10 bg-white p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[.12em] text-red">{product.categoryLabel}</p>
                        <h3 className="mt-1 font-display text-xl font-semibold">{product.name}</h3>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemove(product.id)}
                        className="grid size-10 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-red/10 hover:text-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red"
                        aria-label={`${product.name} ürününü listeden çıkar`}
                      >
                        <Trash2 size={18} aria-hidden="true" />
                      </button>
                    </div>
                    <label htmlFor={`quantity-${product.id}`} className="form-label mt-4 block">
                      Miktar ve hazırlama tercihi
                    </label>
                    <input
                      id={`quantity-${product.id}`}
                      value={selections[product.id] ?? ""}
                      onChange={(event) => onQuantityChange(product.id, event.target.value)}
                      placeholder="Örn. 1 kg, orta yağlı kıyma"
                      className="form-control mt-2"
                      autoComplete="off"
                    />
                  </li>
                ))}
              </ul>

              <label htmlFor="order-note" className="form-label mt-6 block">
                Sipariş notu <span className="font-normal text-muted">(isteğe bağlı)</span>
              </label>
              <textarea
                id="order-note"
                rows={3}
                value={note}
                onChange={(event) => setNote(event.target.value)}
                placeholder="Teslim alma zamanı veya eklemek istediğiniz başka bir not"
                className="form-control mt-2 resize-y"
              />
              <button type="button" onClick={onClear} className="mt-5 text-sm font-bold text-red underline-offset-4 hover:underline">
                Listeyi temizle
              </button>
            </>
          ) : (
            <div className="grid min-h-72 place-items-center text-center">
              <div>
                <span className="mx-auto grid size-16 place-items-center rounded-full bg-paper text-burgundy">
                  <ShoppingBasket size={27} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold">Listeniz henüz boş</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-muted">Ürün kartlarından istediğiniz ürünleri listeye ekleyebilirsiniz.</p>
                <button type="button" onClick={onClose} className="button-secondary mt-6">Ürünlere Dön</button>
              </div>
            </div>
          )}
        </div>

        {selectedProducts.length > 0 && (
          <div className="border-t border-burgundy/10 bg-white px-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pt-5 sm:px-7">
            {orderUrl ? (
              <a
                href={orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary w-full justify-center"
                data-analytics="order_list_whatsapp_open"
                onClick={() => trackAnalyticsEvent("order_list_complete")}
              >
                <MessageCircle size={19} aria-hidden="true" /> WhatsApp’ta Gönder
              </a>
            ) : (
              <button type="button" disabled className="button-disabled w-full justify-center">
                <MessageCircle size={19} aria-hidden="true" /> Önce Tüm Miktarları Yazın
              </button>
            )}
            <p className="mt-3 text-center text-xs leading-5 text-muted">Bu işlem ödeme almaz; listenizi WhatsApp görüşmesine taşır.</p>
          </div>
        )}
      </div>
    </dialog>
  );
}
