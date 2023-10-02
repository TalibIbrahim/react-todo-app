import React from "react";
import "../index.css";
const Card = (props) => {
  return (
    <div
      id="style-1"
      className="block overflow-y-scroll bg-neutral-900 h-4/5 card-width min-w-min rounded-lg  "
    >
      {props.children}
    </div>
  );
};

export default Card;
