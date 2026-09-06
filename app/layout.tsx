import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { ExitModal } from "@/components/modals/exit-modal";
import { HeartsModal } from "@/components/modals/hearts-modals";
import { PracticeModal } from "@/components/modals/practice-modals";

export const metadata: Metadata = {
  title: { default: "MeowLearn — Anh ngữ cho người Việt", template: "%s · MeowLearn" },
  description: "Học tiếng Anh và tiếng Việt qua hội thoại thực tế, lộ trình rõ ràng và bài tập ngắn gọn mỗi ngày.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="vi">
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
