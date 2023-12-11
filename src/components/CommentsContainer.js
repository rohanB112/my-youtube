import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Rohan Barman",
      text: "Hello! Nice to meet you...",
      replies: [
        {
          name: "Sunita Saha",
          text: "Hey, how are you?",
          replies: [
            {
              name: "Rohan Barman",
              text: "Im fine dear.",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Mrittika",
      text: "njwfebfkfkjwbfekfbj wbjkewfkjkw",
      replies: [
        {
          name: "Diya",
          text: "wkjbbf wfhjfbhfjhg dfdwbkfhbbhf",
          replies: [
            {
              name: "Mrittika",
              text: "hjbwffbwhf biuwubfwj buwfbbfbiw",
              replies: [],
            },
          ],
        },
      ],
    },
  ];
  return (
    <div className="p-4">
      <h1 className="font-bold text-xl mb-4">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
