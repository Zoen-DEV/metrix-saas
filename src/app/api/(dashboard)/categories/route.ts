import connect from "@/app/lib/db";
import User from "@/app/lib/models/user";
import Category from "@/app/lib/models/category";
import { NextResponse } from "next/server";
import { getUserIdFromURL, ObjectId } from "../../(auth)/users/route";

export const GET = async (req: Request) => {
  try {
    const userId = getUserIdFromURL(req.url);

    if (!userId) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid of missing userId" }),
        { status: 400 }
      );
    }

    await connect();

    const user = await User.findById(userId);

    if (!user) {
      return new NextResponse(
        JSON.stringify({ message: "User not found in the database" }),
        { status: 400 }
      );
    }

    const categories = await Category.find({ user: new ObjectId(userId) });

    return new NextResponse(JSON.stringify(categories), {
      status: 200,
    });
  } catch (err: any) {
    return new NextResponse(`Error fetching categories: ${err.message}`, {
      status: 500,
    });
  }
};

export const POST = async (req: Request) => {
  try {
    const userId = getUserIdFromURL(req.url);

    const { title } = await req.json();

    if (!userId) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid of missing userId" }),
        { status: 400 }
      );
    }

    await connect();

    const user = await User.findById(userId);

    if (!user) {
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    const newCategory = new Category({
      title,
      user: new ObjectId(userId),
    });

    await newCategory.save();

    return new NextResponse(
      JSON.stringify({ message: "Category is created", category: newCategory }),
      { status: 200 }
    );
  } catch (err: any) {
    return new NextResponse(`Error creating categories: ${err.message}`, {
      status: 500,
    });
  }
};
