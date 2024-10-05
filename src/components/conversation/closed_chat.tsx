import Image from "next/image";
import React from "react";
import chatFill from "../../assets/icons/conversation/chatFill.svg";
import chat from "../../assets/icons/conversation/chat.svg";

const ClosedChat = () => {
  return (
    <section className="closed-chat-container">
      <div className="chat-icon-container">
        <Image src={chatFill} alt="chat fill icon" />
      </div>

      <h3>Messages</h3>

      <p>Click on a contact to view messages.</p>

      <button className="new-message-button">
        <Image src={chat} alt="chat icon" />
        New Message
      </button>
    </section>
  );
};

export default ClosedChat;
