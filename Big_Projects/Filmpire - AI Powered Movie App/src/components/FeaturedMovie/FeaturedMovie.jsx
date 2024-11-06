import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { featuredMovieStyles } from './featuredMovieStyles';

const FeaturedMovie = ({ movie }) => {
  const classes = featuredMovieStyles();
  if (!movie) return null;

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
  };

  return (
    <Box component={Link} to={`/movie/${movie.id}`} className={classes.cardContainer}>
      <Card className={classes.card} classes={{ root: classes.cardRoot }}>
        <CardMedia
          media='picture'
          alt={movie.title}
          image={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          title={movie.title}
          className={classes.cardMedia}
        />
        <Box padding='20px'>
          <CardContent className={classes.cardContent} classes={{ root: classes.cardContentRoot }}>
            <Typography variant='h5' gutterBottom>
              {movie.title}
            </Typography>
            <Typography variant='body2'>{truncateText(movie.overview, 50)}</Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default FeaturedMovie;
