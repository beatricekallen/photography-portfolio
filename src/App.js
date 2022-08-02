import Header from "./components/Header";
import Carousel from "./components/PhotoCarousel";
import Gallery from "./components/Gallery";
import IcelandPhoto from "../src/assets/iceland-img.JPG";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Iceland from "./pages/Iceland";
import About from "./components/About";
import Home from "../src/pages/Home";
import "./App.css";

function App() {
  const galleries = [
    {
      id: 1,
      title: "Iceland",
      image: IcelandPhoto,
      alt: "Iceland",
      description: "August and September 2021",
    },
  ];

  const [currentPage, handlePageChange] = useState("About");

  return (
    <div className="App">
      <Router>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Iceland" element={<Iceland />} />
          <Route
            path="/portfolio"
            element={<Gallery galleries={galleries} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
