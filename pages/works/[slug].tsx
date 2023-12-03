/* eslint-disable @next/next/no-img-element */
// [slug].tsx

import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
// import { PortableText} from '@portabletext/react'
import PortableText from "react-portable-text"
import client from '../../client'
import styles from './work.module.css'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { ReactNode } from 'react';
import { RichTextComponenets } from '../../components/richTextComponents'

function urlFor (source: SanityImageSource) {
  return imageUrlBuilder(client).image(source)
}


const Post = ({ post }: { post: Post }) => {
  // console.log(post)
  if (!post) {
    // Handle the case where 'post' is undefined
    return <div>Loading...</div>;
  }

  console.log(post.categories)
  const allCategory = post.categories;

  return (
    <main className=' overflow-hidden mx-auto'>
      <div className="py-8 max-w-7xl mx-auto">
        <Navbar color='black' />
        <article className='flex flex-col items-center mt-20 mb-10  px-5 lg:px-28 xl:px-0 gap-5 lg:gap-10'>
          <h1 className='text-5xl md:text-6xl xl:text-8xl font-bold text-center'>{post.title}</h1>
          {post.categories && (
            <ul className='flex gap-2 flex-wrap  xl:-mt-4'>
              {allCategory.map(category => <li className='text-sm md:text-base font-saira  py-2 px-8 rounded-full border border-offBlack' key={category._id}>{category.toString()}</li>)}
            </ul>
          )}
          <PortableText 
            projectId = {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'a630cvdc'} 
            dataset = {process.env.NEXT_PUBLIC_SANITY_DATASET || 'works'} 
            content={post.body}
            serializers={{
              h1: ({ children }: any) => (
                <h1 className="text-5xl py-10 font-bold">{children}</h1>
            ),
            h2: ({ children }: any) => (
                <h1 className="text-4xl py-10 font-bold">{children}</h1>
            ),
            h3: ({ children }: any) => (
                <h1 className="text-3xl py-10 font-bold">{children}</h1>
            ),
            h4: ({ children }: any) => (
                <h1 className="text-2xl py-10 font-bold">{children}</h1>
            ),
            normal: ({ children }: any) => (
              <h1 className="text-lg py-1">{children}</h1>
            ),
            link: ({ href, children}: any) => (
              <a href={href} className="text-green-700 hover:underline">{children}</a>
            ),

            blockquote: ({children}: any) => (
                <blockquote className="border-l-primary border-l-4 pl-5 py-5 my-5">{children}</blockquote>
            ),
          //   image: ({ children }: any) => (
          //     <img className="w-full py-10" alt='blog-image' src={urlFor(children).auto('format').url()} />
          // ),
          image: ({ asset }: any) => {
            // 'node' contains information about the image, including 'asset' and 'caption'
            // const { asset, caption } = node;
            console.log(asset)
            
            return (
              <div className="my-5">
                <img
                  className="w-full h-auto"
                  src={urlFor(asset).auto('format').url()}
                  alt='blog image'
                />
              </div>
            );
          },
            
            }}
          />
        </article>
      </div>
      <Footer />
    </main>
  );
};


const query = groq`*[_type == "post" && slug.current == $slug][0]{
  ...,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
}`

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug: any) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context: { params: { slug?: "" | undefined } }) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post: Post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}
export default Post