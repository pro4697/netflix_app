import React from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route
        render={({ location }) => {
          return (
            <TransitionGroup>
              <CSSTransition
                key={location.pathname}
                timeout={{ enter: 300, exit: 300 }}
                classNames='fade'
              >
                <Switch location={location}>
                  <Route exact path='/' component={Home} />
                  <Route path='/about' component={About} />
                  <Route path='/movie-detail' component={Detail} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      ></Route>
    </HashRouter>
  );
}

export default App;
