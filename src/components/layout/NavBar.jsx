"use client";

import { useEffect, useState } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function NavBar({ navLinks = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const megaMenuCategories = [
    {
      title: "COFFEE & TEA",
      items: [
        { label: "ESPRESSO", href: "#" },
        { label: "CRAFT MATCHA", href: "#" },
        { label: "SIGNATURE BLENDS", href: "#" },
        { label: "CRAFT INSTANT COFFEE", href: "#" },
        { label: "LIMITED OFFERINGS", href: "#" },
        { label: "SINGLE ORIGIN", href: "#" },
        { label: "NOLA", href: "#" },
      ],
    },
    {
      title: "GIFTS",
      items: [
        { label: "BUNDLE AND SAVE", href: "#" },
        { label: "GIFT SUBSCRIPTIONS", href: "#" },
      ],
    },
    {
      title: "ALL DRINKWARE",
      items: [
        { label: "TRAVEL MUGS", href: "#" },
        { label: "CERAMICS", href: "#" },
        { label: "GLASSWARE", href: "#" },
      ],
    },
    {
      title: "ALL BREW TOOLS",
      items: [
        { label: "KETTLES", href: "#" },
        { label: "GRINDERS", href: "#" },
        { label: "BREWERS", href: "#" },
        { label: "FILTERS", href: "#" },
        { label: "SCALES", href: "#" },
        { label: "ACCESSORIES", href: "#" },
      ],
    },
  ];

  const featuredCards = [
    { title: "SHOP MATCHA", image: "/matcha.jpg", href: "#" },
    { title: "SHOP DRINKWARE", image: "/drinkware.jpg", href: "#" },
    { title: "SIGNATURE BLENDS", image: "/blends.jpg", href: "#" },
    { title: "JOIN MEMBERSHIP", image: "/membership.jpg", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-30 w-full border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-8 sm:gap-10">
          <nav className="hidden items-center gap-8 text-xs font-medium tracking-wider text-neutral-900 md:flex lg:gap-10">
            <div
              className="relative cursor-pointer border-b-2 border-transparent py-1 hover:border-neutral-900"
              onMouseEnter={() => setIsShopDropdownOpen(true)}
              onMouseLeave={() => setIsShopDropdownOpen(false)}
            >
              SHOP
            </div>
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="border-b-2 border-transparent py-1 hover:border-neutral-900"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4 text-sm text-neutral-700">
          <button aria-label="Search" className="hover:text-black">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
          <button aria-label="Account" className="hover:text-black">
            <UserIcon className="h-5 w-5" />
          </button>
          <button aria-label="Cart" className="hover:text-black">
            <ShoppingBagIcon className="h-5 w-5" />
          </button>
          <button
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            className="text-lg hover:text-black md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mega Menu Dropdown - Hidden on mobile */}
      <div
        className={`absolute left-0 right-0 top-16 hidden w-full bg-white shadow-lg transition-all duration-300 md:block ${
          isShopDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onMouseEnter={() => setIsShopDropdownOpen(true)}
        onMouseLeave={() => setIsShopDropdownOpen(false)}
      >
        <div className="w-full px-6 py-6 md:py-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-[2fr_3fr]">
            {/* Categories Navigation */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 md:gap-x-8 md:gap-y-6">
              {megaMenuCategories.map((category) => (
                <div key={category.title}>
                  <h3 className="mb-2 border-b border-neutral-200 pb-2 text-[10px] font-semibold tracking-wider text-neutral-900 sm:text-xs md:mb-3">
                    {category.title}
                  </h3>
                  <ul className="space-y-1.5 md:space-y-2">
                    {category.items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="block text-[10px] text-neutral-600 hover:text-neutral-900 sm:text-xs"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Featured Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {featuredCards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className="group relative flex flex-col overflow-hidden rounded-sm bg-neutral-100"
                >
                  <div className="aspect-square w-full bg-neutral-200">
                    {/* Placeholder for images */}
                    <div className="flex h-full w-full items-center justify-center text-[10px] text-neutral-400 sm:text-xs">
                      Image
                    </div>
                  </div>
                  <div className="p-2 sm:p-3">
                    <p className="text-[9px] font-semibold tracking-wider text-neutral-900 group-hover:text-[#6dc3d8] sm:text-xs">
                      {card.title}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-20 bg-black/40 transition-opacity duration-200 md:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        id="mobile-nav"
        className={`fixed inset-y-0 right-0 z-30 w-72 max-w-full bg-white shadow-xl transition-transform duration-200 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
          <div className="px-3 py-2 text-xs font-semibold tracking-wider text-neutral-900">
            SHOP
          </div>
          <button
            aria-label="Close menu"
            className="text-lg text-neutral-700 hover:text-black"
            onClick={() => setIsMenuOpen(false)}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-4 py-3 text-sm font-semibold text-neutral-900">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-2 hover:bg-neutral-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto grid grid-cols-3 border-t border-neutral-200 text-center text-sm text-neutral-700">
          <button className="px-2 py-3 hover:bg-neutral-50" aria-label="Search">
            <MagnifyingGlassIcon className="mx-auto h-5 w-5" />
          </button>
          <button className="px-2 py-3 hover:bg-neutral-50" aria-label="Account">
            <UserIcon className="mx-auto h-5 w-5" />
          </button>
          <button className="px-2 py-3 hover:bg-neutral-50" aria-label="Cart">
            <ShoppingBagIcon className="mx-auto h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
;