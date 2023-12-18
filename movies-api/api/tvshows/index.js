import asyncHandler from 'express-async-handler';
import express from 'express';
import {getTVShows} from '../tmdb-api';
import {getTVShow} from '../tmdb-api';

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
    console.log("Television discovery called.");
    const discoverTVShows = await getTVShows();
    res.status(200).json(discoverTVShows);
}));



export default router;