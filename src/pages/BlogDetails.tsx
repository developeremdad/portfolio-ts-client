import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../component/shared/Navbar";
import Spinner from "../component/Spinner";
import Footer from "../component/shared/Footer";

interface TBlog {
  _id: string;
  title: string;
  content: string;
  date: string;
}

const BlogDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [blog, setBlog] = useState<TBlog>();

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/get-blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setBlog(data?.data);
      });
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="my-5 px-5 h-screen">
        <div className="container border mx-auto p-4 bg-white shadow-lg rounded-lg max-w-3xl">
          {!isLoading ? (
            <div>
              <h1 className="text-3xl font-bold mb-3 capitalize">
                {blog?.title}
              </h1>
              <p className="text-gray-500 mb-3">
                {new Date(blog?.date || "").toLocaleDateString()}
              </p>
              <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
              ></div>
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
