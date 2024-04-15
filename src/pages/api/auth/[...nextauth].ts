import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        id: { label: "Id", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.id || !credentials?.password) {
          throw new Error("아이디와 비밀번호 둘 다 입력하셔야 합니다");
        }

        // Add logic here to look up the user from the credentials supplied
        const user = await prisma.user.findUnique({
          where: {
            id: credentials?.id,
          },
        });

        if (!user || !user.hashedPassword) {
          throw new Error("일치하는 정보가 없습니다!");
        }

        const comparePassword = bcrypt.compare(
          user.hashedPassword,
          credentials.password
        );

        if (!comparePassword) {
          throw new Error("비밀번호가 일치하지 않습니다 !");
        }

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
