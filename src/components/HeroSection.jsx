
import CTAButton from "./CTAButton";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
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
      <div className="relative mx-auto flex min-h-[70vh] w-full items-center py-12 sm:py-16">
        <div className="flex w-full flex-col gap-8 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
          <div className="space-y-3 text-left">
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-[40px] font-[var(--font-display)]">
              Guatemala Antigua Josué Morales
            </h1>
            <p className="text-base leading-7 text-neutral-100 sm:text-lg">
              Experience this cup of deep, chocolatey sweetness from Guatemala&apos;s Champion of Organic Farming
            </p>
            <CTAButton
              href="/shop"
              noInvert
              className="border-white bg-white text-black hover:scale-110 hover:shadow-lg mt-6"
              style={{ transitionProperty: 'box-shadow, transform', transitionDuration: '500ms', transitionTimingFunction: 'ease-in-out' }}
            >
              SHOP NOW
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
