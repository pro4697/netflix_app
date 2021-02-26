import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Tv from './containers/Tv';
import Home from './containers/Home';
import Search from './containers/Search';
import NavTop from './components/NavTop';
import Detail from './containers/Detail';
import NavBottom from './components/NavBottom';
import './App.css';

function App() {
	return (
		<BrowserRouter basename='/netflix_app'>
			<NavTop />
			<AnimatePresence>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/tv' component={Tv} />
					<Route exact path='/search' component={Search} />
					<Route exact path='/movie-detail' component={Detail} />
				</Switch>
			</AnimatePresence>
			<NavBottom />
		</BrowserRouter>
	);
}

export default App;
