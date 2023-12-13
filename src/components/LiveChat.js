import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessages, generateRandomNames } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const time = setInterval(() => {
      /** API Polling*/
      // console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomMessages(25) + "🚀",
        })
      );
    }, 2000);

    return () => clearInterval(time);
  }, []);

  return (
    <>
      <div className="ml-2 p-2 w-full h-[500px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black flex justify-between"
        onSubmit={(e) => {
          e.preventDefault();
          // console.log("ON Form Submit", liveMessage);
          dispatch(
            addMessage({
              name: "Sanjay",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-full px-2 py-1 "
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="mx-2 px-2 bg-green-300">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
