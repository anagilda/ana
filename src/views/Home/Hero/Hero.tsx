const Hero = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-purple-darkest">
      <div className="container text-gray-300">
        <h1 className="flex flex-col">
          <span>Hi, my name is</span>
          <span className="text-3xl text-orange-400">Ana</span>
        </h1>
        <div>
          <h2 className="font-mono text-3xl">I solve problems with code.</h2>
        </div>
        <div className="text-gray-400">
          <p>
            I&apos;m a software engineer with a bioinformatics background, based
            in Portugal.
          </p>
        </div>
        <div>
          <button className="font-mono text-orange-400">Contact me</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
