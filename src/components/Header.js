import React, { useEffect, useState } from "react";
import {
  MENU_LOGO,
  USER_LOGO,
  YOUTUBE_SEARCH_API,
  YOU_TUBE_LOGO,
} from "../utils/Contants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  // API call for debouncing
  // make an API call after every key press
  // but if the differnce between 2 API calls is <200ms
  // decline the API Call
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log("API Call - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    // Update Cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

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
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={(e) => setShowSuggestions(true)}
            onBlur={(e) => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full bg-gray-400">
            Search
          </button>
        </div>

        {showSuggestions && (
          <div className="fixed  bg-white py-2 px-2 w-[31rem]  shadow-lg rounded-lg border border-gray-100  ">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 px-1.5 shadow-sm hover:bg-gray-100"
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 ">
        <img className="h-10" alt="user logo" src={USER_LOGO} />
      </div>
    </div>
  );
};

export default Header;
