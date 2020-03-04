import ApiRequest from "./ApiRequest";
import {
  API_ENDPOINT
} from "../config/constants";
import {
  fetchHeadphones,
  addHeadphone,
  // deleteHeadphone
} from "../actions/headphoneActions";

import history from "../history";

const api = new ApiRequest();

const getHeadphones = () => dispatch => {
  api.makeRequest("GET", `${API_ENDPOINT}headphones`)
    .then(headphones => dispatch(fetchHeadphones(headphones)))
    .catch(error => console.log(error));
};

const newHeadphone = headphone => dispatch => {
  api.makeRequest("POST", `${API_ENDPOINT}headphones`, headphone)
    .then(headphone => {
      dispatch(addHeadphone(headphone));

      history.push(`/headphones`);
    });
};

// const removeHeadphone = headphoneId => dispatch => {
//   dispatch(deleteHeadphone(headphoneId));

//   api.makeRequest("DELETE", `${API_ENDPOINT}headphones`, headphoneId)
//     .then(() => history.push("/headphones"))
//     .catch(error => console.log(error));
// };

export {
  getHeadphones,
  newHeadphone,
  // removeHeadphone
};
