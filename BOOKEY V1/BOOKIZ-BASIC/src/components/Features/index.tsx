import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className=" md:py-20 py-3">
        <div className="container pb-2 md:pb-20 ">
          <SectionTitle 
            title="Main Features"
            paragraph=""
            center
          />

          <div className="grid grid-cols-3 gap-x-8  md:grid-cols-2 lg:grid-cols-6">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
