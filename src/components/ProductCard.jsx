export default function SearchProductCard({ product }) {
  return (
    <a href={`#${product.id}`} className="group relative flex flex-col">
      {/* Badge */}
      {product.badge && (
        <div className="absolute right-0 top-0 z-10 bg-[#c9b896] px-5 py-2 text-xs font-medium tracking-wider text-neutral-800">
          {product.badge}
        </div>
      )}
      
      {/* Product Image */}
      <div className="relative mb-4 aspect-square w-full overflow-hidden bg-[#f5f3ed]">
        <div className="flex h-full w-full items-center justify-center text-xs text-neutral-400">
          {product.image || 'Image'}
        </div>
        {/* Dark Overlay on Hover */}
        <div className="absolute inset-0 bg-[#e8e3d8]/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-normal text-neutral-900">
            {product.name}
          </h3>
          <span className="whitespace-nowrap text-lg font-medium text-neutral-900">
            ${product.price}
          </span>
        </div>
        
        {product.subtitle && (
          <p className="text-sm font-normal text-neutral-600">
            {product.subtitle}
          </p>
        )}
        
        {product.flavors && (
          <p className="text-xs font-medium tracking-wider text-neutral-500 uppercase">
            {product.flavors}
          </p>
        )}
      </div>

      {/* Add to Cart Button - Shows on Hover */}
      <div className="mt-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <button className="w-full bg-neutral-700 py-3 text-sm font-medium uppercase tracking-wider text-white hover:bg-neutral-800 transition-colors duration-200">
          ADD TO CART
        </button>
      </div>
    </a>
  );
}
