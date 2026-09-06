import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import { quests } from "@/constants";
import { Check, Flag, Target } from "lucide-react";

const QuestsPage = async () => {
  const userProgress = await getUserProgress();
  if (!userProgress?.activeCourse) redirect("/courses");
  return <div className="mx-auto max-w-[850px]"><div className="mb-9"><p className="eyebrow">Cột mốc cá nhân</p><h1 className="display-title mt-3">Mục tiêu học tập</h1><p className="mt-4 max-w-2xl leading-7 text-[#6c7f8e]">Các cột mốc được tính từ tổng điểm bài học. Chọn nhịp phù hợp với bạn — đều đặn quan trọng hơn thật nhanh.</p></div><div className="grid gap-4 sm:grid-cols-2">{quests.map((quest,index) => { const progress = Math.min((userProgress.points/quest.value)*100,100); const complete = progress >= 100; return <div key={quest.title} className="paper-card flex min-h-[190px] flex-col p-5"><div className="flex items-start justify-between"><span className={complete ? "grid h-11 w-11 place-items-center rounded-2xl bg-[#e8f6f3] text-[#2f9d92]" : "grid h-11 w-11 place-items-center rounded-2xl bg-[#fff1ec] text-[#ff6b4a]"}>{complete ? <Check className="h-5 w-5"/> : index === quests.length-1 ? <Flag className="h-5 w-5"/> : <Target className="h-5 w-5"/>}</span><span className="text-[10px] font-black uppercase tracking-wider text-[#979994]">{complete ? "Hoàn tất" : `${Math.round(progress)}%`}</span></div><h2 className="mt-5 font-black text-[#18344f]">{quest.title}</h2><div className="mt-auto pt-5"><Progress value={progress} className="h-2 bg-[#eee7dc]"/><p className="mt-2 text-xs font-bold text-[#839099]">{Math.min(userProgress.points,quest.value)} / {quest.value} điểm</p></div></div>; })}</div></div>;
};
export default QuestsPage;
