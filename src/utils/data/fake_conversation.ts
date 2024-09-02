import { IChat } from "../interfaces/conversation.interface";
import { v4 as id } from "uuid";
import { FakeUser } from "./fake_user";
import jane from "../../assets/icons/users/jane.jpg"
import janet from "../../assets/icons/users/janet.jpg"

const JaneDoeId = id();
const JanetAdebayoId = id();

export const ChatsListData: IChat[] = [
  {
    id: JaneDoeId,
    name: "Jane Doe",
    createdAt: "2023-01-10T12:00:00Z",
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
    createdAt: "2023-01-10T10:00:00Z",
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
    id: id(),
    name: "Grupo de produccion",
    createdAt: "2023-01-10T10:00:00Z",
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
