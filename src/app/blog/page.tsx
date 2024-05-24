import BlogCard from "@/components/BlogCard";
import BlogList from "@/components/BlogList";
import { getDateYear } from "@/utils";
import { POSTS_DIRECTORY, getPostMetaData } from "@/utils/posts.utils";
import Link from "next/link";
import React from "react";

export default function page() {
  const posts = getPostMetaData(POSTS_DIRECTORY);
  const posts_year = posts
    .map((post) => getDateYear(post.date))
    .filter((year, index, self) => index === self.indexOf(year));

  return (
    <section>
      <div className="mb-20">
        <h1 className="text-3xl font-bold mb-2">Blog</h1>
        <p className="my-4">
          A place for my thoughts, adventures and experiences worth sharing...
        </p>
        <Link
          href={"/"}
          className="underline font-bold transition-all hover:text-emerald-400 hover:ml-4"
        >
          &lt; Home
        </Link>
      </div>

      {posts_year.map((year) => (
        <BlogList key={year} year={year} />
      ))}
    </section>
  );
}
