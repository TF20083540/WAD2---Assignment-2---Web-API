import React, { useState } from "react";
import { login, signup } from "../api/movies-api";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [mustWatches, setMustWatches] = useState([])
  const [myReviews, setMyReviews] = useState( {} );
  const [tvFavorites, setTVFavorites] = useState([])

  //Trying some stuff, remove if not working
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [userName, setUserName] = useState("");

  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  const authenticate = async (username, password) => {
    const result = await login(username, password);
    console.log("Authenticate");
    console.log(result);
    if (result.token) {
      setToken(result.token)
      setIsAuthenticated(true);
      setUserName(username);
    }
  };

  const register = async (username, password) => {
    const result = await signup(username, password);
    console.log(result.code);
    return (result.code == 201) ? true : false;
  };

  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
  }
  //End test code

  //tv favourites code
  const addToTVFavorites = (tvShow) => {
    let newTVFavorites = [];
    if (!tvFavorites.includes(tvShow.id)){
      newTVFavorites = [...tvFavorites, tvShow.id];
    }
    else{
      newTVFavorites = [...tvFavorites];
    }

    setTVFavorites(newTVFavorites);


  };

  const removeFromTVFavorites = (tvShow) => {
    setTVFavorites( tvFavorites.filter(
      (mId) => mId !== tvShow.id,

    ) )
  };


  //end tvFavourites code

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

  //New - Week 07 - E04
  const addToMustWatches = (movie) => {
    let newMustWatches = [];
    if(!mustWatches.includes(movie.id)){
      newMustWatches = [...mustWatches, movie.id];
    }
    else{
      newMustWatches = [...mustWatches]
    }
    setMustWatches(newMustWatches)

     //This little block is there to show mustWatch array.
    //The reason for the spam is to make it easy to see.
    /*
    console.log("PINGPINGPINGPINGPINGPING");
    console.log("PINGPINGPINGPINGPINGPING");
    console.log("PINGPINGPINGPINGPINGPING");
    console.log("PINGPINGPINGPINGPINGPING");
    */

    //console.log(newMustWatches);
    //console.log("========================");
    
  };



  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  //console.log(myReviews);
  
  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  //New - Week 07 - E04
  const removeFromMustWatches = (movie) => {
    setMustWatches( mustWatches.filter(
      (mId) => mId !== movie.id
    ) )
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        mustWatches,
        tvFavorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        //New
        addToMustWatches,
        removeFromMustWatches,
        addToTVFavorites,
        removeFromTVFavorites,

        //Test
        isAuthenticated,
        authenticate,
        register,
        signout,
        userName

      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;