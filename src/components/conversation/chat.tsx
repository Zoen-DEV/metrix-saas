import Image from "next/image";
import React from "react";
import ConversationMessages from "./messages";

interface IPersonalChat {
  image: string;
  name: string;
  isOnline: boolean;
  lastMessageTime: string;
}

const PersonalChat = ({
  image,
  name,
  isOnline,
  lastMessageTime,
}: IPersonalChat) => {
  const isOnlineClassName = isOnline
    ? "user-is-online-span"
    : "user-is-offline-span";
  return (
    <section className="chat-container">
      <header className="chat-header">
        <Image src={image} alt={"user picture"} />

        <div className="chat-header-content">
          <h3>{name}</h3>

          <div className="chat-header-info">
            <span className={isOnlineClassName}>
              {isOnline ? "Online" : "Offline"}
            </span>

            <span>{lastMessageTime}</span>
          </div>
        </div>
      </header>

      <ConversationMessages />
    </section>
  );
};

export default PersonalChat;
