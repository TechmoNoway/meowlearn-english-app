import { cn } from "@/lib/utils";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { LoaderCircle } from "lucide-react";
import { BrandMark } from "./brand-mark";

type Props = { className?: string };

export const navItems = [
  { label: "Studio", caption: "Lộ trình của bạn", href: "/learn", icon: "learn" },
  { label: "Chương trình", caption: "Tiếng Anh thực tế", href: "/courses", icon: "explore" },
  { label: "Tiến độ", caption: "Nhịp học cộng đồng", href: "/leaderboard", icon: "progress" },
  { label: "Mục tiêu", caption: "Cột mốc cá nhân", href: "/quests", icon: "goals" },
  { label: "Kho hỗ trợ", caption: "Năng lượng & gói học", href: "/shop", icon: "shop" },
] as const;

export const Sidebar = ({ className }: Props) => (
  <aside className={cn("fixed inset-y-0 left-0 z-40 flex w-[280px] flex-col bg-[#18344f] px-5 py-6 text-white", className)}>
    <Link href="/" className="mb-9 px-2"><BrandMark inverted /></Link>
    <div className="mb-5 rounded-[1.4rem] border border-white/10 bg-white/[.06] p-4">
      <p className="text-[10px] font-black uppercase tracking-[.18em] text-[#8edbd2]">Không gian học</p>
      <p className="mt-2 text-lg font-black leading-tight">Học tiếng Anh</p>
      <p className="mt-2 text-xs leading-5 text-white/45">Dành riêng cho người Việt.</p>
    </div>
    <nav className="flex flex-1 flex-col gap-1.5">{navItems.map((item) => <SidebarItem key={item.href} {...item} />)}</nav>
    <div className="flex items-center gap-3 border-t border-white/10 px-2 pt-5">
      <ClerkLoading><LoaderCircle className="h-5 w-5 animate-spin text-white/50" /></ClerkLoading>
      <ClerkLoaded><UserButton /><span className="text-xs font-bold text-white/50">Tài khoản học viên</span></ClerkLoaded>
    </div>
  </aside>
);
