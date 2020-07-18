import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import About from './routes/About';
import Home from './routes/Home';
import NavTop from './components/NavTop';
import Detail from './routes/Detail';
import './App.css';

function App() {
  return (
    <HashRouter>
      <NavTop />
      <AnimatePresence>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/movie-detail' component={Detail} />
        </Switch>
      </AnimatePresence>
    </HashRouter>
  );
}

export default App;
