//createApi from RTK query
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Movie = {
  poster_path?: string | null;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: Array<number>;
  id?: number;
  originaltitle?: number;
  original_language?: string;
  title?: string;
  backdrop_path?: string | null;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
};

type MoviesFetchResponse = {
  id?: number;
  page?: number;
  results?: Movie[];
  total_results?: number;
  total_pages?: number;
};

type ActorFetchResponse = {
  birthday?: string;
  known_for_department?: string;
  deathday?: null | string;
  id?: number;
  name?: string;
  also_known_as?: Array<string>;
  gender?: number;
  biography?: string;
  popularity?: number;
  place_of_birth?: string | null;
  profile_path: string | null;
  adult?: boolean;
  imdb_id?: string;
  homepage?: string;
};

type GenreFetchResponse = {
  genres: Array<{ id: number; name: string }>;
};

const tmdbFetchParams = { api_key: import.meta.env.VITE_TMBD_API_KEY_PRIVATE };

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.themoviedb.org/3/` }),
  endpoints: (builder) => ({
    getPopularMovie: builder.query<MoviesFetchResponse, undefined>({
      query: () => {
        //we will change this alot
        //1: accept parameter from useGetMovies(//this can be genreId or catString')
        //2: we will conditionly return url base on the parameter //genre //pop //upcoming
        //3: delete the reset query, then create another

        return {
          url: `movie/popular`,
          params: tmdbFetchParams,
        };
      },
    }),
    // getTopRatedMovies: builder.query<MoviesFetchResponse, null>({
    //   query: () => ({
    //     url: `movie/top_rated`,
    //     params: tmdbFetchParams,
    //   }),
    // }),
    // getUpcomingMovies: builder.query<MoviesFetchResponse, null>({
    //   query: () => ({
    //     url: `movie/upcoming`,
    //     params: tmdbFetchParams,
    //   }),
    // }),
    // getNowPlayingMovies: builder.query<MoviesFetchResponse, null>({
    //   query: () => ({
    //     url: `movie/now_playing`,
    //     params: tmdbFetchParams,
    //   }),
    // }),
    // getMovieById: builder.query<MoviesFetchResponse, number>({
    //   query: (id) => ({
    //     url: `keyword/${id}/movies`,
    //     params: tmdbFetchParams,
    //   }),
    // }),
    getActorById: builder.query<ActorFetchResponse, number>({
      query: (id) => ({
        url: `/person/${id}`,
        params: tmdbFetchParams,
      }),
    }),
    getGenres: builder.query<GenreFetchResponse, null>({
      query: () => ({
        url: `genre/movie/list`,
        params: tmdbFetchParams,
      }),
    }),
  }),
});

export const {
  useGetPopularMovieQuery,
  // useGetTopRatedMoviesQuery,
  // useGetUpcomingMoviesQuery,
  // useGetMovieByIdQuery,
  // useGetNowPlayingMoviesQuery,
  useGetActorByIdQuery,
  useGetGenresQuery,
} = tmdbApi;
