"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
} from "@/components/Icons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useCart } from "../context/CartContext";
import { formatPrice } from "@/lib/site";
export default function CartSidebar() {
  const {
    items,
    isOpen,
    setIsOpen,
    getTotalPrice,
    updateQuantity,
    removeFromCart,
  } = useCart();
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="cart-dialog">
        <DialogHeader>
          <DialogTitle>Votre panier</DialogTitle>
          <DialogDescription>
            Retrouvez vos produits et préparez votre commande.
          </DialogDescription>
        </DialogHeader>
        {items.length === 0 ? (
          <div className="empty-state">
            <ShoppingBag size={38} />
            <h3>Votre panier attend votre projet.</h3>
            <p>Découvrez nos panneaux et accessoires.</p>
            <Link
              className="button button-primary"
              href="/produits"
              onClick={() => setIsOpen(false)}
            >
              Voir les solutions
            </Link>
          </div>
        ) : (
          <>
            <div className="drawer-items">
              {items.map((item) => (
                <div className="drawer-item" key={item.id}>
                  <Image
                    src={item.image || "/img1.jpg"}
                    width={72}
                    height={72}
                    alt={item.name}
                  />
                  <div>
                    <h3>{item.name}</h3>
                    {item.material && <p>{item.material.split("\n")[0]}</p>}
                    <p>{formatPrice(item.price)} HT</p>
                    <div className="quantity-control">
                      <button
                        aria-label={`Réduire la quantité de ${item.name}`}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        aria-label={`Augmenter la quantité de ${item.name}`}
                        disabled={item.quantity >= 99}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  <button
                    className="icon-button"
                    aria-label={`Retirer ${item.name}`}
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
            <div className="drawer-total">
              <span>Sous-total HT</span>
              <strong>{formatPrice(getTotalPrice())}</strong>
            </div>
            <p className="small-copy">
              Livraison et TVA calculées à l’étape suivante.
            </p>
            <Link
              className="button button-primary"
              href="/panier"
              onClick={() => setIsOpen(false)}
            >
              Voir mon panier <ArrowRight size={16} />
            </Link>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
