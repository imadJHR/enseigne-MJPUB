"use client";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import { formatPrice } from "@/lib/site";
import { ShoppingBag } from "@/components/Icons";
import type { Product } from "@/types";
export default function ProductPurchase({ product }: { product: Product }) {
  const [materialId, setMaterialId] = useState(product.materials[0].id);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const material = product.materials.find((m) => m.id === materialId)!;
  return (
    <div className="purchase-panel">
      <p className="price">
        {formatPrice(material.price)} <small>HT / unité</small>
      </p>
      <div className="form-field">
        <label htmlFor="material">Choisir le matériau</label>
        <select
          id="material"
          className="field-input"
          value={materialId}
          onChange={(e) => setMaterialId(e.target.value)}
        >
          {product.materials.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name} · {formatPrice(m.price)} HT
            </option>
          ))}
        </select>
        <p className="form-note">{material.description}</p>
      </div>
      <div className="purchase-actions">
        <div className="form-field">
          <label htmlFor="quantity">Quantité</label>
          <input
            id="quantity"
            type="number"
            min="1"
            max="99"
            value={quantity}
            className="field-input"
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
                id: product.slug + "-" + material.id,
                name: product.name,
                price: material.price,
                image: product.image,
                material: material.name,
                type: "product",
              },
              quantity,
            )
          }
        >
          Ajouter au panier <ShoppingBag size={18} />
        </button>
      </div>
    </div>
  );
}
