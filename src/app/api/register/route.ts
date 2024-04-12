import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  const prisma = new PrismaClient();

  console.log(request);

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
