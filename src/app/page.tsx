import Image from 'next/image'
import React from 'react'
import ProfilePicture from '@/images/profile.png'
import Link from 'next/link'
export default function page() {
  return (
    <section className=''>
      <Image src={ProfilePicture} width={200} height={200} alt='Me' className='rounded-md' />

      <section className='my-16'>
        <h1 className='font-semibold my-4 text-3xl'>Somtochukwu N Leroy</h1>
        <span className='text-neutral-400 font-semibold text-xl'>Software Developer</span>
      </section>


      {/* About Section */}
      <section className='my-16'>
        <h2 className='font-semibold text-2xl'>About</h2>
        <p className='text-neutral-400 my-3 max-w-prose text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid magni quae? Eaque fuga, dignissimos explicabo, ut sapiente dolorem eveniet accusantium, laboriosam ex veritatis mollitia earum sit? Magnam, est ipsa?</p>
        <p className='text-neutral-400 my-3 max-w-prose text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid magni quae? Eaque fuga, dignissimos explicabo, ut sapiente dolorem eveniet accusantium, laboriosam ex veritatis mollitia earum sit? Magnam, est ipsa?</p>
      </section>

      {/* Interests */}
      <section className='my-16'>
        <h2 className='font-semibold text-2xl'>Interests</h2>
        <p className='text-neutral-400 my-3 max-w-prose text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid magni quae? Eaque fuga, dignissimos explicabo, ut sapiente dolorem eveniet accusantium, laboriosam ex veritatis mollitia.</p>

        <ul className='ml-5 list-disc'>
          <li className='my-2 text-xl text-neutral-300'>Videography, <Link href={'/gallery'}>Photography</Link></li>
          <li className='my-2 text-xl text-neutral-300'>Reading, Writing</li>
          <li className='my-2 text-xl text-neutral-300'>Typescript, Python</li>
        </ul>

      </section>

      {/* Work */}
      <section className='my-16'>
        <h2 className='font-semibold text-2xl'>Work</h2>
        <p className='text-neutral-400 my-3 max-w-prose text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid magni quae? Eaque fuga, dignissimos explicabo, ut sapiente dolorem eveniet accusantium, laboriosam ex veritatis mollitia.</p>

      </section>

      {/* Projects */}
      <section className='my-16'>
        <h2 className='font-semibold text-2xl'>Projects</h2>
        <p className='text-neutral-400 my-3 max-w-prose text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid magni quae? Eaque fuga, dignissimos explicabo, ut sapiente dolorem eveniet accusantium, laboriosam ex veritatis mollitia.</p>

      </section>

      {/* Writings */}
      <section className='my-16'>
        <h2 className='font-semibold text-2xl'>Writings</h2>
        <p className='text-neutral-400 my-3 max-w-prose text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid magni quae? Eaque fuga, dignissimos explicabo, ut sapiente dolorem eveniet accusantium, laboriosam ex veritatis mollitia.</p>


        <div className='my-8'>
          <article className='my-5'>
            <Link href={'#'}>
              <h1 className='text-xl font-semibold'>Lorem Ispum</h1>
            </Link>
            <p className='max-w-prose text-md text-neutral-400 text-opacity-90 my-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quidem blanditiis exercitationem iusto quam dolor dolorem hic aut harum! Exercitationem eaque quas sunt, neque quasi sint voluptatibus libero adipisci aut.
            </p>
            <Link href="#" className='text-md text-neutral-700 transition-all hover:animate-pulse hover:italic'>Read More</Link>
          </article>
        </div>

        <Link href={'#'} className='font-semibold transition-all hover:ml-5'> More Writings &gt;</Link>

      </section>


      {/* Contact */}
      <section className='my-16'>
        <h2 className='font-semibold text-2xl'>Contact</h2>
        <p className='text-neutral-400 my-3 max-w-prose text-xl'>
          I&apos;d be happy to write back if you&apos;d like to send me an email. Otherwise you can follow me on Twitter Mastodon, Github or LinkedIn.</p>

      </section>

    </section>
  )
}