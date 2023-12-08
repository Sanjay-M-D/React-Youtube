import React from "react";
import { MENU_LOGO, USER_LOGO, YOU_TUBE_LOGO } from "../utils/Contants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col  p-5 m-2 shadow-lg">
      <div className="flex col-span-2">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          alt="menu bar"
          src={MENU_LOGO}
        />
        <a href="/">
          <img className="h-8 px-3" alt="youtube logo" src={YOU_TUBE_LOGO} />
        </a>
      </div>
      <div className="col-span-9 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-400">
          Search
        </button>
      </div>
      <div className="col-span-1 ">
        <img className="h-10" alt="user logo" src={USER_LOGO} />
      </div>
    </div>
  );
};

export default Header;
