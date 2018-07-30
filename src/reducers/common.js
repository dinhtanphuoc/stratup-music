import {
  CHANGE_STASTUS_COLLAPSE
} from '../constants/actionTypes';

const initialState = {
  collapse: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STASTUS_COLLAPSE:
      return {
        ...state,
        collapse: action.value
      };

    default:
      return state;
  }
}