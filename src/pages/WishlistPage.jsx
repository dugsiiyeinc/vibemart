import { Link } from "react-router";
import ProductCard from "../components/ProductCard";
import { RiArrowLeftSLine, RiDeleteBinLine } from "react-icons/ri";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";

const WishlistPage = () => {
  const products = JSON.parse(localStorage.getItem("wishlist")) || [];
  const { wishlist } = useContext(ProductContext);

  return (
    <section className="min-h-screen bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto p-6 mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-1">My wishlist</h2>
          <p className="text-gray-500">{products.length} Items saved</p>
        </div>
        <div className="grid gap-6  md:grid-cols-2 grid-cols-1 lg:grid-cols-4 mt-6">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} showDelete={true} />
          ))}
        </div>
      <button className="border mt-8 border-accent py-2 px-4 rounded-lg">
        <Link className="flex items-center gap-1" to={`/products/`}>
          <RiArrowLeftSLine />
          Continue shopping
        </Link>
      </button>
      </div>
    </section>
  );
};

export default WishlistPage;
