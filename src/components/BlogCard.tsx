import { Post } from "@/types";
import Link from "next/link";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="my-5">
      <Link href={"#"}>
        <h1 className="text-xl font-semibold">{post.title}</h1>
      </Link>
      <p className="max-w-prose text-md text-neutral-400 text-opacity-90 my-3">
        {post.description}
      </p>
      <Link
        href={`/blog/${post.slug as string}`}
        className="text-md text-neutral-700 transition-all hover:animate-pulse hover:italic"
      >
        Read More
      </Link>
    </article>
  );
}
