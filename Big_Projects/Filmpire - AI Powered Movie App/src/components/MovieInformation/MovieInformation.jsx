import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  ButtonGroup,
  CircularProgress,
  useMediaQuery,
  Rating,
  fabClasses,
  Modal,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {
  Movie as MovieIcon,
  Theaters,
  Language,
  PlusOne,
  Favorite,
  FavoriteBorderOutlined,
  Remove,
  ArrowBack,
} from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useGetMovieDetailsQuery, useGetMovieRecommendationsQuery, useGetListQuery } from '../../services/TMDB';
import { movieInfoStyles } from './movieInfoStyles';
import genreIcons from '../../assets/genres';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { MovieList } from '../index';
import axios from 'axios';
import { userSelector } from '../../features/auth';

const MovieInformation = () => {
  const TMDB_API_KEY = import.meta.env.VITE_REACT_APP_TMDB_KEY;
  const dispatch = useDispatch();
  const { user } = useSelector(userSelector);
  const { id } = useParams();
  const Classes = movieInfoStyles();
  const { data, isFetching, error } = useGetMovieDetailsQuery(id);
  const { data: recommendations, isFetching: isRecommendationsFetching } = useGetMovieRecommendationsQuery({
    movieId: id,
    list: 'recommendations',
  });
  console.log(`userId`, user.id);
  const { data: favoriteMovies } = useGetListQuery({
    listName: 'favorite/movies',
    accountId: user.id,
    sessionId: localStorage.getItem('session_id'),
    page: 1,
  });

  console.log(`favoriteMovies`, favoriteMovies);
  const { data: watchlistMovies } = useGetListQuery({
    listName: 'watchlist/movies',
    accountId: user.id,
    sessionId: localStorage.getItem('session_id'),
    page: 1,
  });
  console.log(`watchlistMovies`, watchlistMovies);
  if (isFetching) {
    <Box display='flex' justifyContent='center'>
      <CircularProgress size='6rem' />
    </Box>;
  }
  if (error) {
    <Link to='/'>Something went wrong back to the home page.</Link>;
  }
  const [isMovieInFavorite, setIsMovieInFavorite] = useState(false);
  const [isMovieInWatchlist, setIsMovieInWatchlist] = useState(false);

  useEffect(() => {
    setIsMovieInFavorite(!!favoriteMovies?.results?.find((movie) => movie?.id === data?.id));
  }, [favoriteMovies, data]);
  useEffect(() => {
    setIsMovieInWatchlist(!!watchlistMovies?.results?.find((movie) => movie?.id === data?.id));
  }, [watchlistMovies, data]);

  const addTofavorite = async () => {
    await axios.post(
      `https://api.themoviedb.org/3/account/${
        user.id
      }/favorite?api_key=${TMDB_API_KEY}&session_id=${localStorage.getItem('session_id')}`,
      {
        media_type: 'movie',
        media_id: id,
        favorite: !isMovieInFavorite,
      }
    );

    setIsMovieInFavorite((prev) => !prev);
  };
  const addToWatchlist = async () => {
 const result  =   await axios.post(
      `https://api.themoviedb.org/3/account/${
        user.id
      }/watchlist?api_key=${TMDB_API_KEY}&session_id=${localStorage.getItem('session_id')}`,
      {
        media_type: 'movie',
        media_id: id,
        watchlist: !isMovieInWatchlist,
      }
    );
    console.log(`result`, result);
    setIsMovieInWatchlist((prev) => !prev);
  };

  const [open, setOpen] = useState(false);
  console.log(`data`, data);
  if (!data) return <p>Loading...</p>;

  return (
    <Grid container className={Classes.spaceAroundContainer}>
      <Grid item container size={{ lg: 4 }}>
        <Grid item style={{ display: 'flex', justifyContent: 'center' }}>
          <img className={Classes.poster} src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} alt='' />
        </Grid>
      </Grid>
      <Grid item container direction='column' size={{ lg: 7 }}>
        <Typography variant='h3' align='center' gutterBottom>
          {data?.title} ({data?.release_date?.split('-')[0]})
        </Typography>
        <Typography variant='h5' align='center' gutterBottom>
          {data?.tagline}
        </Typography>
        <Grid item className={Classes.container}>
          <Box display='flex' alignContent='center'>
            <Rating value={data?.vote_average / 2} readOnly />
            <Typography variant='subtitle1' gutterBottom style={{ marginLeft: '10px' }}>
              {data?.vote_average} / 10
            </Typography>
          </Box>
          <Typography variant='h6' align='center' gutterBottom>
            {data?.runtime} min | Language: {data?.spoken_languages[0].name}
          </Typography>
        </Grid>
        <Grid item className={Classes.genresContainer}>
          {data?.genres?.map((genre) => (
            <Link
              key={genre.name}
              variant='contained'
              className={Classes.links}
              to='/'
              onClick={() => {
                () => dispatch(selectGenreOrCategory(genre.id));
              }}
            >
              <img
                src={genreIcons[genre.name.toLowerCase()]} // Get genre icon based on genre name
                alt=''
                className={Classes.genreImage}
                height={30}
              />
              <Typography variant='subtitle1' color='textPrimary'>
                {genre.name}
              </Typography>
            </Link>
          ))}
        </Grid>
        <Typography variant='h5' gutterBottom style={{ marginTop: '10px' }}>
          Overview
        </Typography>
        <Typography style={{ marginBottom: '2rem' }}>{data?.overview}</Typography>
        <Typography variant='h5' gutterBottom>
          Top Cast
        </Typography>
        <Grid item container>
          {data &&
            data.credits?.cast
              ?.map(
                (character, i) =>
                  character.profile_path && (
                    <Grid
                      key={i}
                      item
                      size={{ xs: 4, md: 2.3 }}
                      component={Link}
                      to={`/actors/${character.id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <img
                        className={Classes.castImage}
                        src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`}
                        alt='charaterImage'
                      />
                      <Typography color='textPrimary'>{character.name}</Typography>
                      <Typography color='textSecondary'>{character.character.split(' / ')[0]}</Typography>
                    </Grid>
                  )
              )
              .slice(0, 5)}
        </Grid>
        <Grid item container style={{ marginTop: '2rem' }}>
          <div className={Classes.buttonsContainer}>
            <Grid item size={{ xs: 12, sm: 6 }} className={Classes.buttonsContainer}>
              <ButtonGroup size='small' variant='outlined'>
                <Button target='_blank' rel='noopener noreferrer' href={data?.homepage} endIcon={<Language />}>
                  Website
                </Button>
                <Button
                  target='_blank'
                  rel='noopener noreferrer'
                  href={`https://www.imdb.com/title/${data?.imdb_id}`}
                  endIcon={<MovieIcon />}
                >
                  IMDB
                </Button>
                <Button onClick={() => setOpen(true)} href='#' endIcon={<Theaters />}>
                  Trailer
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6 }} className={Classes.buttonsContainer}>
              <ButtonGroup size='medium' variant='outlined'>
                <Button onClick={addTofavorite} endIcon={isMovieInFavorite ? <FavoriteBorderOutlined /> : <Favorite />}>
                  {isMovieInFavorite ? 'Unfavorite' : 'Favorite'}
                </Button>
                <Button onClick={addToWatchlist} endIcon={isMovieInWatchlist ? <Remove /> : <PlusOne />}>
                  Watchlist
                </Button>
                <Button endIcon={<ArrowBack />} sx={{ borderColor: 'primary.main' }}>
                  <Typography
                    component={Link}
                    to={'/'}
                    color='info'
                    variant='subtitle2 '
                    style={{ textDecoration: 'none' }}
                  >
                    Back
                  </Typography>
                </Button>
              </ButtonGroup>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <Box marginTop={'5rem'} width={'100%'}>
        <Typography variant='h3' gutterBottom align='center'>
          You may also like
        </Typography>
        {/* Loop through recommended movies  */}
        {recommendations ? (
          <MovieList movies={recommendations} numberOfMovies={12} />
        ) : (
          <Box>Sorry, nothing was found</Box>
        )}
      </Box>
      <Modal closeAfterTransition className={Classes.modal} open={open} onClose={() => setOpen(false)}>
        {data?.videos?.results?.length > 0 && (
          <>
            <iframe
              autoPlay
              className={Classes.video}
              title='Trailer'
              src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
              allow='autoplay'
            />
          </>
        )}
      </Modal>
    </Grid>
  );
};

export default MovieInformation;
