import { Box } from '@mui/material';
import React from 'react';
import MovieList from '../MovieList/MovieList';

const Homepage = () => {
  return (
    <Box display='flex'>
      <MovieList />
    </Box>
  );
};

export default Homepage;
