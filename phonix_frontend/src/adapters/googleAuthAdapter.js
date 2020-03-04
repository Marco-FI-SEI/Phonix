import ApiRequest from "./ApiRequest";
import {
  API_ENDPOINT
} from "../config/constants";
import {
  validateTokenPending,
  validateTokenSuccess,
  validateTokenError
} from "../actions/googleAuthActions";

import history from "../history";


const api = new ApiRequest();

const validateGoogleIdToken = idToken => dispatch => {
  dispatch(validateTokenPending(idToken));

  api.makeRequest("POST", `${API_ENDPOINT}tokensignin`, { id_token: idToken })
    .then(response => {
      if (response.message === "SUCCESS") {
        dispatch(validateTokenSuccess());
        history.push("/headphones");
      } else {
        dispatch(validateTokenError(response));
      }
    });
};

export default validateGoogleIdToken;
