import { useExitModal } from "@/app/store/use-exit-modal";
import { BatteryMedium, Infinity, X } from "lucide-react";

type Props = { hearts: number; percentage: number; hasActiveSubscription: boolean; lessonTitle: string };

export const Header = ({ hearts, percentage, hasActiveSubscription, lessonTitle }: Props) => {
  const { open } = useExitModal();
  return <header className="mx-auto w-full max-w-[980px] px-5 pt-5 sm:pt-8"><div className="flex items-center gap-4"><button onClick={open} aria-label="Thoát buổi học" className="focus-ring grid h-10 w-10 shrink-0 place-items-center rounded-full border bg-white text-[#6e7e8a] hover:text-[#18344f]"><X className="h-4 w-4"/></button><div className="min-w-0 flex-1"><div className="mb-2 flex items-center justify-between gap-3 text-[10px] font-black uppercase tracking-[.14em]"><span className="truncate text-[#657889]">{lessonTitle}</span><span className="text-[#ff6b4a]">{Math.round(percentage)}%</span></div><div className="h-2 overflow-hidden rounded-full bg-[#e8dfd2]"><div className="h-full rounded-full bg-[#ff6b4a] transition-all duration-500" style={{width:`${Math.min(percentage,100)}%`}} /></div></div><div className="flex min-w-[48px] items-center justify-end gap-1.5 text-sm font-black text-[#d84b31]"><BatteryMedium className="h-5 w-5"/>{hasActiveSubscription ? <Infinity className="h-4 w-4"/> : hearts}</div></div></header>;
};
