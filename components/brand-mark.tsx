import { MessageCircleMore } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = { compact?: boolean; inverted?: boolean; className?: string };

export const BrandMark = ({ compact = false, inverted = false, className }: Props) => (
  <div className={cn("flex items-center gap-3", className)}>
    <span className={cn("relative grid h-10 w-10 place-items-center rounded-[14px]", inverted ? "bg-[#ff6b4a] text-white" : "bg-[#18344f] text-white")}>
      <MessageCircleMore className="h-5 w-5" strokeWidth={2.4} />
      <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-current bg-[#f5c451]" />
    </span>
    {!compact && (
      <span className={cn("text-xl font-black tracking-[-0.04em]", inverted ? "text-white" : "text-[#18344f]")}>
        meow<span className="text-[#ff6b4a]">learn</span>
      </span>
    )}
  </div>
);
