import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Gallery = ({ galleries }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {galleries.map((gallery) => (
          <Grid item xs={6} md={3} style={{ display: "flex" }}>
            <Card
              style={{
                margin: 15,
                width: 345,
                display: "flex",
                flexDirection: "column",
              }}
            >
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
              <CardActions className="button-wrapper">
                {/* <Link to={`/viewtrip/${trip._id}`}> */}
                {/* <Route path="/" element={<Home />} /> */}
                <Link to={`/${gallery.page}`}>
                  <Button size="small" className="button">
                    See More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
        ;
      </Grid>
    </Box>
  );
};

export default Gallery;
