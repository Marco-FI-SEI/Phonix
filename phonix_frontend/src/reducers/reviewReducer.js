import {
  INITIAL_APP_STATE as initialState
} from "../config/constants";
import {
  REVIEW_ACTIONS as actions
} from "../config/constants";

const {
  ADD_REVIEW,
  UPDATE_REVIEW,
  DELETE_REVIEW,
  LOAD_REVIEWS
} = actions;

export const reviewReducer = (state = initialState.reviews, {
  type,
  payload
}) => {
  switch (type) {
    case LOAD_REVIEWS:
      return payload;

    case ADD_REVIEW:
      const review = {
        title: payload.title,
        body: payload.body,
        rating: payload.rating,
        headphoneId: payload.headphoneId,
        userId: payload.userId
      };

      return [...state, review];

    case UPDATE_REVIEW:
      const updated_review = {
        title: payload.title,
        body: payload.body,
        rating: payload.rating,
        headphoneId: payload.headphoneId,
        userId: payload.userId
      };

      return [...state, updated_review];

      case DELETE_REVIEW:
        const reviews = state.filter(review => review.id !== payload);
        return reviews;

      default:
        return state;
  }
};
