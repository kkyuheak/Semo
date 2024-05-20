import getCurrentUser from "@/actions/getCurrentUser";
import { prisma } from "@/pages/api/auth/[...nextauth]";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  console.log(request);

  const body = await request.json();
  const { eduId, reserveDate } = body;

  const user = await prisma.user.update({
    where: {
      id: currentUser?.id,
    },
    data: {
      eduReserve: eduId,
      eduReserveDate: reserveDate,
    },
  });

  return NextResponse.json(user);
}
