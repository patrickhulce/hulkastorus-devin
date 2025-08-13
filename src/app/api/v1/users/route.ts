import {NextRequest} from "next/server";
import {prisma} from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {email, password, firstName, lastName, inviteCode} = body;

    if (!email || !password || !firstName || !lastName || !inviteCode) {
      return new Response(JSON.stringify({error: "Missing required fields"}), {
        status: 400,
        headers: {"Content-Type": "application/json"},
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        inviteCode,
      },
    });

    const {password: _, ...userWithoutPassword} = user;
    return new Response(JSON.stringify(userWithoutPassword), {
      status: 201,
      headers: {"Content-Type": "application/json"},
    });
  } catch {
    return new Response(JSON.stringify({error: "Failed to create user"}), {
      status: 500,
      headers: {"Content-Type": "application/json"},
    });
  }
}
