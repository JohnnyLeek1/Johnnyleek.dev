import React from 'react';
import '../styles/app.scss';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';

import Hello from '../components/Hello';
import Page404 from '../components/404';
import { BASENAME, IS_PROJECT_PAGE } from '../consts';
import PropTypes from 'prop-types';

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
        <Route path="/hello" component={Hello} />
        <Route path="/" exact component={Hello} />
        <Route path="/" component={Page404} />
      </Switch>
    </Router>
  );
}

Router.propTypes = {
  children: PropTypes.any,
};

export default App;
