import Link from "next/link";
import { BatteryMedium, Coins, InfinityIcon, Languages } from "lucide-react";
import { courses } from "@/db/schema";

type Props = { activeCourse: typeof courses.$inferSelect; hearts: number; points: number; hasActiveSubscription: boolean };

export const UserProgress = ({ activeCourse, hearts, points, hasActiveSubscription }: Props) => (
  <div className="paper-card flex items-center gap-2 p-2">
    <Link href="/courses" className="focus-ring flex min-w-0 flex-1 items-center gap-2 rounded-2xl px-3 py-2 hover:bg-[#f8f3eb]">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#e8f6f3] text-[#2f9d92]"><Languages className="h-4 w-4" /></span>
      <span className="min-w-0"><span className="block text-[10px] font-bold uppercase tracking-wider text-[#8a979f]">Đang học</span><span className="block truncate text-sm font-black text-[#18344f]">{activeCourse.title}</span></span>
    </Link>
    <Link href="/shop" aria-label="Điểm học" className="focus-ring grid h-12 min-w-12 place-items-center rounded-2xl bg-[#fff6dc] px-2 text-[#aa7612]"><Coins className="h-4 w-4" /><span className="text-[10px] font-black">{points}</span></Link>
    <Link href="/shop" aria-label="Năng lượng" className="focus-ring grid h-12 min-w-12 place-items-center rounded-2xl bg-[#fff0ec] px-2 text-[#d84b31]"><BatteryMedium className="h-4 w-4" /><span className="text-[10px] font-black">{hasActiveSubscription ? <InfinityIcon className="h-3 w-3" /> : hearts}</span></Link>
  </div>
);
