import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info || {};
  const { channelTitle, thumbnails, title } = snippet || {};
  const { viewCount } = statistics || {};
  return (
    <div className="p-2 m-2 w-64 shadow-lg">
      <img className="rounded-lg" src={thumbnails?.medium?.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        {viewCount ? <li>{viewCount} views</li> : null}
      </ul>
    </div>
  );
};

export default VideoCard;
