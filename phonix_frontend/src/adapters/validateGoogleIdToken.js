import {
  validateTokenPending,
  validateTokenSuccess,
  validateTokenError
} from "../actions/googleAuthActions";

import {
  API_ENDPOINT
} from "../config/constants";
import {
  makeRequest
} from "./API";


const validateGoogleIdToken = idToken => dispatch => {
  dispatch(validateTokenPending());

  try {
    makeRequest("POST", `${API_ENDPOINT}tokensignin`, {id_token: idToken})
  } catch (error) {
    dispatch(validateTokenError());
  }
}

export default validateGoogleIdToken;
