import { HEADPHONE_ACTION_TYPES as types } from "../config/constants";

const { LOAD_HEADPHONES_SUCCESS } = types;

export const loadHeadphonesSuccess = (headphones) => {
  return {
    type: LOAD_HEADPHONES_SUCCESS,
    payload: headphones
  }
}
