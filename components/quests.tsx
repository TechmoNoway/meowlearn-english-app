import Link from "next/link";
import { quests } from "@/constants";
import { Progress } from "./ui/progress";
import { ArrowUpRight, Target } from "lucide-react";

export const Quests = ({ points }: { points: number }) => (
  <div className="paper-card p-5">
    <div className="flex items-center justify-between"><div className="flex items-center gap-2"><Target className="h-5 w-5 text-[#ff6b4a]"/><h3 className="font-black">Mục tiêu gần nhất</h3></div><Link href="/quests" className="text-[#2f9d92]"><ArrowUpRight className="h-4 w-4" /></Link></div>
    <div className="mt-5 space-y-4">{quests.slice(0, 3).map((quest) => { const value = Math.min((points / quest.value) * 100, 100); return <div key={quest.title}><div className="mb-2 flex justify-between text-xs"><span className="font-bold text-[#65798a]">{quest.title}</span><span className="font-black text-[#18344f]">{Math.min(points, quest.value)}/{quest.value}</span></div><Progress value={value} className="h-1.5 bg-[#eee7dc]" /></div>; })}</div>
  </div>
);
