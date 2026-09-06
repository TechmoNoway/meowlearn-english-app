"use client";

import { useExitModal } from "@/app/store/use-exit-modal";
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
import { DoorOpen } from "lucide-react";

export const ExitModal = () => {
  const router = useRouter();
  const { isOpen, close } = useExitModal();

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <span className="grid h-16 w-16 place-items-center rounded-3xl bg-[#fff6dc] text-[#aa7612]"><DoorOpen className="h-7 w-7" /></span>
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            Dừng buổi học tại đây?
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Tiến độ đã hoàn thành vẫn được giữ. Bạn có thể quay lại bất cứ lúc nào.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              variant="primary"
              className="w-full"
              size="lg"
              onClick={close}
            >
              Tiếp tục học
            </Button>
            <Button
              variant="dangerOutline"
              className="w-full"
              size="lg"
              onClick={() => {
                close();
                router.push("/learn");
              }}
            >
              Rời buổi học
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
