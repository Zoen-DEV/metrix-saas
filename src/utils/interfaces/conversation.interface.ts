import { StaticImageData } from "next/image";

export interface IChatMessage {
  id: string;
  chatId: string;
  senderId: string;
  content: string;
  sentAt: string;
  sender: IChatParicipant;
}

export interface IChat {
  id: string;
  name: string;
  createdAt: string;
  participants: IChatParicipant[];
  icon: StaticImageData | undefined;
}

export interface IChatParicipant {
  id: string;
  name: string;
}
