import { Phone, Mail, MapPin } from "@/components/Icons";
import { site } from "@/lib/site";
export default function ContactAside() {
  return (
    <aside className="form-aside">
      <h2>Une équipe à votre écoute.</h2>
      <p>
        Vous avez besoin d’un conseil pour choisir votre enseigne, son matériau
        ou sa fixation ? Parlons-en directement.
      </p>
      <a className="contact-link" href={site.phoneHref}>
        <Phone size={18} />
        {site.phone}
      </a>
      <a className="contact-link" href={`mailto:${site.email}`}>
        <Mail size={18} />
        {site.email}
      </a>
      <div className="contact-link">
        <MapPin size={18} />
        <span>
          {site.address}
          <br />
          {site.postalCode} {site.city}
        </span>
      </div>
      <div className="form-note">
        <p className="small-copy">
          Pour préparer votre devis, indiquez les dimensions, le code postal et
          l’emplacement de votre future enseigne.
        </p>
      </div>
    </aside>
  );
}
