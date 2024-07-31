import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fastForward from "../../../assets/icons/fast-forward.gif";
export interface TBlog {
  _id: string;
  title: string;
  content: string;
  date: Date;
}

const Blogs = ({ id }: { id: string }) => {
  const [blogs, setBlogs] = useState<TBlog[]>([]);

  useEffect(() => {
    fetch(`http://localhost:5000/get-blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data?.data));
  }, []);
  return (
    <div id={id}>
      <section id="blog" className="py-16">
        <div className="container mx-auto text-4xl font-bold text-center mb-6 mt-32">
          <span className="bg-gradient-to-r from-purple-500 to-blue-300 bg-clip-text text-transparent">
            Latest Articles
          </span>
        </div>
        <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {blogs?.slice(0, 3)?.map((blog, index) => (
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
        <Link to="/blogs">
          <div className="mt-8 text-2xl font-bold flex items-center justify-center">
            <span className="text-purple-500 hover:text-purple-700 hover:cursor-pointer">
              Explore Blogs
            </span>
            <img src={fastForward} className="h-6 ml-2" alt="icon" />
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Blogs;
