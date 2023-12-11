import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center px-2">
      <img
        className="h-7"
        alt="User"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="p-2">
        <span className="text-[#707070] font-bold">{name}</span>
        <span className="mx-2">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
