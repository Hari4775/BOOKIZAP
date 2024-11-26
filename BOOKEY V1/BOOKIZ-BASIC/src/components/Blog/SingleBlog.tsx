import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;
  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link
          href="/blog-details"
          className="relative block aspect-[37/22] w-full"
        >
          
          <Image  src={image} alt="image" fill />
        </Link>
        <div className="  py-5  w-full">
          <h3>
            <Link
              href="/blog-details"
              className=" text-center mb-4 block text-xs md:text-sm font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary "
            >
              {title}
            </Link>
          </h3>
          <div className="flex justify-center">
            <div className="w-8/12 md:w-6/12 text-center inline-flex items-center justify-center rounded-full bg-primary py-2 text-xs md:text-sm font-semibold capitalize text-white">
            <Link
              href="/contact">Book Now</Link> 
            </div>
          </div>
          {/* <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p> */}
          {/* <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={author.image} alt="author" fill />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {author.name}
                </h4>
                <p className="text-xs text-body-color">{author.designation}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color">{publishDate}</p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
