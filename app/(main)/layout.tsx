import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";
import { auth } from "@clerk/nextjs/server";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  await auth.protect();

  return <>
    <MobileHeader />
    <Sidebar className="hidden lg:flex" />
    <main className="min-h-screen px-4 pb-28 pt-24 sm:px-6 lg:pl-[304px] lg:pr-8 lg:pt-8">
      <div className="mx-auto w-full max-w-[1180px]">{children}</div>
    </main>
  </>;
};

export default MainLayout;
