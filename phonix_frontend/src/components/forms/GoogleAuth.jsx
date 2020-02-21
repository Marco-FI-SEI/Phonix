import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions/googleAuthActions";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "213179697215-iop41i8oenuno9ns0muslgti1vf72rif.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.handleAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.handleAuthChange);
        });
    });
  }

  handleAuthChange = isSignedIn => {
    isSignedIn
      ? this.props.signIn(this.auth.currentUser.get().getId())
      : this.props.signOut();
  };

  handleAuthClick = e => {
    e.target.name === "signIn" ? this.auth.signIn() : this.auth.signOut();
  };

  renderAuthButton = () => {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.handleAuthClick}
          name="signOut"
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          onClick={this.handleAuthClick}
          name="signIn"
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Sign In
        </button>
      );
    }
  };

  render() {
    return <div>{ this.renderAuthButton() }</div>;
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.googleAuth.isSignedIn
  };
};

export default connect(mapStateToProps,{
  signIn,
  signOut
})(GoogleAuth);
