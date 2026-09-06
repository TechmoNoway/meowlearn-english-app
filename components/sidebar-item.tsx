"use client";

import { BarChart3, BookOpenText, Compass, ShoppingBag, Target } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

type IconName = "learn" | "explore" | "progress" | "goals" | "shop";
type Props = { label: string; caption?: string; icon: IconName; href: string; compact?: boolean };

const icons = { learn: BookOpenText, explore: Compass, progress: BarChart3, goals: Target, shop: ShoppingBag };

export const SidebarItem = ({ label, caption, icon, href, compact = false }: Props) => {
  const pathname = usePathname();
  const Icon = icons[icon];
  const active = pathname === href || (href === "/learn" && pathname.startsWith("/lesson"));

  return (
    <Link href={href} className={cn("focus-ring group flex items-center gap-3 rounded-2xl px-3 py-3 transition", active ? "bg-white text-[#18344f] shadow-[0_8px_24px_rgba(0,0,0,.15)]" : "text-white/65 hover:bg-white/10 hover:text-white", compact && "justify-center px-2")}>
      <span className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-xl transition", active ? "bg-[#fff1ec] text-[#ff6b4a]" : "bg-white/[.07] text-white/80 group-hover:bg-white/10")}><Icon className="h-[18px] w-[18px]" strokeWidth={2.3} /></span>
      {!compact && <span className="min-w-0"><span className="block text-sm font-extrabold">{label}</span>{caption && <span className={cn("mt-0.5 block text-[10px] font-semibold", active ? "text-[#718293]" : "text-white/35")}>{caption}</span>}</span>}
    </Link>
  );
};
