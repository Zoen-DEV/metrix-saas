import { NextResponse } from "next/server";
import { authMiddleware } from "./middlewares/api/authMiddleware";
import { logMiddleware } from "./middlewares/api/logMiddleware";

export const config = {
  matcher: "/api/:path*",
};

export default function middleware(req: Request) {
  const authResult = authMiddleware(req);

  if (req.url.includes("/api/chats")) {
    const logResult = logMiddleware(req);
    console.log(logResult.response);
  }

  if (!authResult?.isValid) {
    return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  return NextResponse.next();
}
