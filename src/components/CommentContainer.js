import React from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Sanjay M D",
    text: "Hey! it is sanjay , how about you...",
    replies: [
      {
        name: "Sanjay M D",
        text: "Hey! it is sanjay , how about you...",
        replies: [],
      },
      {
        name: "Sanjay M D",
        text: "Hey! it is sanjay , how about you...",
        replies: [],
      },
      {
        name: "Sanjay M D",
        text: "Hey! it is sanjay , how about you...",
        replies: [],
      },
    ],
  },
  {
    name: "Sanjay M D",
    text: "Hey! it is sanjay , how about you...",
    replies: [],
  },
  {
    name: "Sanjay M D",
    text: "Hey! it is sanjay , how about you...",
    replies: [],
  },
  {
    name: "Sanjay M D",
    text: "Hey! it is sanjay , how about you...",
    replies: [
      {
        name: "Sanjay M D",
        text: "Hey! it is sanjay , how about you...",
        replies: [],
      },
      {
        name: "Sanjay M D",
        text: "Hey! it is sanjay , how about you...",
        replies: [
          {
            name: "Sanjay M D",
            text: "Hey! it is sanjay , how about you...",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Sanjay M D",
    text: "Hey! it is sanjay , how about you...",
    replies: [],
  },
  {
    name: "Sanjay M D",
    text: "Hey! it is sanjay , how about you...",
    replies: [
      {
        name: "Sanjay M D",
        text: "Hey! it is sanjay , how about you...",
        replies: [],
      },
      {
        name: "Sanjay M D",
        text: "Hey! it is sanjay , how about you...",
        replies: [],
      },
      {
        name: "Sanjay M D",
        text: "Hey! it is sanjay , how about you...",
        replies: [],
      },
    ],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="px-4">
      <h1 className="text-2xl font-bold">Comments : </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
