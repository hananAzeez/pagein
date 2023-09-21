/* eslint-disable @next/next/no-img-element */
import Navbar from "./../../components/navbar";
import { works } from "./../../utils/startups";
import Footer from "./../../components/footer";

const Works = () => {
  return (
    <main className="bg-offWhite">
      <div className="section-container overflow-x-hidden relative">
        <section className="works px-5 mx-auto lg:px-28 bg-offWhite py-8 scrollSection relative ">
          <Navbar color="white" />

          <section className="works panel bg-offWhite">
            <div className="max-w-6xl 2xl:max-w-7xl mx-auto py-20 px-5 xl:px-0">
              <div className="flex flex-col xl:flex-row items-center justify-between text-offBlack">
                <h2 className=" font-bold text-4xl leading-[43px] lg:text-[64px] lg:leading-[80px] !text-offBlack w-full max-w-4xl tracking-tight revealType">
                  You might love what we built to our clients
                </h2>
              </div>

              <div className="grid xl:grid-cols-2 gap-8 lg:gap-x-8 lg:gap-y-10 mt-8 md:mt-10">
                {works.map((work) => (
                  <div className="work1 cursor-pointer " key={work.id}>
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
