import {
  ACTIONS as actions
} from "../config/constants";

const {
  ADD_HEADPHONE,
  DELETE_HEADPHONE,
  ADD_REVIEW,
  DELETE_REVIEW,
  LOAD_HEADPHONES_SUCCESS
} = actions;

export const loadHeadphonesSuccess = headphones => {
  return {
    type: LOAD_HEADPHONES_SUCCESS,
    payload: headphones
  }
}

export const addHeadphone = headphone => {
  return {
    type: ADD_HEADPHONE,
    payload: headphone
  }
}

export const deleteHeadphone = headphoneId => {
  return {
    type: DELETE_HEADPHONE,
    payload: headphoneId
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
