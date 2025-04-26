import { JSX } from "react";
import ServicesCard from "../cards/ServicesCard";

const AboutSVG = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="w-4 h-4 sm:w-5 sm:h-5"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
    ></path>
  </svg>
);

const About = () => {
  return (
    <div className="max-container flex flex-col lg:flex-row items-center justify-center gap-12 p-8">
      <div className="lg:flex-1 shadow-md lg:h-100 h-120 w-full rounded-4xl">
        <img
          src="https://images.pexels.com/photos/8728381/pexels-photo-8728381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="object-cover rounded-4xl h-full w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="text-heading-1 font-semibold text-4xl">
          About Our AI Solution
        </h2>
        <p className="text-heading-3 text-lg my-1">
          We are on a mission to empower businesses with transformative AI
          technology. Our team of experts combines industry‑leading research
          with innovative algorithms to deliver a platform that adapts to your
          unique needs. Join us and lead the digital revolution in your
          industry.
        </p>
        <div className="flex md:flex-row flex-col">
          <ServicesCard
            heading="Mission"
            content="Our mission is to use AI for the good of humanity and the planet."
            wrapperStyle="flex-1"
            svg={<AboutSVG />}
          />
          <ServicesCard
            heading="Vision"
            content="Our vision is to drive business innovation and growth."
            wrapperStyle="flex-1"
            svg={<AboutSVG />}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
