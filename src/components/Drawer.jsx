"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Drawer({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  footer,
  maxWidth = "max-w-2xl",
  showCloseText = false,
  headerAlign = "between"
}) {

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const headerJustify = {
    between: "justify-between",
    end: "justify-end",
    start: "justify-start"
  }[headerAlign];

  if (!mounted) return null;
  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 z-50 w-full ${maxWidth} bg-white shadow-2xl transition-transform duration-300 overflow-hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className={`flex items-center ${headerJustify} border-b border-neutral-200 bg-white px-8 py-5`}>
            {title && (
              <h2 className="text-2xl font-light text-neutral-800">
                {title}
              </h2>
            )}
            <button
              aria-label="Close"
              className="text-neutral-700 hover:text-black transition-colors cursor-pointer"
              onClick={onClose}
            >
              {showCloseText && (
                <span className="text-sm font-medium tracking-wider">CLOSE</span>
              )}
              <XMarkIcon className={`h-${showCloseText ? '5' : '6'} w-${showCloseText ? '5' : '6'} ${showCloseText ? 'ml-2 inline' : ''}`} />
            </button>
          </div>

          {/* Content - scrollable */}
          <div className="flex-1 overflow-y-auto bg-white">
            {children}
          </div>

          {/* Footer - optional, sticky at bottom */}
          {footer && (
            <div className="border-t border-neutral-200 bg-white">
              {footer}
            </div>
          )}
        </div>
      </div>
    </>,
    document.body
  );
}
