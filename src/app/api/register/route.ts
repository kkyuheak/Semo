import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/pages/api/auth/[...nextauth]";

export async function POST(request: Request) {
  // console.log(request);

  const body = await request.json();

  const { id, password, email, nickname } = body;

  const hashedPassword: string = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      id,
      hashedPassword,
      email,
      nickname,
    },
  });

  return NextResponse.json(user);
}
