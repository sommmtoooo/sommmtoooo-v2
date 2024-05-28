import Image from "next/image";
import React from "react";
import Link from "next/link";

import ProfilePicture from "@/images/profile.png";
import { POSTS_DIRECTORY, getPostMetaData } from "@/utils/posts.utils";
import BlogCard from "@/components/BlogCard";

import projects from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types";

export default function page() {
  const posts = getPostMetaData(POSTS_DIRECTORY).filter((post) => !post.draft);
  return (
    <section className="">
      <Image
        src={ProfilePicture}
        width={200}
        height={200}
        alt="Me"
        className="rounded-md"
      />

      <section className="my-16">
        <h1 className="font-semibold my-4 text-3xl">Somtochukwu N Leroy</h1>
        <span className="text-neutral-400 font-semibold text-xl">
          Software Developer
        </span>
      </section>

      {/* About Section */}
      <section className="my-16">
        <h2 className="font-semibold text-2xl">About</h2>
        <p className="text-neutral-400 my-3 max-w-prose text-xl">
          Hello, I am Somto. I love crafting software that solves problems for
          myself and others. Although I&apos;m a certified software engineer, I
          still feel like there&apos;s so much to learn. As I continue my
          journey into the world of software development, my passion for the
          craft knows no bounds.
        </p>
        <p className="text-neutral-400 my-3 max-w-prose text-xl">
          In my free time, I enjoy reading articles and books, and creating
          videos that I never share online. I also love playing chess whenever I
          need a mental break.
        </p>
      </section>

      {/* Interests */}
      <section className="my-16">
        <h2 className="font-semibold text-2xl">Interests</h2>
        <p className="text-neutral-400 my-3 max-w-prose text-xl">
          Here are some of the activities and technologies that I invest my time
          in:
        </p>

        <ul className="ml-5 list-disc">
          <li className="my-2 text-xl text-neutral-400">Videography, Chess</li>
          <li className="my-2 text-xl text-neutral-400">Reading, Writing</li>
          <li className="my-2 text-xl text-neutral-400">Typescript, Python</li>
        </ul>
      </section>

      {/* Work */}
      <section className="my-16">
        <h2 className="font-semibold text-2xl">Work</h2>
        <p className="text-neutral-400 my-3 max-w-prose text-xl">
          I have trained dozens of students in web design, database management,
          and other technologies. Currently, I am tutoring at the institute
          where I graduated as a software engineer. Additionally, I craft
          websites to help businesses connect with their customers.
        </p>
      </section>

      {/* Projects */}
      <section className="my-16">
        <h2 className="font-semibold text-2xl">Projects</h2>
        <p className="text-neutral-400 my-3 max-w-prose text-xl">
          Over my two-plus years of experience, I haven&apos;t built any major
          projects yet. Instead, I focus on creating tools to automate my daily
          tasks and for exploration purposes.
        </p>

        <div className="my-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project as Project} />
          ))}
        </div>

        <Link
          href={"/projects"}
          className="underline text-neutral-400 font-semibold transition-all hover:ml-5 hover:text-emerald-700"
        >
          More Projects&nbsp;({projects.length})...
        </Link>
      </section>

      {/* Writings */}
      <section className="my-16">
        <h2 className="font-semibold text-2xl">Writings</h2>
        <p className="text-neutral-400 my-3 max-w-prose text-xl">
          I enjoy writing about what I am currently learning, my life
          experiences, and my journey as a broke teenager striving for financial
          freedom.
        </p>

        <div className="my-8">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>

        <Link
          href={"/blog"}
          className="underline text-neutral-400 font-semibold transition-all hover:ml-5 hover:text-emerald-700"
        >
          More Writings&nbsp;({posts.length})...
        </Link>
      </section>

      {/* Contact */}
      <section className="my-16">
        <h2 className="font-semibold text-2xl">Contact</h2>
        <p className="text-neutral-400 my-3 max-w-prose text-xl">
          I&apos;d be happy to write back if you&apos;d like to send me{" "}
          <Link
            href={"mailto:leroynnalue65@gmail.com"}
            className="underline hover:text-emerald-700"
          >
            an email
          </Link>
          . Otherwise you can follow me on{" "}
          <Link
            target="_blank"
            href={"https://twitter.com/sommmtoooo"}
            className="underline hover:text-emerald-700"
          >
            Twitter
          </Link>
          ,&nbsp;
          <Link
            target="_blank"
            href={"https://github.com/sommmtoooo"}
            className="underline hover:text-emerald-700"
          >
            Github
          </Link>
          &nbsp; or &nbsp;
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/sommmtoooo"}
            className="underline hover:text-emerald-700"
          >
            LinkedIn
          </Link>
        </p>
      </section>
    </section>
  );
}
