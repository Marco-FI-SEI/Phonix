/* URLS */
export const API_ENDPOINT = "http://localhost:3001/api/v1/";

/* ACTIONS */
export const HEADPHONE_ACTIONS = {
  ADD_HEADPHONE: "ADD_HEADPHONE",
  DELETE_HEADPHONE: "DELETE_HEADPHONE",
  LOAD_HEADPHONES: "LOAD_HEADPHONES",
};

export const REVIEW_ACTIONS = {
  ADD_REVIEW: "ADD_REVIEW",
  DELETE_REVIEW: "DELETE_REVIEW",
  LOAD_REVIEWS: "LOAD_REVIEWS",
  UPDATE_REVIEW: "UPDATE_REVIEW"
};

/* AUTH ACTIONS */
export const AUTH_ACTIONS = {
  SIGN_IN: "SIGN_IN",
  SIGN_OUT: "SIGN_OUT",
  VALIDATE_TOKEN_PENDING: "VALIDATE_TOKEN_PENDING",
  VALIDATE_TOKEN_SUCCESS: "VALIDATE_TOKEN_SUCCESS",
  VALIDATE_TOKEN_ERROR: "VALIDATE_TOKEN_ERROR",
};

/* STATE */
export const INITIAL_APP_STATE = {
  auth: {
    isSignedIn: null,
    userId: null,
    idToken: null,
    tokenValidationPending: false,
    tokenValidationError: null,
    tokenValidationMessage: null,
  },
  headphones: [],
  reviews: []
};
