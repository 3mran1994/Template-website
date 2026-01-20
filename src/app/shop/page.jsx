import Header from "../../components/Header";
import React from "react";
const navLinks = [
  { label: "BEST SELLERS", href: "/shop" },
  { label: "SUBSCRIPTIONS", href: "#" },
  { label: "LOCATIONS", href: "#" },
];
import ProductCard from "../../components/ProductCard";
import styles from "../styles/globals.css";

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
];

export default function ShopPage() {
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
        {/* No content below hero image */}
      </main>
    </div>
  );
}
