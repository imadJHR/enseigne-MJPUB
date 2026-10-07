"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Search } from "@/components/Icons";
import type { BlogSummary } from "@/lib/blogSummaries";
export default function BlogList({
  blogSummaries,
}: {
  blogSummaries: BlogSummary[];
}) {
  const [search, setSearch] = useState("");
  const posts = blogSummaries.filter((p) =>
    (p.title + " " + p.category + " " + p.excerpt)
      .toLocaleLowerCase("fr")
      .includes(search.toLocaleLowerCase("fr")),
  );
  return (
    <>
      <div className="filter-bar">
        <label htmlFor="article-search" className="small-copy">
          <Search size={16} aria-hidden="true" /> Rechercher un conseil
        </label>
        <input
          className="field-input"
          id="article-search"
          placeholder="Matériaux, éclairage, façade…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {posts.length ? (
        <div className="journal-grid">
          {posts.map((post) => (
            <Link
              className="journal-card"
              href={`/blog/${post.slug}`}
              key={post.slug}
            >
              <div className="journal-image">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <p className="article-category">{post.category}</p>
              <h3>
                {post.title}
                <ArrowUpRight size={21} />
              </h3>
              <p>{post.excerpt}</p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>Aucun article pour cette recherche.</h2>
          <button
            className="button button-secondary"
            onClick={() => setSearch("")}
          >
            Voir tous les conseils
          </button>
        </div>
      )}
    </>
  );
}
