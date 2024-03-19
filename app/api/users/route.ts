import prisma from "@/utils/ds";

export async function GET(request: Request) {
  const usersFromServer = await prisma.user.findMany({});

  return Response.json(usersFromServer);
}
