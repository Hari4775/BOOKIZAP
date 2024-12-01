import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark md:text-2xl text-lg py-5"
    >
      <div className="container pb-5">
        <SectionTitle
          title="Book your workers with BookiZap"
          paragraph="Simply Choose the Workers, and click  'Book Now' to get started effortlessly!"
          center
        />

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:gap-x-8 mt-5">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
