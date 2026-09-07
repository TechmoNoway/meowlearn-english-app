import { BrandMark } from "@/components/brand-mark";

export const Footer = () => (
  <footer className="border-t bg-white px-5 py-10">
    <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
      <BrandMark />
      <p className="max-w-md text-sm leading-6 text-[#718293]">Nền tảng học tiếng Anh chuyên sâu dành cho người Việt. Xây thói quen nhỏ, giao tiếp tự tin.</p>
      <p className="text-xs font-bold uppercase tracking-widest text-[#9b9a96]">© 2026 MeowLearn</p>
    </div>
  </footer>
);
