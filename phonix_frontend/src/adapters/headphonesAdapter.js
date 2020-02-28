import {
  API_ENDPOINT
} from "../config/constants";
import ApiRequest from "./ApiRequest";
import {
  addHeadphoneSuccess,
  loadHeadphonesSuccess
} from "../actions/headphoneActions";


const api = new ApiRequest();

export const loadHeadphones = () => dispatch => {
  return api.makeRequest("GET", `${API_ENDPOINT}headphones`)
    .then(headphones => {
      dispatch(loadHeadphonesSuccess(headphones))
    })
    .catch(error => {
      console.log(error);
    });
};

export const addHeadphone = formValues => dispatch => {
  return api.makeRequest("POST", `${API_ENDPOINT}headphones`, formValues)
    .then(headphone => {
      dispatch(addHeadphoneSuccess(headphone))
    })
    .catch(error => {
      console.log(error);
    });
};
