import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp w-full mx-auto" data-wow-delay=".15s">
        <div className="mx-auto md:mb-10 mb-2 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        
        </div>
        <h3 className="text-center mb-5 font-bold text-black dark:text-white md:text-md text-xs">
          {title}
        </h3>
        {/* <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p> */}
      </div>
    </div>
  );
};

export default SingleFeature;
