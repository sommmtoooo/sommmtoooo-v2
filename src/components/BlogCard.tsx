import { Post } from "@/types";
import { formatDate } from "@/utils";
import Link from "next/link";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="my-5">
      <a href={`/blog/${post.slug}`}>
        <h1 className="text-xl font-semibold transition-all hover:animate-pulse hover:italic">
          {post.title}
        </h1>
      </a>
      <p className="max-w-prose italic text-md text-neutral-400 text-opacity-90 my-3">
        {formatDate(post.date)}
      </p>
    </article>
  );
}
