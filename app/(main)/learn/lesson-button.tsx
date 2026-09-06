"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, Check, LockKeyhole, Play } from "lucide-react";
import Link from "next/link";

type Props = { id: number; index: number; title: string; locked?: boolean; current?: boolean; percentage: number };

export const LessonButton = ({ id, index, title, locked, current, percentage }: Props) => {
  const completed = !current && !locked;
  return (
    <Link href={completed ? `/lesson/${id}` : "/lesson"} aria-disabled={locked} tabIndex={locked ? -1 : 0} className={cn("focus-ring group relative flex min-h-[150px] flex-col justify-between rounded-[1.4rem] border bg-white p-5 shadow-[0_10px_30px_rgba(24,52,79,.05)] transition", !locked && "hover:-translate-y-1 hover:border-[#18344f]/25 hover:shadow-[0_18px_36px_rgba(24,52,79,.10)]", current && "border-[#ff6b4a]/40 bg-[#fff8f4]", locked && "pointer-events-none bg-[#f4efe7] opacity-65")}>
      <div className="flex items-start justify-between"><span className="text-[10px] font-black uppercase tracking-[.16em] text-[#9a9b97]">Bài {String(index + 1).padStart(2,"0")}</span><span className={cn("grid h-9 w-9 place-items-center rounded-full", completed ? "bg-[#e8f6f3] text-[#2f9d92]" : current ? "bg-[#ff6b4a] text-white" : "bg-[#e8e3da] text-[#999995]")}>{completed ? <Check className="h-4 w-4" strokeWidth={3}/> : current ? <Play className="h-4 w-4 fill-current"/> : <LockKeyhole className="h-4 w-4"/>}</span></div>
      <div><h3 className="line-clamp-2 text-[17px] font-black leading-snug tracking-[-.02em] text-[#18344f]">{title}</h3>{current && <div className="mt-4"><div className="h-1.5 overflow-hidden rounded-full bg-[#f0ded8]"><div className="h-full rounded-full bg-[#ff6b4a]" style={{width: `${Math.min(Number.isNaN(percentage) ? 0 : percentage,100)}%`}} /></div><p className="mt-2 flex items-center justify-between text-[10px] font-bold text-[#aa7165]"><span>Đang học</span><ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1"/></p></div>}{completed && <p className="mt-3 text-[11px] font-bold text-[#2f9d92]">Ôn lại bài này</p>}{locked && <p className="mt-3 text-[11px] font-bold text-[#94948f]">Hoàn thành bài trước để mở</p>}</div>
    </Link>
  );
};
