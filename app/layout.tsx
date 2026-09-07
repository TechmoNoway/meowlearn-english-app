import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { ExitModal } from "@/components/modals/exit-modal";
import { HeartsModal } from "@/components/modals/hearts-modals";
import { PracticeModal } from "@/components/modals/practice-modals";
import { BRAND_NAME, PRODUCT_NAME } from "@/lib/brand";

export const metadata: Metadata = {
  title: { default: `${PRODUCT_NAME} — Anh ngữ cho người Việt`, template: `%s · ${BRAND_NAME}` },
  description: "Học tiếng Anh cho người Việt qua hội thoại thực tế, lộ trình rõ ràng và bài tập ngắn gọn mỗi ngày.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
    <html lang="vi" data-scroll-behavior="smooth">
        <body className="font-sans">
          <Toaster />
          <ExitModal />
          <HeartsModal />
          <PracticeModal />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
