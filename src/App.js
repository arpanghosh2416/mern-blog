import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticlesList from "./pages/ArticlesList";
import NotFound from "./pages/NotFound";
//Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
    <div className="max-w-screen-md pt-20 mx-auto">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles-list" element={<ArticlesList />} />
      <Route path="/article/:name" element={<Article />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={< NotFound/>} />
      </Routes>
    </div>
    </Router>
  )};
export default App;