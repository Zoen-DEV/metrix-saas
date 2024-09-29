import connect from "@/app/lib/db";
import { NextResponse } from "next/server";
import {
  getCategoryIdFromURL,
  getUserIdFromURL,
  ObjectId,
} from "../../(auth)/users/route";
import Chat from "@/app/lib/models/chat";
import User from "@/app/lib/models/user";
import {
  dataErrorHandler,
  paramsErrorHandler,
} from "../categories/[category]/route";
import Category from "@/app/lib/models/category";

export const GET = async (req: Request) => {
  try {
    const userId = getUserIdFromURL(req.url);
    const categoryId = getCategoryIdFromURL(req.url);
    const idError = paramsErrorHandler(userId, categoryId);

    if (idError) {
      return new NextResponse(idError, { status: 400 });
    }

    await connect();

    const user = await User.findById(userId);
    const category = await Category.findOne({ _id: categoryId, user: userId });

    const dataError = dataErrorHandler(user, category);

    if (dataError) {
      return new NextResponse(dataError, { status: 404 });
    }

    const filter: any = {
      user: new ObjectId(userId),
      category: new ObjectId(categoryId),
    };

    const chats = await Chat.find(filter);

    return new NextResponse(
      JSON.stringify({
        message: "Chats",
        chats: chats,
      }),
      { status: 200 }
    );
  } catch (err: any) {
    return new NextResponse(`Error fetching chats: ${err.message}`, {
      status: 500,
    });
  }
};

export const POST = async (req: Request) => {
  try {
    const userId = getUserIdFromURL(req.url);
    const categoryId = getCategoryIdFromURL(req.url);
    const idError = paramsErrorHandler(userId, categoryId);

    if (idError) {
      return new NextResponse(idError, { status: 400 });
    }

    await connect();

    const user = await User.findById(userId);
    const category = await Category.findOne({ _id: categoryId, user: userId });

    const dataError = dataErrorHandler(user, category);

    if (dataError) {
      return new NextResponse(dataError, { status: 404 });
    }

    const body = await req.json();
    const { title, description } = body;

    const newChat = new Chat({
      title,
      description,
      user: new ObjectId(userId),
      category: new ObjectId(categoryId),
    });

    await newChat.save();

    return new NextResponse(
      JSON.stringify({ message: "Chat is created", category: newChat }),
      { status: 200 }
    );
  } catch (err: any) {
    return new NextResponse(`Error fetching categories: ${err.message}`, {
      status: 500,
    });
  }
};
