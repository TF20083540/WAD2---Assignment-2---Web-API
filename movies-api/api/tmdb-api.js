import { response } from 'express';
import fetch from 'node-fetch';

export const getMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};



export const getMovie = async (args) => {
    
    //console.log("1");
    //console.log(args);
    //const [, idPart] = args.queryKey;
    //console.log("2");
    //const { id } = args; //This line does not work? id = undefined when referenced this way. Object contains nothing bar the id itself.
    //console.log("id is "+id);
    //console.log("3");
    try {
        //console.log("4A");
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${args}?api_key=${process.env.TMDB_KEY}`
            );

        //console.log("5A");
        //console.log(response);

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        //console.log(error);
        throw error;

    }
};

export const getPopularMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};




export const getUpcomingMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getGenres = async () => {
    try {
        const response = await fetch(
            "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
            process.env.TMDB_KEY +
            "&language=en-US"
        );
        
        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};