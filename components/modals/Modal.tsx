import { X } from "phosphor-react";
import React, { useEffect } from "react";
import Button from "../ui/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-90 flex items-center justify-center p-1 bg-background/50 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="bg-background rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden border-4 border-primary-light flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-primary-light">
          <h2 className="text-2xl font-bold text-primary">{title}</h2>
          <Button onClick={onClose} size="icon">
            <X size={24} />
          </Button>
        </div>

        <div className="overflow-y-auto md:p-6 p-2 grow">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
