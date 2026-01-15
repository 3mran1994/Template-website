"use client";

import { useEffect, useState } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import ProductCard from "./ProductCard";

export default function NavBar({ navLinks = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isLocationsDropdownOpen, setIsLocationsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen || isCartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, isCartOpen]);

  // Mock cart items for demo
  const cartItems = [];

  const recommendedProducts = [
    {
      id: 1,
      name: 'Craft Instant Espresso',
      price: 28,
      description: 'Cafe-Quality Espresso at Home',
      flavors: 'DARK CHOCOLATE, MOLASSES, TOASTED MALT',
      badge: 'BEST SELLER'
    },
    {
      id: 2,
      name: 'Craft Instant Espresso Single Serve',
      price: 15,
      description: 'Cafe-Quality Espresso at Home in Single-Serve Sachets',
      flavors: 'DARK CHOCOLATE, MOLASSES, TOASTED MALT',
      badge: 'BEST SELLER'
    }
  ];

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

  const locationsOptions = [
    { label: "FIND A CAFE", href: "#" },
    { label: "LEARN ABOUT MEMBERSHIP", href: "#" },
    { label: "FIND IN GROCERY", href: "#" },
  ];

  return (
    <>
      <header className="sticky top-0 z-30 w-full border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full items-center justify-between px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* Left Navigation */}
        <div className="flex flex-1 items-center gap-8 sm:gap-10">
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
                onMouseEnter={() => {
                  if (item.label === "LOCATIONS") {
                    setIsLocationsDropdownOpen(true);
                    setIsShopDropdownOpen(false);
                  } else {
                    setIsLocationsDropdownOpen(false);
                  }
                }}
                onMouseLeave={() => {
                  if (item.label === "LOCATIONS") {
                    setIsLocationsDropdownOpen(false);
                  }
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <a href="/" aria-label="Home" className="block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 64"
              className="h-10 w-8 text-[#4a9fb5]"
              fill="currentColor"
            >
              <path d="M24 2c-6.6 0-12 5.4-12 12v20c0 4 2 7.5 5 9.5v8.5c0 4.4 3.6 8 8 8h2c4.4 0 8-3.6 8-8v-8.5c3-2 5-5.5 5-9.5V14c0-6.6-5.4-12-12-12h-4zm-8 12c0-4.4 3.6-8 8-8h4c4.4 0 8 3.6 8 8v20c0 3.3-2 6.2-5 7.4V34c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v7.4c-3-1.2-5-4.1-5-7.4V14zm5 28h6v10c0 2.2-1.8 4-4 4h-2c-2.2 0-4-1.8-4-4V42z"/>
            </svg>
          </a>
        </div>

        {/* Right Icons */}
        <div className="flex flex-1 items-center justify-end gap-4 text-sm text-neutral-700">
          <button aria-label="Search" className="hover:text-black">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
          <button aria-label="Account" className="hover:text-black">
            <UserIcon className="h-5 w-5" />
          </button>
          <button 
            aria-label="Cart" 
            className="hover:text-black"
            onClick={() => setIsCartOpen(true)}
          >
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

      {/* Locations Dropdown - Hidden on mobile */}
      <div
        className={`absolute left-0 right-0 top-16 hidden w-full bg-white shadow-lg transition-all duration-300 md:block ${
          isLocationsDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onMouseEnter={() => setIsLocationsDropdownOpen(true)}
        onMouseLeave={() => setIsLocationsDropdownOpen(false)}
      >
        <div className="w-full px-6 py-6 md:py-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-[1fr_3fr]">
            {/* Locations Options */}
            <div>
              <ul className="space-y-2">
                {locationsOptions.map((option) => (
                  <li key={option.label}>
                    <a
                      href={option.href}
                      className="block text-xs font-semibold tracking-wider text-neutral-900 hover:text-neutral-600"
                    >
                      {option.label}
                    </a>
                  </li>
                ))}
              </ul>
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
          <button 
            className="px-2 py-3 hover:bg-neutral-50" 
            aria-label="Cart"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBagIcon className="mx-auto h-5 w-5" />
          </button>
        </div>
      </div>
    </header>

      {/* Cart Drawer Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isCartOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 bottom-0 right-0 z-50 w-full max-w-2xl bg-white shadow-2xl transition-transform duration-300 overflow-hidden ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-neutral-200 bg-white px-8 py-5">
            <h2 className="text-2xl font-light text-neutral-800">
              Your cart is empty
            </h2>
            <button
              aria-label="Close cart"
              className="text-neutral-700 hover:text-black transition-colors"
              onClick={() => setIsCartOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto bg-white px-8 py-8">
            {cartItems.length === 0 ? (
              <div>
                <h3 className="mb-8 text-xl font-light text-neutral-800">We think you may like</h3>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  {recommendedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Cart items would go here */}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-neutral-200 bg-white px-8 py-6">
            <button 
              className="w-full bg-[#5a5a5a] py-4 text-sm font-medium uppercase tracking-wider text-white hover:bg-[#4a4a4a] transition-colors"
              onClick={() => setIsCartOpen(false)}
            >
              RETURN TO SHOP
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
;