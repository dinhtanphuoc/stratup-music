import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import common from './common';

export default combineReducers({
  routing,
  common
});