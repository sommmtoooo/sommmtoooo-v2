import { getPostBySlug, getPostContent } from "@/utils/posts.utils";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import React from "react";
import "./blog.css";
import { formatDate } from "@/utils";

interface Props {
  params: any;
}

export async function generateMetadata({ params: { slug } }: { params: any }) {
  const post = getPostBySlug(slug);
  return {
    title: post?.title ?? "Somtochukwu Blog",
    description: post?.description,
    keywords: post?.keywords,
    twitter: {
      title: post?.title,
      description: post?.description,
      creator: "Sommmtoooo",
      creatorId: "sommmtoooo",
    },
    openGraph: {
      type: "website",
      url: "https://sommmtoooo.vercel.app",
      title: post?.title,
      description: post?.description,
      images: [
        {
          url: `https://sommmtoooo.vercel.app/og/${post?.title}`,
        },
      ],
    },
  };
}

export default async function page({ params }: Props) {
  const slug = params.slug;
  const post = getPostContent(slug);

  return (
    <section className="my-5 blog-content">
      <Link
        href={"/blog"}
        className="font-bold text-emerald-700 transition-all hover:ml-5"
      >
        Go Back
      </Link>
      <div className="my-3">
        <h1 className="text-3xl font-bold">{post.data.title}</h1>
        <p>{formatDate(post.data.date)}</p>
      </div>
      <article>
        <Markdown>{post.content}</Markdown>
      </article>
    </section>
  );
}
