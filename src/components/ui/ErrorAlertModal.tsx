'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export default function ErrorAlertModal({
  open,
  onOpenChange,
  onConfirm,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-left text-base">
            오류가 발생했습니다.
          </AlertDialogTitle>
          <AlertDialogDescription className="text-left">
            문제가 발생하여 회원가입을 처음부터 다시 진행합니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="block text-right">
          <AlertDialogAction
            onClick={onConfirm}
            className="bg-green rounded-[3.125rem] py-3 px-6 hover:bg-green
            cursor-pointer"
          >
            확인
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
