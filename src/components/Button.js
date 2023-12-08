import React from "react";

const Button = ({ name }) => {
  return (
    <div className="">
      <button className="px-5 py-2 mx-3 bg-gray-300 rounded-lg whitespace-nowrap ">
        {name}
      </button>
    </div>
  );
};

export default Button;
