import Image from "next/image";
import ConversationMessages from "./messages";
import { IChatDetails } from "@/utils/interfaces/conversation.interface";
import SendMessageForm from "./send_message";

interface IChatMessages {
  image: string;
  name: string;
  isOnline: boolean;
  lastMessageTime: string;
  chatDetails: IChatDetails | undefined;
}

const ChatMessages = ({
  image,
  name,
  isOnline,
  lastMessageTime,
  chatDetails,
}: IChatMessages) => {
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

      <ConversationMessages chatDetails={chatDetails} />

      <SendMessageForm />
    </section>
  );
};

export default ChatMessages;
