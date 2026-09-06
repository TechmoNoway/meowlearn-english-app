import { BookOpenCheck } from "lucide-react";

type Props = { title: string; description: string; order: number; completedCount: number; totalCount: number };

export const UnitBanner = ({ title, description, order, completedCount, totalCount }: Props) => {
  const complete = totalCount > 0 && completedCount === totalCount;
  return <div className="flex flex-col justify-between gap-4 border-b px-1 pb-5 sm:flex-row sm:items-end"><div className="flex gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#18344f] text-sm font-black text-white">{String(order).padStart(2,"0")}</span><div><h2 className="text-xl font-black tracking-[-.025em] text-[#18344f]">{title}</h2><p className="mt-1 max-w-xl text-sm leading-6 text-[#718293]">{description}</p></div></div><div className="flex items-center gap-2 self-start rounded-full bg-[#e8f6f3] px-3 py-2 text-xs font-black text-[#267c74]"><BookOpenCheck className="h-4 w-4" />{complete ? "Đã hoàn thành" : `${completedCount}/${totalCount} bài`}</div></div>;
};
