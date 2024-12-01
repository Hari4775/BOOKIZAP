import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className=" md:py-20 py-3">
        <div className="container py-2 md:pb-20 ">
          <SectionTitle 
            title="Main Features"
            paragraph=""
            center
            
          />

          <div className=" w-11/12 mx-auto grid grid-cols-3 pt-5  md:grid-cols-6">
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
