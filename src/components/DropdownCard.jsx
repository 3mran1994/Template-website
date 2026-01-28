import React from "react";

export default function DropdownCard({ title, image }) {
  return (
    <a
      href="#"
      className="group relative flex flex-col overflow-hidden rounded-sm bg-white"
    >
      <div className="aspect-square w-full bg-neutral-100">
        <div className="flex h-full w-full items-center justify-center text-[10px] text-neutral-400 sm:text-xs">
          {image || "Image"}
        </div>
      </div>
      <div className="p-2 sm:p-3">
        <p className="text-[9px] font-semibold tracking-wider text-neutral-900 group-hover:text-[#6dc3d8] sm:text-xs">
          {title}
        </p>
      </div>
    </a>
  );
}
