import { StaticImageData } from "next/image";

export interface IChatMessage {
  id: string;
  senderId: string;
  content: string;
  sentAt: string;
}

export interface IChat {
  id: string;
  name: string;
  createdAt: string;
  participants: IChatParicipant[];
  icon: StaticImageData | undefined;
}

export interface IChatDetails {
  id: string;
  conversation: IChatMessage[];
}

export interface IChatParicipant {
  id: string;
  name: string;
}
