import Grid from '@mui/material/Grid2'; // Importing Grid2 component for layout
import movieListStyle from './movieListStyle'; // Importing custom styles for MovieList component
import { Movie } from '../index'; // Importing Movie component to display individual movie items

const MovieList = ({ movies, numberOfMovies, excludeFirst }) => {
  // Extract nested results from movies with optional chaining to avoid errors if results are undefined
  const movieresults = movies?.results || [];

  // Applying custom styles to the component
  const classes = movieListStyle();

  const startFrom = excludeFirst ? 1 : 0; // Starting index for movies to display

  return (
    <Grid container className={classes.moviesContainer}>
      {/* Map through each movie in movieresults and render a Movie component for each */}
      {movieresults.slice(startFrom, numberOfMovies).map((movie, i) => (
        <Movie key={i} movie={movie} i={i} /> // Passing movie and index as props to Movie component
      ))}
    </Grid>
  );
};

export default MovieList;
