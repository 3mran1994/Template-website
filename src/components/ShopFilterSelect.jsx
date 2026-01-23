"use client";
import React from "react";

const filterCategories = [
  "ALL COFFEE",
  "SIGNATURE BLENDS",
  "LIMITED OFFERINGS",
  "CRAFT INSTANT",
  "COFFEE SETS",
  "ESPRESSO",
  "SINGLE ORIGIN",
  "NOLA",
  "DECAF",
  "COLD BREW"
];

export default function ShopFilterSelect({ onSelect, selectedCategory, classNameOverride, noHorizontalPadding }) {
  return (
    <div className={`w-full pt-0 pb-2 ${noHorizontalPadding ? '' : 'px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24'}`}>
      <div
        className={`flex flex-wrap mb-8 ${classNameOverride ? classNameOverride : 'justify-center'}`}
        style={classNameOverride === 'justify-start' ? { gap: 0 } : {}}
      >
        <div className={classNameOverride === 'justify-start' ? 'flex flex-wrap gap-2 sm:gap-2.5 md:gap-3' : 'flex flex-wrap gap-2 sm:gap-2.5 md:gap-3'} style={classNameOverride === 'justify-start' ? { marginLeft: 0 } : {}}>
        {filterCategories.map((category) => (
          <button
            key={category}
            className={`border border-neutral-700 bg-white px-3 py-1.5 text-[10px] font-medium tracking-wider text-neutral-700 hover:bg-neutral-800 hover:text-white hover:border-neutral-800 transition-all duration-300 ease-in-out sm:px-3.5 sm:py-1.5 sm:text-[11px] md:px-4 md:py-2 md:text-xs${selectedCategory === category ? ' bg-neutral-800 text-white border-neutral-800' : ''}`}
            onClick={() => onSelect && onSelect(category)}
            style={classNameOverride === 'justify-start' ? { marginLeft: 0 } : {}}
          >
            {category}
          </button>
        ))}
        </div>
      </div>
    </div>
  );
}
