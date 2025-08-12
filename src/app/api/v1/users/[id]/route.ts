import {NextRequest} from "next/server";
import {prisma} from "@/lib/prisma";

export async function DELETE(request: NextRequest, {params}: {params: {id: string}}) {
  try {
    const {id} = params;

    await prisma.user.delete({
      where: {id},
    });

    return new Response(null, {status: 204});
  } catch (error: unknown) {
    if (error && typeof error === "object" && "code" in error && error.code === "P2025") {
      return new Response(JSON.stringify({error: "User not found"}), {
        status: 404,
        headers: {"Content-Type": "application/json"},
      });
    }

    return new Response(JSON.stringify({error: "Failed to delete user"}), {
      status: 500,
      headers: {"Content-Type": "application/json"},
    });
  }
}
