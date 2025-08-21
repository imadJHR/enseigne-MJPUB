"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
// UI Components from Shadcn
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// Icons from Lucide React
import {
  Star,
  Phone,
  Mail,
  Zap,
  Truck,
  Euro,
  ArrowRight,
  Lightbulb,
  Scissors,
  Settings,
  Calendar,
  User,
} from "lucide-react";
// Data
import { blogPosts } from "@/lib/blogPosts";

// Composant pour les données structurées (à placer dans le layout ou via un hook)
export function HomePageJsonLd() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Corporation",
        name: "MJ PUB",
        url: "https://lettre3dshop.com/",
        logo: "https://lettre3dshop.com/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+33-7-81-54-63-59",
          contactType: "customer service",
          areaServed: ["FR", "MA"],
          availableLanguage: ["French", "Arabic"],
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "lille",
          addressCountry: "Fr",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Quelle est la durée de vie d'une enseigne LED ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nos enseignes LED sont conçues pour durer avec une durée de vie moyenne de 50 000 heures (plus de 5 ans en fonctionnement continu 24/7).",
            },
          },
          {
            "@type": "Question",
            name: "Quels matériaux utilisez-vous pour les lettres découpées ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nous utilisons du PVC, Dibond (aluminium composite) et Plexiglas pour nos lettres découpées, offrant durabilité et élégance.",
            },
          },
          {
            "@type": "Question",
            name: "Proposez-vous un service d'installation ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nous fournissons un kit d'installation complet. Pour les projets complexes, nous pouvons recommander des installateurs partenaires.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

interface Testimonial {
  name: string;
  company: string;
  text: string;
  rating: number;
}

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image?: string;
}

export default function HomePageClient() {
  const latestBlogPosts: BlogPost[] = blogPosts.slice(0, 3);
  const testimonials: Testimonial[] = [
    {
      name: "Marie Dubois",
      company: "Restaurant Le Gourmet",
      text: "Enseigne LED magnifique avec installation parfaite. Notre restaurant est maintenant visible de loin !",
      rating: 5,
    },
    {
      name: "Pierre Martin",
      company: "Garage Auto Plus",
      text: "Service impeccable et livraison rapide. Les lettres découpées sont de très haute qualité.",
      rating: 5,
    },
    {
      name: "Sophie Laurent",
      company: "Boutique Mode & Style",
      text: "Équipe professionnelle avec conseil personnalisé. Notre enseigne attire beaucoup plus de clients.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">
      <HomePageJsonLd />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/15690192/pexels-photo-15690192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Enseigne lumineuse moderne pour entreprise - MJ PUB"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-20"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <motion.div
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight text-gray-900 drop-shadow-lg">
            Enseignes <span className="text-indigo-600">Lumineuses</span>
            <br />
            Sur Mesure
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-600 max-w-2xl mx-auto font-light">
            Votre marque brille de mille feux avec nos solutions
            d&apos;enseignes LED et
            <Link
              href="/produits/lettres-decoupees-pvc"
              className="text-indigo-600 hover:underline ml-1"
            >
              lettres découpées
            </Link>
            personnalisées.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/configurateur"
              aria-label="Créer vos lettres découpées"
            >
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-indigo-600 w-full sm:w-auto"
              >
                Créer vos lettres découpées
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>

            <Link href="/contact" aria-label="Configurer une enseigne LED">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-purple-600 w-full sm:w-auto"
              >
                Configurer mon enseigne LED
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
          </div>

          <div className="mt-4 sm:mt-6">
            <Link href="/realisations" aria-label="Voir nos réalisations">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-900 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full bg-transparent hover:border-gray-500 transition-colors duration-300 w-full sm:w-auto"
              >
                Voir nos réalisations
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section
        id="avantages"
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
        aria-labelledby="avantages-title"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2
              id="avantages-title"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900"
            >
              Des Enseignes Sur Mesure pour une Visibilité Maximale
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Les avantages d&apos;une signalétique professionnelle conçue pour
              vous.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: (
                  <Zap
                    className="h-6 w-6 sm:h-8 sm:w-8 text-white"
                    aria-hidden="true"
                  />
                ),
                color: "bg-indigo-500",
                title: "Installation Facile",
                description:
                  "Kits complets avec notice détaillée pour une pose simple et rapide.",
              },
              {
                icon: (
                  <Truck
                    className="h-6 w-6 sm:h-8 sm:w-8 text-white"
                    aria-hidden="true"
                  />
                ),
                color: "bg-teal-500",
                title: "Livraison Rapide",
                description:
                  "Expédition sous 5-7 jours ouvrés en France et au Maroc.",
              },
              {
                icon: (
                  <Euro
                    className="h-6 w-6 sm:h-8 sm:w-8 text-white"
                    aria-hidden="true"
                  />
                ),
                color: "bg-rose-500",
                title: "Devis Instantané",
                description:
                  "Estimation précise et transparente avec notre configurateur.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border border-gray-200 hover:border-indigo-500 transition-all duration-300 transform hover:scale-105 shadow-lg h-full">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section
        id="produits"
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white"
        aria-labelledby="produits-title"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2
              id="produits-title"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
            >
              Nos Solutions d&apos;Enseignes
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Une gamme complète de signalétique pour professionnels.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                href: "/produits/enseigne-led-premium",
                image:
                  "https://images.pexels.com/photos/8296426/pexels-photo-8296426.jpeg",
                alt: "Enseigne lumineuse LED personnalisée pour commerce - MJ PUB",
                badge: {
                  color: "bg-indigo-500",
                  icon: (
                    <Lightbulb
                      className="h-3 w-3 sm:h-4 sm:w-4 mr-1"
                      aria-hidden="true"
                    />
                  ),
                  text: "LED",
                },
                title: "Enseignes LED Lumineuses",
                description:
                  "Visibilité optimale jour et nuit avec nos enseignes LED premium.",
                linkColor: "text-indigo-500",
              },
              {
                href: "/produits/lettres-decoupees-pvc",
                image:
                  "https://images.pexels.com/photos/6185232/pexels-photo-6185232.jpeg",
                alt: "Lettres découpées en PVC pour signalétique professionnelle - MJ PUB",
                badge: {
                  color: "bg-teal-500",
                  icon: (
                    <Scissors
                      className="h-3 w-3 sm:h-4 sm:w-4 mr-1"
                      aria-hidden="true"
                    />
                  ),
                  text: "Découpe",
                },
                title: "Lettres Découpées",
                description:
                  "Découpe laser précise sur PVC, Dibond ou Plexiglas.",
                linkColor: "text-teal-500",
              },
              {
                href: "/accessoires",
                image:
                  "https://images.pexels.com/photos/17215268/pexels-photo-17215268/free-photo-of-un-appareil-de-neons.jpeg",
                alt: "Accessoires pour enseignes lumineuses - MJ PUB",
                badge: {
                  color: "bg-rose-500",
                  icon: (
                    <Settings
                      className="h-3 w-3 sm:h-4 sm:w-4 mr-1"
                      aria-hidden="true"
                    />
                  ),
                  text: "Accessoires",
                },
                title: "Accessoires & Alimentations",
                description:
                  "Tout le nécessaire pour une installation professionnelle.",
                linkColor: "text-rose-500",
              },
            ].map((product, index) => (
              <Link
                key={product.title}
                href={product.href}
                aria-label={`Découvrir ${product.title}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-50 border border-gray-200 hover:border-indigo-500 transition-all duration-300 transform hover:scale-105 overflow-hidden shadow-lg h-full">
                    <div className="relative h-48 sm:h-64 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.alt}
                        fill
                        style={{ objectFit: "cover" }}
                        className="group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <Badge
                        className={`absolute top-3 left-3 ${product.badge.color} text-white text-xs sm:text-sm`}
                      >
                        {product.badge.icon} {product.badge.text}
                      </Badge>
                    </div>
                    <CardContent className="p-4 sm:p-6">
                      <h3
                        className={`text-lg sm:text-2xl font-bold mb-2 ${product.linkColor} hover:${product.linkColor}`}
                      >
                        {product.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-center font-semibold group">
                        <span>Découvrir</span>
                        <ArrowRight
                          className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform"
                          aria-hidden="true"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
        aria-labelledby="engagement-title"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2
            id="engagement-title"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900"
          >
            Fabrication Française : Notre Engagement Qualité
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl mx-auto">
            Savoir-faire artisanal et technologie de pointe pour des enseignes
            durables.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 text-left">
            {[
              {
                title: "Matériaux Premium",
                color: "text-indigo-600",
                description:
                  "PVC, Dibond, Plexiglas et aluminium sélectionnés pour leur qualité et durabilité.",
              },
              {
                title: "Service Personnalisé",
                color: "text-teal-600",
                description:
                  "Conseil expert et <a href='/configurateur' className='font-semibold hover:underline'>configurateur en ligne</a> pour créer votre signalétique sur mesure.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-200 h-full">
                  <h3
                    className={`text-lg sm:text-2xl font-bold mb-3 ${item.color}`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-gray-600 text-sm sm:text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8 sm:mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" aria-label="Discuter de votre projet">
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Discuter de votre projet
                <ArrowRight
                  className="ml-2 h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="avis-clients"
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white"
        aria-labelledby="avis-title"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2
              id="avis-title"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900"
            >
              Nos Clients Témoignent : Note de 4.9/5
            </h2>
            <div className="flex items-center justify-center gap-1 sm:gap-2 mb-6 sm:mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 sm:h-6 sm:w-6 fill-amber-500 text-amber-500"
                  aria-hidden="true"
                />
              ))}
              <span className="text-xl sm:text-2xl font-bold ml-2 sm:ml-4 text-gray-900">
                4.9/5
              </span>
              <span className="text-gray-600 ml-1 sm:ml-2 text-sm sm:text-base">
                (127 avis)
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-50 border border-gray-200 shadow-sm h-full">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-500 text-amber-500"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4 italic">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div>
                      <p className="font-bold text-gray-900 text-sm sm:text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="blog"
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
        aria-labelledby="blog-title"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2
              id="blog-title"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900"
            >
              Conseils & Tendances
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Restez informé sur les innovations en signalétique.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {latestBlogPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                aria-label={`Lire l'article : ${post.title}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white border border-gray-200 hover:border-amber-500 transition-all duration-300 transform hover:scale-[1.02] overflow-hidden h-full shadow-md">
                    <div className="relative h-40 sm:h-56">
                      <Image
                        src={post.image || "/placeholder-blog.jpg"}
                        alt={`Article : ${post.title}`}
                        fill
                        style={{ objectFit: "cover" }}
                        className="group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <Badge className="absolute top-3 left-3 bg-amber-500 text-white text-xs sm:text-sm">
                        {post.category}
                      </Badge>
                    </div>
                    <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
                      <h3 className="text-lg sm:text-2xl font-bold mb-2 group-hover:text-amber-500 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 sm:mb-4 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-gray-500 text-xs mt-auto">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" aria-hidden="true" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" aria-hidden="true" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <Link href="/blog" aria-label="Voir tous nos articles">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-gray-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full bg-transparent"
              >
                Voir tous nos articles
                <ArrowRight
                  className="ml-2 h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white"
        aria-labelledby="faq-title"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2
              id="faq-title"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900"
            >
              Questions Fréquentes
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Réponses à vos questions sur nos enseignes.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="durée-vie">
              <AccordionTrigger className="text-lg text-left">
                Quelle est la durée de vie d&apos;une enseigne LED ?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600">
                Nos enseignes LED durent en moyenne 50 000 heures (plus de 5 ans
                en usage continu).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="materiaux">
              <AccordionTrigger className="text-lg text-left">
                Quels matériaux utilisez-vous ?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600">
                Nous proposons du <strong>PVC</strong> (polyvalent), du{" "}
                <strong>Dibond</strong>
                (aluminium composite rigide) et du <strong>
                  Plexiglas
                </strong>{" "}
                (effet brillant).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="installation">
              <AccordionTrigger className="text-lg text-left">
                Proposez-vous l&apos;installation ?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600">
                Nous fournissons un kit complet avec guide. Pour les projets
                complexes, nous recommandons nos partenaires installateurs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 text-gray-900"
        aria-labelledby="cta-title"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            id="cta-title"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900"
          >
            Prêt à créer votre enseigne ?
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-600">
            Contactez-nous pour un devis gratuit ou utilisez notre configurateur
            en ligne.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
            <a
              href="tel:+33781546359"
              className="flex items-center gap-2 sm:gap-3 bg-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors text-sm sm:text-base"
              aria-label="Nous appeler"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              +33 7 81 54 63 59
            </a>
            <a
              href="mailto:mjpub59@gmail.com"
              className="flex items-center gap-2 sm:gap-3 bg-teal-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold hover:bg-teal-700 transition-colors text-sm sm:text-base"
              aria-label="Nous écrire"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              mjpub59@gmail.com
            </a>
          </div>

          <Link
            href="/configurateur"
            aria-label="Configurer votre enseigne en ligne"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-gray-500 text-gray-900 hover:bg-gray-200 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full bg-transparent"
            >
              Configurer mon enseigne
              <ArrowRight
                className="ml-2 h-4 w-4 sm:h-5 sm:w-5"
                aria-hidden="true"
              />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
