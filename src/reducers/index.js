import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import common from './common';
import menu from './menu';

export default combineReducers({
  routing,
  common,
  menu
});