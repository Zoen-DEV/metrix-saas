"use client"
import ChatMessages from "@/components/conversation/chat";
import ChatsList from "@/components/conversation/chats";
import ClosedChat from "@/components/conversation/closed_chat";
import { IChatDetails } from "@/utils/interfaces/conversation.interface";
import React, { useState } from "react";

const ConversationContainer = () => {
  const [chatDetails, setChatDetails] = useState<IChatDetails | undefined>();

  return (
    <section className="conversation-container">
      <ChatsList setChatDetails={setChatDetails} />

      {!chatDetails ? (
        <ClosedChat />
      ) : (
        <ChatMessages
          chatDetails={chatDetails}
          image=""
          name="Jean"
          isOnline={true}
          lastMessageTime={
            chatDetails.conversation[chatDetails.conversation.length - 1].sentAt
          }
        />
      )}
    </section>
  );
};

export default ConversationContainer;
