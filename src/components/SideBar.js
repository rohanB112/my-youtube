import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early return
  if (!isMenuOpen) return null;

  return (
    <div className="shadow-lg w-48 p-5">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className="font-bold pt-5">You</h1>
      <ul>
        <li>Your channel</li>
        <li>History</li>
        <li>Your videos</li>
        <li>Watch Later</li>
        <li>Liked videos</li>
      </ul>
    </div>
  );
};

export default SideBar;
