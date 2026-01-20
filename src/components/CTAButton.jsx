import React from "react";


const CTAButton = ({ children, href = "#", className = "", noInvert = false, ...props }) => {
  const baseClasses = "inline-flex min-w-[170px] justify-center border px-6 py-3 text-[11px] font-semibold tracking-[0.18em] transition-all duration-300 ease-in transform focus:outline-none focus:ring-2 focus:ring-black ";
  const scaleClass = "hover:scale-110";
  const invertClasses = "border-black bg-white text-black hover:bg-black hover:text-white";
  // If noInvert, do not apply any hover color classes, only scale and custom classes
  return (
    <a
      href={href}
      className={
        baseClasses +
        (noInvert ? " " : " " + invertClasses) +
        " " + (noInvert ? scaleClass : scaleClass) +
        " " + className
      }
      {...props}
    >
      {children}
    </a>
  );
};

export default CTAButton;
