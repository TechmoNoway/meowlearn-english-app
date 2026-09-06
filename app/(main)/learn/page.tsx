import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress, getUserSubscription } from "@/db/queries";
import { Header } from "./header";
import { redirect } from "next/navigation";
import { Unit } from "./unit";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import { Clock3, Flame, Layers3 } from "lucide-react";

const LearnPage = async () => {
  const [userProgress, units, courseProgress, lessonPercentage, userSubscription] = await Promise.all([getUserProgress(), getUnits(), getCourseProgress(), getLessonPercentage(), getUserSubscription()]);
  if (!userProgress?.activeCourse || !courseProgress) redirect("/courses");
  const isPro = !!userSubscription?.isActive;
  const lessonCount = units.reduce((sum, unit) => sum + unit.lessons.length, 0);
  return <div className="flex gap-7"><FeedWrapper><Header title={userProgress.activeCourse.title}/><div className="mb-7 grid gap-3 sm:grid-cols-3"><div className="paper-card flex items-center gap-3 p-4"><Layers3 className="h-5 w-5 text-[#2f9d92]"/><div><p className="text-lg font-black">{units.length}</p><p className="text-[10px] font-bold uppercase tracking-wider text-[#89949b]">Chủ đề</p></div></div><div className="paper-card flex items-center gap-3 p-4"><Clock3 className="h-5 w-5 text-[#ff6b4a]"/><div><p className="text-lg font-black">10–12 phút</p><p className="text-[10px] font-bold uppercase tracking-wider text-[#89949b]">Mỗi buổi</p></div></div><div className="paper-card flex items-center gap-3 p-4"><Flame className="h-5 w-5 text-[#f0ad24]"/><div><p className="text-lg font-black">{lessonCount} bài</p><p className="text-[10px] font-bold uppercase tracking-wider text-[#89949b]">Toàn lộ trình</p></div></div></div><div className="space-y-5">{units.map((unit) => <Unit key={unit.id} id={unit.id} order={unit.order} description={unit.description} title={unit.title} lessons={unit.lessons} activeLesson={courseProgress.activeLesson} activeLessonPercentage={lessonPercentage}/>)}</div></FeedWrapper><StickyWrapper><UserProgress activeCourse={userProgress.activeCourse} hearts={userProgress.hearts} points={userProgress.points} hasActiveSubscription={isPro}/>{!isPro && <Promo/>}<Quests points={userProgress.points}/></StickyWrapper></div>;
};

export default LearnPage;
