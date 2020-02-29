/* URLS */
export const API_ENDPOINT = "http://localhost:3001/api/v1/";

/* ACTIONS */
export const ACTIONS = {
  ADD_HEADPHONE: "ADD_HEADPHONE",
  DELETE_HEADPHONE: "DELETE_HEADPHONE",
  ADD_REVIEW: "ADD_REVIEW",
  DELETE_REVIEW: "DELETE_REVIEW",
  LOAD_HEADPHONES: "LOAD_HEADPHONES",
  LOAD_REVIEWS: "LOAD_REVIEWS",
};

/* STATE */
export const INITIAL_APP_STATE = {
  headphones: [],
  reviews: []
};
