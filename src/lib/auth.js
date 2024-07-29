import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { registerUser, getUser } from "@/lib/prisma";
// import { message } from "antd";

const nextAuth = NextAuth({
  providers: [
    CredentialsProvider({
      // 显示按钮文案 (e.g. "Sign in with...")
      name: "credentials", // `credentials` 用于渲染登录页面表单
      credentials: {
        username: { label: "账号", type: "text", placeholder: "输入您的账号" },
        password: {
          label: "密码",
          type: "password",
          placeholder: "输入您的密码",
        },
      }, // 处理从用户收到的认证信息
      async authorize(credentials, req) {
        let user = await getUser(credentials.username, credentials.password);
        if (user === -1) {
          // 密码错误
          // message.error("密码错误!!!");
          return null;
        }

        if (user === 0) {
          // user = await registerUser(credentials.username, credentials.password);
          // message.info("用户不存在!!!");
          return null;
        }

        // if (!user) {
        //   throw new Error("User was not found and could not be created.");
        // }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/login",
  },
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname.startsWith("/note/edit")) return !!auth;
      return true;
    },
    async jwt({ token, user, account }) {
      if (account && account.type === "credentials" && user) {
        token.userId = user.userId;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.userId = token.userId;
      return session;
    },
  },
  trustHost: true,
});
export const { handlers, auth, signIn, signOut } = nextAuth;
