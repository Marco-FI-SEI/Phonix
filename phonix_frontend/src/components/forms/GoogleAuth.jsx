import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions/googleAuthActions";
import validateGoogleIdToken from "../../adapters/googleAuthAdapter";

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
          window.gapi.load("signin2", () => {
            const options = {
              width: 200,
              height: 100
            };
            window.gapi.signin2.render("g-signin2", options);
          });
          this.auth = window.gapi.auth2.getAuthInstance();
          this.checkAuthStatus(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.checkAuthStatus);
        });
    });
  }

  checkAuthStatus = isSignedIn => {
    if (isSignedIn) {
      const user = this.auth.currentUser.get();
      const userProfile = user.getBasicProfile();
      const idToken = user.getAuthResponse().id_token;

      this.props.validateGoogleIdToken(idToken);
      this.props.signIn(userProfile.getId());
    } else {
      this.props.signOut();
    }
  };

  handleSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton = () => {
    if (this.props.isSignedIn) {
      return (
        <button
          onClick={this.handleSignOut}
          id="signOut"
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Sign Out
        </button>
      );
    } else {
      return <div className="g-signin2"></div>;
    }
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.googleAuth.isSignedIn,
    token: state.googleAuth.id_token
  };
};

export default connect(mapStateToProps, {
  signIn,
  signOut,
  validateGoogleIdToken
})(GoogleAuth);
