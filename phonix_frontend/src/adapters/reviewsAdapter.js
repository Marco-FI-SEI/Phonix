import {
  API_ENDPOINT
} from "../config/constants";
import ApiRequest from "./ApiRequest";
import { loadReviewsSuccess } from "../actions/reviewActions";

const api = new ApiRequest();

export const loadReviews = headphoneId => dispatch => {
  return api.makeRequest("GET", `${API_ENDPOINT}headphones/${headphoneId}/reviews`)
    .then(reviews => {
      dispatch(loadReviewsSuccess(reviews))
    })
    .catch(error => {
      console.log(error);
    });
};
