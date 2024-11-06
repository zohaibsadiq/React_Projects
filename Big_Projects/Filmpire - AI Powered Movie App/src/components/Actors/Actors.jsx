import { useState } from 'react';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetActorDetailsQuery, useGetActorMoviesQuery } from '../../services/TMDB';
import { actorStyles } from './actorStyles';
import { MovieList, Pagination } from '../index';

const Actors = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { data, isFetching, error } = useGetActorDetailsQuery(id);
  const { data: movies } = useGetActorMoviesQuery({ actorId: id, page });

  const classes = actorStyles();

  if (!data) {
    return null;
  }

  if (isFetching) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress size={'8rem'} />
      </Box>
    );
  }
  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} color='primary'>
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid size={{ lg: 5, xl: 4 }}>
          <img
            src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
            alt={data.name}
            className={classes.actorImage}
          />
        </Grid>
        <Grid
          item
          size={{ lg: 7, xl: 8 }}
          style={{ display: 'flex', justifyContent: 'start', flexDirection: 'column' }}
        >
          <Typography variant='h2' gutterBottom>
            {data.name}
          </Typography>
          <Typography variant='h5' gutterBottom>
            Born : {new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography variant='body1' gutterBottom align='justify'>
            {data?.biography || 'No biography available'}
          </Typography>
          <Box marginTop={'2rem'} display={'flex'} justifyContent={'space-around'}>
            <Button
              variant='contained'
              color='primary'
              target='_blank'
              href={`https://www.imdb.com/name/${data?.imdb_id}`}
            >
              IMDB
            </Button>
            <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} color='primary'>
              Back
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box margin='2rem 0'>
        <Typography variant='h2' gutterBottom align='center'>
          Movies
        </Typography>
        {movies && <MovieList movies={movies} numberOfMovies={12} />}
        <Pagination currentPage={page} totalPages={movies?.total_pages} setPage={setPage} />
      </Box>
    </>
  );
};

export default Actors;
