import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./list";
import { Languages } from "lucide-react";

const CoursesPage = async () => {
  const [courses, userProgress] = await Promise.all([getCourses(), getUserProgress()]);
  return <div className="mx-auto max-w-[920px]"><div className="mb-10 grid items-end gap-7 lg:grid-cols-[1fr_auto]"><div><p className="eyebrow">Khám phá lộ trình</p><h1 className="display-title mt-3">Chọn hướng bạn muốn đi</h1><p className="mt-4 max-w-2xl text-base leading-7 text-[#687b8b]">MeowLearn chỉ tập trung vào hai ngôn ngữ để mỗi ví dụ, lời giải và tình huống đều đúng với cách người Việt và người nói tiếng Anh thực sự giao tiếp.</p></div><div className="hidden h-24 w-24 rotate-3 place-items-center rounded-[2rem] bg-[#18344f] text-white shadow-xl sm:grid"><Languages className="h-10 w-10" /></div></div><List courses={courses} activeCourseId={userProgress?.activeCourseId}/><div className="mt-6 rounded-[1.4rem] border border-dashed border-[#b8afa2] p-5 text-sm leading-6 text-[#718293]"><strong className="text-[#18344f]">Vì sao chỉ có hai lựa chọn?</strong> Thay vì mở rộng nhiều ngôn ngữ với nội dung mỏng, MeowLearn đầu tư sâu cho cặp Anh–Việt: đối chiếu cách nói tự nhiên, lỗi người Việt thường gặp và ngữ cảnh văn hóa.</div></div>;
};

export default CoursesPage;
