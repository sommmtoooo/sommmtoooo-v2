import { Post } from "@/types";
import { formatDate } from "@/utils";
import Link from "next/link";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="my-5">
      <Link href={`/blog/${post.slug as string}`}>
        <h1 className="text-xl font-medium transition-all hover:animate-pulse hover:italic">
          {post.title}
        </h1>
      </Link>
      <p className="max-w-prose italic text-md text-neutral-400 text-opacity-90 my-3">
        {formatDate(post.date)}
      </p>
    </article>
  );
}
