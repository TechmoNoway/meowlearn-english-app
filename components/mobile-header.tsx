"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "./brand-mark";
import { navItems } from "./sidebar";
import { cn } from "@/lib/utils";
import { BarChart3, BookOpenText, Compass, ShoppingBag, Target } from "lucide-react";

const icons = { learn: BookOpenText, explore: Compass, progress: BarChart3, goals: Target, shop: ShoppingBag };

export const MobileHeader = () => {
  const pathname = usePathname();
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b bg-[#fffaf1]/92 px-5 backdrop-blur-xl lg:hidden"><Link href="/"><BrandMark /></Link><span className="rounded-full bg-[#e8f6f3] px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-[#267c74]">VI ↔ EN</span></header>
      <nav className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-5 rounded-[1.4rem] border border-white/20 bg-[#18344f]/95 p-1.5 shadow-2xl backdrop-blur-xl lg:hidden">
        {navItems.map(({ href, label, icon }) => { const Icon = icons[icon]; const active = pathname === href || (href === "/learn" && pathname.startsWith("/lesson")); return <Link key={href} href={href} aria-label={label} className={cn("flex flex-col items-center gap-1 rounded-2xl py-2 text-[9px] font-bold text-white/45", active && "bg-white text-[#18344f]")}><Icon className={cn("h-4 w-4", active && "text-[#ff6b4a]")} /><span className="max-w-full truncate">{label}</span></Link>; })}
      </nav>
    </>
  );
};
