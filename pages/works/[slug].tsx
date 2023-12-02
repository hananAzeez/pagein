/* eslint-disable @next/next/no-img-element */
// [slug].tsx

import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText} from '@portabletext/react'
import client from '../../client'
import styles from './work.module.css'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { ReactNode } from 'react';

function urlFor (source: SanityImageSource) {
  return imageUrlBuilder(client).image(source)
}

interface ImageComponentProps {
  value: {
    _type: string;
    _key: string;
    asset: {
      _ref: string;
      _type: string;
    };
    alt?: string;
  };
}

interface BlockProps {
  node: {
    style: string;
  };
  children: React.ReactNode;
}

// Define an interface for inline elements with marks
interface InlineProps {
  children: React.ReactNode;
}

interface BlockComponentProps {
  children: ReactNode;
}


const ptComponents = {
  types: {
    image: ({ value }: ImageComponentProps): ReactNode => {
      if (!value?.asset?._ref) {
        return null;
      }

      const imageUrl = urlFor(value).auto('format').url(); // Extract the URL
      return (
        <img className='w-full'
          alt={value.alt || ' '}
          loading="lazy"
          src={imageUrl}
        />
      );
    }
  }
}

console.log('ptcomen' , ptComponents)

interface Post {
  title?: string;
  name?: string;
  categories: string[] | null;
  authorImage?: {
    _type: string;
    asset: {
      _ref: string;
    };
  };
  body: Array<{ _type: string; _key: string; asset?: { _type: string; _ref: string } } | { children: Array<{ _type: string; text: string }>; _type: string; style: string; _key: string; markDefs: any[] }>;
}

const Post = ({ post }: { post: Post }) => {
  // console.log(post)
  if (!post) {
    // Handle the case where 'post' is undefined
    return <div>Loading...</div>;
  }

  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    body = []
  } = post;

  return (
    <main className=' overflow-hidden mx-auto'>
      <div className="py-8 max-w-7xl mx-auto">
        <Navbar color='black' />
        <article className='flex flex-col items-center mt-20 mb-10  px-5 lg:px-28 xl:px-0 gap-5 lg:gap-10'>
          <h1 className='text-5xl md:text-6xl xl:text-8xl font-bold text-center'>{title}</h1>
          {categories && (
            <ul className='flex gap-2 flex-wrap  xl:-mt-4'>
              {categories.map(category => <li className='text-sm md:text-base font-saira  py-2 px-8 rounded-full border border-offBlack' key={category}>{category}</li>)}
            </ul>
          )}
          {/* {authorImage && (
            <div>
              <img
                src={urlFor(authorImage)
                  .width(50)
                  .url()}
                alt={`${name}'s picture`}
              />
            </div>
          )} */}
          <PortableText
            value={body}
            components={ptComponents}
          />
        </article>
      </div>
      <Footer />
    </main>
  );
};


const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
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
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}
export default Post