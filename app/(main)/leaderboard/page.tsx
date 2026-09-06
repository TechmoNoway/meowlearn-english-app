import { getTopTenUsers, getUserProgress, getUserSubscription } from "@/db/queries";
import { redirect } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BarChart3, Medal, TrendingUp } from "lucide-react";

const LeaderboardPage = async () => {
  const [userProgress, , leaderboard] = await Promise.all([getUserProgress(), getUserSubscription(), getTopTenUsers()]);
  if (!userProgress?.activeCourse) redirect("/courses");
  const maxPoints = Math.max(...leaderboard.map((user) => user.points), 1);
  return <div className="mx-auto max-w-[900px]"><div className="mb-9 grid gap-7 md:grid-cols-[1fr_auto] md:items-end"><div><p className="eyebrow">Nhịp học cộng đồng</p><h1 className="display-title mt-3">Tiến độ, không phải cuộc đua</h1><p className="mt-4 max-w-2xl leading-7 text-[#6c7f8e]">Một góc nhìn nhẹ nhàng để thấy mọi người đang duy trì thói quen ra sao. Điểm số chỉ là dấu mốc, không phải thước đo năng lực.</p></div><span className="grid h-20 w-20 place-items-center rounded-[1.8rem] bg-[#fff0ec] text-[#ff6b4a]"><BarChart3 className="h-8 w-8"/></span></div>
  <div className="paper-card overflow-hidden"><div className="grid grid-cols-[44px_1fr_auto] items-center gap-3 border-b bg-[#f7f1e8] px-5 py-4 text-[10px] font-black uppercase tracking-[.15em] text-[#90979a]"><span>#</span><span>Học viên</span><span>Điểm học</span></div>{leaderboard.length === 0 ? <div className="p-10 text-center text-sm text-[#718293]">Chưa có dữ liệu tiến độ. Hãy hoàn thành bài đầu tiên để bắt đầu.</div> : leaderboard.map((user,index) => <div key={user.userId} className="grid grid-cols-[44px_1fr_auto] items-center gap-3 border-b px-5 py-4 last:border-0"><span className="font-black text-[#929895]">{index === 0 ? <Medal className="h-5 w-5 text-[#e4a824]"/> : String(index+1).padStart(2,"0")}</span><div className="flex min-w-0 items-center gap-3"><Avatar className="h-11 w-11 border-2 border-white shadow"><AvatarImage src={user.userImageSrc}/><AvatarFallback>{user.userName.slice(0,1)}</AvatarFallback></Avatar><div className="min-w-0 flex-1"><p className="truncate font-black text-[#18344f]">{user.userName}</p><div className="mt-2 h-1 max-w-[280px] overflow-hidden rounded-full bg-[#ece5db]"><div className="h-full rounded-full bg-[#2f9d92]" style={{width:`${(user.points/maxPoints)*100}%`}}/></div></div></div><span className="flex items-center gap-1.5 rounded-full bg-[#fff6dc] px-3 py-1.5 text-xs font-black text-[#a16f11]"><TrendingUp className="h-3.5 w-3.5"/>{user.points}</span></div>)}</div></div>;
};
export default LeaderboardPage;
