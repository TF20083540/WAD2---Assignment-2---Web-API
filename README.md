# Assignment 2 - Web API.

Name: Thomas Farrell
Student Number: 20083540

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + Feature 1 
 + Feature 2 
 + Feature 3 
 + etc

## Setup requirements.

1) Run two terminals and cd into each "movies-react" and "movies-api" folders.
2) Use "npm run dev" or "npm start" in the "movies-api" folder terminal window first.
3) Once api is running, use "npm start" in the "movies-react" folder.
4) Your default internet browser will open a new window, or a new tab if one is already open, and auto focus the window for you.
5) Enjoy!


## API Configuration
______________________
movies-api/.env{
NODEENV=development
PORT=8080
HOST=localhost
mongoDB=mongodb://127.0.0.1:27017/movies_db
TMDB_Key ={YOUR TMDB API KEY HERE}
secret=ilikecake
}
______________________
movies-react/.env{
REACT_APP_TMDB_KEY={YOUR TMDB API KEY HERE}
FAST_REFRESH=false
}


## API Design
+ /api/user | POST | Functions such as register and login work correctly. Currently as seperate pages. Uses queries to decide what to do instead of seperate paths.

+ /api/movies/ | GET | Gets a list of movies from the movie Discovery link.
+ /api/movies/{id} | GET | Gets a movies details via movie Id.
+ /api/movies/tmdb/popular | GET | Gets a list of movies from the popular movies tmdb link.
+ /api/movies/tmdb/upcoming |GET | Gets a list of movies from the upcoming (cinema) movies tmdb link.
+ /api/movies/tmdb/genres | GET | Gets a list of genre types from tmdb.
+ /api/movies/tmdb/reviews | GET | Gets a list of reviews for a movie from tmdb.
+ /api/movies/tmdb/alltimegreatest | GET | Gets a list of movies that are the highest rate in film history from tmdb.
+ /api/movies/tmdb/movieimages | GET | Gets images related to a movie from tmdb.
+ /api/movies/tmdb/moviecredits/{id} | GET | Gets the cast and character list for a movie from tmdb.

+ /api/television/ | GET | Gets a list of tv shows from the television Discovery link.
+ /api/television/{id} | GET | Gets the television shows details via the tv show Id.
+ /api/television/tmdb/tvimages/{id} | GET | Gets images related to a television show from tmdb.


## Security and Authentication
Removed the ability for the api to call a list of all users and to output their information. The passwords, when harvested, could be easily decrypted due to our current method (standard salting algorithm) via a Rainbow Table. This is dangerous and highly insecure.

Removed the ability for the user to interact with the movie favourites, movieswatchlater and tvfavourites features. A neredowell might possibly exploit these features if theyed function correctly without being logged in.

Protected routes
+ /user/moviefavourites
+ /user/moviewatchlater
+ /user/tvfavourites

## Integrating with React App
- All movie paths are currently unprotected and uses our Web Api.
- All tv paths are currently unprotected and uses our web Api.
- User login & registration paths are currently unprotected and uses our web Api.
- User Favourites, Watch Later, and TV Favourites lists are currently locked down to only being able to be used while logged in, and uses our web Api.
- - User Favourites, Watch Later, and TVFavourites lists currently save at the app level only and are not permanent. Ran out of time to try to implement saving this to the db. If I were to implement this, i would have the lists loaded from the db at login into app memory and any time that a movie/tv show is added to one of the lists, the change would be saved in app memory first, and then uploaded to the db.

- Changed some of the app's themeing colors at the component level to better understand how themes and colors work within react, and to better differentiate Assignment 2's app from Assignment 1's.
    -Tried to tidy up areas that looked a little funny. Still not perfect, but much cleaner.
    -Added my student number to the siteHeader.
    -Removed the large amount of options on the site header. Slimmed it down to 3 options, Movies, TV and User; each of which supply relevant options.

## Independent learning (if relevant)

- Used Postman to better understand how and what data is transfered back and forth. Extremely useful for ensuring that an issue is not on the api side.
- Used MongoCompass. I almost always had this open to refresh. Though it wasn't used for managing data, it's a useful tool to ensure that any data I wish for the db to store was stored correctly.