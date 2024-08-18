import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/shared/Footer";
import Navbar from "../component/shared/Navbar";
export interface TBlog {
  _id: string;
  title: string;
  content: string;
  date: Date;
}

const AllBlogs = () => {
  const [blogs, setBlogs] = useState<TBlog[]>([]);

  useEffect(() => {
    fetch(`http://localhost:5000/get-blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data?.data));
  }, []);
  return (
    <div>
      <Navbar />
      <div id="blog" className="my-10">
        <div className="container mx-auto text-4xl font-bold text-center mb-6 ">
          <span className="bg-gradient-to-r from-purple-500 to-blue-300 bg-clip-text text-transparent">
            Latest Articles
          </span>
        </div>
        <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {blogs?.map((blog, index) => (
            <div
              key={index}
              className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border duration-300 relative"
            >
              <h3 className="text-2xl font-bold mb-2 capitalize">
                {blog?.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {new Date(blog?.date)?.toLocaleDateString()}
              </p>
              <div
                className="text-gray-700 mb-8 line-clamp-2 prose"
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
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllBlogs;