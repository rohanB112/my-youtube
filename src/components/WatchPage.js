import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import { YOUTUBE_VIDEO_BY_ID_API } from "../utils/Constants";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideoDetails();
  }, []);

  const [searchParams] = useSearchParams();
  const [videoDetails, setVideoDetails] = useState([]);

  const getVideoDetails = async () => {
    const data = await fetch(YOUTUBE_VIDEO_BY_ID_API + searchParams.get("v"));
    const json = await data.json();
    setVideoDetails(json.items[0]);
  };

  // console.log(videoDetails);

  const { snippet, statistics } = videoDetails || {};
  const { channelTitle, title, description } = snippet || {};
  const { likeCount, viewCount } = statistics || {};

  return (
    <div className=" w-full mx-4">
      <div className="mx-24 mt-8 mb-2 flex  ">
        <div>
          <iframe
            className="rounded-xl"
            width="640"
            height="358"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <div>
            <div className="w-[640px]">
              <h1 className="font-bold text-lg">{title} </h1>
              <div className="flex py-3">
                <img
                  className="w-10"
                  alt="channel"
                  src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                />
                <h1 className="mt-2 px-3 font-medium">{channelTitle}</h1>
                <button className="w-[92px] bg-black text-white rounded-full text-sm font-bold">
                  Subscribe
                </button>

                <div className="ml-28 flex bg-gray-100 py-2 px-4 rounded-full ">
                  <div className="flex mr-3">
                    <ThumbUpOffAltIcon />
                    <p className="pl-1 mr-3">{likeCount} |</p>
                  </div>

                  <ThumbDownOffAltIcon />
                </div>
              </div>
              <div className="bg-[#F2F2F2] px-3 py-1 rounded-xl">
                <h1 className="font-bold">{viewCount} Views</h1>
                <p className="py-3">{description}</p>
              </div>
            </div>

            <CommentsContainer />
          </div>
        </div>

        <div>
          <LiveChat />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
