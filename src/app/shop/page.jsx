import Header from "../../components/Header";
import BlogSection from "../../components/BlogSection";
import Footer from "../../components/Footer";
import React from "react";
const navLinks = [
  { label: "BEST SELLERS", href: "/shop" },
  { label: "SUBSCRIPTIONS", href: "#" },
  { label: "LOCATIONS", href: "#" },
];
import ProductCard from "../../components/ProductCard";
import ShopFilterSelect from "../../components/ShopFilterSelect";

const bestSellers = [
  {
    id: 1,
    name: "Hayes Valley Espresso",
    price: 14,
    subtitle: "Dark Roast",
    flavors: "Baking Chocolate, Orange Zest, Brown Sugar",
    image: "https://via.placeholder.com/300x300?text=Product+Image",
    badge: "BEST SELLER",
  },
  {
    id: 2,
    name: "Blue Bottle Coffee Filters",
    price: 15,
    subtitle: "Custom Bamboo Filters",
    flavors: "Designed for the Blue Bottle Dripper",
    image: "https://via.placeholder.com/300x300?text=Product+Image",
    badge: null,
  },
  {
    id: 3,
    name: "Craft Instant Espresso",
    price: 28,
    subtitle: "Cafe-Quality Espresso at Home",
    flavors: "Dark Chocolate, Molasses, Toasted Malt",
    image: "https://via.placeholder.com/300x300?text=Product+Image",
    badge: "BEST SELLER",
  },
  // Row 2
  {
    id: 4,
    name: "Bella Donovan",
    price: 14,
    subtitle: "Medium Roast",
    flavors: "Raspberry, Chocolate, Molasses",
    image: "https://via.placeholder.com/300x300?text=Product+Image",
    badge: "BEST SELLER",
  },
  {
    id: 5,
    name: "Three Africas",
    price: 14,
    subtitle: "Medium Roast",
    flavors: "Golden Raisin, Winey Blueberry, Lemon Zest",
    image: "https://via.placeholder.com/300x300?text=Product+Image",
    badge: "BEST SELLER",
  },
  {
    id: 6,
    name: "Blue Bottle Pour Over Kit",
    price: 65,
    subtitle: "Bundle and Save, $72 Value",
    flavors: "Bring the Art of Blue Bottle Home",
    image: "https://via.placeholder.com/300x300?text=Product+Image",
    badge: null,
  },
  // Row 3
  {
    id: 7,
    name: "Winter Single Origin",
    price: 27,
    subtitle: "Light Roast",
    flavors: "Blueberry Jam, Honey, Lavender",
    image: "https://via.placeholder.com/300x300?text=Product+Image",
    badge: null,
  },
  {
    id: 8,
    name: "Winter Latte Kit",
    price: 30,
    subtitle: "Craft Instant Espresso Sachets and 4 oz Juniper Syrup",
    flavors: "Make Our Winter Latte at Home",
    image: "https://via.placeholder.com/300x300?text=Product+Image",
    badge: null,
  },
  {
    id: 9,
    name: "Winter Espresso",
    price: 27,
    subtitle: "Dark Roast",
    flavors: "Dark Chocolate, Dried Raspberry, Salted Toffee",
    image: "https://via.placeholder.com/300x300?text=Product+Image",
    badge: "BEST SELLER",
  },
  // Row 4
  {
    id: 10,
    name: "Winter Blend",
    price: 27,
    subtitle: "Medium Roast",
    flavors: "Dark Chocolate, Molasses, Blackberry",
    image: "https://via.placeholder.com/300x300?text=Product+Image",
    badge: null,
  },
  {
    id: 11,
    name: "Tokyo Kissa",
    price: 25,
    subtitle: "Dark Roast",
    flavors: "Bittersweet Cocoa, Nutmeg, Molasses",
    image: "https://via.placeholder.com/300x300?text=Product+Image",
    badge: "BEST SELLER",
  },
  {
    id: 12,
    name: "Craft Matcha",
    price: 22,
    subtitle: "Signature Blend",
    flavors: "Green Tea, Umami, Sweetness",
    image: "https://via.placeholder.com/300x300?text=Product+Image",
    badge: null,
  },
];

export default function ShopPage() {

  // Optional: State for selected filter (for future interactivity)
  // const [selectedCategory, setSelectedCategory] = React.useState(null);

  return (
    <div className="shop-page" style={{ marginTop: 0, paddingTop: 0 }}>
      <Header navLinks={navLinks} />
      <div className="shop-hero" style={{
        background: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
        minHeight: 320,
        marginTop: 0,
        paddingTop: 0,
      }}>
        {/* Hero background image now set */}
      </div>
      <main className="shop-main" style={{ background: "#fff", padding: "48px 0" }}>
        {/* Filter Select Section */}
        <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <ShopFilterSelect />
        </div>
        {/* End Filter Select Section */}
        <div className="w-full px-6 pt-4 pb-5 sm:px-8 sm:pt-5 sm:pb-6 md:px-12 md:pt-6 md:pb-8 lg:px-16 lg:pt-6 lg:pb-10 xl:px-20 2xl:px-24">
          <h2 className="text-2xl font-serif mb-10 text-black">Most Popular</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 md:gap-x-10 md:gap-y-12 lg:grid-cols-3 lg:gap-x-12">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      {/* Blog section at the bottom */}
      <BlogSection />
      {/* Footer at the very bottom */}
      <Footer />
    </div>
  );
}
