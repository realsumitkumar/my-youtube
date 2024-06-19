import React from "react";
import Button from "./Button";

const buttonList = [
  "Music",
  "Games",
  "Live",
  "Cricket",
  "Comedy",
  "News",
  "Mixes",
  "Drama",
  "Sit-coms",
  "Stand-Ups",
  "Funny Memes",
  "Dhruv Rathee",
];

const ButtonItems = () => {
  return (
    <div className="flex">
      {buttonList.map((items) => {
        return <Button key={items} name={items} />;
      })}
    </div>
  );
};

export default ButtonItems;
