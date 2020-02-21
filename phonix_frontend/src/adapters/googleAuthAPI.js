import { connect } from "react-redux";

class GoogleAuthAPI {
  constructor() {
    this.clientId = "213179697215-iop41i8oenuno9ns0muslgti1vf72rif.apps.googleusercontent.com"
    this.scope = "email"
  }

  init = () => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: "213179697215-iop41i8oenuno9ns0muslgti1vf72rif.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.handleAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.handleAuthChange);
        });
    });
  };



  signIn = () => {
    this.auth.signIn();
  };

  signOut = () => {
    this.auth.signOut();
  };
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.googleAuth.isSignedIn
  };
};

export default connect(mapStateToProps)(GoogleAuthAPI);
