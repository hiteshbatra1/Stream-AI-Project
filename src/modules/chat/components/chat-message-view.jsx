"use client";
import React, { useState } from "react";
import ChatWelcomeTabs from "./chat-welcome-tabs";
import ChatMessageForm from "./chat-message-form";

const ChatMessageView = ({ user }) => {
  const [selectedMessage, setSelectedMessage] = useState("");

  const handleMessageSelect = (message) => {
    setSelectedMessage(message);
  };

  const handleMessageChange = () => {
    setSelectedMessage("");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 py-8 md:py-0 md:space-y-10 space-y-6 overflow-auto">
      <ChatWelcomeTabs
        username={user?.name}
        onMessageSelect={handleMessageSelect}
      />
      <ChatMessageForm
        initialMessage={selectedMessage}
        onMessageChange={handleMessageChange}
      />
    </div>
  );
};

export default ChatMessageView;
