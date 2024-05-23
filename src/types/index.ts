export type Project = {
  name: string;
  description: string;
  status: string;
  repository: string;
  url: string;
};

export type Post = {
  slug?: string;
  title: string;
  description: string;
  date: string;
  draft: boolean;
  keywords: string;
};

export type Interest = { content: string };
