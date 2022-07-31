import Carousel from "react-material-ui-carousel";
import Item from "../Item";
import Photo1 from "../../assets/photo-1.JPG";
import Photo2 from "../../assets/photo-2.JPG";

const PhotoCarousel = () => {
  var items = [
    {
      name: "Cacti",
      description: "Super cactus-y",
      photo: Photo1,
    },
    {
      name: "Leafs",
      description: "Super leafy",
      photo: Photo2,
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
