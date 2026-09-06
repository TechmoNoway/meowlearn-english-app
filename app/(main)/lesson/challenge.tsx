import { challengeOptions, challenges } from "@/db/schema";
import { Card } from "./card";

type Props = { options: (typeof challengeOptions.$inferSelect)[]; onSelect: (id: number) => void; status: "correct" | "wrong" | "none"; selectedOptions?: number; disabled?: boolean; type: (typeof challenges.$inferSelect)["type"] };

export const Challenge = ({ options, onSelect, status, selectedOptions, disabled, type }: Props) => <div className="grid gap-3 sm:grid-cols-2">{options.map((option,index) => <Card key={option.id} id={option.id} text={option.text} imageSrc={option.imageSrc} shortcut={`${index + 1}`} selected={selectedOptions === option.id} onClick={() => onSelect(option.id)} status={status} audioSrc={option.audioSrc} disabled={disabled} type={type}/>)}</div>;
