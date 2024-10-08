import { IChat, IChatDetails } from "../interfaces/conversation.interface";
import { v4 as id } from "uuid";
import { FakeUser } from "./fake_user";
import jane from "../../assets/icons/users/jane.jpg";
import janet from "../../assets/icons/users/janet.jpg";

const JaneDoeId = id();
const JanetAdebayoId = id();
const GroupId = id();

export const ChatsListData: IChat[] = [
  {
    id: JaneDoeId,
    name: "Jane Doe",
    createdAt: "2024-09-02T12:00:00Z",
    icon: jane,
    participants: [
      {
        id: FakeUser.id,
        name: FakeUser.name,
      },
      {
        id: JaneDoeId,
        name: "Jane Doe",
      },
    ],
  },
  {
    id: JanetAdebayoId,
    name: "Janet Adebayo",
    createdAt: "2024-08-29T10:00:00Z",
    icon: janet,
    participants: [
      {
        id: FakeUser.id,
        name: FakeUser.name,
      },
      {
        id: JanetAdebayoId,
        name: "Janet Adebayo",
      },
    ],
  },
  {
    id: GroupId,
    name: "Grupo de produccion",
    createdAt: "2024-01-10T10:00:00Z",
    icon: undefined,
    participants: [
      {
        id: FakeUser.id,
        name: FakeUser.name,
      },
      {
        id: JanetAdebayoId,
        name: "Janet Adebayo",
      },
      {
        id: JaneDoeId,
        name: "Jane Doe",
      },
    ],
  },
];

export const ChatDetails: IChatDetails = {
  id: JaneDoeId,
  conversation: [
    {
      id: id(),
      senderId: FakeUser.id,
      content: "Hola Jane, ¿Como estas?",
      sentAt: "2024-09-02T10:20:00Z",
    },
    {
      id: id(),
      senderId: FakeUser.id,
      content: "Estas ocupada?",
      sentAt: "2024-09-02T10:30:00Z",
    },
    {
      id: id(),
      senderId: JaneDoeId,
      content: "Hola Zoen, bien y tu?",
      sentAt: "2024-09-02T12:40:00Z",
    },
    {
      id: id(),
      senderId: JaneDoeId,
      content: "Dime que necesitas",
      sentAt: "2024-09-02T12:50:00Z",
    },
  ],
};
