import { Link } from "react-router";
import data from "../../public/data/products.json";
import ProductCard from "../components/ProductCard";
import { RiArrowRightSLine } from "react-icons/ri";

const FeaturedProducts = () => {
  const featured = data.products.slice(0, 4);

  return (
    <section className="bg-[#F9F9F9] pt-6">
      <div className="mx-auto max-w-7xl p-12 px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-4xl font-bold">Featured Products</h2>
          <p className="text-xl text-gray-600">
            Discover our most popular items
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <button className="bg-accent my-12 rounded-lg px-6 py-3 text-lg text-white">
          <Link className="flex items-center gap-1" to={`/products/`}>
            <span>View All Products</span>
            <RiArrowRightSLine className="mt-1 text-xl" />
          </Link>
        </button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
