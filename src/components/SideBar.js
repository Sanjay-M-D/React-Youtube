import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <h1 className="font-bold">Home</h1>
      <ul>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold">You</h1>
      <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>Your videos</li>
        <li>Watch later</li>
        <li>Show more</li>
      </ul>
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold">Watch later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Learning</li>
      </ul>
    </div>
  );
};

export default SideBar;
