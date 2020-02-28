import {
  ACTIONS as actions
} from "../config/constants";

const {
  ADD_HEADPHONE,
  DELETE_HEADPHONE,
  LOAD_HEADPHONES_SUCCESS
} = actions;

export const loadHeadphonesSuccess = headphones => {
  return {
    type: LOAD_HEADPHONES_SUCCESS,
    payload: headphones
  }
}

export const addHeadphoneSuccess = headphone => {
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
