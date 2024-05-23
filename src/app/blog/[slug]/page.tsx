import { getPostContent } from "@/utils/posts.utils";
import Markdown from "markdown-to-jsx";
import { Onest } from "next/font/google";
import Link from "next/link";
import React from "react";
import "./blog.css";
import { formatDate } from "@/utils";

const dm_serif = Onest({ weight: "400", subsets: ["latin"] });
interface Props {
  params: any;
}

export default function page({ params }: Props) {
  const slug = params.slug;
  const post = getPostContent(slug);

  return (
    <html lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="description" content={post.data.description} />
        <meta name="keywords" content={post.data.keywords} />
        <meta name="author" content="Somtochukwu L Nnalue" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://somtodev.netlify.app" />
        <meta property="og:title" content={post.data.title} />
        <meta property="og:description" content={post.data.description} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://somtodev.netlify.app" />
        <meta property="twitter:title" content={post.data.title} />
        <meta property="twitter:description" content={post.data.description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <title>{post.data.title}</title>
      </head>
      <body className={dm_serif.className}>
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
      </body>
    </html>
  );
}
