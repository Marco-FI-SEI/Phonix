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


export function authReducer(state = initialState.auth, {
  type,
  payload,
  error
}) {
  switch (type) {
    case SIGN_IN:
      console.log(state)
      return {
        ...state,
        isSignedIn: true,
        userId: payload
      };
    case SIGN_OUT:
      return state;
      
    case VALIDATE_TOKEN_PENDING:
      return {
        ...state,
        tokenValidationPending: true,
        idToken: payload
      };
    case VALIDATE_TOKEN_SUCCESS:
      return {
        ...state,
        tokenValidationPending: false,
        tokenValidationMessage: payload
      };
    case VALIDATE_TOKEN_ERROR:
      return {
        ...state,
        tokenValidationPending: false,
        tokenValidationMessage: payload,
        error: error
      };
    default:
      return state;
  }
};
