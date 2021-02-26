import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Tv from './routes/Tv';
import Home from './routes/Home';
import Search from './routes/Search';
import NavTop from './components/NavTop';
import Detail from './routes/Detail';
import NavBottom from './components/NavBottom';
import './App.css';

function App() {
	return (
		<BrowserRouter>
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
