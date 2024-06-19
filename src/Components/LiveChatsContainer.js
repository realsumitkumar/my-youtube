import React, { useEffect, useState } from "react";
import LiveChats from "./LiveChats";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import generateRandomIndianName, {
  generateRandomComment,
} from "../utils/helper";

const LiveChatsContainer = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessagesSelector = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomIndianName(),
          message: generateRandomComment(),
        })
      );
    }, 5000);

    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div>
        <h1 className="font-bold text-lg mx-1">Live chats:</h1>
      </div>
      <div className="rounded-lg w-96 h-[23rem]  bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessagesSelector.map((chat, index) => (
            <LiveChats
              key={index}
              userName={chat.name}
              comment={chat.message}
            />
          ))}
        </div>
      </div>

      <form
        className="rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "You",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          placeholder="chat"
          value={liveMessage}
          className="border border-purple-200 rounded-lg w-9/12"
          onChange={(e) => setLiveMessage(e.target.value)}
        ></input>
        <button className="border border-gray-200 bg-purple-100 rounded-lg w-3/12">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChatsContainer;
