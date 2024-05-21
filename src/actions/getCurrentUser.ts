import { authOptions, prisma } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export interface ICurrentUser {
  id: string;
  email: string;
  nickname: string;
  hashedPassword: string;
  createdAt?: Date;
  updatedAt?: Date;
  eduReserve?: number[];
  eduReserveDate?: string[];
}

export default async function getCurrentUser() {
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
