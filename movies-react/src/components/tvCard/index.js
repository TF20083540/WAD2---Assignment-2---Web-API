import React, {useContext} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TVIcon from '@mui/icons-material/Tv';
import StarRateIcon from "@mui/icons-material/StarRate";
//import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import {MoviesContext} from "../../contexts/moviesContext";

export default function TVCard({tvShow, action}) {
  const { favorites, addToFavorites } = useContext(MoviesContext);
  const { mustWatches, addToMustWatches} = useContext(MoviesContext);

  if (favorites.find((id) => id === tvShow.id)) {
    tvShow.favorite = true;
  } else {
    tvShow.favorite = false
  }

  /*Test Code
  if (mustWatches.find((id) => id === movie.id)) {
    movie.mustWatch = true;
  } else {
    movie.mustWatch = false
  }
  */
 
  const handleAddToFavorite = (e) => {
    e.preventDefault();
    addToFavorites(tvShow);
  };

  const handleAddToMustWatches = (e) => {
    e.preventDefault();
    addToMustWatches(tvShow);
  };

  return (
    <Card sx={{ maxWidth: 350, maxHeight: 600, backgroundColor: "grey" }}>
      <CardHeader
        avatar={
          tvShow.favorite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {tvShow.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 300 }}
        image={
          tvShow.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Grid item xs={6}>
              <TVIcon fontSize="small" />
              {tvShow.first_air_date}              
            </Grid>
           </Grid>       
           <Grid item xs={6}>
            <Grid item xs={6}>
              <StarRateIcon fontSize="small"  variant="h6" />
              {"  "} {tvShow.vote_average}{" "}              
            </Grid>
          </Grid>

        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(tvShow)}
        <Link to={`/tv/${tvShow.id}`}>
          <Button variant="outlined" size="medium" color="primary" sx={{color: "rgb(255, 255, 255)", border: "2px solid #ffffff"}}>
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}