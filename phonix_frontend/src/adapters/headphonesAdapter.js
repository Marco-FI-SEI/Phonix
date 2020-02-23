import { API_ENDPOINT } from "../config/constants";
import { makeRequest } from "../adapters/API";
import { loadHeadphonesSuccess } from "../actions/headphoneActions";

export const loadHeadphones = () => dispatch => {
  return makeRequest("GET", `${API_ENDPOINT}headphones`)
    .then(headphones => {
      dispatch(loadHeadphonesSuccess(headphones))
    });
};
