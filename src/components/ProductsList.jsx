import { Link } from "react-router";
import ProductCard from "./ProductCard";
import { BiSearch } from "react-icons/bi";

export default function ProductGrid({ filteredProducts, totalProducts, onReset }) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="mb-4">
        Showing {filteredProducts.length} of {totalProducts} products
      </h2>

      {filteredProducts.length === 0 ? (
        <div className="flex justify-center flex-col gap-4 text-gray-500">
          <div className="flex flex-col items-center gap-2">
            <BiSearch size={50} />
            <h5 className="text-2xl font-bold">No products found</h5>
            <p>Try adjusting your filters to find what you're looking for.</p>
          </div>
          <button
            onClick={onReset}
            className="self-start cursor-pointer bg-accent py-2 px-4 rounded-lg text-white"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {filteredProducts.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

