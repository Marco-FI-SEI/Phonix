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
  DELETE_REVIEW,
  UPDATE_REVIEW
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

export const addReview = review => dispatch => {
  return api.makeRequest("POST", `${API_ENDPOINT}headphones/${review.headphone_id}/reviews`, review)
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

export const editReview = (reviewId, headphoneId) => {
  return api.makeRequest("PUT", `${API_ENDPOINT}headphones/${headphoneId}/reviews/${reviewId}`)
    .then(response => {
      console.log(response)
      // dispatch({
      //   type: UPDATE_REVIEW,
      //   payload: response
      // })
    })
}
