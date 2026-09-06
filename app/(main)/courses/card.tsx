import { cn } from "@/lib/utils";
import { ArrowRight, Check, MessageCircleMore } from "lucide-react";

type Props = { title: string; id: number; onClick: (id: number) => void; disabled?: boolean; active?: boolean; index: number };

export const Card = ({ id, title, onClick, disabled, active, index }: Props) => {
  const vietnamesePath = index % 2 === 1;
  const source = vietnamesePath ? "English" : "Tiếng Việt";
  const target = vietnamesePath ? "Tiếng Việt" : "English";
  return <button onClick={() => onClick(id)} disabled={disabled} className={cn("focus-ring group min-h-[300px] overflow-hidden rounded-[2rem] border p-0 text-left shadow-[0_14px_40px_rgba(24,52,79,.07)] transition hover:-translate-y-1 hover:shadow-xl", index % 2 === 0 ? "bg-[#18344f] text-white" : "bg-[#2f9d92] text-white")}><div className="flex h-full flex-col p-7"><div className="flex items-start justify-between"><span className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.16em]">{active ? "Đang học" : "Lộ trình đầy đủ"}</span>{active ? <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f5c451] text-[#18344f]"><Check className="h-5 w-5" strokeWidth={3}/></span> : <MessageCircleMore className="h-8 w-8 text-white/50"/>}</div><div className="mt-auto"><p className="text-sm font-bold text-white/50">{source} →</p><h2 className="mt-1 text-4xl font-black tracking-[-.05em]">{target}</h2><p className="mt-4 max-w-sm text-sm leading-6 text-white/60">{title}. Hội thoại, từ vựng và phản xạ theo những tình huống đời thật.</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-black">{active ? "Tiếp tục học" : "Chọn lộ trình"}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1"/></span></div></div></button>;
};
