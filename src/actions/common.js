import {
  CHANGE_STASTUS_COLLAPSE
} from '../constants/actionTypes';

export const changeStatusCollapse = (value) => {
  return {
    type: CHANGE_STASTUS_COLLAPSE,
    value
  };
};