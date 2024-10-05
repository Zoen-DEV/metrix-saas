import { Schema, model, models } from "mongoose";

const ChatSchema = new Schema(
  {
    title: { type: "string", required: true },
    description: { type: "string" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    isGroup: { type: "boolean" },
  },
  { timestamps: true }
);

const Chat = models.Chat || model("Chat", ChatSchema);

export default Chat;
