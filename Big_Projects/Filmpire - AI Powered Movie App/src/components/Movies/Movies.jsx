import { useState } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/TMDB'; // Custom hook to fetch movies data from TMDB API
import { MovieList } from '../index'; // Importing MovieList component to display list of movies

import { Pagination } from '../index'; // Importing Pagination component to navigate through pages
import { FeaturedMovie } from '../index'; // Importing FeaturedMovie component to display a featured movie

const Movies = () => {
  const [page, setPage] = useState(1); // State to keep track of the current page number
  // Using a custom hook to fetch movies data, and destructuring the response
  const { genreIdOrCategoryName, searchQuery } = useSelector((state) => state.currentGenreOrCategory);
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });

  const lg = useMediaQuery((theme) => theme.breakpoints.only('lg')); // Media query to check if screen size is large
  const numberOfMovies = lg ? 17 : 19; // Number of movies to display based on screen size

  // Show loading spinner while the data is being fetched
  if (isFetching) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
        <CircularProgress size={'4rem'} /> {/* Loading spinner */}
      </Box>
    );
  }

  // Show message if no movies match the search criteria
  if (data?.results.length === 0) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
        <Typography variant='h4' color='error'>
          No movies that match your search
          <br />
          Please search for another movie
        </Typography>
      </Box>
    );
  }

  // Show error message if there's an error in fetching the data
  if (error) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
        <Typography variant='h4' color='error'>
          An error occurred while fetching movies
          <br />
          Please try again
        </Typography>
      </Box>
    );
  }

  // Render the MovieList component if data is successfully fetched and contains movies
  return (
    <div>
      <FeaturedMovie movie={data?.results[0]} />
      <MovieList movies={data} numberOfMovies={numberOfMovies} excludeFirst />
      <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages} />
    </div>
  );
};

export default Movies;
