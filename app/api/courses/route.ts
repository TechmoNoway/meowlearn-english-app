import db from "@/db/drizzle";
import { ENGLISH_COURSE_ID } from "@/constants";
import { courses } from "@/db/schema";
import { isAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async () => {
  if (!(await isAdmin())) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  const data = await db.query.courses.findMany({
    where: eq(courses.id, ENGLISH_COURSE_ID),
  });

  return NextResponse.json(data);
};

export const POST = async () => {
  if (!(await isAdmin())) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  return new NextResponse("The English course is the only supported course", {
    status: 405,
  });
};
