"use client";

import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import ProductCard from "./ProductCard";

export default function SearchDrawer({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Mock data for demonstration
  const topCategories = [
    "MOST LOVED",
    "SIGNATURE BLENDS",
    "CRAFT MATCHA",
    "CRAFT INSTANT",
    "BUNDLE AND SAVE",
    "BREW TOOLS"
  ];

  const popularProducts = [
    {
      id: 1,
      name: "Craft Instant Espresso",
      price: 28,
      subtitle: "Cafe-Quality Espresso at Home",
      flavors: "DARK CHOCOLATE, MOLASSES, TOASTED MALT",
      badge: "BEST SELLER"
    },
    {
      id: 2,
      name: "Craft Instant Espresso Single Serve",
      price: 15,
      subtitle: "Cafe-Quality Espresso at Home in Single-Serve Sachets",
      flavors: "DARK CHOCOLATE, MOLASSES, TOASTED MALT",
      badge: "BEST SELLER"
    },
    {
      id: 3,
      name: "Blue Bottle Coffee Filters",
      price: 15,
      subtitle: "Custom Bamboo Filters",
      flavors: "DESIGNED FOR THE BLUE BOTTLE DRIPPER"
    },
    {
      id: 4,
      name: "Hayes Valley Espresso",
      price: 14,
      subtitle: "Dark Roast",
      flavors: "BAKING CHOCOLATE, ORANGE ZEST, BROWN SUGAR",
      badge: "BEST SELLER"
    },
    {
      id: 5,
      name: "Bella Donovan",
      price: 14,
      subtitle: "Medium Roast",
      flavors: "RASPBERRY, CHOCOLATE, MOLASSES",
      badge: "BEST SELLER"
    },
    {
      id: 6,
      name: "Three Africas",
      price: 14,
      subtitle: "Medium Roast",
      flavors: "GOLDEN RAISIN, WINEY BLUEBERRY, LEMON ZEST",
      badge: "BEST SELLER"
    },
    {
      id: 7,
      name: "Blue Bottle Pour Over Kit",
      price: 65,
      subtitle: "Bundle and Save, $72 Value",
      flavors: "BRING THE ART OF BLUE BOTTLE HOME"
    },
    {
      id: 8,
      name: "Winter Single Origin",
      price: 27,
      subtitle: "Light Roast",
      flavors: "BLUEBERRY JAM, HONEY, LAVENDER"
    },
    {
      id: 9,
      name: "Winter Latte Kit",
      price: 30,
      subtitle: "Craft Instant Espresso Sachets and 4 oz Juniper Syrup",
      flavors: "MAKE OUR WINTER LATTE AT HOME"
    },
    {
      id: 10,
      name: "Winter Espresso",
      price: 27,
      subtitle: "Dark Roast",
      flavors: "DARK CHOCOLATE, DRIED RASPBERRY, SALTED TOFFEE",
      badge: "BEST SELLER"
    },
    {
      id: 11,
      name: "Winter Blend",
      price: 27,
      subtitle: "Medium Roast",
      flavors: "DARK CHOCOLATE, MOLASSES, BLACKBERRY"
    },
    {
      id: 12,
      name: "Tokyo Kissa",
      price: 25,
      subtitle: "Dark Roast",
      flavors: "BITTERSWEET COCOA, NUTMEG, MOLASSES",
      badge: "BEST SELLER"
    }
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Full-width Search Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header with Search */}
          <div className="border-b border-neutral-200 bg-white">
            <div className="flex w-full items-center gap-3 px-6 py-4 sm:gap-4 sm:px-8 sm:py-5 md:gap-6 md:px-12 md:py-6 lg:gap-8 lg:px-16 xl:px-20 2xl:px-24">
              {/* Logo Icon */}
              <div className="flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 64"
                  className="h-10 w-8 text-[#4a9fb5] sm:h-12 sm:w-9 md:h-14 md:w-11"
                  fill="currentColor"
                >
                  <path d="M24 2c-6.6 0-12 5.4-12 12v20c0 4 2 7.5 5 9.5v8.5c0 4.4 3.6 8 8 8h2c4.4 0 8-3.6 8-8v-8.5c3-2 5-5.5 5-9.5V14c0-6.6-5.4-12-12-12h-4zm-8 12c0-4.4 3.6-8 8-8h4c4.4 0 8 3.6 8 8v20c0 3.3-2 6.2-5 7.4V34c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v7.4c-3-1.2-5-4.1-5-7.4V14zm5 28h6v10c0 2.2-1.8 4-4 4h-2c-2.2 0-4-1.8-4-4V42z"/>
                </svg>
              </div>

              {/* Search Input */}
              <div className="relative flex-1">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-900 sm:h-4 sm:w-4 md:left-4 md:h-5 md:w-5" />
                <input
                  type="text"
                  placeholder="WHAT CAN WE HELP YOU FIND?"
                  className="w-full rounded-md border border-neutral-900 bg-white py-2 pl-9 pr-4 text-xs tracking-wide placeholder:italic placeholder:text-neutral-600 focus:border-neutral-900 focus:outline-none focus:ring-0 sm:py-2.5 sm:pl-10 sm:text-sm md:py-3 md:pl-11"
                  autoFocus
                />
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="flex-shrink-0 text-neutral-700 hover:text-black"
                aria-label="Close search"
              >
                <XMarkIcon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="w-full px-6 pt-4 pb-5 sm:px-8 sm:pt-5 sm:pb-6 md:px-12 md:pt-6 md:pb-8 lg:px-16 lg:pt-6 lg:pb-10 xl:px-20 2xl:px-24">
              {/* Top Categories */}
              <div className="mb-6 sm:mb-7 md:mb-8 lg:mb-8">
                <h2 className="mb-4 text-sm font-semibold tracking-wider text-neutral-900 sm:mb-5 md:mb-6 md:text-base lg:text-lg">
                  TOP CATEGORIES
                </h2>
                <div className="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3">
                  {topCategories.map((category) => (
                    <button
                      key={category}
                      className="border border-neutral-700 bg-white px-3 py-1.5 text-[10px] font-medium tracking-wider text-neutral-700 hover:bg-neutral-800 hover:text-white hover:border-neutral-800 transition-all duration-300 ease-in-out sm:px-3.5 sm:py-1.5 sm:text-[11px] md:px-4 md:py-2 md:text-xs"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Most Popular Products */}
              <div>
                <h2 className="mb-6 text-sm font-semibold tracking-wider text-neutral-900 sm:mb-7 md:mb-8 md:text-base lg:text-lg">
                  MOST POPULAR
                </h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 md:gap-x-10 md:gap-y-12 lg:grid-cols-3 lg:gap-x-12">
                  {popularProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
