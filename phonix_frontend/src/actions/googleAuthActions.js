import { AUTH_ACTION_TYPES } from "../config/constants";
const { SIGN_IN, SIGN_OUT } = AUTH_ACTION_TYPES;

const signIn = id => {
  return {
    type: SIGN_IN,
    payload: id
  };
};

const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export {
  signIn,
  signOut,
}
