import { getUserProgress, getUserSubscription } from "@/db/queries";
import { redirect } from "next/navigation";
import { Items } from "./items";
import { BatteryCharging } from "lucide-react";

const ShopPage = async () => {
  const [userProgress,userSubscription] = await Promise.all([getUserProgress(),getUserSubscription()]);
  if (!userProgress?.activeCourse) redirect("/courses");
  return <div className="mx-auto max-w-[850px]"><div className="mb-9 flex items-end justify-between gap-6"><div><p className="eyebrow">Kho hỗ trợ</p><h1 className="display-title mt-3">Giữ nhịp học liền mạch</h1><p className="mt-4 max-w-2xl leading-7 text-[#6c7f8e]">Dùng điểm học để nạp năng lượng hoặc mở chế độ học không giới hạn.</p></div><span className="hidden h-20 w-20 shrink-0 place-items-center rounded-[1.8rem] bg-[#18344f] text-[#f5c451] sm:grid"><BatteryCharging className="h-8 w-8"/></span></div><Items hearts={userProgress.hearts} points={userProgress.points} hasActiveSubscription={!!userSubscription?.isActive}/></div>;
};
export default ShopPage;
