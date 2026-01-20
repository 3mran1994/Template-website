import Image from "next/image";
import CTAButton from "@/components/CTAButton";

export default function AboutSection() {
  return (
    <section className="w-full flex flex-col items-center py-0 px-0" style={{ paddingTop: '60px', background: '#fff' }}>
      {/* First Row (white bg) */}
      <div className="w-full bg-white px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24 flex flex-col md:flex-row items-stretch relative min-h-[400px] md:min-h-[600px] lg:min-h-[700px]">
        {/* Left Image */}
        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-0 flex-1 flex-shrink-0" style={{ background: '#fff' }}>
          <div className="w-full h-full aspect-square md:aspect-auto">
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
              alt="Pouring water into matcha bowl"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="rounded-none"
              priority
            />
          </div>
        </div>
        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white px-4 sm:px-8 md:px-12 lg:px-24 py-8 md:py-0 flex-1">
          <div className="w-full max-w-lg mx-0 md:mx-auto flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-[var(--font-display)] text-center">New Rituals for the Year Ahead</h2>
            <p className="mb-8 text-base text-neutral-700 text-center max-w-md">
              Elevate your rituals with tools and guides to bring the art of Blue Bottle home.
            </p>
            <CTAButton className="mx-auto" href="#">
              SHOP NOW
            </CTAButton>
          </div>
        </div>
      </div>

      {/* Spacer with background split */}
      <div style={{ width: '100%', height: '120px', background: 'linear-gradient(to bottom, #fff 50%, #fcfaf7 50%)' }} />
      {/* Second Row (product bg) */}
      <div className="w-full bg-[#fcfaf7] px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24 flex flex-col md:flex-row items-stretch relative min-h-[400px] md:min-h-[600px] lg:min-h-[700px]" style={{ marginTop: 0 }}>
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-[#fcfaf7] px-4 sm:px-8 md:px-12 lg:px-24 py-8 md:py-0 flex-1">
          <div className="w-full max-w-lg mx-0 md:mx-auto flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-[var(--font-display)] text-center">Blue Bottle Coffee Subscription</h2>
            <p className="mb-8 text-base text-neutral-700 text-center max-w-md">
              Experience the world’s most beautiful coffees through a Blue Bottle Coffee Subscription.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-8 w-full max-w-md">
              <div className="flex flex-col items-center">
                <svg width="40" height="40" fill="none" stroke="#222" strokeWidth="1.5" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" /><path d="M20 10c2 4 6 8 6 12a6 6 0 0 1-12 0c0-4 4-8 6-12Z" /></svg>
                <span className="mt-2 text-xs tracking-widest text-neutral-700">HIGHLY CURATED</span>
              </div>
              <div className="flex flex-col items-center">
                <svg width="40" height="40" fill="none" stroke="#222" strokeWidth="1.5" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" /><path d="M20 10a10 10 0 0 1 0 20a10 10 0 0 1 0-20Z" /></svg>
                <span className="mt-2 text-xs tracking-widest text-neutral-700">ETHICALLY SOURCED</span>
              </div>
              <div className="flex flex-col items-center">
                <svg width="40" height="40" fill="none" stroke="#222" strokeWidth="1.5" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" /><path d="M10 30l20-20" /><path d="M10 20h20" /></svg>
                <span className="mt-2 text-xs tracking-widest text-neutral-700">EXTRA SAVINGS</span>
              </div>
              <div className="flex flex-col items-center">
                <svg width="40" height="40" fill="none" stroke="#222" strokeWidth="1.5" viewBox="0 0 40 40"><rect x="10" y="10" width="20" height="20" rx="2" /><path d="M10 20h20" /><path d="M20 10v20" /></svg>
                <span className="mt-2 text-xs tracking-widest text-neutral-700 text-center">PAUSE, SKIP, OR CANCEL ANYTIME</span>
              </div>
            </div>
            <CTAButton className="mx-auto" href="#">
              SHOP SUBSCRIPTIONS
            </CTAButton>
          </div>
        </div>
        {/* Right Image */}
        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-0 flex-1 flex-shrink-0" style={{ background: '#f7f4f0' }}>
          <div className="w-full h-full aspect-square md:aspect-auto">
            <Image
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80"
              alt="Blue Bottle Coffee Subscription"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="rounded-none"
              priority
            />
          </div>
        </div>
      </div>
      {/* Bottom alternate color padding */}
      <div style={{ width: '100%', height: '60px', background: '#fcfaf7' }} />
    </section>
  );
}