import React from "react";

const LiveChats = ({ userName, comment }) => {
  return (
    <div>
      <div className="shadow-sm my-1 rounded-md ">
        <div className="flex">
          <img
            className="mx-1 rounded-md w-8 h-8"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2j71u2ipMbi4uUIcRaomOvJOSPkvvUPWFA&s"
            alt="user-logo"
          />
          <div className="">
            <span className="font-bold">{userName}-</span>
            <span className="">{comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChats;
