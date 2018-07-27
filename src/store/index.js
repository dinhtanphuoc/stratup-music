import { createStore, applyMiddleware, compose } from 'redux';
import { multiClientMiddleware } from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};
const middleware = [thunk];
let store;

if (process.env.NODE_ENV === 'production') {
  store = createStore(
    rootReducers,
    initialState,
    applyMiddleware(
      ...middleware,
      multiClientMiddleware()
    )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

} else {
  store = createStore(
    rootReducers,
    initialState,
    composeEnhancers(
      applyMiddleware(
        ...middleware,
        multiClientMiddleware()
      )
    )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

}

export default store;
