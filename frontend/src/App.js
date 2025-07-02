import React, { useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">🤖 Chatbot</h1>
      <div className="bg-white w-full max-w-md h-[400px] rounded-lg shadow p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <span className="bg-blue-100 p-2 rounded text-sm block">
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex mt-4 w-full max-w-md">
        <input
          className="flex-1 border border-gray-300 rounded-l p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
