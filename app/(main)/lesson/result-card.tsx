import { BatteryMedium, Coins } from "lucide-react";

export default function ResultCard({ value, variant }: { value: number; variant: "points" | "hearts" }) {
  const points = variant === "points";
  const Icon = points ? Coins : BatteryMedium;
  return <div className="paper-card flex flex-1 items-center gap-4 p-5 text-left"><span className={points ? "grid h-11 w-11 place-items-center rounded-2xl bg-[#fff6dc] text-[#aa7612]" : "grid h-11 w-11 place-items-center rounded-2xl bg-[#fff0ec] text-[#d84b31]"}><Icon className="h-5 w-5"/></span><div><p className="text-2xl font-black text-[#18344f]">{value}</p><p className="text-[10px] font-black uppercase tracking-wider text-[#8c969c]">{points ? "Điểm nhận được" : "Năng lượng còn lại"}</p></div></div>;
}
