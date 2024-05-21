import getCurrentUser from "@/actions/getCurrentUser";
import { prisma } from "@/pages/api/auth/[...nextauth]";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  console.log(request);

  const body = await request.json();
  const { eduId, reserveDate } = body;

  let eduReserve: number[] = [];
  let eduReserveDate: string[] = [];

  if (currentUser?.eduReserve) {
    eduReserve = [...currentUser.eduReserve];
  }

  eduReserve.push(eduId);

  if (currentUser?.eduReserveDate) {
    eduReserveDate = [...currentUser.eduReserveDate];
  }

  eduReserveDate.push(reserveDate);

  const user = await prisma.user.update({
    where: {
      id: currentUser?.id,
    },
    data: {
      eduReserve: eduReserve,
      eduReserveDate: eduReserveDate,
    },
  });

  return NextResponse.json(user);
}
