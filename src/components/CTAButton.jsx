import React from "react";


const CTAButton = ({ children, href = "#", className = "", ...props }) => (
  <a
    href={href}
    className={
      "inline-flex min-w-[170px] justify-center border border-black bg-white px-6 py-3 text-[11px] font-semibold tracking-[0.18em] text-black transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-black " +
      className
    }
    {...props}
  >
    {children}
  </a>
);

export default CTAButton;
