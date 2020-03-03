import React, { Component } from "react";
import { Field } from "redux-form";

import { TextArea } from "./TextArea";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";


class ReviewForm extends Component {
  onSubmit = formValues => {
    const { headphone } = this.props.location.state;

    const reviewData = {
      title: formValues.title,
      body: formValues.body,
      rating: formValues.rating.value,
      headphone_id: headphone.id.toString()
    };

    // console.log(this.props)

    if (this.props.mode === "create") {
      console.log("hi")
      this.props.addReview(reviewData);
    } else {
      console.log("hi2");

      this.props.editReview(reviewData);
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
      <div>
        <div>
          <h1>
            {
              mode === "create"
              ? `Leave a review for the ${headphone.manufacturer} ${headphone.model}!`
              : "Edit your review!"
            }
          </h1>
        </div>
        <div className="container mx-auto w-1/12">
          <form
            onSubmit={handleSubmit(this.onSubmit)}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <Field name="title" component={InputField} label="Title" />
            </div>
            <div className="mb-6">
              <Field name="body" component={TextArea} label="Body" />
            </div>
            <div className="mb-4">
              <Field
                name="rating"
                component={SelectField}
                label="Rating"
                options={ratingOptions}
              />
            </div>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={pristine || submitting}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ReviewForm;
