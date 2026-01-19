
import Header from "@/components/Header";
import ProductsSection from "@/components/ProductsSection";

const navLinks = [
  { label: "BEST SELLERS", href: "#" },
  { label: "SUBSCRIPTIONS", href: "#" },
  { label: "LOCATIONS", href: "#" },
];

const perks = [
  { label: "Meticulous\nQuality", icon: "cup" },
  { label: "Ethically\nSourced", icon: "branch" },
  { label: "Small Batch\nRoasting", icon: "beans" },
  { label: "Customized\nSubscription", icon: "cards" },
];

function Icon({ name }) {
  const stroke = "stroke-current";
  const common = "w-10 h-10 text-neutral-500";

  if (name === "cup") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className={common}
        fill="none"
      >
        <path
          className={stroke}
          strokeWidth="2"
          d="M13 20h32a5 5 0 0 1 5 5v4a13 13 0 0 1-13 13H20A13 13 0 0 1 7 29v-4a5 5 0 0 1 5-5Z"
        />
        <path className={stroke} strokeWidth="2" d="M50 24h4a6 6 0 0 1 0 12h-4" />
        <path className={stroke} strokeWidth="2" d="M16 42v3a5 5 0 0 0 5 5h16a5 5 0 0 0 5-5v-3" />
      </svg>
    );
  }

  if (name === "branch") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className={common}
        fill="none"
      >
        <path className={stroke} strokeWidth="2" d="M18 40c10-6 12-18 12-32" />
        <circle className={stroke} strokeWidth="2" cx="30" cy="8" r="4" />
        <path className={stroke} strokeWidth="2" d="M30 24c4 4 10 6 18 4" />
        <circle className={stroke} strokeWidth="2" cx="50" cy="26" r="4" />
        <path className={stroke} strokeWidth="2" d="M24 30c-2 6-8 12-16 14" />
        <circle className={stroke} strokeWidth="2" cx="8" cy="46" r="4" />
      </svg>
    );
  }

  if (name === "beans") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        className={common}
        fill="none"
      >
        <ellipse className={stroke} strokeWidth="2" cx="22" cy="28" rx="9" ry="14" />
        <path className={stroke} strokeWidth="2" d="M22 14c2 6-2 10 0 16s-2 10-4 12" />
        <ellipse className={stroke} strokeWidth="2" cx="42" cy="36" rx="9" ry="14" />
        <path className={stroke} strokeWidth="2" d="M42 22c2 6-2 10 0 16s-2 10-4 12" />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={common}
      fill="none"
    >
      <rect className={stroke} strokeWidth="2" x="20" y="16" width="24" height="32" rx="2" />
      <rect className={stroke} strokeWidth="2" x="16" y="20" width="24" height="32" rx="2" />
    </svg>
  );
}

import CTAButton from "@/components/CTAButton";

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=2200&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/35" />
      </div>

      <div className="relative mx-auto flex min-h-[70vh] w-full items-center px-6 py-12 sm:px-8 sm:py-16 md:px-12 lg:px-16">
        {/* Slider buttons removed as requested */}

        <div className="flex w-full flex-col gap-8">
          <div className="max-w-xl space-y-6 text-left">
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-[40px] font-[var(--font-display)]">
              Guatemala Antigua Josué Morales
            </h1>
            <p className="text-base leading-7 text-neutral-100 sm:text-lg">
              Experience this cup of deep, chocolatey sweetness from Guatemala&apos;s Champion of Organic Farming
            </p>
            <CTAButton href="#">SHOP NOW</CTAButton>
          </div>

          {/* Slider index removed as requested */}
        </div>
      </div>
    </section>
  );
}

function Perks() {
  return (
    <section className="border-t border-neutral-200 bg-white py-16 w-full">
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-24 gap-y-10 px-4 md:px-16 lg:px-32 xl:px-48 text-center max-w-screen-2xl w-full">
          {perks.map((perk) => (
            <div key={perk.label} className="flex flex-col items-center gap-4 text-base text-neutral-700">
              <Icon name={perk.icon} />
              <div className="whitespace-pre-line leading-relaxed">{perk.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f7f4f0] text-[#1b1b1b]">
      <Header navLinks={navLinks} />
      <main
        className="flex flex-col gap-0 relative"
        style={{ paddingTop: '7rem' }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '7rem',
            background: 'rgba(255,255,255,0.95)', // matches header bg-white/95
            zIndex: 0,
          }}
        />
        <Hero />
        <Perks />
        <ProductsSection />
      </main>
    </div>
  );
}
