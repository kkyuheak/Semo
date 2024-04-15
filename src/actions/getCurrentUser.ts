import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";

// const getSession = async () => {
//   return await getServerSession(authOptions)
// }

export interface ICurrentUser {
  id: string;
  email: string;
  nickname: string;
  hashedPassword: string;
  createdAt: Date;
  updatedAt: Date;
}

export default async function getCurrentUser() {
  const prisma = new PrismaClient();

  try {
    const session = await getServerSession(authOptions);
    console.log("session", session);

    if (!session?.user?.email) {
      return;
    }

    // 유저 가져오기
    const currentUser: ICurrentUser | null = await prisma.user.findUnique({
      where: {
        email: session?.user?.email,
      },
    });

    if (!currentUser) return;

    return currentUser;
  } catch (error) {
    console.log(error);
  }
}
