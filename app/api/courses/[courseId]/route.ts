import db from "@/db/drizzle";
import { ENGLISH_COURSE_ID } from "@/constants";
import { courses } from "@/db/schema";
import { isAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: Promise<{ courseId: string }> }
) => {
  const courseId = Number((await params).courseId);
  if (!(await isAdmin())) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  if (courseId !== ENGLISH_COURSE_ID) {
    return new NextResponse("Course not found", { status: 404 });
  }

  const data = await db.query.courses.findFirst({
    where: eq(courses.id, courseId),
  });

  return NextResponse.json(data);
};

export const PUT = async (
  _req: Request,
  { params }: { params: Promise<{ courseId: string }> }
) => {
  const courseId = Number((await params).courseId);
  if (!(await isAdmin())) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  if (courseId !== ENGLISH_COURSE_ID) {
    return new NextResponse("Course not found", { status: 404 });
  }

  return new NextResponse("The English course is managed by source data", {
    status: 405,
  });
};

export const DELETE = async (
  _req: Request,
  { params }: { params: Promise<{ courseId: string }> }
) => {
  const courseId = Number((await params).courseId);
  if (!(await isAdmin())) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  if (courseId !== ENGLISH_COURSE_ID) {
    return new NextResponse("Course not found", { status: 404 });
  }

  return new NextResponse("The English course cannot be deleted", {
    status: 405,
  });
};
