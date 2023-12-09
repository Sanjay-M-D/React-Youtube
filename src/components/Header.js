import React, { useEffect, useState } from "react";
import {
  MENU_LOGO,
  USER_LOGO,
  YOUTUBE_SEARCH_API,
  YOU_TUBE_LOGO,
} from "../utils/Contants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);

  useEffect(() => {
    // API call
    // make an API call after every key press
    // but if the differnce between 2 API calls is <200ms
    // decline the API Call

    setTimeout(() => getSearchSuggestions(), 200);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
  };

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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
