import React from "react";
import { Link } from "react-router-dom";

const SearchVideoCard = ({ info }) => {
  const { snippet, id } = info;
  const { channelTitle, description, thumbnails, title } = snippet || {};

  return (
    <Link to={"/watch?v=" + id.videoId}>
      <div className="m-3 p-3 flex">
        <img
          className="rounded-lg"
          alt="thumbnail"
          src={thumbnails?.medium?.url}
        />
        <div className="mx-4">
          <h1 className="text-lg font-sans">{title}</h1>
          <div className="flex">
            <img
              className="w-6 h-6 mt-3"
              alt="user"
              src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <h1 className="text-sm py-[13px] px-2">{channelTitle}</h1>
          </div>
          <p className="text-xs py-3">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchVideoCard;
