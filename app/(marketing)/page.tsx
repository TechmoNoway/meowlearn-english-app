import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, Show, SignInButton } from "@clerk/nextjs";
import { ArrowRight, BookOpenText, Check, Headphones, Languages, LoaderCircle, MessageSquareText, Sparkles } from "lucide-react";
import Link from "next/link";

const lessonRows = [
  ["Good morning", "Chào buổi sáng", "Greeting"],
  ["Could you help me?", "Bạn có thể giúp tôi không?", "Travel"],
  ["I would like a coffee", "Tôi muốn một ly cà phê", "Daily life"],
];

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <section className="relative mx-auto grid min-h-[690px] max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.02fr_.98fr] lg:py-24">
        <div className="animate-float-in relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-extrabold text-[#2f9d92] shadow-sm">
            <Sparkles className="h-4 w-4" /> Chỉ học tiếng Anh. Thật sâu, không lan man.
          </div>
          <h1 className="max-w-[660px] text-balance text-[clamp(3.25rem,7.4vw,6.25rem)] font-black leading-[0.92] tracking-[-0.065em] text-[#18344f]">
            Nói điều bạn <span className="relative text-[#ff6b4a]">thật sự<span className="absolute -bottom-1 left-1 h-2 w-[92%] -rotate-1 rounded-full bg-[#f5c451]/80" /></span> muốn nói.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#596f82]">
            MeowLearn biến những tình huống hằng ngày thành buổi luyện tiếng Anh ngắn, rõ và dùng được ngay — thiết kế riêng cho người Việt.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ClerkLoading><LoaderCircle className="h-6 w-6 animate-spin text-[#ff6b4a]" /></ClerkLoading>
            <ClerkLoaded>
              <Show when="signed-out">
                <Button size="lg" variant="secondary" className="group" asChild><Link href="/start">Học thử ngay 2 phút <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" /></Link></Button>
                <SignInButton mode="modal" fallbackRedirectUrl="/learn"><Button size="lg">Tôi đã có tài khoản</Button></SignInButton>
              </Show>
              <Show when="signed-in"><Button size="lg" variant="secondary" asChild><Link href="/learn">Tiếp tục lộ trình <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></Show>
            </ClerkLoaded>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-[#64798b]">
            <span className="flex items-center gap-2"><Check className="h-4 w-4 text-[#2f9d92]" /> Hội thoại thực tế</span>
            <span className="flex items-center gap-2"><Check className="h-4 w-4 text-[#2f9d92]" /> Tiến độ rõ ràng</span>
          </div>
        </div>

        <div className="fine-grid relative min-h-[520px] rounded-[2.5rem] border border-[#dfd5c6] bg-[#f9f1e5] p-5 shadow-[0_30px_80px_rgba(24,52,79,0.12)] sm:p-8">
          <div className="absolute -right-9 -top-9 h-32 w-32 rounded-full bg-[#f5c451]/70 blur-sm" />
          <div className="relative rotate-[-2deg] rounded-[2rem] bg-[#18344f] p-7 text-white shadow-2xl">
            <div className="flex items-center justify-between"><span className="text-xs font-black uppercase tracking-[.2em] text-white/55">Buổi học 08</span><span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">12 phút</span></div>
            <p className="mt-16 text-sm text-[#8edbd2]">Tình huống hôm nay</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-.04em]">Gọi món như người bản xứ</h2>
            <div className="mt-8 flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-full bg-[#ff6b4a]"><Headphones className="h-5 w-5" /></span><div><p className="text-xs text-white/50">Nghe & phản xạ</p><p className="font-bold">“Could I have the menu?”</p></div></div>
          </div>
          <div className="relative -mt-1 ml-auto w-[92%] rotate-[2deg] rounded-[1.6rem] border bg-white p-5 shadow-xl sm:w-[85%]">
            <p className="eyebrow">Ghi nhớ nhanh</p>
            <div className="mt-3 flex items-end justify-between gap-4"><div><p className="text-xl font-black text-[#18344f]">Could I have…?</p><p className="mt-1 text-sm text-[#728394]">Cho tôi … được không?</p></div><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#e9f7f4] text-[#2f9d92]"><MessageSquareText className="h-5 w-5" /></span></div>
          </div>
        </div>
      </section>

      <section id="phuong-phap" className="bg-[#18344f] px-5 py-24 text-white">
        <div className="mx-auto max-w-6xl"><p className="eyebrow !text-[#8edbd2]">Một phương pháp có chủ đích</p><div className="mt-4 grid gap-12 lg:grid-cols-[.85fr_1.15fr]"><h2 className="text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">Không chạy đua. Học để dùng được.</h2><div className="grid gap-4 sm:grid-cols-3">{[[MessageSquareText,"Tình huống","Học theo đoạn hội thoại thật."],[Headphones,"Phản xạ","Nghe, chọn và hiểu trong ngữ cảnh."],[BookOpenText,"Ôn đúng lúc","Quay lại phần bạn thường nhầm."]].map(([Icon,title,text]) => { const I = Icon as typeof MessageSquareText; return <div key={title as string} className="rounded-[1.4rem] bg-white/[.07] p-5"><I className="h-6 w-6 text-[#f5c451]"/><h3 className="mt-8 font-black">{title as string}</h3><p className="mt-2 text-sm leading-6 text-white/60">{text as string}</p></div>})}</div></div></div>
      </section>

      <section id="lo-trinh" className="mx-auto max-w-6xl px-5 py-24"><div className="grid items-center gap-12 lg:grid-cols-2"><div><p className="eyebrow">Lộ trình tiếng Anh</p><h2 className="display-title mt-4">Một mục tiêu.<br/>Tiến bộ thật rõ.</h2><p className="mt-5 max-w-lg leading-7 text-[#687b8b]">Học tiếng Anh từ chào hỏi đến công việc, du lịch và giao tiếp tự nhiên, với hướng dẫn bằng tiếng Việt khi bạn cần.</p><div className="mt-7 flex gap-3"><span className="rounded-full bg-[#18344f] px-4 py-2 text-sm font-bold text-white">VI → ENGLISH</span></div></div><div id="bai-hoc" className="paper-card overflow-hidden"><div className="flex items-center justify-between border-b bg-[#f7f1e8] p-5"><div><p className="eyebrow">Bài học mẫu</p><p className="mt-1 font-black">Những câu dùng mỗi ngày</p></div><Languages className="h-6 w-6 text-[#ff6b4a]"/></div>{lessonRows.map(([en,vi,tag],i)=><div key={en} className="grid grid-cols-[32px_1fr_auto] items-center gap-3 border-b p-5 last:border-0"><span className="text-xs font-black text-[#a5a097]">0{i+1}</span><div><p className="font-black text-[#18344f]">{en}</p><p className="mt-1 text-sm text-[#758595]">{vi}</p></div><span className="hidden rounded-full bg-[#fff1ec] px-3 py-1 text-xs font-bold text-[#dc4a2b] sm:block">{tag}</span></div>)}</div></div></section>
    </div>
  );
}
