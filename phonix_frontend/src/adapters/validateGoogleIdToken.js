import {
  validateTokenPending,
  validateTokenSuccess,
  validateTokenError
} from "../actions/googleAuthActions";

import { API_ENDPOINT } from "../config/constants";

const validateGoogleIdToken = idToken => dispatch => {
  dispatch(validateTokenPending());

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ id_token: idToken })
  }

  fetch(`${API_ENDPOINT}tokensignin`, config)
    .then(result => result.json())
    .then(json => console.log(json));
}

export default validateGoogleIdToken;
