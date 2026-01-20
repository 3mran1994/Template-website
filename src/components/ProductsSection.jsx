

import CTAButton from './CTAButton';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    badge: 'BEST SELLER',
    name: 'Clear Cold Tumbler',
    price: 34,
    subtitle: '20 oz Clear Tumbler with Straw Lid',
    flavors: 'MADE FOR SIPPING WITH STYLE',
    image: '/images/tumbler.png',
  },
  {
    id: 2,
    badge: 'BACK IN STOCK',
    name: 'Exceedingly Rare Panama Finca Deborah Interstellar Gesha',
    price: 90,
    subtitle: 'Excluded From Promotion',
    flavors: 'PEACH, STRAWBERRY JAM, JASAINE',
    image: '/images/gesha.png',
  },
  {
    id: 3,
    badge: 'BEST SELLER',
    name: 'Three Africas',
    price: 14,
    subtitle: 'Medium Roast',
    flavors: 'GOLDEN RAISIN, WINEY BLUEBERRY, LEMON ZEST',
    image: '/images/three-africas.png',
  },
  {
    id: 4,
    name: 'Signature Blends Set',
    price: 45,
    subtitle: 'Three Iconic Blends',
    flavors: 'THE ESSENTIAL TASTES OF BLUE BOTTLE',
    image: '/images/signature-blends.png',
  },
];

const ProductsSection = () => (
  <section className="bg-[#fcfaf7] py-16 w-full">
    <div className="w-full px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24">
      <h2 className="text-2xl font-serif mb-10">Our Most Loved</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-12">
        <CTAButton className="border-neutral-800 text-neutral-900 bg-transparent hover:bg-black hover:text-white hover:scale-110">
          SHOP NOW
        </CTAButton>
      </div>
    </div>
  </section>
);

export default ProductsSection;
