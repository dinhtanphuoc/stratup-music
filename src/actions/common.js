// import axios from 'axios';
import {
  CHANGE_STASTUS_COLLAPSE
} from '../constants/actionTypes';

// export const changeStatusCollapse = (value) => {
//   console.log(1111, value)
//   return {
//     type: CHANGE_STASTUS_COLLAPSE,
//     value
//   };
// };

export const changeStatusCollapse = (value) => ({
    type: CHANGE_STASTUS_COLLAPSE,
    value

});