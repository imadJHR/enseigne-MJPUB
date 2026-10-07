"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
} from "@/components/Icons";
import { formatPrice } from "@/lib/site";
export default function CartPage() {
  const { items, isLoaded, removeFromCart, updateQuantity, getTotalPrice } =
    useCart();
  if (!isLoaded)
    return (
      <p className="empty-state" role="status">
        Chargement de votre panier…
      </p>
    );
  if (!items.length)
    return (
      <div className="empty-state">
        <ShoppingBag size={40} />
        <h2>Votre panier attend votre projet.</h2>
        <p>Découvrez les produits et accessoires disponibles.</p>
        <Link className="button button-primary" href="/produits">
          Voir nos solutions <ArrowRight size={18} />
        </Link>
      </div>
    );
  const total = getTotalPrice();
  const shipping = total >= 200 ? 0 : 15;
  return (
    <div className="cart-layout">
      <div>
        {items.map((item) => (
          <article className="cart-row" key={item.id}>
            <div className="cart-image">
              {item.image && (
                <Image src={item.image} alt="" fill sizes="100px" />
              )}
            </div>
            <div>
              <h2>{item.name}</h2>
              {item.material && <p>{item.material}</p>}
              <p>{formatPrice(item.price)} HT / unité</p>
              <div className="cart-row-actions">
                <div className="quantity-control">
                  <button
                    aria-label={"Diminuer la quantité de " + item.name}
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus size={14} />
                  </button>
                  <span aria-live="polite">{item.quantity}</span>
                  <button
                    disabled={item.quantity >= 99}
                    aria-label={"Augmenter la quantité de " + item.name}
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <button
                  className="icon-button"
                  aria-label={"Retirer " + item.name}
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 size={17} />
                </button>
              </div>
            </div>
            <strong>{formatPrice(item.price * item.quantity)} HT</strong>
          </article>
        ))}
      </div>
      <aside className="summary-panel">
        <h2>Votre récapitulatif</h2>
        <div className="summary-line">
          <span>Articles HT</span>
          <span>{formatPrice(total)}</span>
        </div>
        <div className="summary-line">
          <span>Livraison HT</span>
          <span>{shipping ? formatPrice(shipping) : "Offerte"}</span>
        </div>
        <div className="summary-line">
          <span>TVA estimée (20 %)</span>
          <span>{formatPrice((total + shipping) * 0.2)}</span>
        </div>
        <div className="summary-total">
          <span>Total TTC estimé</span>
          <strong>{formatPrice((total + shipping) * 1.2)}</strong>
        </div>
        <Link className="button button-primary" href="/checkout">
          Transmettre ma commande <ArrowRight size={18} />
        </Link>
        <p className="form-note">
          Livraison offerte à partir de 200 € HT d’articles. Les détails de
          fabrication et de livraison seront confirmés par MJ PUB.
        </p>
      </aside>
    </div>
  );
}
