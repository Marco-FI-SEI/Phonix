import { INITIAL_APP_STATE as appState } from "../config/constants";
import { REVIEW_ACTION_TYPES as types } from "../config/constants";

export const reviewReducer = (state = appState, {type, payload}) => {
  switch(type) {
    case types.LOAD_REVIEWS_SUCCESS:
      return {
        ...state,
        headphoneReviewsCollection: payload
      }
    default:
      return state;
  }
}
