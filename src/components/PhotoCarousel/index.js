import Carousel from "react-material-ui-carousel";
import Item from "../Item";
// import Photo1 from "../../assets/Carousel/photo-1.JPG";
// import Photo2 from "../../assets/Carousel/photo-2.JPG";
import C1 from "../../assets/Carousel/C1.TIF";
import C2 from "../../assets/Carousel/C2.JPG";
import C3 from "../../assets/Carousel/C3.JPG";
import C4 from "../../assets/Carousel/C4.JPG";
import C5 from "../../assets/Carousel/C5.tif";
import C6 from "../../assets/Carousel/C6.JPG";
import C7 from "../../assets/Carousel/C7.JPG";
import C8 from "../../assets/Carousel/C8.JPG";

const PhotoCarousel = () => {
  var items = [
    // {
    //   name: "Cacti",
    //   description: "Super cactus-y",
    //   photo: Photo1,
    // },
    // {
    //   name: "Leafs",
    //   description: "Super leafy",
    //   photo: Photo2,
    // },
    {
      name: "Grasses",
      description: "Grasses",
      photo: C1,
    },
    {
      name: "Iceland coast",
      description: "Iceland coast",
      photo: C2,
    },
    {
      name: "Maple",
      description: "Maple",
      photo: C3,
    },
    {
      name: "Black and white trees",
      description: "Trees",
      photo: C4,
    },
    {
      name: "Beach",
      description: "Beach",
      photo: C5,
    },
    {
      name: "Iceland sunset",
      description: "Iceland sunset",
      photo: C6,
    },
    {
      name: "Boneyard beach",
      description: "Boneyard beach",
      photo: C7,
    },
    {
      name: "Airlie",
      description: "Airlie",
      photo: C8,
    },
  ];

  return (
    <div>
      <Carousel
      // className="carousel"
      // style={{
      //   height: 500px,
      // }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default PhotoCarousel;
