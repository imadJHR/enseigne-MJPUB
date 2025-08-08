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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white text-gray-900">
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
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-6 leading-none text-gray-900 drop-shadow-lg">
            Enseignes <span className="text-indigo-600">Lumineuses</span>
            <br />
            Sur Mesure
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-600 max-w-3xl mx-auto font-light">
            Votre marque brille dans la nuit. Créateur d&apos;enseignes LED,
            lettres découpées et panneaux personnalisés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/configurateur">
              <Button
                size="lg"
                className="relative bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 text-xl rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-indigo-600 overflow-hidden group"
              >
                <span className="relative z-10">Configurer mon enseigne</span>
                <ArrowRight className="ml-2 h-6 w-6 relative z-10" />
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </Button>
            </Link>
            <Link href="/realisations">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-900 hover:bg-gray-100 px-10 py-5 text-xl rounded-full bg-transparent hover:border-gray-500 transition-colors duration-300"
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
          <div className="w-8 h-12 border-2 border-gray-900 rounded-full flex justify-center">
            <div className="w-1 h-4 bg-gray-900 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white text-gray-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Pourquoi nous choisir ?</h2>
            <p className="text-xl text-gray-600">
              Des solutions d&apos;enseignage professionnel adaptées à vos besoins
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-50 border border-gray-200 hover:border-indigo-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Installation Facile</h3>
                  <p className="text-gray-600">
                    Nos enseignes sont conçues pour une installation simple et
                    rapide avec tous les accessoires inclus
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-50 border border-gray-200 hover:border-teal-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <Truck className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Livraison Rapide</h3>
                  <p className="text-gray-600">
                    Fabrication et expédition sous 5-7 jours ouvrés partout en
                    France métropolitaine
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-50 border border-gray-200 hover:border-rose-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <Euro className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Prix Sur Mesure</h3>
                  <p className="text-gray-600">
                    Devis personnalisé et transparent avec notre configurateur en
                    ligne gratuit
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 px-4 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nos Produits</h2>
            <p className="text-xl text-gray-600">
              Une gamme complète d&apos;enseignes professionnelles
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/produits/enseigne-led-premium" className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-50 border border-gray-200 hover:border-indigo-500 transition-all duration-300 transform hover:scale-105 overflow-hidden shadow-lg">
                  <div className="relative h-64">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                      style={{
                        backgroundImage: `url('https://images.pexels.com/photos/8296426/pexels-photo-8296426.jpeg')`,
                      }}
                      aria-label="Image d'une enseigne LED lumineuse pour magasin"
                    ></div>
                    <Badge className="absolute top-4 left-4 bg-indigo-500 text-white group-hover:bg-indigo-400 transition-colors duration-300">
                      <Lightbulb className="h-4 w-4 mr-1" />
                      LED
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-500 transition-colors">Enseignes LED</h3>
                    <p className="text-gray-600 mb-4">
                      Lettres lumineuses LED haute qualité pour une visibilité
                      optimale
                    </p>
                    <div className="flex items-center text-indigo-500 group-hover:text-indigo-400">
                      <span>Découvrir</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
            <Link href="/produits/lettres-decoupees-pvc" className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-50 border border-gray-200 hover:border-teal-500 transition-all duration-300 transform hover:scale-105 overflow-hidden shadow-lg">
                  <div className="relative h-64">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                      style={{
                        backgroundImage: `url('https://images.pexels.com/photos/6185232/pexels-photo-6185232.jpeg')`,
                      }}
                      aria-label="Image de lettres découpées en PVC pour signalétique"
                    ></div>
                    <Badge className="absolute top-4 left-4 bg-teal-500 text-white group-hover:bg-teal-400 transition-colors duration-300">
                      <Scissors className="h-4 w-4 mr-1" />
                      Découpe
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-teal-500 transition-colors">Lettres Découpées</h3>
                    <p className="text-gray-600 mb-4">
                      PVC, Dibond, Plexiglas - Découpe laser de précision
                    </p>
                    <div className="flex items-center text-teal-500 group-hover:text-teal-400">
                      <span>Découvrir</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
            <Link href="/accessoires" className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-50 border border-gray-200 hover:border-rose-500 transition-all duration-300 transform hover:scale-105 overflow-hidden shadow-lg">
                  <div className="relative h-64">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                      style={{
                        backgroundImage: `url('https://images.pexels.com/photos/17215268/pexels-photo-17215268/free-photo-of-un-appareil-de-neons.jpeg')`,
                      }}
                      aria-label="Image d'accessoires pour enseignes lumineuses"
                    ></div>
                    <Badge className="absolute top-4 left-4 bg-rose-500 text-white group-hover:bg-rose-400 transition-colors duration-300">
                      <Settings className="h-4 w-4 mr-1" />
                      Accessoires
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-rose-500 transition-colors">Accessoires</h3>
                    <p className="text-gray-600 mb-4">
                      Alimentations, câbles, fixations et tous les accessoires
                    </p>
                    <div className="flex items-center text-rose-500 group-hover:text-rose-400">
                      <span>Découvrir</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4 bg-white text-gray-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Derniers Articles de Blog
            </h2>
            <p className="text-xl text-gray-600">
              Restez informé sur les tendances et innovations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestBlogPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-50 border border-gray-200 hover:border-amber-500 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-900/50 overflow-hidden h-full shadow-md">
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
                      <Badge className="absolute top-4 left-4 bg-amber-500 text-white group-hover:bg-amber-400 transition-colors duration-300">
                        {post.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-500 transition-colors line-clamp-2">
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
                        className="w-full justify-start text-amber-500 hover:text-amber-400 group-hover:translate-x-1 transition-transform"
                      >
                        <span>Lire l&apos;article</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/blog">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-gray-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full bg-transparent"
              >
                Voir tous les articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* New SEO Content Section */}
      <section className="py-20 px-4 bg-white text-gray-600">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Notre Expertise et Engagement
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Chez MJ PUB, nous sommes fiers de notre savoir-faire artisanal
            et de notre engagement envers l&apos;excellence. Forts de plus de 5
            ans d&apos;expérience, nous concevons et fabriquons des solutions de
            signalétique sur mesure qui captivent l&apos;attention et renforcent
            l&apos;identité de votre marque.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-200">
                <h3 className="text-2xl font-bold mb-3 text-indigo-600">
                  Fabrication Française de Qualité Supérieure
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-200">
                <h3 className="text-2xl font-bold mb-3 text-teal-600">
                  Solutions Personnalisées pour Chaque Projet
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
            </motion.div>
          </div>
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Discuter de votre projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 bg-white text-gray-600">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Ils nous font confiance</h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-8 w-8 fill-amber-500 text-amber-500"
                />
              ))}
              <span className="text-2xl font-bold ml-4 text-gray-900">4.9/5</span>
              <span className="text-gray-600 ml-2">(127 avis)</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-50 border border-gray-200 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-amber-500 text-amber-500"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      &quot;{testimonial.text}&quot;
                    </p>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">
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
      <section className="py-20 px-4 bg-gray-100 text-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Prêt à créer votre enseigne ?
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Contactez-nous dès maintenant pour un devis gratuit et personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+33781546359"
              className="flex items-center gap-3 bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors"
            >
              <Phone className="h-5 w-5" />
              +33 7 81 54 63 59
            </a>
            <a
              href="mailto:mjpub59@gmail.com"
              className="flex items-center gap-3 bg-teal-600 text-white px-6 py-3 rounded-full font-bold hover:bg-teal-700 transition-colors"
            >
              <Mail className="h-5 w-5" />
              mjpub59@gmail.com
            </a>
          </div>
          <div className="mt-8">
            <Link href="/configurateur">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-500 text-gray-900 hover:bg-gray-200 px-8 py-4 text-lg rounded-full bg-transparent"
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
