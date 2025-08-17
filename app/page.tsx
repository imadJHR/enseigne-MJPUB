"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import Header from "./components/Header";
import Footer from "./components/Footer";
import { blogPosts } from "@/lib/blogPosts";
import Image from "next/image";
import { motion } from "framer-motion";

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

export default function HomePage() {
  const latestBlogPosts: BlogPost[] = blogPosts.slice(0, 3);
  const testimonials: Testimonial[] = [
    {
      name: "Marie Dubois",
      company: "Restaurant Le Gourmet",
      text: "Enseigne LED magnifique, installation parfaite. Notre restaurant est maintenant visible de loin !",
      rating: 5,
    },
    {
      name: "Pierre Martin",
      company: "Garage Auto Plus",
      text: "Service impeccable, livraison rapide. Les lettres découpées sont de très haute qualité.",
      rating: 5,
    },
    {
      name: "Sophie Laurent",
      company: "Boutique Mode & Style",
      text: "Équipe professionnelle, conseil personnalisé. Notre enseigne attire beaucoup plus de clients.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/15690192/pexels-photo-15690192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          }}
          aria-label="Image de fond d'une enseigne lumineuse moderne pour entreprise"
        ></div>
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
            Votre marque brille dans la nuit. Créateur d&apos;enseignes LED, lettres découpées et panneaux personnalisés.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/configurateur">
              <Button
                size="lg"
                className="relative bg-indigo-600 hover:bg-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-indigo-600 overflow-hidden group w-full sm:w-auto"
              >
                <span className="relative z-10">
                  Créez vos lettres découpées
                </span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="relative bg-purple-600 hover:bg-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-purple-600 overflow-hidden group w-full sm:w-auto"
              >
                <span className="relative z-10">Configurer mon enseigne</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
              </Button>
            </Link>
          </div>
          <div className="mt-4 sm:mt-6">
            <Link href="/realisations">
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
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-gray-900 rounded-full flex justify-center">
            <div className="w-1 h-3 sm:h-4 bg-gray-900 rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white text-gray-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Des solutions d&apos;enseignage professionnel adaptées à vos besoins
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
                color: "bg-indigo-500",
                title: "Installation Facile",
                description: "Nos enseignes sont conçues pour une installation simple et rapide avec tous les accessoires inclus",
              },
              {
                icon: <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
                color: "bg-teal-500",
                title: "Livraison Rapide",
                description: "Fabrication et expédition sous 5-7 jours ouvrés partout en France métropolitaine",
              },
              {
                icon: <Euro className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
                color: "bg-rose-500",
                title: "Prix Sur Mesure",
                description: "Devis personnalisé et transparent avec notre configurateur en ligne gratuit",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-50 border border-gray-200 hover:border-indigo-500 transition-all duration-300 transform hover:scale-105 shadow-lg h-full">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-colors duration-300`}>
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

      {/* Product Categories */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Nos Produits</h2>
            <p className="text-base sm:text-lg text-gray-600">
              Une gamme complète d&apos;enseignes professionnelles
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                href: "/produits/enseigne-led-premium",
                image: "https://images.pexels.com/photos/8296426/pexels-photo-8296426.jpeg",
                badge: { color: "bg-indigo-500", icon: <Lightbulb className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />, text: "LED" },
                title: "Enseignes LED",
                description: "Lettres lumineuses LED haute qualité pour une visibilité optimale",
                linkColor: "text-indigo-500 group-hover:text-indigo-400",
              },
              {
                href: "/produits/lettres-decoupees-pvc",
                image: "https://images.pexels.com/photos/6185232/pexels-photo-6185232.jpeg",
                badge: { color: "bg-teal-500", icon: <Scissors className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />, text: "Découpe" },
                title: "Lettres Découpées",
                description: "PVC, Dibond, Plexiglas - Découpe laser de précision",
                linkColor: "text-teal-500 group-hover:text-teal-400",
              },
              {
                href: "/accessoires",
                image: "https://images.pexels.com/photos/17215268/pexels-photo-17215268/free-photo-of-un-appareil-de-neons.jpeg",
                badge: { color: "bg-rose-500", icon: <Settings className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />, text: "Accessoires" },
                title: "Accessoires",
                description: "Alimentations, câbles, fixations et tous les accessoires",
                linkColor: "text-rose-500 group-hover:text-rose-400",
              },
            ].map((product, index) => (
              <Link key={index} href={product.href} className="group block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-50 border border-gray-200 hover:border-indigo-500 transition-all duration-300 transform hover:scale-105 overflow-hidden shadow-lg h-full">
                    <div className="relative h-48 sm:h-64">
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundImage: `url('${product.image}')` }}
                        aria-label={`Image de ${product.title}`}
                      ></div>
                      <Badge className={`absolute top-3 left-3 ${product.badge.color} text-white text-xs sm:text-sm group-hover:bg-opacity-90 transition-colors duration-300`}>
                        {product.badge.icon} {product.badge.text}
                      </Badge>
                    </div>
                    <CardContent className="p-4 sm:p-6">
                      <h3 className={`text-lg sm:text-2xl font-bold mb-2 group-hover:text-indigo-500 transition-colors`}>
                        {product.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                        {product.description}
                      </p>
                      <div className={`flex items-center ${product.linkColor}`}>
                        <span className="text-sm sm:text-base">Découvrir</span>
                        <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white text-gray-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
              Derniers Articles de Blog
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Restez informé sur les tendances et innovations
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {latestBlogPosts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-50 border border-gray-200 hover:border-amber-500 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-900/50 overflow-hidden h-full shadow-md">
                    <div className="relative h-40 sm:h-56">
                      <Image
                        src={post.image || "/placeholder.svg?height=300&width=400&text=Blog+Image"}
                        alt={post.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <Badge className="absolute top-3 left-3 bg-amber-500 text-white text-xs sm:text-sm group-hover:bg-amber-400 transition-colors duration-300">
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
                      <div className="flex items-center justify-between text-gray-500 text-xs mb-3 sm:mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start text-amber-500 hover:text-amber-400 group-hover:translate-x-1 transition-transform text-sm sm:text-base"
                      >
                        <span>Lire l&apos;article</span>
                        <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </div>
          <div className="mt-8 sm:mt-12 text-center">
            <Link href="/blog">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-gray-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full bg-transparent"
              >
                Voir tous les articles
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* New SEO Content Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white text-gray-600">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
            Notre Expertise et Engagement
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl mx-auto">
            Chez MJ PUB, nous sommes fiers de notre savoir-faire artisanal et de notre engagement envers l&apos;excellence.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 text-left">
            {[
              {
                title: "Fabrication Française de Qualité Supérieure",
                color: "text-indigo-600",
                description: "Toutes nos enseignes lumineuses, lettres découpées et panneaux publicitaires sont fabriqués avec passion dans nos ateliers en France. Nous utilisons des matériaux de première qualité comme le PVC, le Dibond, le Plexiglas, l'aluminium et l'acier, garantissant durabilité et résistance aux intempéries.",
              },
              {
                title: "Solutions Personnalisées pour Chaque Projet",
                color: "text-teal-600",
                description: "Que vous soyez une petite boutique, un grand restaurant ou une entreprise industrielle, nous avons la solution d'enseigne adaptée à vos besoins. Notre configurateur en ligne vous permet de visualiser votre projet et d'obtenir un devis instantané.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-md border border-gray-200 h-full">
                  <h3 className={`text-lg sm:text-2xl font-bold mb-3 ${item.color}`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
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
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Discuter de votre projet
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white text-gray-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
              Ils nous font confiance
            </h2>
            <div className="flex items-center justify-center gap-1 sm:gap-2 mb-6 sm:mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 fill-amber-500 text-amber-500" />
              ))}
              <span className="text-xl sm:text-2xl font-bold ml-2 sm:ml-4 text-gray-900">
                4.9/5
              </span>
              <span className="text-gray-600 ml-1 sm:ml-2 text-sm sm:text-base">(127 avis)</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-50 border border-gray-200 shadow-sm h-full">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-500 text-amber-500" />
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

      {/* CTA Banner */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 text-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
            Prêt à créer votre enseigne ?
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-600">
            Contactez-nous dès maintenant pour un devis gratuit et personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
            <a
              href="tel:+33781546359"
              className="flex items-center gap-2 sm:gap-3 bg-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors text-sm sm:text-base"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              +33 7 81 54 63 59
            </a>
            <a
              href="mailto:mjpub59@gmail.com"
              className="flex items-center gap-2 sm:gap-3 bg-teal-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold hover:bg-teal-700 transition-colors text-sm sm:text-base"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              mjpub59@gmail.com
            </a>
          </div>
          <div>
            <Link href="/configurateur">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-500 text-gray-900 hover:bg-gray-200 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full bg-transparent"
              >
                Configurateur en ligne
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
