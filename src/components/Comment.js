import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 my-2 rounded-lg">
      <img
        className="w-12 h-12"
        src="https://iconape.com/wp-content/files/jh/12297/png/user-circle.png"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
