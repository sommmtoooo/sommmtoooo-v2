import { Post } from "@/types";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import { match } from "assert";

export const POSTS_DIRECTORY = join(process.cwd(), "src/posts");

export function getPostMetaData(base_path: string): Array<Post> {
  const markdown_files = readdirSync(base_path, "utf-8").filter((file) =>
    file.endsWith(".md"),
  );

  const data = markdown_files.map((file) => {
    const path = join(POSTS_DIRECTORY, file);
    const file_content = readFileSync(path, "utf-8");

    const matter_result = matter(file_content);

    return {
      slug: file.replace(".md", ""),
      ...(matter_result.data as Post),
    };
  });

  return data.sort((prev, next) => {
    if (prev.date < next.date) {
      return 1;
    }

    return -1;
  });
}

export async function getStaticProps() {
  const allPostsData = getPostMetaData(POSTS_DIRECTORY);
  return {
    props: {
      allPostsData,
    },
  };
}

export function getPostContent(slug: string) {
  const file_path = join(POSTS_DIRECTORY, `${slug}.md`);
  const content = readFileSync(file_path, "utf-8");
  return matter(content);
}
