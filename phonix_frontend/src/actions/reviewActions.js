import { REVIEW_ACTION_TYPES as types } from "../config/constants";

const { LOAD_REVIEWS_SUCCESS } = types;

export const loadReviewsSuccess = (reviews) => {
  return {
    type: LOAD_REVIEWS_SUCCESS,
    payload: reviews
  }
}
