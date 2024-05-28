import BlogList from "@/components/BlogList";
import { getDateYear } from "@/utils";
import { POSTS_DIRECTORY, getPostMetaData } from "@/utils/posts.utils";
import Link from "next/link";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Blog",
    description:
      "A place for my thoughts, adventures and experiences worth sharing...",
    twitter: {
      title: "Blog",
      description:
        "A place for my thoughts, adventures and experiences worth sharing...",
      creator: "Sommmtoooo",
      creatorId: "sommmtoooo",
    },
    openGraph: {
      type: "website",
      title: "Blog",
      description:
        "A place for my thoughts, adventures and experiences worth sharing...",
      images: [
        {
          url: `https://sommmtoooo.vercel.app/og/Somto`,
        },
      ],
    },
  };
}

export default function page() {
  const posts = getPostMetaData(POSTS_DIRECTORY);
  const posts_year = posts
    .map((post) => getDateYear(post.date))
    .filter((year, index, self) => index === self.indexOf(year));

  return (
    <section>
      <div className="mb-10 lg:mb-20">
        <h1 className="text-3xl font-bold mb-2">Blog</h1>
        <p className="my-4">
          A place for my thoughts, adventures and experiences worth sharing...
        </p>
        <Link
          href={"/"}
          className="underline font-bold transition-[1000] text-emerald-700 mr-6 hover:ml-4"
        >
          Go Home
        </Link>
        <Link
          href={"/projects"}
          className="underline font-bold transition-[1000] text-emerald-700 hover:ml-4"
        >
          Projects
        </Link>
      </div>

      {posts_year.map((year) => (
        <BlogList key={year} year={year} />
      ))}
    </section>
  );
}
