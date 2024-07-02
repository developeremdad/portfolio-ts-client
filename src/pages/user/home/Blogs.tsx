const blogPosts = [
  {
    id: 1,
    title: "Understanding React Hooks",
    date: "June 20, 2024",
    description:
      "React hooks have revolutionized the way we manage state and side effects in functional components. Learn how to use them effectively.",
    link: "/blog/understanding-react-hooks",
  },
  {
    id: 2,
    title: "A Guide to TailwindCSS",
    date: "May 15, 2024",
    description:
      "TailwindCSS is a utility-first CSS framework for rapidly building custom designs. This guide covers the basics and advanced techniques.",
    link: "/blog/guide-to-tailwindcss",
  },
  {
    id: 3,
    title: "JavaScript ES6 Features",
    date: "April 10, 2024",
    description:
      "ES6 introduced many new features to JavaScript. This post explores some of the most useful additions, such as arrow functions and template literals.",
    link: "/blog/javascript-es6-features",
  },
];
const Blogs = () => {
  return (
    <div>
      <section id="blog" className="py-16">
        <div className="container mx-auto text-4xl font-bold text-center mb-6 mt-32">
          <span className="bg-gradient-to-r from-purple-500 to-blue-300 bg-clip-text text-transparent">
            Latest Articles
          </span>
        </div>
        <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white hover:bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.date}</p>
              <p className="text-gray-700 mb-6 line-clamp-3 text-justify">
                {post.description}
              </p>
              <div className="text-end">
                <a href={post.link} className="text-blue-500 hover:underline">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
