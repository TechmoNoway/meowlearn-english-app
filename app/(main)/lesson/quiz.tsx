"use client";

import { challengeOptions, challenges, userSubscription } from "@/db/schema";
import { useEffect, useRef, useState, useTransition } from "react";
import { Header } from "./header";
import { QuestionBubble } from "./question-bubble";
import { Challenge } from "./challenge";
import { Footer } from "./footer";
import { upsertChallengeProgress } from "@/actions/challenge-progress";
import { toast } from "sonner";
import { reduceHearts } from "@/actions/user-progress";
import { useMount, useWindowSize } from "react-use";
import ResultCard from "./result-card";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti";
import { useHeartsModal } from "@/app/store/use-hearts-modal";
import { usePracticeModal } from "@/app/store/use-practice-modal";
import { ArrowRight, PartyPopper } from "lucide-react";

type Props = {
  initialPercentage: number;
  initialHearts: number;
  initialLessonId: number;
  initialLessonTitle: string;
  initialLessonChallenges: (typeof challenges.$inferInsert & { completed: boolean; challengeOptions: (typeof challengeOptions.$inferSelect)[] })[];
  userSubscription: (typeof userSubscription.$inferSelect & { isActive: boolean }) | null;
};

export const Quiz = ({ initialPercentage, initialHearts, initialLessonId, initialLessonTitle, initialLessonChallenges, userSubscription }: Props) => {
  const { open: openHeartsModal } = useHeartsModal();
  const { open: openPracticeModal } = usePracticeModal();
  useMount(() => { if (initialPercentage === 100) openPracticeModal(); });
  const { width, height } = useWindowSize();
  const router = useRouter();
  const finishAudioRef = useRef<HTMLAudioElement>(null);
  const correctAudioRef = useRef<HTMLAudioElement>(null);
  const incorrectAudioRef = useRef<HTMLAudioElement>(null);
  const [pending, startTransition] = useTransition();
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(initialPercentage === 100 ? 0 : initialPercentage);
  const [challengesList] = useState(initialLessonChallenges);
  const [activeIndex, setActiveIndex] = useState(() => { const index = challengesList.findIndex((item) => !item.completed); return index === -1 ? 0 : index; });
  const [selectedOption, setSelectedOption] = useState<number>();
  const [status, setStatus] = useState<"correct" | "wrong" | "none">("none");
  const challenge = challengesList[activeIndex];

  const playAudio = (audio: HTMLAudioElement | null) => {
    if (!audio) return;
    audio.currentTime = 0;
    void audio.play().catch(() => undefined);
  };

  useEffect(() => {
    if (!challenge) playAudio(finishAudioRef.current);
  }, [challenge]);

  if (!challenge) return <><audio ref={finishAudioRef} src="/finish.wav" preload="auto"/><Confetti width={width} height={height} recycle={false} numberOfPieces={180} colors={["#ff6b4a","#2f9d92","#f5c451","#18344f"]}/><main className="fine-grid flex flex-1 items-center justify-center px-5 py-14"><div className="w-full max-w-[650px] text-center"><span className="mx-auto grid h-20 w-20 place-items-center rounded-[2rem] bg-[#18344f] text-[#f5c451] shadow-xl"><PartyPopper className="h-9 w-9"/></span><p className="eyebrow mt-7">Buổi học hoàn tất</p><h1 className="mt-3 text-4xl font-black tracking-[-.05em] text-[#18344f]">Bạn vừa tiến thêm một bước thật.</h1><p className="mx-auto mt-4 max-w-lg leading-7 text-[#6d7f8d]">Không cần hoàn hảo ngay. Phản xạ được xây từ những lần quay lại như thế này.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><ResultCard variant="points" value={challengesList.length * 10}/><ResultCard variant="hearts" value={hearts}/></div></div></main><Footer lessonId={initialLessonId} status="completed" onCheck={() => router.push("/learn")}/></>;

  const options = challenge.challengeOptions ?? [];
  const correctOption = options.find((option) => option.correct);
  const onSelect = (id: number) => { if (status === "none") setSelectedOption(id); };
  const onContinue = () => {
    if (!selectedOption) return;
    if (status === "wrong") { setStatus("none"); setSelectedOption(undefined); return; }
    if (status === "correct") { setActiveIndex((value) => value + 1); setStatus("none"); setSelectedOption(undefined); return; }
    if (!correctOption) return;
    if (correctOption.id === selectedOption) {
      startTransition(() => { upsertChallengeProgress(challenge.id || 0).then((response) => { if (response?.error === "hearts") { openHeartsModal(); return; } playAudio(correctAudioRef.current); setStatus("correct"); setPercentage((value) => value + 100 / challengesList.length); if (initialPercentage === 100) setHearts((value) => Math.min(value + 1, 5)); }).catch(() => toast.error("Không thể lưu tiến độ. Vui lòng thử lại.")); });
    } else {
      startTransition(() => { reduceHearts(challenge.id || 0).then((response) => { if (response?.error === "hearts") { openHeartsModal(); return; } playAudio(incorrectAudioRef.current); setStatus("wrong"); if (!response?.error) setHearts((value) => Math.max(value - 1, 0)); }).catch(() => toast.error("Không thể cập nhật năng lượng. Vui lòng thử lại.")); });
    }
  };

  return <><audio ref={incorrectAudioRef} src="/incorrect.wav" preload="auto"/><audio ref={correctAudioRef} src="/correct.wav" preload="auto"/><Header hearts={hearts} percentage={percentage} hasActiveSubscription={!!userSubscription?.isActive} lessonTitle={initialLessonTitle}/><main className="flex flex-1 items-center justify-center px-5 py-10 sm:py-14"><div className="w-full max-w-[760px]"><div className="mb-7 flex items-center justify-between"><p className="eyebrow">Phản xạ {String(activeIndex + 1).padStart(2,"0")} / {String(challengesList.length).padStart(2,"0")}</p><span className="hidden items-center gap-1 text-xs font-bold text-[#8b969c] sm:flex">Chọn câu tự nhiên nhất <ArrowRight className="h-3.5 w-3.5"/></span></div><h1 className="mb-7 text-balance text-2xl font-black leading-tight tracking-[-.035em] text-[#18344f] sm:text-4xl">{challenge.type === "ASSIST" ? "Câu này được hiểu thế nào?" : challenge.question}</h1>{challenge.type === "ASSIST" && <QuestionBubble question={challenge.question}/>}<Challenge options={options} onSelect={onSelect} status={status} selectedOptions={selectedOption} disabled={pending} type={challenge.type}/></div></main><Footer disabled={pending || !selectedOption} status={status} onCheck={onContinue} correctAnswer={status === "wrong" ? correctOption?.text : undefined}/></>;
};
