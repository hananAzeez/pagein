const Hero = () => {
  return (
    <section className="mx-auto  bg-offWhite h-screen py-8">
      <div className="max-w-7xl mx-auto">
        <header className="w-full px-10 py-4 flex justify-between items-center bg-white rounded-xl">
          <div className="nav-links menu-links flex items-center gap-8">
            <p>Works</p>
            <p>Services</p>
          </div>
          <h1 className="text-black text-3xl font-bold">Pagein</h1>
          <div className="nav-links menu-links flex items-center gap-8">
            <p>About</p>
            <p>Contact</p>
          </div>
        </header>
        <h1 className="hero-title my-14">
          We Make Amazing <br />
          Web Solutions
        </h1>

        <div className="grid grid-cols-3 gap-5 h-96">
          <div className="h-full col-span-2 bg-primary rounded-3xl"></div>
          <div className="h-full w-full bg-black rounded-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
