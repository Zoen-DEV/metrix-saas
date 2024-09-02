import { ChatsListData } from "@/utils/data/fake_conversation";
import { formatDate } from "@/utils/handlers/format_date";
import Image from "next/image";
import user from "../../assets/icons/users/user.png";
import group from "../../assets/icons/users/group.png";

const ChatsList = () => {
  return (
    <section className="chats-container">
      <header className="chats-header">
        <div className="chats-header-info">
          <h3>Chats</h3>
          <span>{ChatsListData.length}</span>
        </div>

        <input type="text" placeholder="Search" />
      </header>

      <ul className="chats-list">
        {ChatsListData.map((chat) => (
          <li key={chat.id}>
            <Image
              src={chat.icon ?? (chat.participants.length > 2 ? group : user)}
              alt="chat icon"
              className="chat-icon"
            />

            <div className="chat-info">
              <p>{chat.name}</p>
              <span>{formatDate(chat.createdAt)}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ChatsList;
