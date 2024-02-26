import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function POST(
  request: Request, 
) {
  const body = await request.json();

   const user = await prisma.user.create({
    data: body
  });

  return NextResponse.json(user);
}
