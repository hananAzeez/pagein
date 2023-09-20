import Navbar from './../../components/navbar';

const About = () => {
    return ( 
        <main className="bg-offWhite">
            <div className="section-container overflow-x-hidden relative">
      <section className="about px-5 mx-auto lg:px-28 bg-offWhite py-8 scrollSection relative ">
            <Navbar />
            <h2 className="text-center font-bold text-4xl leading-[43px] lg:text-[64px] lg:leading-[80px] !text-offBlack w-full max-w-4xl tracking-tight revealType">
              Who are we?
            </h2>
            </section>
            </div>
        </main>
     );
}
 
export default About;