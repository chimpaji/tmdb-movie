import { Box, CssBaseline, Toolbar } from '@mui/material';
import { Switch, Route } from 'react-router-dom';
import {
	Movies,
	Actors,
	Profile,
	MovieInformation,
	Navbar,
} from './components';
import { useGetPopularMovieQuery } from './features/tmdbApi/tmdbApi';

import useStlyes from './styles';

function App() {
	const classes = useStlyes();
	const { data: movies } = useGetPopularMovieQuery();
	console.log('pop movies', movies);
	// console.log('apiKey', import.meta.env.VITE_TMBD_API_KEY_PRIVATE);

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
