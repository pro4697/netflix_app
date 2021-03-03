import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Tv from './pages/Tv';
import Home from './pages/Home';
import Search from './pages/Search';
import Detail from './pages/Detail';
import { NavTop, NavBottom } from './components/Nav';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	}
	body {
		margin: 0;
		padding: 0;
		font-family: 'Nanum Gothic', sans-serif;
		background-color: black;
		height: 100%;
	}
	&::-webkit-scrollbar {
		width: 0px;
	}
`;

function App() {
	return (
		<BrowserRouter basename='/netflix_app'>
			<GlobalStyle />
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
