/* eslint-disable @next/next/no-img-element */
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'


function urlFor (source: SanityImageSource) {
    return imageUrlBuilder(client).image(source)
  }

  export const RichTextComponenets = {
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

  }