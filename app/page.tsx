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

export default function HomePage() {
  const latestBlogPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          }}
          aria-label="Image de fond d'une enseigne lumineuse moderne pour entreprise"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/70"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight text-gray-900 drop-shadow-lg">
              Enseignes <span className="text-blue-600">Lumineuses</span>
              <br />
              Sur Mesure
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-700 max-w-2xl mx-auto font-light">
              Créateur d&apos;enseignes LED, lettres découpées et panneaux
              personnalisés
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/configurateur">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-blue-600 hover:border-blue-700"
                >
                  Configurer mon enseigne
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/realisations">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-900 text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-full bg-transparent hover:border-gray-700 transition-colors duration-300"
                >
                  Voir nos réalisations
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-900 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-900 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Pourquoi nous choisir ?</h2>
            <p className="text-xl text-gray-600">
              Des solutions d&apos;enseignage professionnel adaptées à vos
              besoins
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Installation Facile</h3>
                <p className="text-gray-600">
                  Nos enseignes sont conçues pour une installation simple et
                  rapide avec tous les accessoires inclus
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border border-gray-200 hover:border-green-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Livraison Rapide</h3>
                <p className="text-gray-600">
                  Fabrication et expédition sous 5-7 jours ouvrés partout en
                  France métropolitaine
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border border-gray-200 hover:border-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Euro className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Prix Sur Mesure</h3>
                <p className="text-gray-600">
                  Devis personnalisé et transparent avec notre configurateur en
                  ligne gratuit
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Product Categories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nos Produits</h2>
            <p className="text-xl text-gray-600">
              Une gamme complète d&apos;enseignes professionnelles
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/produits/enseigne-led-premium" className="group">
              <Card className="bg-white border border-gray-200 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundImage: `url('/placeholder.svg?height=400&width=600')`,
                    }}
                    aria-label="Image d'une enseigne LED lumineuse pour magasin"
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-blue-100 text-blue-800">
                    <Lightbulb className="h-4 w-4 mr-1" />
                    LED
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Enseignes LED</h3>
                  <p className="text-gray-600 mb-4">
                    Lettres lumineuses LED haute qualité pour une visibilité
                    optimale
                  </p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-800">
                    <span>Découvrir</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/produits/lettres-decoupees-pvc" className="group">
              <Card className="bg-white border border-gray-200 hover:border-green-500 transition-all duration-300 transform hover:scale-105 overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundImage: `url('/placeholder.svg?height=400&width=600')`,
                    }}
                    aria-label="Image de lettres découpées en PVC pour signalétique"
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-green-100 text-green-800">
                    <Scissors className="h-4 w-4 mr-1" />
                    Découpe
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Lettres Découpées</h3>
                  <p className="text-gray-600 mb-4">
                    PVC, Dibond, Plexiglas - Découpe laser de précision
                  </p>
                  <div className="flex items-center text-green-600 group-hover:text-green-800">
                    <span>Découvrir</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/accessoires" className="group">
              <Card className="bg-white border border-gray-200 hover:border-pink-500 transition-all duration-300 transform hover:scale-105 overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundImage: `url('/placeholder.svg?height=400&width=600')`,
                    }}
                    aria-label="Image d'accessoires pour enseignes lumineuses"
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-pink-100 text-pink-800">
                    <Settings className="h-4 w-4 mr-1" />
                    Accessoires
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Accessoires</h3>
                  <p className="text-gray-600 mb-4">
                    Alimentations, câbles, fixations et tous les accessoires
                  </p>
                  <div className="flex items-center text-pink-600 group-hover:text-pink-800">
                    <span>Découvrir</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
      {/* Blog Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Derniers Articles de Blog
            </h2>
            <p className="text-xl text-gray-600">
              Restez informé sur les tendances et innovations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestBlogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <Card className="bg-white border border-gray-200 hover:border-yellow-500 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-yellow-100 overflow-hidden h-full shadow-md">
                  <div className="relative h-56">
                    <Image
                      src={
                        post.image ||
                        "/placeholder.svg?height=300&width=400&text=Blog+Image"
                      }
                      alt={post.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-yellow-100 text-yellow-800">
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-gray-500 text-xs mb-4">
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
                      className="w-full justify-start text-yellow-600 hover:text-yellow-800 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Lire l&apos;article</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/blog">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-900 text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-full bg-transparent"
              >
                Voir tous les articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* New SEO Content Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Notre Expertise et Engagement
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Chez Enseigne42, nous sommes fiers de notre savoir-faire artisanal
            et de notre engagement envers l&apos;excellence. Forts de plus de 15
            ans d&apos;expérience, nous concevons et fabriquons des solutions de
            signalétique sur mesure qui captivent l&apos;attention et renforcent
            l&apos;identité de votre marque.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-3 text-blue-600">
                Fabrication Française de Qualité Supérieure
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Toutes nos **enseignes lumineuses**, **lettres découpées** et
                **panneaux publicitaires** sont fabriqués avec passion dans nos
                ateliers en France. Nous utilisons des matériaux de première
                qualité comme le PVC, le Dibond, le Plexiglas, l&apos;aluminium
                et l&apos;acier, garantissant durabilité et résistance aux
                intempéries. Notre processus de fabrication intègre les
                dernières technologies, y compris la découpe laser de précision
                et l&apos;intégration de **LEDs haute efficacité**, pour des
                produits finis impeccables et une visibilité optimale, de jour
                comme de nuit.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-3 text-green-600">
                Solutions Personnalisées pour Chaque Projet
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Que vous soyez une petite boutique, un grand restaurant ou une
                entreprise industrielle, nous avons la solution d&apos;enseigne
                adaptée à vos besoins. Notre **configurateur en ligne** vous
                permet de visualiser Votre projet et d&apos;obtenir un devis
                instantané. Pour les demandes plus complexes, notre équipe de
                designers et techniciens est à votre écoute pour créer un
                **design personnalisé** qui reflète parfaitement votre image.
                Nous vous accompagnons de la conception à l&apos;installation,
                assurant une **signalétique sur mesure** qui maximise votre
                impact visuel et attire de nouveaux clients.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Discuter de votre projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Trust Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ils nous font confiance</h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-8 w-8 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="text-2xl font-bold ml-4">4.9/5</span>
              <span className="text-gray-600 ml-2">(127 avis)</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-200 shadow-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    &quot;{testimonial.text}&quot;
                  </p>

                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Banner */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Prêt à créer votre enseigne ?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Contactez-nous dès maintenant pour un devis gratuit et personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+33123456789"
              className="flex items-center gap-3 bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5" />
              01 23 45 67 89
            </a>
            <a
              href="mailto:contact@enseigne42.fr"
              className="flex items-center gap-3 bg-white text-green-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              <Mail className="h-5 w-5" />
              contact@enseigne42.fr
            </a>
          </div>
          <div className="mt-8">
            <Link href="/configurateur">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full bg-transparent"
              >
                Configurateur en ligne
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
