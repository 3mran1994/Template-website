"use client";
import NavBar from "@/components/NavBar";
import TopBar from "@/components/TopBar";
import { useEffect, useRef, useState } from "react";

export default function Header({ navLinks = [] }) {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    let delayTimeout = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (direction === "down" && currentScrollY > 80) {
            setShowHeader(false);
          } else if (direction === "up") {
            setShowHeader(true);
          }
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }

      if (delayTimeout) clearTimeout(delayTimeout);
      delayTimeout = setTimeout(() => setIsScrolling(false), 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (delayTimeout) clearTimeout(delayTimeout);
    };
  }, [lastScrollY]);

  return (
    <div
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ willChange: "transform" }}
    >
      <TopBar />
      <NavBar navLinks={navLinks} />
    </div>
  );
}
