import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="m-2 mx-3 p-2 rounded-lg bg-gray-400">{name}</button>
    </div>
  );
};

export default Button;
