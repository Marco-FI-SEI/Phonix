import React from "react";
import { NavLink } from "react-router-dom";

export const LogoLink = () => {
  return (
    <NavLink
      to="/"
      className="block border-solid border-2 border-gray-900 px-8 py-8"
    >
      <p style={{ fontFamily: `Montserrat, sans-serif` }} className="text-xl">
        Phonix
      </p>
    </NavLink>
  );
};

// Define Auth nav items
const getUserName = user => {
  if (user.data) {
    return `Hi! ${user.data.first_name}`;
  }
};

export const Username = ({ user }) => {
  return <div>{getUserName(user)}</div>;
};
