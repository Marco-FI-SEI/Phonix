import {
  INITIAL_APP_STATE as initialState
} from "../config/constants";
import {
  HEADPHONE_ACTIONS as actions
} from "../config/constants";

const {
  ADD_HEADPHONE,
  DELETE_HEADPHONE,
  LOAD_HEADPHONES,
} = actions;

export const headphoneReducer = (state = initialState.headphones, {
  type,
  payload
}) => {
  switch (type) {

    case LOAD_HEADPHONES:
      return payload;

    case ADD_HEADPHONE:
      const headphone = {
        model: payload.model,
        manufacturer: payload.manufacturer
      };

      return [...state, headphone];

    case DELETE_HEADPHONE:
      const headphones = state.headphones.filter(headphone => headphone.id !== payload.id);

      return headphones;

    default:
      return state;
  }
};
