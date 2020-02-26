import { INITIAL_APP_STATE as appState } from "../config/constants";
import { HEADPHONE_ACTION_TYPES as types } from "../config/constants";

export const headphoneReducer = (state = appState, {type, payload}) => {
  switch(type) {
    case types.LOAD_HEADPHONES_SUCCESS:
      return {
        ...state,
        headphonesCollection: payload
      }
    default:
      return state;
  }
}
