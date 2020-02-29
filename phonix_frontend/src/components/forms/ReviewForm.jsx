import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { TextArea as textarea } from "./TextArea";
import { InputField as input } from "./InputField";
import { addReview } from "../../actions/reviewActions";

class ReviewForm extends Component {
  onSubmit = formValues => {
    this.props.addReview(formValues);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit(this.onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <Field name="title" component={input} label="Title" />
          </div>
          <div className="mb-6">
            <Field name="Body" component={textarea} label="Body" />
          </div>
          <div className="mb-4">
            <Field name="rating" component={input} label="Rating" />
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)

  return {
    state
  }
}

export default compose(
  connect(mapStateToProps, { addReview }),
  reduxForm({ form: "review" })
)(ReviewForm);
