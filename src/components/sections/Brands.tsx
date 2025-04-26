const Brands = () => {
  const logos = ["discord", "openai", "paypal", "slack", "spotify", "youtube"];
  return (
    <div className="max-container">
      <div className="text-center">
        <div className="text-heading-1 font-semibold text-4xl mb-6">
          Trusted by industry leaders
        </div>
        <div className="flex flex-row justify-center flex-wrap lg:gap-4 gap-2 px-5">
          {logos.map((logo, _) => (
            <div className="border rounded-xl p-6  duration-300 grayscale-100 hover:grayscale-0">
              <img
                src={`src/assets/logos/${logo}.png`}
                width="100"
                height="60"
                className="h-9 w-auto duration-200 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
