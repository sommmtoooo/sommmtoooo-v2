import { Project } from "@/types";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const { name, url, status, repository, description } = project;

  return (
    <div className="my-4">
      <h2 className="text-xl text-neutral-400 font-semibold">{name}</h2>
      <p className="text-neutral-400 my-2">{description}</p>
      {url ? (
        <a target="_blank" href={url} className="mr-4 text-emerald-700">
          Live
        </a>
      ) : (
        ""
      )}

      {repository ? (
        <a target="_blank" href={repository} className="text-emerald-600">
          Source
        </a>
      ) : (
        ""
      )}
    </div>
  );
}
