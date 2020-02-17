import { withRouter } from "react-router-dom";

import LoginForm from "../components/forms/LoginForm";
import RegistrationForm from "../components/forms/RegistrationForm";
import {
  userIsAuthenticated,
  userIsNotAuthenticated
} from "../config/authentication";

// Define higher order components
export const Login = withRouter(userIsNotAuthenticated(LoginForm));
export const Register = withRouter(userIsNotAuthenticated(RegistrationForm));

// const Dashboard = userIsAuthenticated(DashboardPage);
