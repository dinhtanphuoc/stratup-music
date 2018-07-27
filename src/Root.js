import React from 'react';
import PropTypes from 'prop-types';
import { RenderRoutes } from './route';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './assets/main.css';

const Root = ({ store, routes, history }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route history={history}>
        <RenderRoutes routes={routes}/>
      </Route>
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired
}

export default Root;