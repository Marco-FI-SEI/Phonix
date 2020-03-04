import ApiRequest from "./ApiRequest";
import {
  API_ENDPOINT
} from "../config/constants";
import {
  fetchReviews,
  addReview,
  editReview,
  deleteReview
} from "../actions/reviewActions";

import history from "../history";

const api = new ApiRequest();

const getReviews = headphoneId => dispatch => {
  api.makeRequest("GET", `${API_ENDPOINT}/headphones/${headphoneId}/reviews`)
    .then(reviews => dispatch(fetchReviews(reviews)))
    .catch(error => console.log(error));
};

const newReview = review => dispatch => {
  api.makeRequest("POST", `${API_ENDPOINT}/headphones/${review.headphone_id}/reviews`, review)
    .then(review => dispatch(addReview(review)))
    .catch(error => console.log(error));

  history.push(`/headphones`);
};

const removeReview = (reviewId, headphoneId) => dispatch => {
  api.makeRequest("DELETE", `${API_ENDPOINT}headphones/${headphoneId}/reviews/${reviewId}`)
    .then(response => dispatch(deleteReview(response.reviewId)))
    .catch(error => console.log(error));
  // .then(() => history.push("/reviews"))
};

const updateReview = (review, reviewId) => dispatch => {
  api.makeRequest("PUT", `${API_ENDPOINT}headphones/${review.headphone_id}/reviews/${reviewId}`, review)
    .then(review => dispatch(editReview(review)))
    .catch(error => console.log(error));

  history.push(`/headphones`);
}

export {
  getReviews,
  newReview,
  removeReview,
  updateReview
};
