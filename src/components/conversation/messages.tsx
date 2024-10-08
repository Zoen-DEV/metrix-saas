import { FakeUser } from "@/utils/data/fake_user";
import { formatHour } from "@/utils/handlers/format_date";
import { IChatDetails } from "@/utils/interfaces/conversation.interface";
import React from "react";

interface IConversationMessages {
  chatDetails: IChatDetails | undefined;
}

const ConversationMessages = ({ chatDetails }: IConversationMessages) => {
  return (
    <ul className="chat-messages-container">
      {chatDetails?.conversation.map((message) => (
        <li
          key={message.id}
          className={
            FakeUser.id === message.senderId
              ? "chat-own-message"
              : "chat-external-message"
          }
        >
          <div className="message-content">{message.content}</div>
          <span>{formatHour(message.sentAt)}</span>
        </li>
      ))}
    </ul>
  );
};

export default ConversationMessages;
