import React from "react";
import cuid from "cuid";

const HeadphoneList = ({ headphones }) => {
  return (
    <ul>
      {headphones.map(headphone => {
        return (
          <li key={cuid()}>
            <div>
              <h3>
                {headphone.model} - {headphone.manufacturer}
              </h3>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default HeadphoneList;
