  export const getMovies = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/', {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    console.log("API Reponse right")
    console.log(response);
    return response.json();
  };
  
  export const getMovie = (args) => {
    console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `http://localhost:8080/api/movies/${id}`
    ).then((response) => {
      if (!response.ok) {
        console.log("API function response");
        throw new Error(response.json().message);
      }

      return response.json();
    })
    .catch((error) => {
      throw error
  });
  };
  
  export const getGenres = async () => {
    return fetch(
      `http://localhost:8080/api/movies/tmdb/genres/`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getMovieImages = ({ queryKey }) => {
    console.log("getMovieImages");
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `http://localhost:8080/api/movies/tmdb/movieimages/${id}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };

  

  export const getMovieReviews = (id) => {
    return fetch(
      `http://localhost:8080/api/movies/tmdb/moviereviews/${id}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };

  export const getUpcomingMovies = () => {
    return fetch(
      `http://localhost:8080/api/movies/tmdb/upcoming/`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };

  //Assignment
  export const getPopularMovies = () => {
    return fetch(
      `http://localhost:8080/api/movies/tmdb/popular/`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };

  export const getAllTimeHighestRatedMovies = () => {
    return fetch(
      `http://localhost:8080/api/movies/tmdb/alltimegreatest`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };


  export const getTVShows = async () => {
    const response = await fetch(
      `http://localhost:8080/api/television`, {
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    }
    )
    console.log("API Reponse right")
    console.log(response);
    return response.json();
  };

  export const getTVShow = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `http://localhost:8080/api/television/${id}`    ).then((response) => {
      if (!response.ok) {
        throw new Error(`error retrieving tv show details ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const getTVImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `http://localhost:8080/api/television/tmdb/tvimages/${id}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };



  export const getTVCredits = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `http://localhost:8080/api/television/tmdb/tvcredits/${id}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const getMovieCredits = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `http://localhost:8080/api/movies/tmdb/moviecredits/${id}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const getSearchMoviesResults = (query) => {  
    return fetch(
      `http://localhost:8080/api/movies/tmdb/moviesearch/${query}`    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }    
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };

  export const getSearchTVResults = (query) => {  
    return fetch(
      `http://localhost:8080/api/television/tmdb/tvsearch/${query}`    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }    
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };

  export const getTVReviews = (id) => {
    return fetch(
      `http://localhost:8080/api/television/tmdb/tvreviews/${id}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };

  export const login = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    console.log("App tmdb-api login->");
    console.log(response);
    return response.json();
  };

  export const signup = async (username, password) => {
      const response = await fetch('http://localhost:8080/api/users?action=register', {
          headers: {
              'Content-Type': 'application/json'
          },
          method: 'post',
          body: JSON.stringify({ username: username, password: password })
      });
      console.log("Registration");
      return response.json();
  };