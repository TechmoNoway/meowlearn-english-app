import { MessageCircleMore } from "lucide-react";

export const QuestionBubble = ({ question }: { question: string }) => (
  <div className="mb-6 flex items-start gap-3 rounded-[1.4rem] bg-[#18344f] p-5 text-white shadow-lg"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-[#8edbd2]"><MessageCircleMore className="h-5 w-5"/></span><div><p className="text-[10px] font-black uppercase tracking-[.16em] text-white/40">Câu cần hiểu</p><p className="mt-2 text-lg font-black leading-snug">{question}</p></div></div>
);
