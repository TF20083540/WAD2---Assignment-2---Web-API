import React, { useEffect, useState } from 'react';
import { getSearchMoviesResults } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from "../components/cardIcons/addToFavourites";
//import searchBar from "../components/searchBar";

const SearchMoviesPage = (props) => {

  const [searched, setSearched] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState();

  //const movies = null;
  

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const GetSearchData = async () => { //Unnecessary in the end.



    /*
    console.log("Movie Data here next? ");
    movies = data.results;
    console.log(movies);
*/

  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // handle search logic here
    //console.log(`Searching for ${searchTerm}...`);
    //console.log(movies);

    let data  = await getSearchMoviesResults(searchTerm);
    setMovies(data.results);
    
    //console.log(movies);
      setSearched(true);
    //console.log("Testy 3 "+movies)

    //GetSearchData()
    //console.log("End datamine");

  }



  return (
    <>

    <form onSubmit={handleSubmit} style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}}>
      <input type="text" value={searchTerm} style={{
        height:"50px", width:"300px", fontSize:"22px"
        }} onChange={handleChange} />
      <button type="submit" style={{
        height:"50px", width:"100px"
        }}>Search</button>
    </form>


    {searched ?     <PageTemplate
      title="Search Results"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
      : <p style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:"22px"
    }}>Please search for content</p>
    }

    </>
  );
};
export default SearchMoviesPage;