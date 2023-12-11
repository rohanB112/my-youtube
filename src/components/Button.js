import React from "react";

const Button = ({ name }) => {
  return (
    <div className="m-2 px-3 py-2 rounded-lg text-xs font-bold bg-gray-200">
      {name}
    </div>
  );
};

export default Button;
