"use client";

import { courses, userProgress } from "@/db/schema";
import { Card } from "./card";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { upsertUserProgress } from "@/actions/user-progress";
import { toast } from "sonner";

type Props = { courses: (typeof courses.$inferInsert)[]; activeCourseId?: typeof userProgress.$inferSelect.activeCourseId };

export const List = ({ courses, activeCourseId }: Props) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const onClick = (id: number) => { if (pending) return; if (id === activeCourseId) return router.push("/learn"); startTransition(() => { upsertUserProgress(id).catch(() => toast.error("Không thể đổi lộ trình. Vui lòng thử lại.")); }); };
  return <div className="max-w-xl">{courses.map((course,index) => <Card key={course.id} id={course.id || index + 1} title={course.title} onClick={onClick} disabled={pending} active={course.id === activeCourseId}/>)}</div>;
};
