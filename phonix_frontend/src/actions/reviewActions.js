import { ACTIONS as actions } from "../config/constants";

const { LOAD_REVIEWS_SUCCESS } = actions;

export const loadReviewsSuccess = reviews => {
  return {
    type: LOAD_REVIEWS_SUCCESS,
    payload: reviews
  }
}
