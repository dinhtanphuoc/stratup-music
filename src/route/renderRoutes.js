import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import ConnectedSwitch from './connectedSwitch';

const RenderRoutes = ({ routes }) => {
  return (
    <ConnectedSwitch>
      { routes.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          render={(props) => (
            <route.component
              {...props}
              routes={route.routes}
            />
          )}
        >
        </Route>
      ))}
    </ConnectedSwitch>
  );
}

RenderRoutes.propTypes = {
  routes: PropTypes.array.isRequired
};

export default RenderRoutes;
