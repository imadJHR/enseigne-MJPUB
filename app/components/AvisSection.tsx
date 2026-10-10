import { avis } from "@/lib/avis";
import { site } from "@/lib/site";
import { JsonLd } from "./SiteUI";

export default function AvisSection() {
  if (!avis.length) return null;
  const moyenne =
    Math.round(
      (avis.reduce((total, item) => total + item.note, 0) / avis.length) * 10,
    ) / 10;
  return (
    <section className="section" aria-labelledby="avis-clients">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Ils nous recommandent</p>
          <h2 id="avis-clients">
            Des commerces
            <br />
            qui se remarquent.
          </h2>
        </div>
        <p>
          Note moyenne de {moyenne.toLocaleString("fr-FR")} sur {avis.length}{" "}
          avis de clients du secteur.
        </p>
      </div>
      <div className="local-hub-services">
        {avis.map((item) => (
          <article key={item.auteur + item.commune}>
            <p aria-label={`Note : ${item.note} sur 5`}>
              {"★".repeat(item.note)}
              {"☆".repeat(5 - item.note)}
            </p>
            <p>« {item.texte} »</p>
            <p>
              <strong>{item.auteur}</strong> · {item.commune}
            </p>
          </article>
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${site.url}/#entreprise`,
          name: site.name,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: moyenne,
            reviewCount: avis.length,
          },
          review: avis.map((item) => ({
            "@type": "Review",
            author: { "@type": "Person", name: item.auteur },
            reviewRating: {
              "@type": "Rating",
              ratingValue: item.note,
              bestRating: 5,
            },
            reviewBody: item.texte,
          })),
        }}
      />
    </section>
  );
}
