import { Link, useNavigate } from "react-router";
import ProductCard from "../components/ProductCard";
import {
  RiArrowLeftSLine,
  RiHeartAdd2Line,
} from "react-icons/ri";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { BiHeart } from "react-icons/bi";

const WishlistPage = () => {
  const { wishlist } = useContext(ProductContext);

  const navigate = useNavigate();

  return wishlist.length === 0 ? (
    <div className="mx-auto flex max-w-7xl flex-col justify-center gap-4 pt-12 text-gray-500">
      <div className="flex  flex-col items-center gap-2">
        <BiHeart size={60} />
        <h5 className="text-2xl font-bold">Your wishlist is empty</h5>
        <p>Save your favorite items to your wishlist for later.</p>
      </div>
      <button
        onClick={onreset}
        className="bg-accent cursor-pointer self-start rounded-lg px-4 py-2 text-white"
      >
        <div onClick={() => navigate('/products')} className="flex gap-2 items-center">
          <RiHeartAdd2Line  /> <span>Browse Products</span>
        </div>
      </button>
    </div>
  ) : (
    <section className="min-h-screen bg-[#F9F9F9]">
      <div className="mx-auto mb-6 max-w-7xl p-6">
        <div>
          <h2 className="mb-1 text-2xl font-bold">My wishlist</h2>
          <p className="text-gray-500">{wishlist.length} Items saved</p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} showDelete={true} />
          ))}
        </div>
        <button className="border-accent mt-8 rounded-lg border px-4 py-2">
          <button onClick={() => navigate('/products')} className="flex items-center gap-1">
            <RiArrowLeftSLine />
            Continue shopping
          </button>
        </button>
      </div>
    </section>
  );
};

export default WishlistPage;
