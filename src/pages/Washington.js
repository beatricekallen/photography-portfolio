import Washington1 from "../assets/Washington/washington-1.JPG";
import Washington2 from "../assets/Washington/washington-2.JPG";
import Washington3 from "../assets/Washington/washington-3.JPG";

const Washington = () => {
  return (
    <div className="gallery">
      <img src={Washington1} alt="Iceland"></img>
      <p>Japanese Gardens in Seattle</p>
      <img src={Washington2} alt="Iceland"></img>
      <p>Hurricane Ridge hike, Olympic National Park</p>
      <img src={Washington3} alt="Iceland"></img>
      <p>Olympic National Park</p>
    </div>
  );
};

export default Washington;
