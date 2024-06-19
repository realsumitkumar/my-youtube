import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  return (
    <div className="w-64 m-2 p-2 shadow-lg">
      <img
        className="rounded-lg"
        src={snippet?.thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <ul>
        <li className="font-bold truncate w-64 my-1">
          {snippet?.localized.title}
        </li>
        <li className="truncate w-64">{snippet?.channelTitle}</li>
        <li>{statistics?.viewCount} Views</li>
        {/* <li>{snippet?.publishedAt}</li> */}
      </ul>
    </div>
  );
};

// higher order component
export const AdVideoCard = ({ info }) => {
  return (
    <div className="border border-red-800">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
