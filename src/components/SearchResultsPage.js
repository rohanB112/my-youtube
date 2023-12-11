import React, { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_VIDEO_API } from "../utils/Constants";
import { useSearchParams } from "react-router-dom";
import SearchVideoCard from "./SearchVideoCard";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getSearchResults();
  }, [searchParams]);

  const getSearchResults = async () => {
    const data = await fetch(YOUTUBE_SEARCH_VIDEO_API + searchParams.get("q"));
    const json = await data.json();
    console.log(json.items);
    setSearchResults(json.items);
  };

  return (
    <div>
      {searchResults.map((video) => (
        <div>
          <SearchVideoCard info={video} />
          {console.log(video)}
        </div>
      ))}
    </div>
  );
};

export default SearchResultsPage;
