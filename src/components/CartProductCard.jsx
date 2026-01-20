import AddToCartButton from "./AddToCartButton";

export default function CartProductCard({ product }) {
  return (
    <div className="group relative flex flex-col cursor-pointer bg-white transition-transform duration-300 ease-in transform hover:scale-105">
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
      <div className="flex flex-col gap-2 px-2 pb-2">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <h3 className="text-lg font-normal text-neutral-900 truncate">{product.name}</h3>
            {product.description && (
              <p className="text-sm font-normal text-neutral-600 truncate">{product.description}</p>
            )}
            {product.flavors && (
              <p className="text-xs font-medium tracking-wider text-neutral-500 uppercase truncate">{product.flavors}</p>
            )}
          </div>
          <span className="whitespace-nowrap text-lg font-medium text-neutral-900 ml-2">${product.price}</span>
        </div>
      </div>

      {/* Add to Cart Button - Shows on Hover */}
      <div className="mt-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100 px-2 pb-4">
        <AddToCartButton />
      </div>
    </div>
  );
}
