import { Button } from "./ui/button";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export const Promo = () => (
  <div className="overflow-hidden rounded-[1.5rem] bg-[#18344f] p-5 text-white shadow-lg">
    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#ff6b4a]"><Sparkles className="h-5 w-5" /></span>
    <h3 className="mt-5 text-lg font-black">Học không giới hạn</h3>
    <p className="mt-2 text-sm leading-6 text-white/55">Mở khóa năng lượng vô hạn và ôn tập không gián đoạn.</p>
    <Button variant="secondary" className="mt-5 w-full" asChild><Link href="/shop">Xem gói học</Link></Button>
  </div>
);
