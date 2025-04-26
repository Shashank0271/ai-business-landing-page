import ServicesCard from "../cards/ServicesCard";

const Services = () => {
  const servicesCardJson = [
    {
      heading: "Intelligent Automation",
      content: "Streamline processes and reduce manual tasks.",
    },
    {
      heading: "Real‑Time Analytics",
      content: "Gain actionable insights as events unfold.",
    },
    {
      heading: "Predictive Insights",
      content: "Anticipate trends and mitigate risks before they occur.",
    },
  ];

  return (
    <div className="max-container flex flex-col items-center">
      <div className="text-heading-1 font-semibold text-4xl mb-4">
        Our AI Services
      </div>
      <div className="text-heading-3 md:text-xl max-w-3xl text-center">
        Unlock the potential of advanced machine learning, natural language
        processing, and predictive analytics. Our services include:
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full mt-8 gap-8 sm:gap-2">
        {servicesCardJson.map(({ content, heading }, _) => (
          <ServicesCard
            content={content}
            heading={heading}
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 my-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                ></path>
              </svg>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
