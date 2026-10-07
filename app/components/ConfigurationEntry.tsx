"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, Lightbulb, Box, Check } from "@/components/Icons";
import type { SignStyle } from "@/lib/configurator";
const options = [
  {
    id: "lighted-box" as const,
    label: "Boîtier LED",
    name: "Lettres boîtiers lumineuses",
    description: "Un nom visible, même à la tombée de la nuit.",
    icon: Box,
    image: "/img2.jpg",
    imageAlt:
      "Lettres boîtiers LED lumineuses de l’enseigne TIME FOOD, réalisation MJ PUB",
    photo: true,
  },
  {
    id: "lighted" as const,
    label: "Rétroéclairage",
    name: "Lettres rétroéclairées",
    description: "Une lumière douce qui dessine votre identité.",
    icon: Lightbulb,
    image: "/img13.jpg",
    imageAlt:
      "Lettres rétroéclairées SN Institut et leur halo lumineux, réalisation MJ PUB",
    photo: true,
  },
  {
    id: "cut-out" as const,
    label: "Lettres 3D",
    name: "Lettres découpées en relief",
    description: "Le caractère de votre marque, sans éclairage.",
    icon: Layers,
    image: "/images/lettres-mjpub.webp",
    imageAlt: "Illustration de lettres MJ PUB en relief, sans éclairage",
    photo: false,
  },
];
export default function ConfigurationEntry() {
  const [selected, setSelected] = useState<SignStyle>("lighted-box");
  const option = options.find((item) => item.id === selected)!;
  return (
    <div className="entry-card">
      <div className="entry-heading">
        <span>Votre idée. Vos choix.</span>
        <span className="entry-tag">Sur mesure</span>
      </div>
      <div
        className={"entry-art" + (option.photo ? " entry-art-photo" : "")}
        data-style={selected}
      >
        {options.map((item) => (
          <Image
            key={item.id}
            src={item.image}
            alt={selected === item.id ? item.imageAlt : ""}
            aria-hidden={selected !== item.id}
            className={
              selected === item.id ? "entry-image-active" : "entry-image-hidden"
            }
            fill
            loading="eager"
            sizes="(max-width:850px) 100vw, 48vw"
          />
        ))}
      </div>
      <fieldset className="entry-options">
        <legend>Quel style pour votre enseigne ?</legend>
        <div>
          {options.map((item) => {
            const Icon = item.icon;
            return (
              <label
                key={item.id}
                className={selected === item.id ? "active" : ""}
              >
                <input
                  type="radio"
                  name="home-style"
                  value={item.id}
                  checked={selected === item.id}
                  onChange={() => setSelected(item.id)}
                />
                <Icon size={22} />
                <span>{item.label}</span>
                {selected === item.id && (
                  <Check className="entry-check" size={12} />
                )}
              </label>
            );
          })}
        </div>
      </fieldset>
      <div className="entry-selection" aria-live="polite">
        <strong>{option.name}</strong>
        <p>{option.description}</p>
      </div>
      <Link
        className="button button-primary entry-start"
        href={"/configurateur?style=" + selected}
      >
        Personnaliser cette enseigne
        <ArrowRight size={18} />
      </Link>
      <p className="entry-note">
        {option.photo
          ? "Exemple réalisé par MJ PUB."
          : "Illustration d’inspiration."}{" "}
        Votre rendu final est validé sur devis.
      </p>
    </div>
  );
}
