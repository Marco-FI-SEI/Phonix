import {
  AUTH_ACTION_TYPES
} from "../config/constants";
const {
  SIGN_IN,
  SIGN_OUT,
  VALIDATE_TOKEN_PENDING,
  VALIDATE_TOKEN_SUCCESS,
  VALIDATE_TOKEN_ERROR
} = AUTH_ACTION_TYPES;

const signIn = id => {
  return {
    type: SIGN_IN,
    payload: id
  };
};

const validateTokenPending = idToken => {
  return {
    type: VALIDATE_TOKEN_PENDING,
    payload: idToken
  }
}

const validateTokenSuccess = () => {
  return {
    type: VALIDATE_TOKEN_SUCCESS,
    payload: "Success"
  }
}

const validateTokenError = error => {
  return {
    type: VALIDATE_TOKEN_ERROR,
    payload: "Error",
    error: error
  }
}

const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export {
  signIn,
  signOut,
  validateTokenPending,
  validateTokenSuccess,
  validateTokenError
};
