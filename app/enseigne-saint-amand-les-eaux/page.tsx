import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "@/components/Icons";
import { pageMetadata, site } from "@/lib/site";
import {
  Breadcrumbs,
  CTA,
  FAQ,
  PageIntro,
  TextLink,
} from "@/app/components/SiteUI";
export const metadata = pageMetadata(
  "Enseigne à Saint-Amand-les-Eaux & près de Valenciennes",
  "MJ PUB, 644 route de Lille à Saint-Amand-les-Eaux : enseignes LED, lettres 3D et panneaux pour commerces. Projets à Hasnon, Lecelles, Rosult, Raismes et alentours.",
  "/enseigne-saint-amand-les-eaux",
);
export default function LocalPage() {
  return (
    <>
      <div className="container page-content">
        <Breadcrumbs items={[{ name: "Enseignes à Saint-Amand-les-Eaux" }]} />
        <PageIntro
          eyebrow="MJ PUB · 59230 · Nord"
          title="Votre enseigne à Saint-Amand-les-Eaux."
          description="Vous ouvrez une boutique, reprenez un restaurant ou souhaitez renouveler votre devanture ? MJ PUB vous accompagne depuis Saint-Amand-les-Eaux pour créer une enseigne adaptée à votre activité et à votre façade."
        />
        <div className="hero-actions">
          <Link href="/configurateur" className="button button-primary">
            Configurer mon enseigne <ArrowUpRight size={18} />
          </Link>
          <Link href="/demande-devis" className="button button-secondary">
            Envoyer mon logo pour un devis
          </Link>
        </div>
        <section className="section">
          <div className="section-heading">
            <h2>
              Du relief, de la lumière,
              <br />
              une identité qui se lit.
            </h2>
            <p>
              Le rendu dépend de votre logo, des dimensions disponibles et de la
              distance de lecture. Nous vous aidons à choisir une solution
              cohérente.
            </p>
          </div>
          <div className="local-hub-services">
            <article>
              <h2>Enseignes lumineuses LED</h2>
              <p>
                Des lettres boîtiers lumineuses ou rétroéclairées pour
                identifier votre commerce en journée et en soirée. L’éclairage,
                l’alimentation et la fixation sont étudiés avec la façade.
              </p>
              <TextLink href="/enseignes-lumineuses">
                Choisir une enseigne LED
              </TextLink>
            </article>
            <article>
              <h2>Lettres découpées & logos 3D</h2>
              <p>
                Des lettres PVC ou aluminium composite pour votre devanture,
                votre accueil ou votre comptoir. Le matériau et l’épaisseur
                donnent le relief recherché.
              </p>
              <TextLink href="/lettres-decoupees">
                Comparer les lettres en relief
              </TextLink>
            </article>
            <article>
              <h2>Panneaux & signalétique</h2>
              <p>
                Un panneau de façade, une plaque ou un support intérieur pour
                présenter votre activité et orienter vos visiteurs. Format,
                contraste et informations sont adaptés au lieu.
              </p>
              <TextLink href="/signaletique">Préparer un panneau</TextLink>
            </article>
          </div>
        </section>
        <section className="local-section">
          <div className="local-copy">
            <p className="eyebrow">
              Saint-Amand-les-Eaux & le secteur de Valenciennes
            </p>
            <h2>
              Un projet proche.
              <br />
              Un devis précis.
            </h2>
            <p>
              Notre adresse à Saint-Amand-les-Eaux vous permet d’échanger avec
              un interlocuteur local. Nous étudions les projets des commerces et
              entreprises à Hasnon, Lecelles, Rosult, Raismes,
              Bruille-Saint-Amand et dans le secteur de Valenciennes.
            </p>
            <p>
              La commune, le support et les accès influencent l’organisation du
              projet. Indiquez l’adresse de votre commerce afin de préciser les
              modalités de livraison et de pose dans votre devis.
            </p>
            <ul className="area-chips">
              {(
                [
                  ["Saint-Amand-les-Eaux", "/enseigne-saint-amand-les-eaux"],
                  ["Hasnon", "/enseigne-hasnon"],
                  ["Lecelles", "/enseigne-lecelles"],
                  ["Rosult", "/enseigne-rosult"],
                  ["Raismes", "/enseigne-raismes"],
                  ["Bruille-Saint-Amand", ""],
                  ["Valenciennes", "/enseigne-valenciennes"],
                ] as [string, string][]
              ).map(([city, href]) => (
                <li key={city}>
                  {href ? <Link href={href}>{city}</Link> : city}
                </li>
              ))}
            </ul>
          </div>
          <aside className="local-card">
            <MapPin size={30} />
            <h3>
              MJ PUB
              <br />
              Saint-Amand-les-Eaux
            </h3>
            <p>
              {site.address}
              <br />
              {site.postalCode} {site.city}
            </p>
            <div className="local-contact">
              <span>Contactez-nous pour préparer votre projet</span>
              <a href={site.phoneHref}>
                <Phone size={18} />
                {site.phone}
              </a>
              <a href={"mailto:" + site.email}>{site.email}</a>
              <Link href="/contact">
                Écrire à MJ PUB <ArrowUpRight size={17} />
              </Link>
            </div>
          </aside>
        </section>
        <section className="section faq-section">
          <div>
            <p className="eyebrow">Bien préparer votre devanture</p>
            <h2>
              Votre projet local,
              <br />
              étape par étape.
            </h2>
          </div>
          <FAQ
            items={[
              {
                question: "Que faut-il fournir pour un devis d’enseigne ?",
                answer:
                  "Envoyez votre logo, une photo de la façade, la largeur et la hauteur disponibles ainsi que l’adresse du commerce. Précisez si vous souhaitez des lettres 3D, une enseigne LED ou un panneau, et si vous avez besoin d’une pose.",
              },
              {
                question:
                  "Proposez-vous la pose autour de Saint-Amand-les-Eaux ?",
                answer:
                  "Nous étudions les besoins de pose selon l’adresse, le support et les accès. Les conditions d’intervention, les fixations et les éventuels besoins électriques sont confirmés dans votre devis.",
              },
              {
                question: "Comment choisir la taille des lettres ?",
                answer:
                  "La taille dépend de la façade et du recul des passants. Le configurateur donne un premier aperçu ; votre photographie et les dimensions du support permettront d’affiner le tracé et l’espacement avant fabrication.",
              },
              {
                question: "À qui s’adresser avant une installation ?",
                answer:
                  "Prenez contact avec la mairie de la commune où se trouve votre commerce pour vérifier les règles et démarches applicables à votre emplacement. Si vous êtes locataire, vérifiez aussi les conditions prévues pour la façade avec le propriétaire.",
              },
            ]}
          />
        </section>
      </div>
      <CTA title="Faisons remarquer votre commerce." />
    </>
  );
}
