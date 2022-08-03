import Washington1 from "../assets/Washington/washington-1.JPG";
import Washington2 from "../assets/Washington/washington-2.JPG";
import Washington3 from "../assets/Washington/washington-3.JPG";

const Washington = () => {
  return (
    <>
      <h1>Washington State</h1>
      <h2>June 2022</h2>
      <div className="gallery">
        <img src={Washington1} alt="Japanese Gardens in Seattle"></img>
        <p>Japanese Gardens in Seattle</p>
        <img
          src={Washington2}
          alt="Hurricane Ridge hike, Olympic National Park"
        ></img>
        <p>Hurricane Ridge hike, Olympic National Park</p>
        <img src={Washington3} alt="Olympic National Park"></img>
        <p>Olympic National Park</p>
      </div>
    </>
  );
};

export default Washington;
