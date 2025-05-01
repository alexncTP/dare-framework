import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

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
      <DialogContent className="sm:max-w-md md:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl flex items-center">
            <span className="bg-blue-600 text-white px-2 py-1 rounded-md mr-2 text-sm">
              Nível {level}
            </span>
            <span>{title}</span>
          </DialogTitle>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        <DialogDescription className="text-base mt-4 text-gray-700">
          {content}
        </DialogDescription>
        <div className="mt-6 flex justify-end">
          <Button
            variant="outline"
            onClick={onClose}
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Fechar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}