import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/user/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
