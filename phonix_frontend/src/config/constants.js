/* URLS */
export const API_ENDPOINT = "http://localhost:3001/api/v1/";
export const LOGIN_URL = `${API_ENDPOINT}sessions`;
export const REGISTRATION_URL = `${API_ENDPOINT}registrations`;

/* SERVER */
export const SERVER_STATUS_MESSAGES = {
  400: ":bad_request",
  401: ":unathorized",
  403: ":forbidden",
  404: ":not_found",
  422: ":unprocessable_entity",
  500: ":internal_server_error"
};

/* AUTH */
export const AUTH_ACTION_TYPES = {
  SIGN_IN: "SIGN_IN",
  SIGN_OUT: "SIGN_OUT",
  VALIDATE_TOKEN_PENDING: "VALIDATE_TOKEN_PENDING",
  VALIDATE_TOKEN_SUCCESS: "VALIDATE_TOKEN_SUCCESS",
  VALIDATE_TOKEN_ERROR: "VALIDATE_TOKEN_ERROR"
};

/* HEADPHONE ACTIONS */
export const HEADPHONE_ACTION_TYPES = {
  LOAD_HEADPHONES_SUCCESS: "LOAD_HEADPHONES_SUCCESS"
};

/* REVIEW ACTIONS */
export const REVIEW_ACTION_TYPES = {
  LOAD_REVIEWS_SUCCESS: "LOAD_REVIEWS_SUCCESS"
};

/* STATE */
export const INITIAL_APP_STATE = {
  isSignedIn: null,
  userId: null,
  gOAuthPending: false,
  tokenError: null,
  gAuthMessage: null,
  gAuthIdToken: null,
  headphones: [],
  reviews: []
};
