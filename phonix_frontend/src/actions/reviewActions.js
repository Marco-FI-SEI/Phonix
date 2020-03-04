import {
  REVIEW_ACTIONS as actions
} from "../config/constants";

const {
  LOAD_REVIEWS,
  ADD_REVIEW,
  DELETE_REVIEW,
  UPDATE_REVIEW
} = actions;

const fetchReviews = reviews => {
  return {
    type: LOAD_REVIEWS,
    payload: reviews
  };
}

const addReview = review => {
  return {
    type: ADD_REVIEW,
    payload: review
  };
}

const deleteReview = id => {
  return {
    type: DELETE_REVIEW,
    payload: id
  };
}

export const editReview = response => {
  return {
    type: UPDATE_REVIEW,
    payload: response
  };
}

export {
  fetchReviews,
  addReview,
  deleteReview
};
