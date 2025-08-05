"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import { useState } from "react";
import { blogPosts } from "../blog/[slug]/page"; 
import Image from "next/image";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <div className="pt-20 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-blue-500 bg-clip-text text-transparent">
              Notre Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Actualités, conseils et innovations sur les enseignes lumineuses
              et la signalétique
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Rechercher un article..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <Card className="bg-white border border-gray-200 hover:border-blue-500 transition-all duration-300 transform hover:scale-[1.02] overflow-hidden h-full shadow-sm hover:shadow-md">
                  <div className="relative h-56">
                    <Image
                      src={
                        post.image ||
                        "/placeholder.svg?height=300&width=400&text=Blog+Image"
                      }
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-yellow-500 text-black hover:bg-yellow-600">
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 text-gray-900">
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
                    <div className="flex items-center text-blue-600 group-hover:text-blue-800 font-medium">
                      <span>Lire l'article</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2 text-black">
                Aucun article trouvé
              </h3>
              <p className="text-gray-600 mb-6">
                Essayez de modifier vos critères de recherche ou parcourez tous
                nos articles
              </p>
              <Button
                onClick={() => setSearchTerm("")}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Voir tous les articles
              </Button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
