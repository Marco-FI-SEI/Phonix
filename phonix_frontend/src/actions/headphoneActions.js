import {
  ACTIONS as actions
} from "../config/constants";
import {
  API_ENDPOINT
} from "../config/constants";
import ApiRequest from "../adapters/ApiRequest";

const {
  ADD_HEADPHONE,
  DELETE_HEADPHONE,
  LOAD_HEADPHONES
} = actions;

const api = new ApiRequest();

export const fetchHeadphones = () => dispatch => {
  return api.makeRequest("GET", `${API_ENDPOINT}headphones`)
    .then(headphones => {
      dispatch({
        type: LOAD_HEADPHONES,
        payload: headphones
      })
    })
}

export const addHeadphone = headphone => dispatch => {
  return api.makeRequest("POST", `${API_ENDPOINT}headphones`, headphone)
    .then(headphone => {
      dispatch({
        type: ADD_HEADPHONE,
        payload: headphone
      })
    })
}

export const deleteHeadphone = headphoneId => dispatch => {
  return api.makeRequest("DELETE", `${API_ENDPOINT}headphones`, headphoneId)
    .then(response => {
      dispatch({
        type: DELETE_HEADPHONE,
        payload: response.headphoneId
      })
    })
}
