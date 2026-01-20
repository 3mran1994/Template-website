import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import HeroSection from "@/components/HeroSection";

export default function HomePage() {
  return (
    <>
      <Header
        navLinks={[
          { label: "BEST SELLERS", href: "/shop" },
          { label: "SUBSCRIPTIONS", href: "#" },
          { label: "LOCATIONS", href: "#" },
        ]}
      />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <BlogSection />
      <Footer />
    </>
  );
}
