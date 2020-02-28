import {
  ACTIONS as actions
} from "../config/constants";

const {
  LOAD_REVIEWS_SUCCESS,
  ADD_REVIEW,
  DELETE_REVIEW
} = actions;


export const loadReviewsSuccess = reviews => {
  return {
    type: LOAD_REVIEWS_SUCCESS,
    payload: reviews
  }
}

export const addReview = review => {
  return {
    type: ADD_REVIEW,
    payload: review
  }
}

export const deleteReview = reviewId => {
  return {
    type: DELETE_REVIEW,
    payload: reviewId
  }
}
