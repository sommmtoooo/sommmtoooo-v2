import { getPostContent } from "@/utils/posts.utils";
import Markdown from "markdown-to-jsx";
import React from "react";

interface Props {
  params: any;
}

export default function page({ params }: Props) {
  const slug = params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <article>
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}
