import { getPostBySlug } from "@/utils/posts.utils";
import { Metadata } from "next";
import { Onest } from "next/font/google";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  params: any;
}

const onest = Onest({ weight: "400", subsets: ["latin"] });

export async function generateMetadata({
  params: { slug },
}: {
  params: any;
}): Metadata {
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

export default function RootLayout({ children, params }: Props) {
  return (
    <html lang="en">
      <head>
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
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>

      <body className={onest.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
