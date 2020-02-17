import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { InputField as input } from "./InputField";
import * as actions from "../../actions/userActions"

class RegistrationForm extends Component {
  onSubmit = formValues => {
    this.props.register(formValues)
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="w-full max-w-sm">
        <form
          onSubmit={handleSubmit(this.onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <Field name="first_name" component={input} label="First Name" />
          </div>
          <div className="mb-4">
            <Field name="last_name" component={input} label="Last Name" />
          </div>
          <div className="mb-4">
            <Field name="username" component={input} label="Username" />
          </div>
          <div className="mb-4">
            <Field name="location" component={input} label="Location" />
          </div>
          <div className="mb-4">
            <Field name="email" component={input} label="Email" />
          </div>
          <div className="mb-6">
            <Field name="password" component={input} label="Password" />
          </div>
          <div className="mb-6">
            <Field
              name="password_confirmation"
              component={input}
              label="Confirm Password"
            />
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
        <p>
          Don't have an account? <Link to="register">Sign up here!</Link>
        </p>
      </div>
    );
  };
};

export default compose(
  connect(null, actions),
  reduxForm({ form: "registration"})
)(RegistrationForm);
