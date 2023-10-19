/* eslint-disable @next/next/no-img-element */
// [slug].tsx

import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import client from '../../client'
import styles from './work.module.css'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img className={styles.images}
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).auto('format')}
        />
      )
    }
  }
}

const Post = ({post}) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    body = []
  } = post
  return (
    <main className='px-5 mx-auto lg:px-28 xl:px-0 py-8 overflow-hidden'>
        <div className="max-w-7xl mx-auto">
    <Navbar color='black'/>
    <article className={styles.article}>
      <h1 className={`${styles.title}`} >{title}</h1>
      {/* <span>By {name}</span> */}
      {categories && (
        <ul>
          Posted in
          {categories.map(category => <li key={category}>{category}</li>)}
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
  )
}

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
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
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