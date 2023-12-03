/* eslint-disable @next/next/no-img-element */
import Navbar from "../../components/navbar";
import { works } from "../../utils/startups";
import Footer from "../../components/footer";
import Meta from "../../components/metatags";
import AnimatedElement from '../../components/animatedElement';
import client from '../../client'
import Image from "next/image";
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import imageUrlBuilder from '@sanity/image-url'
import ClientSideRoute from "../../components/clientSideRoute";


type Props = {
  posts: Post[];
}

function urlFor (source: SanityImageSource) {
  return imageUrlBuilder(client).image(source)
}

const Works = ({posts}: Props) => {
  return (
    <main className="bg-offWhite">
      <Meta
        title="Our Works - Fiveweeks"
        description="Explore our portfolio of web, app, UI/UX, and tech solutions."
        keywords="Fiveweeks, Digital Agency, Works Showcase, Web Development, App Development, UI/UX Design, Tech Solutions"
        ogTitle="Our Works - Fiveweeks"
        ogDescription="Explore our portfolio of web, app, UI/UX, and tech solutions."
        ogImage="meta/fiveweeks-works-page.png" // Use an appropriate image URL
        ogURL="https://fiveweeks.studio/works" // Use your about page URL
        twitterCard="summary_large_image"
        twitterCreator="@HadiiAzeez" // Use your Twitter handle
        canonicalURL="https://fiveweeks.studio/works" // Use your canonical URL
      />
      <div className="section-container overflow-x-hidden relative">
        <section className="works px-5 mx-auto lg:px-28 bg-offWhite py-8 scrollSection relative ">
          <Navbar color="white" />

          <section className="works panel bg-offWhite">
            <div className="max-w-6xl 2xl:max-w-7xl mx-auto py-20 px-5 xl:px-0">
              <div className="flex flex-col xl:flex-row items-center justify-between text-offBlack">
                <AnimatedElement>
                <h2 className=" font-bold text-4xl leading-[43px] lg:text-[64px] lg:leading-[80px] !text-offBlack w-full max-w-4xl tracking-tight revealType">
                  You might love what we built to our clients
                </h2>
                </AnimatedElement>
              </div>

              <div className="grid xl:grid-cols-2 gap-8 lg:gap-x-8 lg:gap-y-10 mt-8 md:mt-10">
                {posts.map((work,index) => (
                  <AnimatedElement key={work._id} delay={(index+1) % 2 === 0 ? 0.1 : 0}>
                    <ClientSideRoute route={`/works/${work.slug.current}`}>
                  <div className="work1 cursor-pointer "  >
                    {/* <Image className="rounded-xl lg:rounded-2xl" src={urlFor(work.mainImage).url} alt={work.author.name} /> */}
                    <img
                      src={urlFor(work.mainImage).auto('format').url()}
                      alt="works"
                      className="rounded-xl lg:rounded-2xl"
                    />
                    <div className="mt-3 md:mt-6">
                      <h6 className="text-2xl xl:text-4xl font-semibold revealType">
                        {work.title}
                      </h6>

                      <div className="mt-3 flex gap-2 flex-wrap">
                        {work.categories.map((tag) => (
                          <p
                            className="text-sm md:text-base font-saira  py-2 px-8 rounded-full border border-offBlack revealType inline-block"
                            key={tag._id}
                          >
                            {tag.title}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  </ClientSideRoute>
                  </AnimatedElement>
                ))}
              </div>
              {/* <div className="grid xl:grid-cols-2 gap-8 lg:gap-x-8 lg:gap-y-10 mt-8 md:mt-10">
                {works.map((work) => (
                  <AnimatedElement key={work.id} delay={work.id % 2 === 0 ? 0.1 : 0}>
                  <a href={`works/${work.title.toLowerCase().replace(/ /g, '-')}`} >
                  <div className="work1 cursor-pointer "  >
                    <img
                      src={`works/${work.image}`}
                      alt="works"
                      className="rounded-xl lg:rounded-2xl"
                    />
                    <div className="mt-3 md:mt-6">
                      <h6 className="text-2xl xl:text-4xl font-semibold revealType">
                        {work.title}
                      </h6>

                      <div className="mt-3 flex gap-2 flex-wrap">
                        {work.tags.map((tag) => (
                          <p
                            className="text-sm md:text-base font-saira  py-2 px-8 rounded-full border border-offBlack revealType inline-block"
                            key={tag.id}
                          >
                            {tag.title}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  </a>
                  </AnimatedElement>
                ))}
              </div> */}
            </div>
          </section>
        </section>
        <Footer />
      </div>
    </main>
  );
};

export default Works;

export async function getStaticProps() {
  // Fetch data from Sanity
  const query = '*[_type == "post"]{..., author->,categories[]->}';
  const posts = await client.fetch(query);

  return {
    props: {
      posts,
    },
  };
}