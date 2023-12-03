/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'


function urlFor (source: SanityImageSource) {
    return imageUrlBuilder(client).image(source)
  }

  export const RichTextComponenets = {
    types: {
        image: ({value}: any) => {
        return (
            <div className="w-full">
                <img
                src={urlFor(value).auto('format').url()}
                alt="work image"
                />
            </div>
        )},
        list: {
            bullet: ({ children }: any) => (
                <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
            ),
            number: ({ children }: any) => (
                <ol className="mt-lg list-decimal">{children}</ol>
            )
        },
        block: {
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

            blockquote: ({children}: any) => (
                <blockquote className="border-l-primary border-l-4 pl-5 py-5 my-5">{children}</blockquote>
            ),
            arrayElement: ({ children }: any) => (
                <div>
                  {children.map((child: any, index: number) => (
                    <p key={index}>{child.text}</p>
                  ))}
                </div>
              ),
        },
        marks: {
            link: ({ children, value }: any) => {
                const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;

                return (
                    <Link href={value.href} rel={rel} className="underline decoration-primary hover:decoration-black">{children}</Link>
                )
            }
        }
    
    }

  }