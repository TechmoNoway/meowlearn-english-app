import { lessons, units } from "@/db/schema";
import { UnitBanner } from "./unit-banner";
import { LessonButton } from "./lesson-button";

type Props = { id: number; order: number; title: string; description: string; lessons: (typeof lessons.$inferSelect & { completed: boolean })[]; activeLesson: (typeof lessons.$inferInsert & { unit: typeof units.$inferSelect }) | undefined; activeLessonPercentage: number };

export const Unit = ({ order, title, description, lessons, activeLesson, activeLessonPercentage }: Props) => {
  const completedCount = lessons.filter((lesson) => lesson.completed).length;
  return <section className="paper-card overflow-hidden p-5 sm:p-7"><UnitBanner title={title} description={description} order={order} completedCount={completedCount} totalCount={lessons.length}/><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{lessons.map((lesson,index) => { const current = lesson.id === activeLesson?.id; const locked = !lesson.completed && !current; return <LessonButton key={lesson.id} id={lesson.id} index={index} title={lesson.title} current={current} locked={locked} percentage={activeLessonPercentage}/>; })}</div></section>;
};
