const Hero = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start justify-center min-h-screen">
      <div className="space-y-4 text-gray-300">
        <h1 className="flex flex-col">
          <span className="pb-4">Hi, my name is</span>
          <span className="text-2xl tracking-widest text-orange-400 md:text-4xl lg:text-5xl">
            Ana Rodrigues
          </span>
        </h1>
        <div>
          <h2 className="font-mono text-2xl md:text-4xl lg:text-5xl">
            I solve problems with code.
          </h2>
        </div>
        <div className="pt-4 text-gray-400">
          <p>
            I&apos;m a software engineer with a bioinformatics background, based
            in Portugal.
          </p>
        </div>
        <div>
          <button className="w-full px-4 mt-8 font-mono text-orange-400 rounded-sm sm:w-auto h-11 ring-1 ring-orange-400 ring-opacity-50">
            Contact me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
