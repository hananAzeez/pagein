/* eslint-disable @next/next/no-img-element */
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Meta from "../../components/metatags";
import AnimatedElement from '../../components/animatedElement';
import client from '../../client'
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
        title="Latest Insights - Fiveweeks Studio Blog"
        description="Discover our latest blog posts covering web design, app development, UI/UX trends, and technology insights."
        keywords="Fiveweeks, Blog, Web Design, App Development, UI/UX, Technology Insights"
        ogTitle="Latest Insights - Fiveweeks Studio Blog"
        ogDescription="Discover our latest blog posts covering web design, app development, UI/UX trends, and technology insights."
        ogImage="meta/fiveweeks-blog-page.png" // Use an appropriate image URL
        ogURL="https://fiveweeks.studio/blog" // Use your blog page URL
        twitterCard="summary_large_image"
        twitterCreator="@HadiiAzeez" // Use your Twitter handle
        canonicalURL="https://fiveweeks.studio/blog" // Use your canonical URL
        />

      <div className="section-container overflow-x-hidden relative">
        <section className="mx-auto bg-offWhite scrollSection relative ">
          <div className="w-full bg-offBlack text-white lg:px-28 py-8 px-5 flex items-center justify-center flex-col" style={{ backgroundImage: 'url(bg-marble.png)' }}>
            <Navbar color="white" />
              <AnimatedElement>
                <h2 className="mt-10 text-center font-bold text-3xl leading-[43px] lg:text-4xl  lg:leading-[80px] w-full tracking-tight revealType">
                Fiveweeks Blog
                </h2>
              </AnimatedElement>
              <AnimatedElement>
                <p className="mt-2 mb-10 text-center text-lg revealType font-saira xl:max-w-6xl 3xl:max-w-screen-2xl">
                Dive into the art and science of web and app development through the eyes of Fiveweeks.   Our blog is your gateway to a world where creativity meets cutting-edge technology.   From insightful guides to industry trends, join us on a journey to discover the secrets   of exceptional digital experiences.
                </p>
              </AnimatedElement>

          </div>

          <section className="works panel bg-offWhite">
            <div className="max-w-6xl 2xl:max-w-7xl mx-auto pt-10 pb-20 px-5 xl:px-0">

              <div className="grid xl:grid-cols-2 gap-8 lg:gap-x-8 lg:gap-y-10 mt-8 md:mt-10">
                {posts.map((work,index) => (
                  <AnimatedElement key={work._id} delay={(index+1) % 2 === 0 ? 0.1 : 0}>
                    <ClientSideRoute route={`/works/${work.slug.current}`}>
                  <div className="work1 cursor-pointer "  >
                    <div className="relative">
                    <img
                      src={urlFor(work.mainImage).auto('format').url()}
                      alt="works"
                      className="rounded-xl lg:rounded-2xl"
                    />
                    <div className="mt-3 flex gap-2 flex-wrap absolute left-10 top-5">
                        {work.categories.map((tag) => (
                          <p
                            className="text-sm md:text-base font-saira  py-2 px-8 rounded-full bg-primary border border-offBlack revealType inline-block"
                            key={tag._id}
                          >
                            {tag.title}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="mt-3 md:mt-6">
                      <h6 className="text-xl xl:text-3xl font-semibold revealType">
                        {work.title}
                      </h6>

                      
                    </div>
                  </div>
                  </ClientSideRoute>
                  </AnimatedElement>
                ))}
              </div>
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
  const query = '*[_type == "author" && name == "blog"]{name,"posts": *[_type == "post" && author._ref in *[_type=="author" && name == "blog" ]._id ]{..., author->, categories[]->}}';
  const blogPosts = await client.fetch(query);
  const posts = blogPosts[0].posts;

  return {
    props: {
      posts,
    },
  };
}