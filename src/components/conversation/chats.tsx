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

        <input type="text" placeholder="Search" className="search-input" />
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
              <div className="main-chat-info">
                <p className="chat-name">{chat.name}</p>
                <p className="last-message">last chat message</p>
              </div>

              <div className="sub-chat-info">
                <span>{formatDate(chat.createdAt)}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ChatsList;
