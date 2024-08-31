import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../component/shared/Footer";
import Navbar from "../component/shared/Navbar";
import Spinner from "../component/Spinner";

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
    fetch(`${import.meta.env.VITE_SERVER_URL}/get-blogs/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setBlog(data?.data);
      });
  }, [id]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="my-5 px-5 py-5 min-h-screen ">
        <div className="container border mx-auto p-4 shadow-lg rounded-lg max-w-3xl">
          {!isLoading ? (
            <div>
              <h1 className="text-2xl font-bold mb-3 capitalize">
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
