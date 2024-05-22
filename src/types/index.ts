export type Project = {
  name: string;
  description: string;
  status: string;
  repository: string;
  url: string;
};

export type Post = {
  title: string;
  description: string;
  published_date: string;
  draft: boolean;
};

export type Interest = { content: string };
