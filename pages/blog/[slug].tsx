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

  console.log(post.body)

  return (
    <main className=' overflow-hidden mx-auto'>
      <div className="py-8 max-w-7xl mx-auto">
        <Navbar color='black' />
        <article className='flex flex-col mt-20 mb-10  px-5 lg:px-28 xl:px-0 max-w-5xl mx-auto'>
                    {post.categories && (
                        <ul className='flex gap-2 flex-wrap'>
                            {post.categories.map(category => <li className='text-sm md:text-base font-saira  py-1 px-6 rounded-full border bg-primary border-offBlack border-opacity-10' key={category._id}>{category}</li>)}
                        </ul>
                    )}
                    <h1 className='mt-5 text-2xl md:text-3xl xl:text-4xl font-bold '>{post.title}</h1>
                    <div className="mt-8 flex gap-10 items-center">
                        <div className="flex flex-col gap-2">
                            <p className='text-grey text-sm'>Written by</p>
                            <p className="text-lg">Fiveweeks</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className='text-grey text-sm'>Published on</p>
                            <p className="text-lg">{post._createdAt.slice(0,10)}</p>
                        </div>
                    </div>

                    <hr className='bg-offBlack my-10'/>
                <img
                  className="mb-10 w-full h-auto col-span-3 rounded-xl xl:rounded-2xl"
                  src={urlFor(post.mainImage).auto('format').url()}
                  alt='blog image'
                />
          <PortableText 
            projectId = {process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'a630cvdc'} 
            dataset = {process.env.NEXT_PUBLIC_SANITY_DATASET || 'works'} 
            content={post.body}
            serializers={{
              h1: ({ children }: any) => (
                <h1 className="text-5xl pt-8 font-bold">{children}</h1>
            ),
            h2: ({ children }: any) => (
                <h1 className="text-4xl pt-8 font-bold">{children}</h1>
            ),
            h3: ({ children }: any) => (
                <h1 className="text-3xl pt-8 font-bold">{children}</h1>
            ),
            h4: ({ children }: any) => (
                <h1 className="text-2xl pt-8 font-bold">{children}</h1>
            ),
            normal: ({ children }: any) => (
              <p className="text-lg pt-4">{children}</p>
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