import { Schema, model, models } from "mongoose";

const MessageSchema = new Schema(
  {
    text: { type: "string", required: true },
    user: {type: Schema.Types.ObjectId, ref: "User"},
    chat: {type: Schema.Types.ObjectId, ref: "Chat"}
  },
  { timestamps: true }
);

const Message = models.Message || model("Message", MessageSchema);

export default Message;
