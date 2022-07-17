import { Box, CssBaseline, Toolbar } from '@mui/material';
import { Switch, Route } from 'react-router-dom';
import {
  Movies,
  Actors,
  Profile,
  MovieInformation,
  Navbar,
} from './components';

import useStlyes from './styles';

function App() {
  const classes = useStlyes();
  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar />
      <Box component='main'>
        <Toolbar />

        <Switch>
          <Route exact path='/movie/:id'>
            <MovieInformation />
          </Route>
          <Route exact path='/movie/'>
            <Movies />
          </Route>
          <Route exact path='/actor/:id'>
            <Actors />
          </Route>
          <Route exact path='/profile/:id'>
            <Profile />
          </Route>
          <Route exact path='/'>
            <div>home</div>
          </Route>
          <Route path='*'>
            <div>not found</div>
          </Route>
        </Switch>
      </Box>
    </div>
  );
}

export default App;
