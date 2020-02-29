import {
  ACTIONS as actions
} from "../config/constants";
import {
  API_ENDPOINT
} from "../config/constants";
import ApiRequest from "../adapters/ApiRequest";

const {
  LOAD_REVIEWS,
  ADD_REVIEW,
  DELETE_REVIEW
} = actions;

const api = new ApiRequest();

export const fetchReviews = headphoneId => dispatch => {
  return api.makeRequest("GET", `${API_ENDPOINT}headphones/${headphoneId}/reviews`)
    .then(reviews => {
      dispatch({
        type: LOAD_REVIEWS,
        payload: reviews
      })
    })
}

export const addReview = (review, headphoneId) => dispatch => {
  return api.makeRequest("POST", `${API_ENDPOINT}headphones/${headphoneId}/reviews`, review)
    .then(review => {
      dispatch({
        type: ADD_REVIEW,
        payload: review
      })
    })
}

export const deleteReview = (reviewId, headphoneId) => dispatch => {
  return api.makeRequest("DELETE", `${API_ENDPOINT}headphones/${headphoneId}/reviews/${reviewId}`)
    .then(response => {
      dispatch({
        type: DELETE_REVIEW,
        payload: response.reviewId
      })
    })
}
