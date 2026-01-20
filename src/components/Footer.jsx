import React from "react";

const footerLinks = [
  {
    header: "COMPANY",
    links: [
      { label: "LOCATIONS", href: "#" },
      { label: "CAREERS", href: "#" },
      { label: "ACCESSIBILITY", href: "#" },
    ],
  },
  {
    header: "LEARN",
    links: [
      { label: "BREW GUIDES", href: "#" },
      { label: "VIRTUAL CLASSES", href: "#" },
      { label: "OUR BRAND", href: "#" },
      { label: "OUR COFFEE", href: "#" },
      { label: "SUSTAINABILITY", href: "#" },
      { label: "BLUE BOTTLE STUDIO", href: "#" },
      { label: "FIND BLUE BOTTLE IN STORE", href: "#" },
    ],
  },
  {
    header: "MORE",
    links: [
      { label: "CONTACT US", href: "#" },
      { label: "SHIPPING FAQS", href: "#" },
      { label: "FAQS", href: "#" },
      { label: "GIFT CARDS", href: "#" },
      { label: "GIFT SUBSCRIPTIONS", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#2c2c2c] text-[#f5f5f5] w-full pt-16 pb-0 px-0 mt-0">
      <div className="w-full px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24 mx-auto">
        <div className="mb-12">
          <h2 className="text-lg md:text-xl tracking-widest font-semibold mb-8 text-left">BLUE BOTTLE COFFEE</h2>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-0 w-full">
          {footerLinks.map((col) => (
            <div key={col.header} className="flex-1 min-w-[180px]">
              <h3 className="text-sm font-semibold tracking-widest mb-6">{col.header}</h3>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs md:text-sm tracking-wide hover:underline transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex-1 min-w-[260px] md:pl-12">
            <h3 className="text-lg md:text-xl tracking-widest font-semibold mb-8 text-left">SUBSCRIBE AND STAY UPDATED</h3>
            <p className="text-xs md:text-sm mb-6 text-left">
              Join our email newsletter for exclusive offers, Blue Bottle news, events, and first access to our most exciting releases. Plus, get complimentary shipping on your first purchase when you sign up.
            </p>
            <form className="flex items-center border-b border-[#f5f5f5] py-2 mb-1">
              <input
                type="email"
                placeholder="enter your email address"
                className="bg-transparent outline-none text-xs md:text-sm flex-1 placeholder-[#f5f5f5] text-[#f5f5f5]"
              />
              <button
                type="submit"
                className="ml-2 text-[#f5f5f5] hover:text-[#bdbdbd] transition-colors duration-150"
                aria-label="Subscribe"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M1 12h29m0 0l-7-7m7 7l-7 7" />
                </svg>
              </button>
            </form>
            <div className="flex items-center space-x-4 mt-2">
              <a href="#" aria-label="Facebook" className="hover:text-[#bdbdbd]">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-[#bdbdbd]">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-[#bdbdbd]">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-[#bdbdbd]">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <div className="mt-1 mb-0">
              <a href="#" className="text-xs md:text-sm hover:underline hover:text-[#bdbdbd]">PRIVACY POLICY & TERMS</a>
            </div>
            <div className="flex flex-row items-center gap-8 mt-3 mb-2">
              <a href="#" aria-label="Facebook" className="hover:text-[#bdbdbd] text-2xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-[#bdbdbd] text-2xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-[#bdbdbd] text-2xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-[#bdbdbd] text-2xl">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <div className="flex items-center space-x-8 mt-8">
              <a href="#" aria-label="Facebook" className="hover:text-[#bdbdbd] text-2xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-[#bdbdbd] text-2xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-[#bdbdbd] text-2xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-[#bdbdbd] text-2xl">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#444] mt-12 pt-8 pb-8 w-full px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24 flex flex-col md:flex-row justify-between items-center text-xs text-[#bdbdbd] min-h-[60px]">
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-2 md:mb-0">
          <a href="#" className="hover:underline">TERMS OF USE</a>
          <a href="#" className="hover:underline">PRIVACY POLICY</a>
          <a href="#" className="hover:underline">NOTICE AT COLLECTION</a>
          <a href="#" className="hover:underline">YOUR PRIVACY CHOICES</a>
        </div>
        <div className="text-right">© 2026 NESTLÉ</div>
      </div>
    </footer>
  );
};

export default Footer;
