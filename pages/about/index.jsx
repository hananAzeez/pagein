/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Footer from "../../components/footer";
import Navbar from "./../../components/navbar";

const About = () => {
  return (
    <main className="bg-offWhite overflow-hidden">
      <div className="section-container overflow-x-hidden relative">
        <section className=" about  bg-black ">
          <div className=" bg-darkBg backdrop-blur-sm py-8 px-5 mx-auto lg:px-28">
            <Navbar color="black" />
            <h2 className="font-bold text-3xl lg:text-5xl pt-10 lg:pt-16 revealType text-center relative text-offWhite max-w-5xl !leading-tight mx-auto">
              Crafting Exceptional Tech Solutions for Visionary Startups and
              Founders
            </h2>
            <h6 className="text-center relative w-full text-white text-base font-saira font-normal tracking-[0.64px]  lg:text-2xl lg:leading-normal lg:tracking-[-0.72px] max-w-4xl mx-auto py-10">
              Since 2018, we&apos;ve been deep in the world of coding and
              creating tech products. We&apos;re the kind of people who love
              crafting and marketing our own creations. Over time, friends and
              distant colleagues started reaching out to us for tech solutions
              for their businesses. At first, we didn&apos;t think of ourselves
              as tech consultants, but our knack for understanding problems and
              building user-friendly solutions led us to work on many projects.
            </h6>
            <img
              src="/about/about-4.png"
              alt="about"
              className="mx-auto z-10 -mb-32"
            />
          </div>
        </section>

        <section className="bg-primary pt-32 px-6 xl:px-0 pb-10 lg:pb-20">
          <h6 className="text-center relative w-full text-offBlack text-base font-saira font-normal tracking-[0.64px]  lg:text-2xl lg:leading-normal lg:tracking-[-0.72px] max-w-3xl mx-auto py-4 lg:py-10">
            As the years rolled on, we found ourselves taking on more and more
            tech solution projects. Why? Because we saw a gap in the market.
            Many tech agencies weren't delivering the quality needed to make a
            real impact on users. So, we decided to step in.
          </h6>
          <h6 className="text-center relative w-full text-offBlack text-base font-saira font-normal tracking-[0.64px]  lg:text-2xl lg:leading-normal lg:tracking-[-0.72px] max-w-3xl mx-auto py-4 lg:py-8">
            Our vision is simple: we want to collaborate with founders who are
            tackling big problems that affect a lot of people. Startups, in
            particular, are our sweet spot because we believe in getting things
            out there fast.
          </h6>
          <h6 className="text-center relative w-full text-offBlack text-base font-saira font-normal tracking-[0.64px]  lg:text-2xl lg:leading-normal lg:tracking-[-0.72px] max-w-3xl mx-auto py-4 lg:py-8">
            Now, here's the deal. We won't say yes to every project that comes
            our way. We're a team with multiple in-house SaaS products to run,
            after all. But we're committed to taking on a select few exceptional
            projects.
          </h6>
          <h6 className="text-center relative w-full text-offBlack text-base font-saira font-normal tracking-[0.64px]  lg:text-2xl lg:leading-normal lg:tracking-[-0.72px] max-w-3xl mx-auto py-4 lg:py-8">
            And let's be real – we're here to make a living too. Running this
            agency helps keep the cash flow steady.
          </h6>
          <h6 className="text-center relative w-full text-offBlack text-base font-saira font-normal tracking-[0.64px]  lg:text-2xl lg:leading-normal lg:tracking-[-0.72px] max-w-3xl mx-auto py-4 lg:py-8">
            So, if you're an indie founder or startup struggling to find the
            right tech team to bring your dream project to life, let's have a
            chat. We're Pagein, and we build fantastic tech solutions.
          </h6>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default About;
