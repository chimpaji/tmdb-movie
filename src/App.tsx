import { Box, CssBaseline, Toolbar } from '@mui/material';
import { Switch, Route } from 'react-router-dom';
import {
  Movie,
  Actors,
  Profile,
  MovieInformation,
  Navbar,
  Homepage,
} from './components';
import { useGetPopularMovieQuery } from './features/tmdbApi/tmdbApi';

import useStlyes from './styles';

function App() {
  const classes = useStlyes();
  const { data: movies } = useGetPopularMovieQuery(undefined);

  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar />
      <Box component='main'>
        <Toolbar />
        <Box width='100%' bgcolor='grey' overflow='scroll'>
          <Switch>
            <Route exact path='/movie/:id'>
              <MovieInformation />
            </Route>
            <Route exact path='/movie/'>
              {/* <Movie /> */}
            </Route>
            <Route exact path='/actor/:id'>
              <Actors />
            </Route>
            <Route exact path='/profile/:id'>
              <Profile />
            </Route>
            <Route exact path='/'>
              <Homepage />
            </Route>
            <Route path='*'>
              <div>not found</div>
            </Route>
          </Switch>
        </Box>
      </Box>
    </div>
  );
}

export default App;
