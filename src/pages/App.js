import React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';

import { BASENAME, IS_PROJECT_PAGE } from '../consts';
import TransitionScreen from '../components/TransitionScreen';
import '../styles/app.scss';

const Router = ({ children }) => {
  return IS_PROJECT_PAGE ? (
    <HashRouter basename={`${BASENAME}/#/`}>{children}</HashRouter>
  ) : (
    <BrowserRouter basename={BASENAME}>{children}</BrowserRouter>
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/test-routing' key='test-route'>
          <TransitionScreen toLoad='Test' />
        </Route>
        <Route path='/' exact key='home-route'>
          <TransitionScreen toLoad='Home' />
        </Route>
        <Route path='/'>
          <TransitionScreen toLoad='404' />
        </Route>
      </Switch>
    </Router>
  );
}

Router.propTypes = {
  children: PropTypes.any,
};

export default App;
