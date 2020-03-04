import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import ReviewForm from "./ReviewForm";

import { newReview, updateReview} from "../../adapters/reviewsAdapter";

const CreateReviewForm = props => <ReviewForm {...props} mode="create" />;
const EditReviewForm = props => <ReviewForm {...props} mode="edit" />;

export const InitialCreateReviewForm = reduxForm({
  form: "createreview",
  initialValues: {
    rating: {
      label: "1 Star",
      value: 1
    }
  }
})(CreateReviewForm);

const InitialEditReviewForm = reduxForm({
  form: "editreview"
})(EditReviewForm);


const mapStateToProps = (_, ownProps) => {
  const { review } = ownProps.location.state;
  const value = review.rating;
  const label = `${value} Star`;

  const configuredReview = {
    ...review,
    rating: {
      value,
      label
    }
  }

  return {
    initialValues: configuredReview,
    review
  };
}

export const ConnectedCreateReviewForm = connect(null, { newReview })(InitialCreateReviewForm);
export const ConnectedEditReviewForm = connect(mapStateToProps, { updateReview })(InitialEditReviewForm);
