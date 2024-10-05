import connect from "@/app/lib/db";
import User from "@/app/lib/models/user";
import Category from "@/app/lib/models/category";
import { NextResponse } from "next/server";
import { getUserIdFromURL } from "@/app/api/(auth)/users/route";
import { Types } from "mongoose";

export const paramsErrorHandler = (userId: string | null, categoryId: string | null) => {
  if (!userId) {
    return JSON.stringify({ message: "Invalid or missing userId" });
  }

  if (!categoryId || !Types.ObjectId.isValid(categoryId)) {
    return JSON.stringify({ message: "Invalid or missing categoryId" });
  }

  return null;
};

export const dataErrorHandler = (user: any, category: any) => {
  if (!user) {
    return JSON.stringify({ message: "User not found" });
  }

  if (!category) {
    return JSON.stringify({ message: "Category not found" });
  }

  return null;
};

export const PATCH = async (req: Request, context: { params: any }) => {
  const categoryId = context.params.category;

  try {
    const body = await req.json();
    const { title } = body;
    const userId = getUserIdFromURL(req.url);
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

    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      { title },
      { new: true }
    );

    return new NextResponse(
      JSON.stringify({
        message: "Category is updated",
        category: updatedCategory,
      }),
      { status: 200 }
    );
  } catch (err: any) {
    return new NextResponse(`Error updating category: ${err.message}`, {
      status: 500,
    });
  }
};

export const DELETE = async (req: Request, context: { params: any }) => {
  const categoryId = context.params.category;

  try {
    const userId = getUserIdFromURL(req.url);
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

    await Category.findByIdAndDelete(categoryId);

    return new NextResponse(
      JSON.stringify({ message: "Category deleted correctly" }),
      { status: 200 }
    );
  } catch (err: any) {
    return new NextResponse(`Error updating category: ${err.message}`, {
      status: 500,
    });
  }
};
