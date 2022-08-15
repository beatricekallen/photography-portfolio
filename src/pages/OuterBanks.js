import OBX1 from "../../src/assets/OuterBanks/obx-1.tif";
import OBX2 from "../../src/assets/OuterBanks/obx-2.tif";
import OBX3 from "../../src/assets/OuterBanks/obx-3.jpeg";
import OBX4 from "../../src/assets/OuterBanks/obx-4.JPG";
import OBX5 from "../../src/assets/OuterBanks/obx-5.JPG";
import OBX6 from "../../src/assets/OuterBanks/obx-6.JPG";
import OBX7 from "../../src/assets/OuterBanks/obx-7.JPG";
import OBX8 from "../../src/assets/OuterBanks/obx-8.JPG";
import OBX9 from "../../src/assets/OuterBanks/obx-9.JPG";

const OuterBanks = () => {
  return (
    <div className="gallery">
      <h1>Outer Banks</h1>
      <img src={OBX1} alt="Kitty Hawk at sunset"></img>
      <p>Kitty Hawk at sunset</p>
      <img src={OBX2} alt="Kitty Hawk pier"></img>
      <p>Kitty Hawk pier</p>
      <img src={OBX3} alt="Seagulls"></img>
      <p>Seagulls on the beach at Kitty Hawk</p>
      <img src={OBX4} alt="Pea Island path"></img>
      <p>Pea Island trail</p>
      <img src={OBX5} alt="Pea Island"></img>
      <p>Pea Island</p>
      <img src={OBX6} alt="Pea Island"></img>
      <p>Pea Island</p>
      <img src={OBX7} alt="Pea Island"></img>
      <p>Pea Island</p>
      <img src={OBX8} alt="Bodie Island Light Station"></img>
      <p>Bodie Island Light Station</p>
      <img src={OBX9} alt="Pea Island"></img>
      <p>Pea Island</p>
    </div>
  );
};

export default OuterBanks;
