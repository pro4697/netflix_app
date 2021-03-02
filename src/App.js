import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Tv from './containers/Tv';
import Home from './containers/Home';
import Search from './containers/Search';
import NavTop from './components/NavTop';
import Detail from './containers/Detail';
import NavBottom from './components/NavBottom';

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
