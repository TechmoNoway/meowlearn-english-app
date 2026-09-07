import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./list";
import { BookOpenCheck } from "lucide-react";

const CoursesPage = async () => {
  const [courses, userProgress] = await Promise.all([getCourses(), getUserProgress()]);
  return <div className="mx-auto max-w-[920px]"><div className="mb-10 grid items-end gap-7 lg:grid-cols-[1fr_auto]"><div><p className="eyebrow">Chương trình tiếng Anh</p><h1 className="display-title mt-3">Một lộ trình. Học thật sâu.</h1><p className="mt-4 max-w-2xl text-base leading-7 text-[#687b8b]">MeowLearn chỉ dạy tiếng Anh cho người Việt. Mỗi ví dụ, lời giải và tình huống đều tập trung vào cách dùng tiếng Anh tự nhiên trong đời sống.</p></div><div className="hidden h-24 w-24 rotate-3 place-items-center rounded-[2rem] bg-[#18344f] text-white shadow-xl sm:grid"><BookOpenCheck className="h-10 w-10" /></div></div><List courses={courses} activeCourseId={userProgress?.activeCourseId}/><div className="mt-6 rounded-[1.4rem] border border-dashed border-[#b8afa2] p-5 text-sm leading-6 text-[#718293]"><strong className="text-[#18344f]">Vì sao chỉ học tiếng Anh?</strong> Toàn bộ nội dung được xây dựng quanh lỗi người Việt thường gặp, cách diễn đạt tự nhiên và những tình huống cần dùng tiếng Anh thật.</div></div>;
};

export default CoursesPage;
