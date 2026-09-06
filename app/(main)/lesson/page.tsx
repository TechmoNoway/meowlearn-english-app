import { getLesson, getUserProgress, getUserSubscription } from "@/db/queries";
import { redirect } from "next/navigation";
import { Quiz } from "./quiz";

const LessonPage = async () => {
  const [lesson, userProgress, userSubscription] = await Promise.all([getLesson(), getUserProgress(), getUserSubscription()]);
  if (!lesson || !userProgress) redirect("/learn");
  const initialPercentage = lesson.challenges.length ? (lesson.challenges.filter((challenge) => challenge.completed).length / lesson.challenges.length) * 100 : 0;
  return <Quiz initialLessonId={lesson.id} initialLessonTitle={lesson.title} initialLessonChallenges={lesson.challenges} initialHearts={userProgress.hearts} initialPercentage={initialPercentage} userSubscription={userSubscription}/>;
};
export default LessonPage;
