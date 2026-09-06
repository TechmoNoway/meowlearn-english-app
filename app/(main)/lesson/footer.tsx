import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import { useKey } from "react-use";
import { useRouter } from "next/navigation";

type Props = { onCheck: () => void; status: "correct" | "wrong" | "none" | "completed"; disabled?: boolean; lessonId?: number; correctAnswer?: string };

export const Footer = ({ onCheck, status, disabled, lessonId, correctAnswer }: Props) => {
  const router = useRouter();
  useKey("Enter", onCheck, {}, [onCheck]);
  return <footer className={cn("border-t bg-white/85 px-5 py-4 backdrop-blur-xl", status === "correct" && "border-[#bce2dd] bg-[#edf9f7]", status === "wrong" && "border-[#f0c6cb] bg-[#fff4f5]")}><div className="mx-auto flex min-h-[60px] max-w-[980px] items-center justify-between gap-4">
    <div className="min-w-0">{status === "none" && <p className="hidden text-sm font-semibold text-[#81909c] sm:block">Mẹo: dùng phím 1–3 để chọn, Enter để kiểm tra.</p>}{status === "correct" && <div className="flex items-center gap-3 text-[#247c73]"><CheckCircle2 className="h-6 w-6 shrink-0"/><div><p className="font-black">Chính xác — rất tự nhiên.</p><p className="hidden text-xs text-[#4e8d86] sm:block">Bạn đang xây phản xạ tốt.</p></div></div>}{status === "wrong" && <div className="flex items-center gap-3 text-[#b93243]"><XCircle className="h-6 w-6 shrink-0"/><div><p className="font-black">Chưa đúng. Thử lại nhé.</p>{correctAnswer && <p className="hidden truncate text-xs text-[#b96872] sm:block">Đáp án: {correctAnswer}</p>}</div></div>}{status === "completed" && <Button variant="primaryOutline" onClick={() => router.push(`/lesson/${lessonId}`)}><RotateCcw className="mr-2 h-4 w-4"/>Ôn lại</Button>}</div>
    <Button disabled={disabled} onClick={onCheck} variant={status === "wrong" ? "danger" : status === "correct" ? "super" : "secondary"} className="min-w-[132px]">{status === "none" ? "Kiểm tra" : status === "correct" ? "Câu tiếp theo" : status === "wrong" ? "Thử lại" : "Về lộ trình"}</Button>
  </div></footer>;
};
