import React from "react";
import { Link } from "react-router-dom";
// import cuid from "cuid";

const HeadphoneList = ({ headphones }) => {
  return (
    <ul>
      {headphones.map(headphone => {
        return (
          <li key={headphone.id}>
            <div>
              <h3>
                <Link to={`/dashboard/${headphone.id}`}>
                  {headphone.model} - {headphone.manufacturer} - {headphone.id}
                </Link>
              </h3>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default HeadphoneList;
