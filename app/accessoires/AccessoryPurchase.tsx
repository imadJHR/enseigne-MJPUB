"use client";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import { ShoppingBag } from "@/components/Icons";
import { formatPrice } from "@/lib/site";
export default function AccessoryPurchase() {
  const [image, setImage] = useState("/a1.jpeg");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  return (
    <div className="accessory-layout">
      <div>
        <div className="accessory-image">
          <Image
            src={image}
            alt="Accessoire EASYFIX blanc, détail du produit"
            fill
            sizes="(max-width:850px) 100vw, 50vw"
          />
        </div>
        <div className="accessory-thumbnails">
          {["/a1.jpeg", "/a2.jpeg", "/a3.jpeg"].map((src, index) => (
            <button
              className="icon-button"
              key={src}
              aria-label={"Voir la photo " + (index + 1)}
              aria-pressed={image === src}
              onClick={() => setImage(src)}
            >
              <Image src={src} alt="" width={56} height={56} />
            </button>
          ))}
        </div>
      </div>
      <div className="accessory-description">
        <p className="eyebrow">Accessoires · EASYFIX</p>
        <h2>EASYFIX blanc à coller</h2>
        <p className="intro-copy">
          Lot de 50 pièces, grand modèle. Vérifiez la compatibilité avec votre
          support et les contraintes de votre installation avant de commander.
        </p>
        <p className="price">
          {formatPrice(20)} <small>HT / lot</small>
        </p>
        <div className="purchase-actions">
          <div className="form-field">
            <label htmlFor="accessory-quantity">Nombre de lots</label>
            <input
              id="accessory-quantity"
              type="number"
              min="1"
              max="99"
              className="field-input"
              value={quantity}
              onChange={(e) =>
                setQuantity(
                  Math.min(99, Math.max(1, Number(e.target.value) || 1)),
                )
              }
            />
          </div>
          <button
            className="button button-primary"
            onClick={() =>
              addToCart(
                {
                  id: "easyfix-grand-blanc",
                  name: "EASYFIX blanc à coller · 50 pièces",
                  price: 20,
                  image: "/a1.jpeg",
                  type: "accessory",
                },
                quantity,
              )
            }
          >
            Ajouter au panier <ShoppingBag size={18} />
          </button>
        </div>
        <dl className="product-specs">
          <div>
            <dt>Conditionnement</dt>
            <dd>50 pièces</dd>
          </div>
          <div>
            <dt>Couleur</dt>
            <dd>Blanc</dd>
          </div>
          <div>
            <dt>Fixation</dt>
            <dd>À coller, selon le support</dd>
          </div>
        </dl>
        <p className="form-note">
          Disponibilité et délai de livraison confirmés lors du traitement de
          votre commande.
        </p>
      </div>
    </div>
  );
}
