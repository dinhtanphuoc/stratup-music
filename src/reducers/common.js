import {
  CHANGE_STASTUS_COLLAPSE
} from '../constants/actionTypes';

const initialState = {
  collapse: false
}

export default function(state = initialState, action) {
  console.log(action, 111111111);
  switch (action.type) {
    case CHANGE_STASTUS_COLLAPSE:
    console.log(action);
      return {
        ...state,
        collapse: action.value
      };

    default:
      return state;
  }
}