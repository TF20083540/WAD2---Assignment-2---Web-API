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
        //I understand why the api was crashing. it was already unpacked.
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${args}?api_key=${process.env.TMDB_KEY}`
                );

            if (!response.ok) {
                throw new Error(response.json().message);
            }

            return await response.json();
        } catch (error) {
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

    export const getAllTimeGreatestMovies = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
            );

            if (!response.ok) {
                throw new Error(response.json().message);
            }

            return await response.json();
        } catch (error) {
            throw error;
        }
    };

    export const getMovieCredits = async (id) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_KEY}`
            );

            if (!response.ok) {
                throw new Error(response.json().message);
            }

            return await response.json();
        } catch (error) {
            throw error;
        }
    };


    export const getMovieImages = async (id) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.TMDB_KEY}`

            );

            if (!response.ok) {
                throw new Error(response.json().message);
            }

            return await response.json();
        } catch (error) {
            throw error;
        }
    };


    export const getMovieReviews = async (id) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}`

            );

            if (!response.ok) {
                throw new Error(response.json().message);
            }

            return await response.json();
        } catch (error) {
            throw error;
        }
    };


    export const getSearchMovie = async (searchTerm) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_KEY}&query=${searchTerm}&include_adult=false&language=en-US&page=1`

            );

            if (!response.ok) {
                throw new Error(response.json().message);
            }

            return await response.json();
        } catch (error) {
            throw error;
        }
    };


//TV Section
export const getTVShows = async () => {
    try {
        const response = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`

        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getTVShow = async (args) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/tv/${args}?api_key=${process.env.TMDB_KEY}&include_adult=false`
            );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;

    }
};

export const getTVCredits = async (id) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.TMDB_KEY}`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getTVImages = async (id) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.TMDB_KEY}`

        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getTVReviews = async (id) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.TMDB_KEY}`

        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

