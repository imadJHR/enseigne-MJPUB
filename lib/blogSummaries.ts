import type { blogPosts } from "./blogPosts";
export type BlogSummary = Omit<
  (typeof blogPosts)[number],
  "sections" | "sources"
>;
