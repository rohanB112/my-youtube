import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";
import { YOUTUBE_SEARCH_VIDEO_API } from "../utils/Constants";

const Head = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSuggestions = async () => {
    const res = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await res.json();
    setSuggestions(json[1]);
    console.log(json[1]);
  };

  return (
    <div className="grid grid-flow-col px-5 py-3 shadow-md">
      <div className="flex col-span-1 py-2">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-6 cursor-pointer"
          alt="Menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
        />
        <a href="/">
          <img
            className="h-6 ml-3 cursor-pointer"
            alt="Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>

      <div className="col-span-10 py-2 ">
        <div className="ml-32">
          <input
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="search"
            className="border border-gray-400 w-1/2 rounded-l-full px-4 py-1"
          />

          <Link to={"/search?q=" + searchText}>
            <button className="border border-gray-400 rounded-r-full py-1 px-3 hover:bg-[#F0F0F0]">
              🔍
            </button>
          </Link>

          {showSuggestions && (
            <div className="absolute bg-white mx-1 my-2 p-5 border border-gray-100 rounded-lg w-[450px]">
              <ul>
                {suggestions?.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="col-span-1">
        <img
          className="h-10"
          alt="User"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
