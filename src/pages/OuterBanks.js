import DG1 from "../../src/assets/DukeGardens/dg-1.JPG";
import DG2 from "../../src/assets/DukeGardens/dg-2.JPG";
import DG3 from "../../src/assets/DukeGardens/dg-3.JPG";
import DG4 from "../../src/assets/DukeGardens/dg-4.JPG";
import DG5 from "../../src/assets/DukeGardens/dg-5.JPG";
import DG6 from "../../src/assets/DukeGardens/dg-6.JPG";

const DukeGardens = () => {
  return (
    <div className="gallery">
      <h1>Duke Gardens</h1>
      <img src={DG1} alt="Flowers"></img>
      <p></p>
      <img src={DG2} alt="Flowers with a bee"></img>
      <p></p>
      <img src={DG3} alt="Leafs with dew"></img>
      <p></p>
      <img src={DG4} alt="Cacti"></img>
      <p></p>
      <img src={DG5} alt="Pink roses"></img>
      <p></p>
      <img src={DG6} alt="Flowers"></img>
      <p></p>
    </div>
  );
};

export default DukeGardens;
