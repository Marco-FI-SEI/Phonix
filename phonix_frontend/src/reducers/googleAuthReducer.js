import {
  INITIAL_APP_STATE as initialState
} from "../config/constants";
import {
  AUTH_ACTIONS
} from "../config/constants";

const {
  SIGN_IN,
  SIGN_OUT,
  VALIDATE_TOKEN_PENDING,
  VALIDATE_TOKEN_SUCCESS,
  VALIDATE_TOKEN_ERROR
} = AUTH_ACTIONS;


export function authReducer(state = initialState, {
  type,
  payload,
  error
}) {
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
    case VALIDATE_TOKEN_PENDING:
      return {
        ...state,
        pending: true,
        idToken: payload
      };
    case VALIDATE_TOKEN_SUCCESS:
      return {
        ...state,
        pending: false,
        message: payload
      };
    case VALIDATE_TOKEN_ERROR:
      return {
        ...state,
        pending: false,
        message: payload,
        error: error
      };
    default:
      return state;
  }
};
