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
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 


- /api/movies | GET | Gets a list of movies 
- /api/movies/{movieid} | GET | Gets a single movie 
- /api/movies/{movieid}/reviews | GET | Get all reviews for movie 
- /api/movies/{movieid}/reviews | POST | Create a new review for Movie 

//Mine
- /api/user functions such as register and login work correctly. Currently as seperate pages.

- /api/movies | GET | Gets a list of movies from the movie Discovery link.
- /api/movies/{id} | GET | Gets a movies details via movie Id.
- /api/movies/tmdb/popular | GET | Gets a list of movies from the popular movies tmdb link.
- /api/movies/tmdb/upcoming |GET | Gets a list of movies from the upcoming (cinema) movies tmdb link.
- /api/movies/tmdb/genres | GET | Gets a list of genre types from tmdb.

- /api/television/ | GET | Gets a list of tv shows from the television Discovery link.
- /api/television | GET | Gets the television shows details via the tv show Id.

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).

## Security and Authentication

Give details of authentication/security implemented on the API (e.g. passport/sessions). Indicate which routes are protected.

## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app.   