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

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

______________________
NODEENV=development
PORT=8080
HOST=localhost
mongoDB=mongodb://127.0.0.1:27017/movies_db
TMDB_Key = {NOT TO BE SHARED - It's a randomised, 32 character string of letters and numbers.}
secret=ilikecake
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

+ /api/user functions such as register and login work correctly. Currently as seperate pages. Uses queries to decide what to do instead of seperate paths.

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

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).

## Security and Authentication

Give details of authentication/security implemented on the API (e.g. passport/sessions). Indicate which routes are protected.
_
Currently removed the ability for the api to call a list of all users and to output their information. The passwords, when harvested, could be easily decrypted due to our current method (standard salting algorithm) via a Rainbow Table. This is dangerous and highly insecure.

## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

_

All movie paths are currently unprotected.
All tv paths are currently unprotected.
All user-related paths are currently unprotected.
User Favourites, Watch Later, and TVFavourites lists are currently implemented at the app level only. Will be changing this to be storing id's within relevant arraylist in the mongo database within the user's parameters.

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app.   