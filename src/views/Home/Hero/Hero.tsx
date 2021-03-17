const Hero = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-purple-500">
      <div className="container">
        <h1 className="flex flex-col">
          <span>Hi, my name is</span>
          <span>Ana! 🐈</span>
        </h1>
        <div>
          <h2>I solve problems with code.</h2>
        </div>
        <div>
          <p>
            I&apos;m a software engineer, with a bioinformatics background,
            based in Portugal.
          </p>
        </div>
        <div>
          <button>Contact me</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
