import asyncHandler from 'express-async-handler';
import express from 'express';
import {getTVShows} from '../tmdb-api';
import {getTVShow} from '../tmdb-api';
import {getTVCredits} from '../tmdb-api';
import {getTVImages} from '../tmdb-api';
import {getTVReviews} from '../tmdb-api';
import {getSearchTV} from '../tmdb-api';

const router = express.Router();

// Get tv details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const tvShow = await getTVShow(id);

    if (tvShow) {
        res.status(200).json(tvShow);
    } else {
        res.status(404).json({message: 'The tv shwo you requested could not be found.', status_code: 404});
    }
}));

router.get('/', asyncHandler(async (req, res) => { //Discover
    const discoverTVShows = await getTVShows();
    res.status(200).json(discoverTVShows);
}));

router.get('/tmdb/tvcredits/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const tvCredits = await getTVCredits(id);

    if (tvCredits) {
        res.status(200).json(tvCredits);
    } else {
        res.status(404).json({message: 'The tv show you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/tvimages/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const tvImages = await getTVImages(id);

    if (tvImages) {
        res.status(200).json(tvImages);
    } else {
        res.status(404).json({message: 'The movie images you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/tvreviews/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const tvReviews = await getTVReviews(id);
    console.log(tvReviews);

    if (tvReviews) {
        res.status(200).json(tvReviews);
    } else {
        res.status(404).json({message: 'The tv show reviews you requested could not be found.', status_code: 404});
    }
}));

router.get('/tmdb/tvsearch/:id', asyncHandler(async (req, res) => {
    console.log(req);

    const id =  req.params.id;
    const searchResults = await getSearchTV(id);

    if (searchResults) {
        res.status(200).json(searchResults);
    } else {
        res.status(404).json({message: 'A movie matching your description could not be found.', status_code: 404});
    }
}));



export default router;