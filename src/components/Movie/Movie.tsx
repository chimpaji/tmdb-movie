import { Movie as MovieType } from '@/features/tmdbApi/tmdbApi';
import buildImageURL from '../../utils/buildImageURL';
import { Box, Grid, Grow, Rating, Tooltip, Typography } from '@mui/material';
import React from 'react';

type MovieProps = {
  movie: MovieType;
};

const Movie = ({ movie }: MovieProps) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={2}
      sx={{ border: '1px solid black' }}
    >
      <Grow in timeout={1000}>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Box
            sx={{
              '&:hover': {
                cursor: 'pointer',
                transform: 'scale(1.2)',
              },
            }}
          >
            <img
              src={buildImageURL(movie?.poster_path as string)}
              height='300x'
              style={{ borderRadius: '5px' }}
            />
          </Box>

          <Typography
            textOverflow='ellipsis'
            overflow='hidden'
            textAlign='center'
            width='200px'
            whiteSpace='nowrap'
            sx={{
              '&:hover': {
                cursor: 'pointer',
                textDecoration: 'underline',
              },
            }}
          >
            {movie.title}
          </Typography>
          <Tooltip title={`${movie?.vote_average / 2}/5`}>
            <div>
              <Rating
                readOnly
                value={movie?.vote_average / 2}
                precision={0.1}
              />
            </div>
          </Tooltip>
        </Box>
      </Grow>
    </Grid>
  );
};

export default Movie;
