import { ArrowUpRight, Languages } from "lucide-react";
import Link from "next/link";

export const Header = ({ title }: { title: string }) => (
  <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
    <div><p className="eyebrow">Studio tiếng Anh</p><h1 className="display-title mt-3">Lộ trình của bạn</h1><p className="mt-3 text-sm text-[#6d7e8c]">{title} · Học từng tình huống, dùng được từng câu.</p></div>
    <Link href="/courses" className="focus-ring inline-flex items-center gap-2 self-start rounded-full border bg-white px-4 py-2.5 text-xs font-extrabold text-[#18344f] shadow-sm"><Languages className="h-4 w-4 text-[#2f9d92]" />Xem chương trình<ArrowUpRight className="h-3.5 w-3.5" /></Link>
  </div>
);
