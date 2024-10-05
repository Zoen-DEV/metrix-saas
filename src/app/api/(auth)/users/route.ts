import connect from "@/app/lib/db";
import User from "@/app/lib/models/user";
import { Types } from "mongoose";
import { NextResponse } from "next/server";

export const ObjectId = require("mongoose").Types.ObjectId;

export const getUserIdFromURL = (url: string) => {
  const { searchParams } = new URL(url);
  const userId = searchParams.get("userId");

  if (!userId || !Types.ObjectId.isValid(userId)) {
    return null;
  }

  return userId;
};

export const getCategoryIdFromURL = (url: string) => {
  const { searchParams } = new URL(url);
  const categoryId = searchParams.get("categoryId");

  if (!categoryId || !Types.ObjectId.isValid(categoryId)) {
    return null;
  }

  return categoryId;
};

export const GET = async () => {
  try {
    await connect();
    const users = await User.find();

    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (err: any) {
    return new NextResponse(`Error fetching users: ${err.message}`, {
      status: 500,
    });
  }
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    await connect();

    const newUser = new User(body);
    await newUser.save();

    return new NextResponse(
      JSON.stringify({ message: "User is created", user: newUser }),
      { status: 200 }
    );
  } catch (err: any) {
    return new NextResponse(`Error creating users: ${err.message}`, {
      status: 500,
    });
  }
};

export const PATCH = async (req: Request) => {
  try {
    const body = await req.json();
    const { userId, newUsername } = body;

    await connect();

    if (!userId || !newUsername) {
      return new NextResponse(
        JSON.stringify({ message: "Id or username not found" }),
        { status: 400 }
      );
    }

    if (!Types.ObjectId.isValid(userId)) {
      return new NextResponse(JSON.stringify({ message: "Invalid User id" }), {
        status: 400,
      });
    }

    const user = await User.findOneAndUpdate(
      { _id: new ObjectId(userId) },
      { username: newUsername },
      { new: true }
    );

    if (!user) {
      return new NextResponse(
        JSON.stringify({ message: "User not found in the database" }),
        {
          status: 400,
        }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "User is updated", user }),
      { status: 200 }
    );
  } catch (err: any) {
    return new NextResponse(`Error updating users: ${err.message}`, {
      status: 500,
    });
  }
};

export const DELETE = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return new NextResponse(
        JSON.stringify({ message: "User id not found" }),
        { status: 400 }
      );
    }

    if (!Types.ObjectId.isValid(userId)) {
      return new NextResponse(JSON.stringify({ message: "Invalid User id" }), {
        status: 400,
      });
    }

    await connect();

    const user = await User.findByIdAndDelete(new ObjectId(userId));

    if (!user) {
      return new NextResponse(
        JSON.stringify({ message: "User not found in the database" }),
        {
          status: 400,
        }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: "User is deleted", user }),
      { status: 200 }
    );
  } catch (err: any) {
    return new NextResponse(`Error deleting users: ${err.message}`, {
      status: 500,
    });
  }
};
