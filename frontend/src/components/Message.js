import React from "react";

const Message = ({ text, sender }) => {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`px-4 py-2 rounded-2xl max-w-[70%] text-white ${
          isUser ? "bg-lavender text-black" : "bg-blue-500"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default Message;
