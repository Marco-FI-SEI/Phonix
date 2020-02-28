import uuid from 'uuid';

import {
  INITIAL_APP_STATE as initialState
} from "../config/constants";
import {
  ACTIONS as actions
} from "../config/constants";

const {
  ADD_HEADPHONE,
  DELETE_HEADPHONE,
  ADD_REVIEW,
  DELETE_REVIEW,
  LOAD_HEADPHONES_SUCCESS,
  LOAD_REVIEWS_SUCCESS
} = actions;

export const forumReducer = (state = initialState, {
  type,
  payload
}) => {
  console.log(payload)

  switch (type) {
    case LOAD_HEADPHONES_SUCCESS:
      return {
        ...state,
        headphones: [...payload]
      };
    case LOAD_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: [...payload]
      };
    case ADD_HEADPHONE:
      const headphone = {
        id: uuid(),
        model: payload.model,
        manufacturer: payload.manufacturer
      };
      return {
        ...state,
        headphones: [...state.headphones, headphone]
      };
    case DELETE_HEADPHONE:
      const headphones = state.headphones.filter(headphone => headphone.id !== payload.id);
      return {
        ...state,
        headphones
      };
    case ADD_REVIEW:
      const review = {
        id: uuid(),
        title: payload.title,
        body: payload.body,
        headphoneId: payload.headphoneId
      };
      return {
        ...state,
        reviews: [...state.reviews, review]
      }
      case DELETE_REVIEW:
        console.log(payload)
        const reviews = state.reviews.filter(review => review.id !== payload);

        return {
          ...state,
          reviews
        };
      default:
        return state;
  }
};
