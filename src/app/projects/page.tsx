import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";
import { Project } from "@/types";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Somtochukwu",
    description: "Software Developer",
    twitter: {
      title: "Somtochukwu",
      description: "Software Developer",
      creator: "Sommmtoooo",
      creatorId: "sommmtoooo",
    },
    openGraph: {
      type: "website",
      title: "Somtochukwu",
      description: "Software Developer",
      images: [
        {
          url: `https://sommmtoooo.vercel.app/og/Somto`,
        },
      ],
    },
  };
}

export default function page() {
  return (
    <section>
      <div className="mb-10 lg:mb-20">
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <Link
          href={"/"}
          className="underline font-bold transition-[1000] text-emerald-700 mr-6 hover:ml-4"
        >
          Go Home
        </Link>
        <Link
          href={"/blog"}
          className="underline font-bold transition-[1000] text-emerald-700 hover:ml-4"
        >
          Blog
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project as Project} />
        ))}
      </div>
    </section>
  );
}
