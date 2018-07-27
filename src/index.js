import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import { routes } from './route';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';

const config = store;
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, config);

ReactDOM.render(
  <Root
    store={config}
    routes={routes}
    history={history}
  />,
  document.getElementById('root'));
registerServiceWorker();