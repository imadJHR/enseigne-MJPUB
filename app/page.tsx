import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Phone,
  Check,
} from "@/components/Icons";
import { pageMetadata, serviceAreas, site } from "@/lib/site";
import { realisations } from "@/lib/realisations";
import { CTA, FAQ, ProjectCard, TextLink } from "./components/SiteUI";
import ConfigurationEntry from "./components/ConfigurationEntry";
export const metadata = pageMetadata(
  "Enseignes à Saint-Amand-les-Eaux : LED, lettres 3D & signalétique",
  "MJ PUB, votre enseigne sur mesure à Saint-Amand-les-Eaux, près de Valenciennes. Lettres 3D, enseignes LED et panneaux : configurez votre projet et demandez un devis.",
  "/",
);
export default function HomePage() {
  return (
    <>
      <section className="brand-hero container">
        <div className="brand-hero-copy">
          <p className="location-label">
            <span />
            Votre enseigne à Saint-Amand-les-Eaux
          </p>
          <h1>
            Votre enseigne,
            <br />
            <span className="hero-emphasis">à votre image.</span>
          </h1>
          <p className="brand-hero-description">
            À Saint-Amand-les-Eaux, MJ PUB donne du relief à votre commerce.
            Enseignes lumineuses, lettres 3D et signalétique : nous concevons
            une identité visible, adaptée à votre façade et à votre activité.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#choisir-enseigne">
              Créer mon enseigne <ArrowUpRight size={19} />
            </Link>
            <Link className="button button-text" href="/realisations">
              Voir nos réalisations <ArrowRight size={17} />
            </Link>
          </div>
          <ul className="hero-reassurance">
            <li>
              <Check size={16} />
              Une enseigne sur mesure
            </li>
            <li>
              <Check size={16} />
              Votre identité mise en valeur
            </li>
            <li>
              <Check size={16} />
              Un devis avant fabrication
            </li>
          </ul>
          <div className="hero-local-note">
            <MapPin size={20} />
            <p>
              Un interlocuteur près de vous.
              <br />
              <strong>Saint-Amand-les-Eaux · Valenciennes & environs</strong>
            </p>
          </div>
        </div>
        <figure className="brand-hero-project">
          <div className="brand-hero-photo">
            <Image
              src="/img17.jpg"
              alt="Devanture MJ Barber avec enseigne lumineuse réalisée par MJ PUB"
              fill
              priority
              sizes="(max-width:850px) 100vw, 48vw"
            />
          </div>
          <figcaption>
            <span>Une réalisation MJ PUB</span>
            <strong>Une façade qui se remarque.</strong>
            <Link href="/realisations/mj-barber">
              Découvrir ce projet <ArrowUpRight size={17} />
            </Link>
          </figcaption>
        </figure>
      </section>
      <section
        className="style-entry-section"
        id="choisir-enseigne"
        aria-labelledby="style-entry-title"
      >
        <div className="container style-entry-layout">
          <div className="style-entry-copy">
            <p className="eyebrow">À vous de choisir</p>
            <h2 id="style-entry-title">
              La bonne enseigne
              <br />
              pour votre identité.
            </h2>
            <p>
              Relief, lumière directe ou halo discret : comparez les rendus,
              puis personnalisez votre texte, vos dimensions et vos matériaux
              dans le configurateur.
            </p>
            <p className="style-entry-hint">
              <Check size={18} />
              Votre choix est repris à l’étape suivante.
            </p>
            <Link className="text-link" href="/demande-devis">
              Vous avez déjà votre logo ? <ArrowRight size={17} />
            </Link>
          </div>
          <ConfigurationEntry />
        </div>
      </section>
      <section
        className="route-strip container"
        aria-label="Les étapes de votre projet"
      >
        {[
          {
            n: "01",
            title: "Choisissez votre style",
            text: "Lettres en relief, boîtier LED ou rétroéclairage.",
          },
          {
            n: "02",
            title: "Personnalisez votre enseigne",
            text: "Votre texte, vos dimensions et vos matériaux.",
          },
          {
            n: "03",
            title: "Recevez un devis adapté",
            text: "Nous vérifions votre projet avant fabrication.",
          },
        ].map((step) => (
          <div key={step.n}>
            <span className="route-number">{step.n}</span>
            <div>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="section container" id="solutions">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Une solution pour chaque façade</p>
            <h2>
              Comment voulez-vous
              <br />
              vous faire remarquer ?
            </h2>
          </div>
          <p>
            Un restaurant, une boutique, un cabinet ou une entreprise :
            choisissez le rendu qui correspond à votre activité.
          </p>
        </div>
        <div className="solutions-layout">
          <article className="solution-main">
            <div className="solution-photo">
              <Image
                src="/img2.jpg"
                alt="Réalisation MJ PUB : enseigne TIME FOOD en lettres lumineuses"
                fill
                sizes="(max-width:850px) 100vw, 55vw"
              />
            </div>
            <div className="solution-content">
              <span className="solution-tag tag-cyan">
                La lumière attire le regard
              </span>
              <h3>Enseignes lumineuses LED</h3>
              <p>
                Boîtiers lumineux ou halo rétroéclairé : une façade qui se
                distingue, même le soir.
              </p>
              <div className="solution-links">
                <Link
                  className="button button-primary"
                  href="/configurateur?style=lighted-box"
                >
                  Configurer en LED <ArrowRight size={17} />
                </Link>
                <Link className="solution-detail" href="/enseignes-lumineuses">
                  Découvrir les options
                </Link>
              </div>
            </div>
          </article>
          <div className="solutions-secondary">
            <article className="solution-small">
              <span className="solution-tag tag-magenta">
                Le relief fait la différence
              </span>
              <h3>Lettres & logos en 3D</h3>
              <p>
                Du PVC à l’aluminium composite, donnez du caractère à votre nom.
              </p>
              <div className="solution-links">
                <Link className="text-link" href="/configurateur?style=cut-out">
                  Configurer mes lettres <ArrowRight size={17} />
                </Link>
                <Link href="/lettres-decoupees" className="solution-detail">
                  Voir les matériaux
                </Link>
              </div>
              <div className="mini-letter" aria-hidden="true">
                Aa<span>3D</span>
              </div>
            </article>
            <article className="solution-small solution-panel">
              <span className="solution-tag tag-green">
                Des informations qui se lisent
              </span>
              <h3>Panneaux & signalétique</h3>
              <p>
                Votre logo et vos informations sur un support adapté à vos
                locaux.
              </p>
              <Link href="/signaletique" className="text-link">
                Préparer mon panneau <ArrowRight size={17} />
              </Link>
            </article>
          </div>
        </div>
      </section>
      <section className="project-band">
        <div className="container section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Du projet à la façade</p>
              <h2>
                Ils ont donné du relief
                <br />à leur activité.
              </h2>
            </div>
            <TextLink href="/realisations">
              Voir toutes les réalisations
            </TextLink>
          </div>
          <div className="home-projects">
            {[realisations[1], realisations[4], realisations[11]].map(
              (project) => (
                <ProjectCard project={project} key={project.slug} />
              ),
            )}
          </div>
        </div>
      </section>
      <section className="section container local-section">
        <div className="local-copy">
          <p className="eyebrow">Votre partenaire local dans le Nord</p>
          <h2>
            Une idée en ligne.
            <br />
            Une équipe près de vous.
          </h2>
          <p>
            MJ PUB est situé au{" "}
            <strong>644 route de Lille, à Saint-Amand-les-Eaux</strong>. Nous
            accompagnons vos projets d’enseignes et de signalétique dans le
            secteur de Valenciennes.
          </p>
          <p>
            Vous ouvrez un commerce ou renouvelez votre devanture ? Partagez
            votre logo et une photo de la façade. Nous étudions le rendu, les
            fixations et les modalités de pose ou de livraison dans votre devis.
          </p>
          <TextLink href="/enseigne-saint-amand-les-eaux">
            Votre projet à Saint-Amand-les-Eaux
          </TextLink>
        </div>
        <aside className="local-card">
          <MapPin size={30} />
          <p className="eyebrow">À côté de votre commerce</p>
          <h3>
            Saint-Amand-les-Eaux
            <br />& ses environs
          </h3>
          <ul className="area-chips">
            {serviceAreas.slice(1).map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
          <div className="local-contact">
            <span>Parlons de votre façade</span>
            <a href={site.phoneHref}>
              <Phone size={19} />
              {site.phone}
            </a>
            <Link href="/contact">
              Coordonnées & contact <ArrowRight size={16} />
            </Link>
          </div>
        </aside>
      </section>
      <section className="section container faq-section">
        <div>
          <p className="eyebrow">Avant de commencer</p>
          <h2>
            De bons repères
            <br />
            pour votre projet.
          </h2>
        </div>
        <FAQ
          items={[
            {
              question: "Comment configurer mon enseigne ?",
              answer:
                "Sélectionnez un style sur cette page, puis choisissez votre texte, la hauteur, le matériau et les options dans le configurateur. Vous pourrez transmettre cette configuration pour demander un devis.",
            },
            {
              question: "Le prix du configurateur est-il définitif ?",
              answer:
                "L’estimation est indicative et exprimée hors taxes. Le tracé de votre logo, les dimensions réelles, la fixation, la livraison et la pose sont vérifiés dans le devis avant fabrication.",
            },
            {
              question:
                "Pouvez-vous étudier un projet autour de Saint-Amand-les-Eaux ?",
              answer:
                "Oui. Indiquez votre adresse à Saint-Amand-les-Eaux, Hasnon, Lecelles, Rosult, Raismes, Bruille-Saint-Amand ou dans le secteur de Valenciennes. Nous précisons les possibilités de pose et de livraison selon votre emplacement.",
            },
            {
              question: "J’ai déjà un logo. Par où commencer ?",
              answer:
                "Utilisez le formulaire de devis pour envoyer votre fichier, les dimensions souhaitées et une photo de votre façade. Nous vous aiderons à choisir entre lettres 3D, éclairage LED et panneau personnalisé.",
            },
          ]}
        />
      </section>
      <CTA />
    </>
  );
}
