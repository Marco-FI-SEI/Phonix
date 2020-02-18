import React from "react";
import { withRouter, NavLink } from "react-router-dom";

export const LogoLink = () => {
  return (
    <div>
      <NavLink
        to="/"
        className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
      >
        <img className="h-20" src="logo.png" alt="Phonix logo" />
      </NavLink>
    </div>
  );
};

export const LoginLink = () => {
  return (
    <NavLink
      to="/login"
      className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
    >
      Login
    </NavLink>
  );
}

export const RegisterLink = () => {
  return (
    <NavLink
      to="/register"
      className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
    >
      Sign Up
    </NavLink>
  );
}

// export const LogoutLink = () => {
//   return <button onClick={() => logout()}>Logout</button>;
// }

// Define Auth nav items
const getUserName = user => {
  if (user.data) {
    return `Hi! ${user.data.first_name}`;
  }
};

export const Username = ({ user }) => {
  return <div>{getUserName(user)}</div>;
};
