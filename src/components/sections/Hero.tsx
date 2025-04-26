import Button from "../shared/Button";

const Hero = () => {
  const gridData = [
    { value: "100+", title: "Ai Models Implemented" },
    { value: "250+", title: "Enterprise clients" },
    { value: "99.9%", title: "Uptime Guarantee" },
    { value: "10+", title: "Years of innovation" },
  ];

  return (
    <div className="max-container">
      <div
        className="flex lg:flex-row flex-col lg:text-start lg:justify-start text-center 
                    justify-center w-full  px-4 my-24 lg:gap-12 gap-10"
      >
        {/* LEFT SECTION */}
        <div className="flex flex-col justify-between  lg:items-start items-center lg:w-1/2 gap-6">
          {/* heading */}
          <div className="text-heading-1 sm:text-3xl md:text-4xl lg:text-6xl font-bold w-full text-shadow-lg">
            Empower Your Business
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent ml-2">
              with AI
            </span>
          </div>
          {/* content */}
          <div className="text-heading-3 md:text-lg text-shadow-xs">
            Our AI SaaS platform seamlessly integrates with your existing
            workflows to deliver real-time insights, intelligent automation, and
            data-driven decision-making. Experience a future where your business
            runs smarter, faster, and more efficiently.
          </div>
          {/* email field */}
          <form
            action="#"
            className="flex flex-row max-w-md gap-3 items-center border border-box-border rounded-4xl pl-6 pr-1 py-1 shadow-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-7 h-7 shrink-0"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 
                0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 
                2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 
                2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
              ></path>
            </svg>
            <div className="h-[60%] w-0.25 bg-black" />
            <input
              className="border-none rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none"
              id="username"
              type="text"
              placeholder="johndoe@gmail.com"
            />
            <Button label="Get Started" />
          </form>
        </div>

        {/* IMAGE */}
        <div className="flex flex-1 lg:w-1/2 lg:h-auto max-w-3xl max-lg:self-center">
          <img
            alt="person wearing VR headset"
            width={2350}
            height={2359}
            className="rounded-3xl object-cover"
            src="https://images.pexels.com/photos/7773731/pexels-photo-7773731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
      </div>

      {/* metrics grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 md:w-2xl sm:w-xl max-sm:w-md lg:divide-x border mx-auto max-w-5xl rounded-3xl text-center py-6 shadow-xl">
        {gridData.map(({ title, value }, _) => (
          <div className="flex flex-col gap-2 items-center">
            <div className="font-bold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {value}
            </div>
            <div className="font-medium text-sm text-heading-1">{title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
