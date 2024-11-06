import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const TMDB_API_KEY = import.meta.env.VITE_REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    //* Get Genres
    getGenres: builder.query({
      query: () => {
        return `genre/movie/list?api_key=${TMDB_API_KEY}`;
      },
    }),

    //* Query to get movies [Type]
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        // get movies by search query
        if (searchQuery) {
          return `search/movie?query=${searchQuery}&page=${page}&api_key=${TMDB_API_KEY}`;
        }

        if (
          // get movies by categories
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === 'string'
        ) {
          return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${TMDB_API_KEY}`;
        }
        if (
          // get movies by genre
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === 'number'
        ) {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${TMDB_API_KEY}`;
        }
        // get popular movies
        return `movie/popular?page=${page}&api_key=${TMDB_API_KEY}`;
      },
    }),

    // get movie details
    getMovieDetails: builder.query({
      query: (movieId) => {
        return `movie/${movieId}?append_to_response=videos,credits&api_key=${TMDB_API_KEY}`;
      },
    }),
    // get movie recommendations
    getMovieRecommendations: builder.query({
      query: ({ movieId, list }) => {
        return `movie/${movieId}/${list}?api_key=${TMDB_API_KEY}`;
      },
    }),
    //  get actor details
    getActorDetails: builder.query({
      query: (actorId) => {
        return `person/${actorId}?api_key=${TMDB_API_KEY}`;
      },
    }),

    // get actor movies by actor id
    getActorMovies: builder.query({
      query: ({ actorId, page }) => {
        return `discover/movie?with_cast=${actorId}&page=${page}&api_key=${TMDB_API_KEY}`;
      },
    }),
    // list
    getList: builder.query({
      query: ({ listName, accountId, sessionId, page }) => {
        return `account/${accountId}/${listName}?session_id=${sessionId}&page=${page}&api_key=${TMDB_API_KEY}`;
      },
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetGenresQuery,
  useGetMovieDetailsQuery,
  useGetMovieRecommendationsQuery,
  useGetActorDetailsQuery,
  useGetActorMoviesQuery,
  useGetListQuery,
} = tmdbApi;
