import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const liveMessage = useSelector((store) => store.chat.messages);

  const [sendMessage, setSendMessage] = useState("");

  console.log(process.env.REACT_APP_KEY);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20) + "🚀",
        })
      );

      return () => clearInterval(interval);
    }, 2000);
  }, []);
  return (
    <>
      <div className="ml-10 p-2 border border-black w-[380px] h-[360px] rounded-xl overflow-y-scroll flex flex-col-reverse">
        {liveMessage?.map((c) => {
          return <ChatMessage name={c.name} message={c.message} />;
        })}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "rohanB112",
              message: sendMessage,
            })
          );
          setSendMessage("");
        }}
        className="ml-[44px]"
      >
        <input
          onChange={(e) => {
            setSendMessage(e.target.value);
            console.log(e.target.value);
          }}
          value={sendMessage}
          className="py-2 px-4 bg-[#F2F2F2] w-64 rounded-full text-[#6B6B6B]"
          placeholder="Chat"
        ></input>
        <button className="p-2 rounded-full bg-black text-white w-24 m-2">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
