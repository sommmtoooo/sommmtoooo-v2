import { getPostContent } from "@/utils/posts.utils";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import React from "react";
import "./blog.css";
import { formatDate } from "@/utils";

interface Props {
  params: any;
}

export default function page({ params }: Props) {
  const slug = params.slug;
  const post = getPostContent(slug);

  return (
    <section className="w-5/6 mx-auto my-5 blog-content">
      <Link
        href={".."}
        className="font-bold text-emerald-400 transition-all hover:ml-5"
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
