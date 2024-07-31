import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AllBlogs from "./pages/AllBlogs";
import BlogDetails from "./pages/BlogDetails";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";
import Home from "./pages/user/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project-details/:id" element={<ProjectDetails />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
