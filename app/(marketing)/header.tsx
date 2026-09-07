import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, Show, SignInButton, UserButton } from "@clerk/nextjs";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { BRAND_NAME } from "@/lib/brand";

export const Header = () => (
  <header className="sticky top-0 z-50 border-b border-[#e8dfd2]/80 bg-[#fffaf1]/90 px-5 backdrop-blur-xl">
    <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between">
      <Link href="/" aria-label={`Trang chủ ${BRAND_NAME}`}><BrandMark /></Link>
      <nav className="hidden items-center gap-7 text-sm font-bold text-[#607386] md:flex">
        <Link href="/#phuong-phap" className="hover:text-[#18344f]">Phương pháp</Link>
        <Link href="/#lo-trinh" className="hover:text-[#18344f]">Lộ trình</Link>
        <Link href="/#bai-hoc" className="hover:text-[#18344f]">Bài học mẫu</Link>
      </nav>
      <ClerkLoading><LoaderCircle className="h-5 w-5 animate-spin text-[#2f9d92]" /></ClerkLoading>
      <ClerkLoaded>
        <Show when="signed-in"><div className="flex items-center gap-3"><Button asChild size="sm" variant="primary"><Link href="/learn">Vào studio</Link></Button><UserButton /></div></Show>
        <Show when="signed-out"><SignInButton mode="modal" fallbackRedirectUrl="/learn"><Button size="sm" variant="ghost">Đăng nhập</Button></SignInButton></Show>
      </ClerkLoaded>
    </div>
  </header>
);
