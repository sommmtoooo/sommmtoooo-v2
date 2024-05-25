import Image from "next/image";
import React from "react";
import Link from "next/link";

import ProfilePicture from "@/images/profile.png";
import { POSTS_DIRECTORY, getPostMetaData } from "@/utils/posts.utils";
import BlogCard from "@/components/BlogCard";

export default function page() {
  const posts = getPostMetaData(POSTS_DIRECTORY);
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid
          magni quae? Eaque fuga, dignissimos explicabo, ut sapiente dolorem
          eveniet accusantium, laboriosam ex veritatis mollitia earum sit?
          Magnam, est ipsa?
        </p>
        <p className="text-neutral-400 my-3 max-w-prose text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid
          magni quae? Eaque fuga, dignissimos explicabo, ut sapiente dolorem
          eveniet accusantium, laboriosam ex veritatis mollitia earum sit?
          Magnam, est ipsa?
        </p>
      </section>

      {/* Interests */}
      <section className="my-16">
        <h2 className="font-semibold text-2xl">Interests</h2>
        <p className="text-neutral-400 my-3 max-w-prose text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid
          magni quae? Eaque fuga, dignissimos explicabo, ut sapiente dolorem
          eveniet accusantium, laboriosam ex veritatis mollitia.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid
          magni quae? Eaque fuga, dignissimos explicabo, ut sapiente dolorem
          eveniet accusantium, laboriosam ex veritatis mollitia.
        </p>
      </section>

      {/* Projects */}
      <section className="my-16">
        <h2 className="font-semibold text-2xl">Projects</h2>
        <p className="text-neutral-400 my-3 max-w-prose text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid
          magni quae? Eaque fuga, dignissimos explicabo, ut sapiente dolorem
          eveniet accusantium, laboriosam ex veritatis mollitia.
        </p>
      </section>

      {/* Writings */}
      <section className="my-16">
        <h2 className="font-semibold text-2xl">Writings</h2>
        <p className="text-neutral-400 my-3 max-w-prose text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid
          magni quae? Eaque fuga, dignissimos explicabo, ut sapiente dolorem
          eveniet accusantium, laboriosam ex veritatis mollitia.
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
          More Writings...
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
