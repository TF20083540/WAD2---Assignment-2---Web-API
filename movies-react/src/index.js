import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import {QueryClientProvider, QueryClient} from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
//Assignment Additions
import PopularMoviesPage from "./pages/popularMoviesPage";
import TopRatedMoviesPage from "./pages/highestAllTimeMoviesPage";
import DiscoverTVPage from "./pages/tvDiscoverPage";
import TVPage from "./pages/tvDetailsPage";
import WatchLaterMoviesPage from "./pages/watchLaterMoviesPage";
import FavoriteTVShowsPage from "./pages/favoriteTVShowsPage";
import MovieSearchPage from "./pages/searchMoviesPage";
import TVSearchPage from "./pages/searchTVPage";
import { Search } from "@mui/icons-material";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoutes from "./protectedRoutes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <SiteHeader />
      <MoviesContextProvider>
        <Routes>
          <Route path ="/reviews/form" element={ <AddMovieReviewPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route exact path="/movies/upcoming" element={<UpcomingMoviesPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          
          <Route exact path="/movies/popular" element={<PopularMoviesPage />} />
          <Route exact path="/movies/top_rated" element={<TopRatedMoviesPage />} />
          <Route exact path="/tv/discover" element={<DiscoverTVPage />} />
          <Route path="/tv/:id" element={<TVPage />} />

          <Route exact path="/movies/search" element={<MovieSearchPage />}/>
          <Route exact path="/tv/search" element={<TVSearchPage />}/>

          <Route element={<ProtectedRoutes />}>
            <Route exact path="/user/moviefavorites" element={<FavoriteMoviesPage />} />
            <Route exact path="/user/moviewatchlater" element={<WatchLaterMoviesPage />} />
            <Route exact path="/user/tvfavorites" element={<FavoriteTVShowsPage />} />
          </Route>
          
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignUpPage />} />


     
        </Routes>
      </MoviesContextProvider>

      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);