import { useContext } from "react";
import { BiStar } from "react-icons/bi";
import { BsFillStarFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import {
  RiDeleteBinLine,
  RiHeartFill,
  RiHeartLine,
  RiShoppingCart2Line,
} from "react-icons/ri";
import ProductContext from "../context/ProductContext";
import { Link } from "react-router";

export default function ProductCard({ product, showDelete = false }) {
  const { dispatchWishlist, wishlist } = useContext(ProductContext);
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  return (
    <div className="relative cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition">
      {/* Sale Badge */}
      {product.on_sale && (
        <span className="bg-pink absolute top-3 left-3 z-10 rounded px-2 py-1 text-xs font-semibold text-white">
          Sale
        </span>
      )}

      {/* Wishlist heart */}

      <button
        className="absolute top-3 right-3 z-10 rounded-full bg-white p-2 shadow transition-transform hover:scale-110"
        onClick={() =>
          dispatchWishlist({
            type: "TOGGLE_WISHLIST",
            payload: product,
          })
        }
      >
        {wishlist.some((item) => item.id === product.id) ? (
          <RiHeartFill className="text-pink" />
        ) : (
          <RiHeartLine className="text-gray-400" />
        )}
      </button>

      {/* Image */}
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full overflow-hidden rounded object-cover object-top transition hover:scale-110"
        />
      </Link>

      {/* Product info */}
      <div className="space-y-3 p-4">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            <BsFillStarFill className="text-sm text-[#facc15]" />
            <BsFillStarFill className="text-sm text-[#facc15]" />
            <BsFillStarFill className="text-sm text-[#facc15]" />
            <BsFillStarFill className="text-sm text-[#facc15]" />
            <BiStar className="text-sm text-[#facc15]" />
          </div>
          <span className="text-sm">({product.reviews})</span>
        </div>

        {/* Name */}
        <h3 className="hover:text-accent font-semibold text-gray-800">
          {product.name}
        </h3>

        {/* Price & category */}
        <div className="text-accent flex items-center justify-between text-lg font-bold">
          ${product.price.toFixed(2)}
          {product.original_price && (
            <span className="ml-4 text-sm text-gray-400 line-through">
              ${product.original_price.toFixed(2)}
            </span>
          )}
          <span className="rounded-lg bg-gray-100 p-2 text-sm font-medium text-gray-500">
            {product.category}
          </span>
        </div>

        {/* Add to Cart & Delete */}
        <div className="flex gap-2">
          <Link
            className="bg-accent flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg py-1 font-semibold text-white hover:bg-yellow-500"
            to={`/products/${product.id}`}
          >
            <RiShoppingCart2Line />
            <span>Add to Cart</span>
          </Link>

          {showDelete && (
            <button
              className="text-accent border-accent hover:bg-accent cursor-pointer rounded-lg border p-2 hover:text-white"
              onClick={() =>
                dispatchWishlist({
                  type: "TOGGLE_WISHLIST",
                  payload: product,
                })
              }
            >
              <RiDeleteBinLine />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
