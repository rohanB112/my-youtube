import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Music",
    "Football",
    "Cricket",
    "Hindi Songs",
    "Study",
    "Lo-fi",
    "Nature sounds",
    "Messi",
    "Web development",
    "Javascript",
  ];

  return (
    <div className="flex mx-6 my-3">
      {list?.map((name) => {
        return <Button name={name} key={name} />;
      })}
    </div>
  );
};

export default ButtonList;
