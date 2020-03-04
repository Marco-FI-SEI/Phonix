import {
  HEADPHONE_ACTIONS as actions
} from "../config/constants";

const {
  ADD_HEADPHONE,
  DELETE_HEADPHONE,
  LOAD_HEADPHONES
} = actions;

const fetchHeadphones = headphones => {
  return {
    type: LOAD_HEADPHONES,
    payload: headphones
  }
}

const addHeadphone = headphone => {
  return {
    type: ADD_HEADPHONE,
    payload: headphone
  }
}

// const deleteHeadphone = headphoneId => dispatch => {
//   return api.makeRequest("DELETE", `${API_ENDPOINT}headphones`, headphoneId)
//     .then(response => {
//       dispatch({
//         type: DELETE_HEADPHONE,
//         payload: response.headphoneId
//       })
//     })
// }

export {
  fetchHeadphones,
  addHeadphone,
  // deleteHeadphone
};
