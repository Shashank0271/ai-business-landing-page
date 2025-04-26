import Button from "../shared/Button";

const Quickstart = () => {
  return (
    <div className="max-container pb-20">
      <div className="max-w-xl flex flex-col items-center">
        <h1 className="text-heading-1 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
          Quick Start you{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
            own AI
          </span>{" "}
          Business
        </h1>
        <p className="text-lg text-heading-3 text-center my-8">
          Leverage our AI-powered platform to revolutionize your digital
          marketing efforts. Get data-driven insights and automation at your
          fingertips.
        </p>
        <Button label="Get In Touch" wrapperStyle="max-w-min" />
      </div>
    </div>
  );
};

export default Quickstart;
