import { pricingPlans } from "../../utils/pricing-plan";
import Button from "../shared/Button";

const Pricing = () => {
  return (
    <div className="max-container flex flex-col text-center w-full">
      <h2 className="text-heading-1 text-4xl font-semibold">Pricing</h2>
      <p className="text-lg font-normal text-heading-3 mt-2 mb-8">
        Choose the plan that's right for your business.
      </p>
      <div className="flex flex-1 md:flex-row md:justify-between flex-col gap-8 mx-12">
        {pricingPlans.map(({ title, price, features, bestValue }) => (
          <div className="flex relative flex-col gap-4 border-4 border-blue-500 rounded-3xl px-6 py-8 flex-1 text-start">
            {bestValue ? (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 bg-gradient-to-r from-blue-600 to-violet-600 whitespace-nowrap rounded-full p-2">
                Best Value
              </div>
            ) : null}
            <h2 className="text-heading-1 font-semibold text-2xl">{title}</h2>
            <h2 className="text-heading-1 font-bold text-4xl">{price}</h2>
            {features.map((feature, _) => (
              <p className="text-heading-3">✅ {feature}</p>
            ))}
            <div className="my-2" />
            <Button label="Choose Plan" wrapperStyle="mt-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
