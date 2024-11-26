const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center

}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
 
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width}}
      >
        <h2 className="mb-4  font-bold !leading-tight text-black dark:text-white md:text-2xl text-lg">
          {title}
        </h2>
        <p className=" !leading-relaxed text-body-color md:text-lg text-xs">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
