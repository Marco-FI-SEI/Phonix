import { INITIAL_STATE as initialState } from "../config/constants";
import { AUTH_ACTION_TYPES }  from "../config/constants";

const { SIGN_IN, SIGN_OUT } = AUTH_ACTION_TYPES;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        userId: payload
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        userId: null
      };
    default:
      return state;
  }
};
