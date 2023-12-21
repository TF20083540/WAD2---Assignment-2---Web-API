import React, {useContext} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MovieIcon from '@mui/icons-material/Theaters';
import StarRateIcon from "@mui/icons-material/StarRate";
//import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import {MoviesContext} from "../../contexts/moviesContext";

export default function MovieCard({movie, action}) {
  const { favorites, addToFavorites } = useContext(MoviesContext);
  const { mustWatches, addToMustWatches} = useContext(MoviesContext);

  if (favorites.find((id) => id === movie.id)) {
    movie.favorite = true;
  } else {
    movie.favorite = false
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
    addToFavorites(movie);
  };

  const handleAddToMustWatches = (e) => {
    e.preventDefault();
    addToMustWatches(movie);
  };

  return (
    <Card sx={{ maxWidth: 300, maxHeight: 600, backgroundColor: "grey"}}>
      <CardHeader
        avatar={
          movie.favorite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 300 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container spacing={1} >
          <Grid item xs={6} >
            <Grid item xs={6} >
              <MovieIcon fontSize="small" />
               {movie.release_date} {" "}
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid item xs={6}>
              <StarRateIcon fontSize="small" variant="h6"/>
              {"  "} {movie.vote_average}              
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(movie)}
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary" sx={{
        color: "rgb(255, 255, 255)",
        border: "2px solid #ffffff"

      }}>
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}