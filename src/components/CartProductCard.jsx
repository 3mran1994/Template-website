export default function ProductCard({ product }) {
  return (
    <div className="group flex flex-col cursor-pointer">
      <div className="relative mb-4 aspect-square w-full overflow-hidden bg-neutral-100">
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 bg-[#c4b5a0] px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-neutral-800">
            {product.badge}
          </span>
        )}
        <div className="flex h-full items-center justify-center">
          <svg className="h-16 w-16 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <button className="bg-neutral-700 text-white px-8 py-3 text-sm font-medium uppercase tracking-wider hover:bg-neutral-800 transition-colors">
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <h4 className="mb-2 text-lg font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">{product.name}</h4>
        <p className="mb-3 text-sm text-neutral-600">{product.description}</p>
        <p className="mb-4 text-xs font-medium uppercase tracking-wider text-neutral-500">
          {product.flavors}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-medium text-neutral-900">${product.price}</span>
        </div>
      </div>
    </div>
  );
}
