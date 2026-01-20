import React from "react";

export default function AddToCartButton({ onClick, className = "", children = "ADD TO CART" }) {
  const baseClasses = "w-full bg-neutral-700 py-3 text-sm font-medium uppercase tracking-wider text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-black ";
  const scaleClass = "transition-all duration-300 ease-in transform hover:scale-105";
  const hoverColorClass = "hover:bg-neutral-800";
  return (
    <button
      className={`${baseClasses} ${scaleClass} ${hoverColorClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
