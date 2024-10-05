import ChatsList from "@/components/conversation/chats";
import ClosedChat from "@/components/conversation/closed_chat";
import React from "react";

const ConversationContainer = () => {
  return (
    <section className="conversation-container">
      <ChatsList />
      <ClosedChat />
    </section>
  );
};

export default ConversationContainer;
