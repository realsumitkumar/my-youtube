import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_URL } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchYoutubeVideos();
  }, []);

  const fetchYoutubeVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_URL);
    const json = await data.json();
    setVideos(json?.items);
  };

  return (
    <div className="flex flex-wrap">
      {/* higher order component  */}
      {/* {videos[0] && <AdVideoCard info={videos[45]} />} */}

      {/* main video loading map function */}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
