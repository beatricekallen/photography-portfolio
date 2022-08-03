import { Paper, Button } from "@mui/material";
import { convertLength } from "@mui/material/styles/cssUtils";

const Item = (props) => {
  return (
    <Paper
      style={{
        background: `url(${props.item.photo})`,
        height: 400,
        backgroundSize: "cover",
        backgroundPosition: "60%",
      }}
    >
      {/* <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button> */}
    </Paper>
  );
};

export default Item;
