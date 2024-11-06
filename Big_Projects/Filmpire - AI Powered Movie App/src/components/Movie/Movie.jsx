import { Typography, Grow, Tooltip, Rating } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';
import { Pagination } from '../index';

import movieStyle from './movieStyle';

const Movie = ({ movie, i }) => {
  const classes = movieStyle();
  return (
    <Grid xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link className={classes.links} to={`/movie/${movie.id}`}>
          <img
            className={classes.image}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : 'https://www.movienewz.com/img/films/poster-holder.jpg'
            }
            alt={movie.title}
          />
          <Typography className={classes.title} variant='h5'>
            {movie.title}{' '}
          </Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average} /10`}>
            <div>
              <Rating name='read-only' value={movie.vote_average / 2} readOnly precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
};

export default Movie;
