import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpenText, Clock3, Play } from "lucide-react";
import Link from "next/link";

type Props = {
  lessonId?: number;
  lessonTitle?: string;
  percentage: number;
  completedCourse: boolean;
};

export const DailyFocus = ({
  lessonId,
  lessonTitle,
  percentage,
  completedCourse,
}: Props) => (
  <section className="relative mb-6 overflow-hidden rounded-[2rem] bg-[#18344f] p-6 text-white shadow-[0_20px_55px_rgba(24,52,79,.18)] sm:p-8">
    <div className="absolute -right-12 -top-20 h-56 w-56 rounded-full bg-[#2f9d92]/30" />
    <div className="absolute -bottom-20 right-28 h-40 w-40 rounded-full bg-[#f5c451]/15" />
    <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
      <div>
        <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[.18em] text-[#8edbd2]"><Clock3 className="h-4 w-4" /> Bài học hôm nay · 10 phút</div>
        <h2 className="mt-4 max-w-xl text-3xl font-black leading-tight tracking-[-.04em] sm:text-4xl">{completedCourse ? "Ôn lại để phản xạ nhanh hơn" : lessonTitle || "Sẵn sàng cho bài đầu tiên?"}</h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-white/60">Một bài ngắn, một tình huống thật. Hoàn thành trước khi khám phá phần còn lại của lộ trình.</p>
        <div className="mt-6 max-w-lg">
          <div className="mb-2 flex justify-between text-xs font-bold text-white/60"><span>{completedCourse ? "Đã hoàn thành lộ trình" : "Tiến độ bài hiện tại"}</span><span>{completedCourse ? 100 : Math.round(percentage)}%</span></div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-[#ff6b4a]" style={{ width: `${completedCourse ? 100 : Math.min(percentage, 100)}%` }} /></div>
        </div>
      </div>
      <div className="flex flex-col gap-3 lg:items-end">
        <Button size="lg" variant="secondary" asChild>
          <Link href={lessonId ? `/lesson/${lessonId}` : "/courses"}><Play className="mr-2 h-4 w-4 fill-current" />{completedCourse ? "Ôn lại ngay" : percentage > 0 ? "Học tiếp" : "Bắt đầu bài"}<ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
        <span className="flex items-center gap-2 text-xs text-white/45"><BookOpenText className="h-3.5 w-3.5" /> Tự động lưu tiến độ</span>
      </div>
    </div>
  </section>
);
