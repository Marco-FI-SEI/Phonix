import React, { Component } from "react";
import { Field } from "redux-form";

import { TextArea } from "./TextArea";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";

class ReviewForm extends Component {
  onSubmit = formValues => {
    const { headphone, review } = this.props.location.state;
    const { title, body, rating } = formValues;
    const headphone_id = headphone.id.toString();

    const reviewData = {
      title,
      body,
      rating: rating.value,
      headphone_id
    };

    if (this.props.mode === "create") {
      this.props.newReview(reviewData);
    } else {
      this.props.updateReview(reviewData, review.id);
    }
  };

  render() {
    const { handleSubmit, pristine, submitting, mode } = this.props;
    const { headphone } = this.props.location.state;
    const ratingOptions = [
      {
        label: "1 Star",
        value: 1
      },
      {
        label: "2 Star",
        value: 2
      },
      {
        label: "3 Star",
        value: 3
      },
      {
        label: "4 Star",
        value: 4
      },
      {
        label: "5 Star",
        value: 5
      }
    ];

    return (
      <div className="h-full">
        <div className="h-20% text-center pt-20">
          <h1 className="text-4xl">
            {mode === "create"
              ? `Leave a review for the ${headphone.manufacturer} ${headphone.model}!`
              : "Edit your review!"}
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(this.onSubmit)}
          className="bg-white shadow-md rounded h-50% px-8 pt-6 pb-8 mb-4 container mx-auto"
        >
          <div className="mb-4 w-1/2">
            <Field name="title" component={InputField} label="Title" />
          </div>
          <div className="mb-6">
            <Field name="body" component={TextArea} label="Body" />
          </div>
          <div className="mb-4 w-1/4">
            <Field
              name="rating"
              component={SelectField}
              label="Rating"
              options={ratingOptions}
            />
          </div>
          <div className="relative">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline absolute right-0"
              type="submit"
              disabled={pristine || submitting}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
