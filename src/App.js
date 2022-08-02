import Header from "./components/Header";
import Carousel from "./components/PhotoCarousel";
import Gallery from "./components/Gallery";
import IcelandPhoto from "../src/assets/iceland-img.JPG";
import SCPhoto from "../src/assets/sc-img.JPG";
import SeattlePhoto from "../src/assets/seattle-img.JPG";
import DGPhoto from "../src/assets/duke-gardens-img.JPG";
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
    {
      id: 2,
      title: "South Carolina",
      image: SCPhoto,
      alt: "South Carolina",
      description: "November 2021",
    },
    {
      id: 3,
      title: "Duke Gardens",
      image: DGPhoto,
      alt: "Duke Gardens",
      description: "Spring 2022",
    },
    {
      id: 4,
      title: "Seattle",
      image: SeattlePhoto,
      alt: "Seattle",
      description: "June 2022",
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
