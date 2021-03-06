import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { InputField as input } from "./InputField";
import { newHeadphone } from "../../adapters/headphonesAdapter";

class HeadphoneForm extends Component {
  onSubmit = formValues => {
    this.props.newHeadphone(formValues);
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
            <Field name="model" component={input} label="model" />
          </div>
          <div className="mb-6">
            <Field name="manufacturer" component={input} label="Manufacturer" />
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

export default compose(
  connect(null, { newHeadphone }),
  reduxForm({ form: "headphone" })
)(HeadphoneForm);
