"use client";

import { useEffect, useState } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import CartProductCard from "./CartProductCard";
import Drawer from "./Drawer";
import SearchDrawer from "./SearchDrawer";

export default function NavBar({ navLinks = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isLocationsDropdownOpen, setIsLocationsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

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
          <button 
            aria-label="Search" 
            className="cursor-pointer hover:text-black"
            onClick={() => setIsSearchOpen(true)}
          >
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
          <button 
            aria-label="Account" 
            className="cursor-pointer hover:text-black"
            onClick={() => setIsProfileOpen(true)}
          >
            <UserIcon className="h-5 w-5" />
          </button>
          <button 
            aria-label="Cart" 
            className="cursor-pointer hover:text-black"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBagIcon className="h-5 w-5" />
          </button>
          <button
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            className="cursor-pointer text-lg hover:text-black md:hidden"
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
          <button 
            className="px-2 py-3 hover:bg-neutral-50" 
            aria-label="Search"
            onClick={() => {
              setIsSearchOpen(true);
              setIsMenuOpen(false);
            }}
          >
            <MagnifyingGlassIcon className="mx-auto h-5 w-5" />
          </button>
          <button 
            className="px-2 py-3 hover:bg-neutral-50" 
            aria-label="Account"
            onClick={() => {
              setIsProfileOpen(true);
              setIsMenuOpen(false);
            }}
          >
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

      {/* Search Drawer */}
      <SearchDrawer
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Profile Drawer */}
      <Drawer
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        maxWidth="max-w-xl"
        showCloseText={true}
        headerAlign="end"
      >
        <div className="px-8 py-12">
          <div className="mx-auto max-w-md">
            <h2 className="mb-8 text-3xl font-light text-neutral-800">
              Log Into, or Create Your Account
            </h2>

            {/* Social Login Buttons */}
            <div className="space-y-3 mb-8">
              <button className="w-full bg-[#4267B2] text-white py-3.5 text-sm font-medium tracking-wide hover:bg-[#365899] transition-colors flex items-center justify-center gap-2">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Log in With Facebook
              </button>
              
              <button className="w-full bg-white border border-neutral-300 text-neutral-800 py-3.5 text-sm font-medium tracking-wide hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Log In With Google
              </button>
              
              <button className="w-full bg-neutral-900 text-white py-3.5 text-sm font-medium tracking-wide hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Log In With Apple
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-neutral-500 font-medium">OR</span>
              </div>
            </div>

            {/* Email Section */}
            <div className="mb-8">
              <p className="mb-4 text-sm text-neutral-700 tracking-wide">
                WE'LL SEND YOU A MAGIC LINK TO LOGIN IN VIA EMAIL
              </p>
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm placeholder:text-neutral-400 focus:border-neutral-500 focus:outline-none"
              />
            </div>

            <button className="w-full bg-neutral-700 text-white py-4 text-sm font-medium tracking-wider hover:bg-neutral-600 transition-colors mb-8">
              CONTINUE
            </button>

            {/* Password Info */}
            <div className="mb-8">
              <h3 className="mb-3 text-sm font-semibold tracking-wider text-neutral-800">
                WHAT ABOUT A PASSWORD?
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                We don't believe in passwords. Enter your email address and we'll email you a magic link. Click that link from any device and you'll be logged in.
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                To ensure the security and integrity of our platform, our site is protected by reCAPTCHA, and the Google{" "}
                <a href="#" className="underline hover:text-neutral-800">Privacy Policy</a>{" "}
                and{" "}
                <a href="#" className="underline hover:text-neutral-800">Terms of Service</a>{" "}
                apply.
              </p>
            </div>

            {/* Account Creation Info */}
            <div>
              <h3 className="mb-3 text-sm font-semibold tracking-wider text-neutral-800">
                DON'T HAVE AN ACCOUNT?
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                No problem. Provide your email address above and click the magic link that we'll send to your email - you'll be logged into your brand-new account.
              </p>
            </div>
          </div>
        </div>
      </Drawer>

      {/* Cart Drawer */}
      <Drawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        title="Your cart is empty"
        maxWidth="max-w-2xl"
        showCloseText={true}
        footer={
          <div className="px-8 py-6 flex justify-center">
            <button 
              className="w-full max-w-md mx-4 bg-[#5a5a5a] py-4 text-sm font-medium uppercase tracking-wider text-white hover:bg-[#4a4a4a] transition-colors"
              onClick={() => setIsCartOpen(false)}
            >
              RETURN TO SHOP
            </button>
          </div>
        }
      >
        <div className="px-8 py-8">
          {cartItems.length === 0 ? (
            <div>
              <h3 className="mb-8 text-xl font-light text-neutral-800">We think you may like</h3>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {recommendedProducts.map((product) => (
                  <CartProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Cart items would go here */}
            </div>
          )}
        </div>
      </Drawer>
    </>
  );
}
;