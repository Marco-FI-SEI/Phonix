import React from "react";
import { withRouter, NavLink } from "react-router-dom";

import { userIsAuthenticated, userIsNotAuthenticated } from "./authentication";

export const LogoLink = () => {
  return (
    <div>
      <NavLink
        to="/"
        className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">
        <img className="h-20" src="logo.png" alt="Phonix logo" />
      </NavLink>
    </div>
  );
};

export const LoginLink = withRouter(
  userIsNotAuthenticated(() => {
    return (
      <NavLink
        to="/login"
        className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">
        Login
      </NavLink>
    );
  })
);

export const RegisterLink = withRouter(
  userIsNotAuthenticated(() => {
    return (
      <NavLink
        to="/register"
        className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">
        Sign Up
      </NavLink>
    );
  })
);

export const LogoutLink = withRouter(
  userIsAuthenticated(({ logout }) => {
    return <button onClick={() => logout()}>Logout</button>;
  })
);

// Define Auth nav items
const getUserName = user => {
  if (user.data) {
    return `Hi! ${user.data.first_name}`;
  }
};

export const Username = ({ user }) => {
  return <div>{getUserName(user)}</div>;
};
