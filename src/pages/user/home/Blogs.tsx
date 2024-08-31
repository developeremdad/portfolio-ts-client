import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fastForward from "../../../assets/icons/fast-forward.gif";
import EmptyData from "../../../component/EmptyData";
import Spinner from "../../../component/Spinner";

export interface TBlog {
  _id: string;
  title: string;
  content: string;
  date: Date;
}

const Blogs = ({ id }: { id: string }) => {
  const [blogs, setBlogs] = useState<TBlog[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_SERVER_URL}/get-blogs`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data?.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div id={id}>
      <section id="blog" className="mb-20">
        <div className="container mx-auto text-4xl font-bold text-center mb-10 mt-32">
          <Link to="/blogs">
            <span className="bg-gradient-to-r from-purple-500 to-blue-300 bg-clip-text text-transparent">
              Latest Articles
            </span>
          </Link>
        </div>
        {!isLoading ? (
          <motion.div
            className="lg:w-10/12 container mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {blogs?.slice(0, 4)?.map((blog, index) => (
              <motion.div
                key={index}
                className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border duration-300 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-2 capitalize">
                  {blog?.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {new Date(blog?.date)?.toLocaleDateString()}
                </p>
                <div
                  className="text-gray-700 mb-8 line-clamp-3 prose"
                  dangerouslySetInnerHTML={{ __html: blog?.content }}
                ></div>
                <div className="text-end absolute bottom-3 right-4">
                  <Link
                    to={`/blog-details/${blog?._id}`}
                    className="text-green-500 hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <Spinner />
        )}

        {!blogs?.length && !isLoading && <EmptyData />}
        <Link to="/blogs">
          <motion.div
            className="mt-10 text-2xl font-bold flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-purple-500 hover:text-purple-700 hover:cursor-pointer">
              Explore Blogs
            </span>
            <motion.img
              src={fastForward}
              className="h-6 ml-2"
              alt="icon"
              initial={{ x: 10 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </Link>
      </section>
    </div>
  );
};

export default Blogs;
