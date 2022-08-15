import Header from "./components/Header";
// import Carousel from "./components/PhotoCarousel";
import Gallery from "./components/Gallery";
import IcelandPhoto from "../src/assets/Iceland/iceland-img.JPG";
import SCPhoto from "../src/assets/SouthCarolina/sc-img.JPG";
import SeattlePhoto from "../src/assets/Washington/seattle-img.JPG";
import DGPhoto from "../src/assets/DukeGardens/duke-gardens-img.JPG";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Iceland from "./pages/Iceland";
import Washington from "./pages/Washington";
import SouthCarolina from "./pages/SouthCarolina";
import DukeGardens from "./pages/DukeGardens";
import OuterBanks from "./pages/OuterBanks";
import Italy from "./pages/Italy";
import OBXPhoto from "../src/assets/OuterBanks/obx-1.tif";
import ItalyPhoto from "../src/assets/Italy/italy-1.jpeg";
import About from "./components/About";
import Home from "../src/pages/Home";
import "./App.css";

function App() {
  const galleries = [
    {
      id: 1,
      page: "Iceland",
      title: "Iceland",
      image: IcelandPhoto,
      alt: "Iceland",
      description: "August and September 2021",
    },
    {
      id: 2,
      page: "SouthCarolina",
      title: "South Carolina",
      image: SCPhoto,
      alt: "South Carolina",
      description: "November 2021",
    },
    {
      id: 3,
      page: "DukeGardens",
      title: "Duke Gardens",
      image: DGPhoto,
      alt: "Duke Gardens",
      description: "Spring 2022",
    },
    {
      id: 4,
      page: "Washington",
      title: "Washington State",
      image: SeattlePhoto,
      alt: "Washington State",
      description: "June 2022",
    },
    {
      id: 5,
      page: "OuterBanks",
      title: "Outer Banks",
      image: OBXPhoto,
      alt: "Outer Banks",
      description: "November 2020 and June 2021",
    },
    {
      id: 6,
      page: "Italy",
      title: "Italy",
      image: ItalyPhoto,
      alt: "Italy Banks",
      description: "October and November 2019",
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
          <Route path="/Washington" element={<Washington />} />
          <Route path="/SouthCarolina" element={<SouthCarolina />} />
          <Route path="/DukeGardens" element={<DukeGardens />} />
          <Route path="/OuterBanks" element={<OuterBanks />} />
          <Route path="/Italy" element={<Italy />} />
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
