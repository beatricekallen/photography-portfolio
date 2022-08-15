import Italy1 from "../../src/assets/Italy/italy-1.jpeg";
import Italy2 from "../../src/assets/Italy/italy-2.jpeg";
import Italy3 from "../../src/assets/Italy/italy-3.jpeg";
import Italy4 from "../../src/assets/Italy/italy-4.jpeg";
import Italy5 from "../../src/assets/Italy/italy-5.jpeg";
import Italy6 from "../../src/assets/Italy/italy-6.jpeg";
import Italy7 from "../../src/assets/Italy/italy-7.jpeg";
import Italy8 from "../../src/assets/Italy/italy-8.jpeg";

const Italy = () => {
  return (
    <div className="gallery">
      <h1>Italy</h1>
      <img src={Italy1} alt="Bellagio"></img>
      <p>Bellagio</p>
      <img src={Italy2} alt="Lake Como"></img>
      <p>Lake Como</p>
      <img src={Italy3} alt="Manarola"></img>
      <p>Manarola in Cinque Terre</p>
      <img src={Italy4} alt="Florence"></img>
      <p>Florence</p>
      <img src={Italy5} alt="Tuscany"></img>
      <p>Tuscany</p>
      <img src={Italy6} alt="Ponte Vecchio"></img>
      <p>Ponte Vecchio in Florence</p>
      <img src={Italy7} alt="Siena Cathedral"></img>
      <p>Siena Cathedral</p>
      <img src={Italy8} alt="Tuscany"></img>
      <p>Tuscany</p>
    </div>
  );
};

export default Italy;
