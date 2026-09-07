"use client";

import { Button } from "@/components/ui/button";
import { Show, SignUpButton } from "@clerk/nextjs";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Coffee,
  MessageCircle,
  Plane,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const goals = [
  {
    id: "conversation",
    title: "Giao tiếp hằng ngày",
    description: "Nói tự nhiên trong những tình huống quen thuộc.",
    icon: MessageCircle,
  },
  {
    id: "work",
    title: "Tiếng Anh công việc",
    description: "Tự tin họp, viết và trình bày ý tưởng.",
    icon: BriefcaseBusiness,
  },
  {
    id: "travel",
    title: "Du lịch chủ động",
    description: "Hỏi đường, gọi món và xử lý tình huống.",
    icon: Plane,
  },
] as const;

const answers = ["I want a coffee", "I am a coffee", "I have coffee want"];

export const OnboardingFlow = () => {
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState<(typeof goals)[number] | null>(null);
  const [answer, setAnswer] = useState<string | null>(null);
  const correct = answer === answers[0];

  return (
    <section className="w-full px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center gap-4">
          <button
            type="button"
            aria-label="Quay lại"
            onClick={() => step > 0 ? setStep((value) => value - 1) : window.history.back()}
            className="focus-ring grid h-10 w-10 shrink-0 place-items-center rounded-full border bg-white text-[#18344f] shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#e8dfd2]">
            <div
              className="h-full rounded-full bg-[#ff6b4a] transition-all duration-500"
              style={{ width: `${((step + 1) / 3) * 100}%` }}
            />
          </div>
          <span className="text-xs font-black text-[#83909a]">{step + 1}/3</span>
        </div>

        {step === 0 && (
          <div className="animate-float-in">
            <p className="eyebrow">Bắt đầu từ bạn</p>
            <h1 className="display-title mt-3 max-w-2xl">Bạn muốn dùng tiếng Anh vào việc gì nhất?</h1>
            <p className="mt-4 text-[#687b8b]">Chọn một mục tiêu. Bạn có thể thay đổi sau.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {goals.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => { setGoal(item); setAnswer(null); setStep(1); }}
                    className="focus-ring group min-h-[168px] rounded-[1.6rem] border bg-white p-5 text-left shadow-[0_12px_36px_rgba(24,52,79,.06)] transition hover:-translate-y-1 hover:border-[#ff6b4a]/50 hover:shadow-xl sm:min-h-56 sm:p-6"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e9f7f4] text-[#2f9d92] transition group-hover:bg-[#2f9d92] group-hover:text-white"><Icon className="h-5 w-5" /></span>
                    <h2 className="mt-5 text-lg font-black text-[#18344f] sm:mt-8">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-[#718293]">{item.description}</p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="animate-float-in">
            <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#18344f] text-white"><Coffee className="h-5 w-5" /></span><div><p className="eyebrow">Thử ngay một câu</p><p className="text-sm text-[#718293]">Tình huống: tại quán cà phê</p></div></div>
            <h1 className="display-title mt-7">Bạn sẽ nói “Tôi muốn một ly cà phê” thế nào?</h1>
            <div className="mt-8 grid gap-3">
              {answers.map((item, index) => {
                const chosen = answer === item;
                const isCorrectAnswer = item === answers[0];
                return (
                  <button
                    key={item}
                    type="button"
                    disabled={answer !== null}
                    onClick={() => setAnswer(item)}
                    className={`focus-ring flex min-h-16 items-center gap-4 rounded-[1.2rem] border bg-white px-5 py-4 text-left font-bold transition ${chosen && correct ? "border-[#2f9d92] bg-[#edf9f6] text-[#237c73]" : chosen ? "border-[#cf4050] bg-[#fff0f2] text-[#b93243]" : answer && isCorrectAnswer ? "border-[#2f9d92] bg-[#edf9f6] text-[#237c73]" : "hover:border-[#18344f]/30"}`}
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border text-xs font-black">{index + 1}</span>
                    {item}
                    {(chosen && correct) || (answer && isCorrectAnswer) ? <Check className="ml-auto h-5 w-5" /> : null}
                  </button>
                );
              })}
            </div>
            {answer && (
              <div className={`mt-6 rounded-[1.4rem] p-5 ${correct ? "bg-[#e9f7f4]" : "bg-[#fff0f2]"}`}>
                <p className="font-black text-[#18344f]">{correct ? "Chính xác — bạn bắt nhịp rất nhanh!" : "Gần đúng rồi — câu tự nhiên là “I want a coffee”."}</p>
                <p className="mt-2 text-sm leading-6 text-[#687b8b]">“I want…” dùng khi bạn muốn nói trực tiếp điều mình cần. Trong giao tiếp lịch sự hơn, bạn sẽ học “I’d like…”.</p>
                <Button className="mt-5 w-full sm:w-auto" variant="secondary" onClick={() => setStep(2)}>Xem kế hoạch của tôi <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </div>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="animate-float-in overflow-hidden rounded-[2rem] border bg-white shadow-[0_24px_70px_rgba(24,52,79,.10)]">
            <div className="bg-[#18344f] p-7 text-white sm:p-10">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#ff6b4a]"><Sparkles className="h-5 w-5" /></span>
              <p className="mt-8 text-xs font-black uppercase tracking-[.18em] text-[#8edbd2]">Lộ trình dành cho bạn</p>
              <h1 className="mt-3 text-3xl font-black tracking-[-.04em] sm:text-4xl">10 phút tiếng Anh mỗi ngày</h1>
              <p className="mt-3 max-w-xl leading-7 text-white/65">Bắt đầu với {goal?.title.toLowerCase() || "giao tiếp thực tế"}, sau đó mở rộng sang công việc, du lịch và phản xạ tự nhiên.</p>
            </div>
            <div className="grid gap-6 p-7 sm:grid-cols-[1fr_auto] sm:items-center sm:p-10">
              <div className="grid grid-cols-3 gap-3 text-center"><div><p className="text-2xl font-black text-[#18344f]">8</p><p className="text-xs text-[#81909b]">chủ đề</p></div><div><p className="text-2xl font-black text-[#18344f]">32</p><p className="text-xs text-[#81909b]">bài học</p></div><div><p className="text-2xl font-black text-[#18344f]">10′</p><p className="text-xs text-[#81909b]">mỗi ngày</p></div></div>
              <div>
                <Show when="signed-out"><SignUpButton mode="modal" fallbackRedirectUrl="/courses"><Button size="lg" variant="secondary" className="w-full">Lưu lộ trình miễn phí <ArrowRight className="ml-2 h-4 w-4" /></Button></SignUpButton></Show>
                <Show when="signed-in"><Button size="lg" variant="secondary" className="w-full" asChild><Link href="/courses">Bắt đầu bài đầu tiên <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></Show>
                <p className="mt-3 text-center text-[11px] text-[#8a959c]">Không cần thẻ thanh toán.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
