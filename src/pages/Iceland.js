import Iceland1 from "../assets/Iceland/iceland-1.JPG";
import Iceland2 from "../assets/Iceland/iceland-2.JPG";
import Iceland3 from "../assets/Iceland/iceland-3.JPG";
import Iceland4 from "../assets/Iceland/iceland-4.JPG";
import Iceland5 from "../assets/Iceland/iceland-5.jpg";
import Iceland6 from "../assets/Iceland/iceland-6.jpg";

const Iceland = () => {
  return (
    <>
      <h1>Iceland</h1>
      <h2>August and September 2021</h2>
      <div className="gallery">
        <img src={Iceland1} alt="Reynisfjara Beach"></img>
        <p>Reynisfjara Beach</p>
        <img src={Iceland2} alt="Stuðlagil Canyon"></img>
        <p>Stuðlagil Canyon</p>
        <img src={Iceland3} alt="Húsavík"></img>
        <p>Húsavík</p>
        <img src={Iceland4} alt="Hverir"></img>
        <p>Hverir</p>
        <img src={Iceland5} alt="Dimmuborgir"></img>
        <p>Dimmuborgir</p>
        <img src={Iceland6} alt="Thingvellir National Park"></img>
        <p>Thingvellir National Park</p>
      </div>
    </>
  );
};

export default Iceland;
