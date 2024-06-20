import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const selector = useSelector((state) => state.app.isMenuOpen);

  // Early return pattern
  if (!selector) {
    return null;
  }

  return (
    <div className="border-2 border-red-100 w-42 text-center m-2 p-2 h-[100%] scroll-b-10">
      <div>
        <ul className="shadow-lg">
          <Link to={"/"}>
            <li className="font-bold">Home</li>
          </Link>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>

        <ul className="shadow-lg mt-4">
          <h1 className="font-bold">Library</h1>
          <li>History</li>
          <li>Watch Later</li>
          <li>Liked Videos</li>
        </ul>

        <ul className="shadow-lg mt-4">
          <h1 className="font-bold">Explore</h1>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>
          <li>Learning</li>
          <li>Fashion & Beauty</li>
        </ul>

        <ul className="shadow-lg mt-4">
          <h1 className="font-bold">More from YouTube</h1>
          <li>YouTube Premium</li>
          <li>YouTube Studio</li>
          <li>YouTube Music</li>
          <li>YouTube Kids</li>
        </ul>

        <ul className="shadow-lg mt-4">
          <li>Settings</li>
          <li>Report History</li>
          <li>Help</li>
          <li>Send Feedback</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
