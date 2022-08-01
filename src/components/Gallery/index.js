import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Iceland from "../../pages/Iceland";

const Gallery = ({ galleries }) => {
  return galleries.map((gallery) => (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={gallery.image}
          alt={gallery.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {gallery.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {gallery.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Link to={`/viewtrip/${trip._id}`}> */}
        {/* <Route path="/" element={<Home />} /> */}
        <Link to={`/${gallery.title}`}>
          <Button size="small">See More</Button>
        </Link>
      </CardActions>
    </Card>
  ));
};

export default Gallery;
