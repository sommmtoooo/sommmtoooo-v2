import BlogCard from "@/components/BlogCard";
import { POSTS_DIRECTORY, getPostMetaData } from "@/utils/posts.utils";
import Link from "next/link";
import React from "react";

export default function page() {
  const posts = getPostMetaData(POSTS_DIRECTORY);
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

      <div>
        {posts.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>
    </section>
  );
}
