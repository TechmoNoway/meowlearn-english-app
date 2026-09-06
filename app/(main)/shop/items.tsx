"use client";
import { refillHearts } from "@/actions/user-progress";
import { createStripeUrl } from "@/actions/user-subscription";
import { Button } from "@/components/ui/button";
import { BatteryCharging, Coins, Sparkles } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

const POINTS_TO_REFILL = 10;
export const Items = ({ hearts, points, hasActiveSubscription }: { hearts: number; points: number; hasActiveSubscription: boolean }) => {
  const [pending,startTransition] = useTransition();
  const onRefill = () => { if (pending || hearts === 5 || points < POINTS_TO_REFILL) return; startTransition(() => refillHearts().catch(() => { toast.error("Không thể nạp năng lượng."); })); };
  const onUpgrade = () => { startTransition(() => createStripeUrl().then((response) => { if (response.data) window.location.href = response.data; }).catch(() => { toast.error("Không thể mở trang thanh toán."); })); };
  return <div className="grid gap-5 md:grid-cols-2"><div className="paper-card flex min-h-[280px] flex-col p-6"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#fff0ec] text-[#ff6b4a]"><BatteryCharging className="h-6 w-6"/></span><h2 className="mt-6 text-xl font-black">Nạp đầy năng lượng</h2><p className="mt-2 text-sm leading-6 text-[#718293]">Đổi 10 điểm học để trở lại mức 5 năng lượng.</p><div className="mt-auto flex items-center justify-between pt-6"><span className="flex items-center gap-2 text-sm font-black text-[#a16f11]"><Coins className="h-4 w-4"/>10 điểm</span><Button onClick={onRefill} disabled={pending || hearts === 5 || points < POINTS_TO_REFILL} variant="secondary">{hearts === 5 ? "Đã đầy" : "Nạp ngay"}</Button></div></div><div className="flex min-h-[280px] flex-col rounded-[1.5rem] bg-[#18344f] p-6 text-white shadow-xl"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#ff6b4a]"><Sparkles className="h-6 w-6"/></span><h2 className="mt-6 text-xl font-black">Studio không giới hạn</h2><p className="mt-2 text-sm leading-6 text-white/55">Năng lượng vô hạn, luyện lại mọi bài và học theo nhịp riêng.</p><div className="mt-auto pt-6"><Button onClick={onUpgrade} disabled={pending} variant="secondary" className="w-full">{hasActiveSubscription ? "Quản lý gói học" : "Mở khóa studio"}</Button></div></div></div>;
};
