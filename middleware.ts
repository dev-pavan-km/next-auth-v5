import NextAuth from "next-auth";

import authConfig from "@/auth.config";

export const { auth: middleware } = NextAuth(authConfig);

export default middleware((req) => {
  console.log("ROUTE:", req.nextUrl.pathname);
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
