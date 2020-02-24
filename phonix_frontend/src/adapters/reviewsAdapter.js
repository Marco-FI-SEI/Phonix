import { API_ENDPOINT } from "../config/constants";
import { makeRequest } from "../adapters/API";
import { loadReviewsSuccess } from "../actions/reviewActions";

export const loadReviews = () => dispatch => {
  return makeRequest("GET", `${API_ENDPOINT}reviews`)
    .then(reviews => {
      dispatch(loadReviewsSuccess(reviews))
    })
    .catch(error => {
      console.log(error);
    });
};
