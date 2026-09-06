"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { usePracticeModal } from "@/app/store/use-practice-modal";
import { RotateCcw } from "lucide-react";

export const PracticeModal = () => {
  const { isOpen, close } = usePracticeModal();

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <span className="grid h-16 w-16 place-items-center rounded-3xl bg-[#e8f6f3] text-[#2f9d92]"><RotateCcw className="h-7 w-7" /></span>
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            Ôn lại bài học
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Khi ôn lại, bạn có thể nhận thêm điểm và hồi năng lượng. Trả lời sai sẽ không làm mất năng lượng.
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
              Bắt đầu ôn
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
