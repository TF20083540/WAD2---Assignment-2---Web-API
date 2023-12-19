import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import {getMovies} from '../tmdb-api';
import {getUpcomingMovies} from '../tmdb-api';
import {getGenres} from '../tmdb-api';
import {getPopularMovies} from '../tmdb-api';
import {getMovie} from '../tmdb-api';
import {getAllTimeGreatestMovies} from '../tmdb-api';
import {getMovieCredits} from '../tmdb-api';
import {getMovieImages} from '../tmdb-api';
import {getMovieReviews} from '../tmdb-api';

const router = express.Router();

/*
router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));
*/

// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    //console.log("Datamining.");
    //console.log(req);
    const id = parseInt(req.params.id);
    //const movie = await movieModel.findByMovieDBId(id);
    //console.log("Id information");
    //console.log(id);
    
    const movie = await getMovie(id);
    //console.log(movie);

    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/', asyncHandler(async (req, res) => { //Discover
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));

router.get('/tmdb/popular', asyncHandler(async (req, res) => { //I was going to change it to /MyApi/popular, but decided against.
    const popularMovies = await getPopularMovies();
    res.status(200).json(popularMovies);
}));

router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcomingMovies();
    res.status(200).json(upcomingMovies);
}));

router.get('/tmdb/genres', asyncHandler(async (req, res) => {
    const contentGenres = await getGenres();
    res.status(200).json(contentGenres);
}));

router.get('/tmdb/alltimegreatest', asyncHandler(async (req, res) => {
    const allTimeGreatestMovies = await getAllTimeGreatestMovies();
    res.status(200).json(allTimeGreatestMovies);
}));

router.get('/tmdb/moviecredits/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movieCredits = await getMovieCredits(id);


    if (movieCredits) {
        res.status(200).json(movieCredits);
    } else {
        res.status(404).json({message: 'The movie you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/movieimages/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movieImages = await getMovieImages(id);

    if (movieImages) {
        res.status(200).json(movieImages);
    } else {
        res.status(404).json({message: 'The movie images you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/moviereviews/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movieImages = await getMovieReviews(id);

    if (movieImages) {
        res.status(200).json(movieImages);
    } else {
        res.status(404).json({message: 'The movie reviews you requested could not be found.', status_code: 404});
    }
}));

export default router;