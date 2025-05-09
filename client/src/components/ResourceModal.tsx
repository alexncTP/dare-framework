import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ResourceModalProps = {
  isOpen: boolean;
  onClose: () => void;
  level: number;
  title: string;
  content: string;
};

export default function ResourceModal({
  isOpen,
  onClose,
  level,
  title,
  content,
}: ResourceModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md md:max-w-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl flex items-center">
            <span className="bg-blue-600 text-white px-2 py-1 rounded-md mr-2 text-sm">
              Nível {level + 1}
            </span>
            <span>{title}</span>
          </DialogTitle>
        </DialogHeader>
        <div className="text-base mt-4 text-gray-700">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </DialogContent>
    </Dialog>
  );
}