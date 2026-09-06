"use client";

import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useHeartsModal } from "@/app/store/use-hearts-modal";
import { BatteryWarning } from "lucide-react";

export const HeartsModal = () => {
  const router = useRouter();
  const { isOpen, close } = useHeartsModal();

  const onClick = () => {
    close();
    router.push("/shop");
  };

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <span className="grid h-16 w-16 place-items-center rounded-3xl bg-[#fff0ec] text-[#d84b31]"><BatteryWarning className="h-7 w-7" /></span>
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            Bạn đã hết năng lượng
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Nạp lại bằng điểm học hoặc mở Studio không giới hạn để tiếp tục ngay.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              variant="primary"
              className="w-full"
              size="lg"
              onClick={onClick}
            >
              Xem kho hỗ trợ
            </Button>
            <Button
              variant="dangerOutline"
              className="w-full"
              size="lg"
              onClick={close}
            >
              Để sau
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
