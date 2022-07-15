import { CssBaseline } from '@mui/material';
import { Switch, Route } from 'react-router-dom';
import { Movies, Actors, Profile, MovieInformation, Navbar } from './components';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <main>
        <Navbar />
        <Switch>
          <Route exact path="/movie/:id">
            <MovieInformation />
          </Route>
          <Route exact path="/movie/">
            <Movies />
          </Route>
          <Route exact path="/actor/:id">
            <Actors />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
          <Route exact path="/">
            <div>home</div>
          </Route>
          <Route path="*">
            <div>not found</div>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
