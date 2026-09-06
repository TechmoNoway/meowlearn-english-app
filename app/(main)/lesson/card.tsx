import { challenges } from "@/db/schema";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCallback } from "react";
import { useAudio, useKey } from "react-use";
import { Check, Volume2, X } from "lucide-react";

type Props = { id: number; imageSrc: string | null; audioSrc: string | null; text: string; shortcut: string; selected?: boolean; onClick: () => void; disabled?: boolean; status?: "correct" | "wrong" | "none"; type: (typeof challenges.$inferSelect)["type"] };

export const Card = ({ imageSrc, audioSrc, text, shortcut, selected, onClick, disabled, status }: Props) => {
  const [audio, , controls] = useAudio({ src: audioSrc || "" });
  const handleClick = useCallback(() => { if (disabled) return; if (audioSrc) controls.play(); onClick(); }, [audioSrc, controls, disabled, onClick]);
  useKey(shortcut, handleClick, {}, [handleClick]);
  return <button type="button" onClick={handleClick} disabled={disabled} className={cn("focus-ring group flex min-h-[76px] w-full items-center gap-4 rounded-[1.25rem] border bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-[#18344f]/30 hover:shadow-md", selected && status === "none" && "border-[#2f9d92] bg-[#effaf8] ring-1 ring-[#2f9d92]", selected && status === "correct" && "border-[#2f9d92] bg-[#e8f6f3] ring-1 ring-[#2f9d92]", selected && status === "wrong" && "border-[#cf4050] bg-[#fff0f2] ring-1 ring-[#cf4050]")}>
    {audio}{imageSrc && <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[#f4efe7]"><Image src={imageSrc} fill alt="" className="object-contain p-1"/></span>}
    <span className="flex-1 text-[15px] font-extrabold leading-6 text-[#18344f]">{text}</span>{audioSrc && <Volume2 className="h-4 w-4 text-[#2f9d92]"/>}<span className={cn("grid h-8 w-8 shrink-0 place-items-center rounded-full border bg-[#faf7f1] text-[11px] font-black text-[#89949b]", selected && status === "none" && "border-[#2f9d92] bg-[#2f9d92] text-white", selected && status === "correct" && "border-[#2f9d92] bg-[#2f9d92] text-white", selected && status === "wrong" && "border-[#cf4050] bg-[#cf4050] text-white")}>{selected && status === "correct" ? <Check className="h-4 w-4"/> : selected && status === "wrong" ? <X className="h-4 w-4"/> : shortcut}</span>
  </button>;
};
