import { useGetPopularMovieQuery } from '../../features/tmdbApi/tmdbApi';
import { Box, CircularProgress, Grid } from '@mui/material';
import React from 'react';
import Movie from '../Movie/Movie';

const MovieList = () => {
  const { data, isLoading } = useGetPopularMovieQuery(undefined);

  if (false)
    return (
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        width='100%'
        bgcolor='black'
      >
        <CircularProgress />
      </Box>
    );

  return (
    <Grid container bgcolor='pink' justifyContent='center' alignItems='center'>
      {data?.results?.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </Grid>
  );
};

export default MovieList;
