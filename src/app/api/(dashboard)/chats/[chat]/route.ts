import connect from "@/app/lib/db";
import { NextResponse } from "next/server";
import {
  getCategoryIdFromURL,
  getUserIdFromURL,
  ObjectId,
} from "../../../(auth)/users/route";
import Chat from "@/app/lib/models/chat";
import User from "@/app/lib/models/user";
import {
  dataErrorHandler,
  paramsErrorHandler,
} from "../../categories/[category]/route";
import Category from "@/app/lib/models/category";
import { Types } from "mongoose";

export const GET = async (req: Request, context: { params: any }) => {
  const chatId = context.params.chat;

  try {
    const userId = getUserIdFromURL(req.url);
    const categoryId = getCategoryIdFromURL(req.url);
    const idError = paramsErrorHandler(userId, categoryId);

    if (idError) {
      return new NextResponse(idError, { status: 400 });
    }

    if (!chatId || !Types.ObjectId.isValid(chatId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing chatId" }),
        { status: 400 }
      );
    }

    await connect();

    const user = await User.findById(userId);
    const category = await Category.findOne({ _id: categoryId, user: userId });
    const dataError = dataErrorHandler(user, category);

    if (dataError) {
      return new NextResponse(dataError, { status: 404 });
    }

    const chat = await Chat.findOne({
      _id: chatId,
      user: userId,
      category: categoryId,
    });

    if (!chat) {
      return new NextResponse(JSON.stringify({ message: "Chat not found" }), {
        status: 404,
      });
    }

    return new NextResponse(JSON.stringify({ chat: chat }), {
      status: 200,
    });
  } catch (err: any) {
    return new NextResponse(`Error fetching chat: ${err.message}`, {
      status: 500,
    });
  }
};

export const PATCH = async (req: Request, context: { params: any }) => {
  const chatId = context.params.chat;

  try {
    const body = await req.json();
    const { title, description } = body;

    const userId = getUserIdFromURL(req.url);

    if (!userId || !Types.ObjectId.isValid(userId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing userId" }),
        { status: 400 }
      );
    }

    if (!chatId || !Types.ObjectId.isValid(chatId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing chatId" }),
        { status: 400 }
      );
    }

    await connect();

    const user = await User.findById(userId);
    const chat = await Chat.findOne({ _id: chatId, user: userId });

    if (!user) {
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    if (!chat) {
      return new NextResponse(JSON.stringify({ message: "Chat not found" }), {
        status: 404,
      });
    }

    const updatedChat = await Chat.findByIdAndUpdate(
      chatId,
      { title, description },
      { new: true }
    );

    return new NextResponse(
      JSON.stringify({
        message: "Chat is updated",
        chat: updatedChat,
      }),
      { status: 200 }
    );
  } catch (err: any) {
    return new NextResponse(`Error updating chat: ${err.message}`, {
      status: 500,
    });
  }
};

export const DELETE = async (req: Request, context: { params: any }) => {
  const chatId = context.params.chat;

  try {
    const userId = getUserIdFromURL(req.url);

    if (!userId || !Types.ObjectId.isValid(userId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing userId" }),
        { status: 400 }
      );
    }

    if (!chatId || !Types.ObjectId.isValid(chatId)) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing chatId" }),
        { status: 400 }
      );
    }

    await connect();

    const user = await User.findById(userId);
    const chat = await Chat.findOne({ _id: chatId, user: userId });

    if (!user) {
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    if (!chat) {
      return new NextResponse(JSON.stringify({ message: "Chat not found" }), {
        status: 404,
      });
    }

    await Chat.findByIdAndDelete(chatId);

    return new NextResponse(
      JSON.stringify({ message: "Chat deleted correctly" }),
      { status: 200 }
    );
  } catch (err: any) {
    return new NextResponse(`Error updating category: ${err.message}`, {
      status: 500,
    });
  }
};
