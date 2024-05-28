import { getDateYear } from "@/utils";
import { POSTS_DIRECTORY, getPostMetaData } from "@/utils/posts.utils";
import BlogCard from "./BlogCard";

interface Props {
  year: number;
}

export default function BlogList({ year }: Props) {
  const posts = getPostMetaData(POSTS_DIRECTORY);
  const getPostsByYear = (year: number) => {
    return posts.filter((post) => getDateYear(post.date) === year);
  };
  const post_by_year = getPostsByYear(year);

  return (
    <div>
      <h1 className="text-2xl font-semibold">{year}</h1>

      <div>
        {post_by_year.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
}
