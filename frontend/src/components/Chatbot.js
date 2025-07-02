import React, { useState, useEffect } from "react";
import Message from "./Message";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const botReply = { text: "I'm just a simple bot 🤖", sender: "bot" };
      setMessages((prev) => [...prev, botReply]);
      setTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="h-screen flex flex-col items-center justify-between px-4 py-6 bg-gray-100">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg flex flex-col h-full">
        <div className="bg-purple-600 text-white text-xl font-bold p-4 rounded-t-xl">
          🤖 Chatbot
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((msg, i) => (
            <Message key={i} text={msg.text} sender={msg.sender} />
          ))}
          {typing && <Message text="Typing..." sender="bot" />}
        </div>

        <div className="p-4 border-t flex">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-l-xl px-4 py-2 outline-none"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleSend}
            className="bg-purple-500 text-white px-4 py-2 rounded-r-xl hover:bg-purple-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
