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
    <div className="bg-white rounded-lg cursor-pointer overflow-hidden shadow-lg transition relative">
      {/* Sale Badge */}
      {product.on_sale && (
        <span className="absolute z-10 top-3 left-3 bg-pink text-white px-2 py-1 text-xs font-semibold rounded">
          Sale
        </span>
      )}

      {/* Wishlist heart */}

        <button
          className="absolute top-3 z-10 right-3 bg-white rounded-full p-2 shadow hover:scale-110 transition-transform"
          onClick={() =>
            dispatchWishlist({
              type: isInWishlist ? "REMOVE_FROM_WISHLIST" : "ADD_TO_WISHLIST",
              payload: product,
            })
          }
        >
          {isInWishlist ? (
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
          className="w-full h-64 object-cover object-top rounded hover:scale-110 transition overflow-hidden"
        />
      </Link>

      {/* Product info */}
      <div className="p-4 space-y-3">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            <BsFillStarFill className="text-[#facc15] text-sm" />
            <BsFillStarFill className="text-[#facc15] text-sm" />
            <BsFillStarFill className="text-[#facc15] text-sm" />
            <BsFillStarFill className="text-[#facc15] text-sm" />
            <BiStar className="text-[#facc15] text-sm" />
          </div>
          <span className="text-sm">({product.reviews})</span>
        </div>

        {/* Name */}
        <h3 className="font-semibold hover:text-accent text-gray-800">
          {product.name}
        </h3>

        {/* Price & category */}
        <div className="flex justify-between items-center text-lg font-bold text-accent">
          ${product.price.toFixed(2)}
          {product.original_price && (
            <span className="text-gray-400 line-through text-sm ml-4">
              ${product.original_price.toFixed(2)}
            </span>
          )}
          <span className="text-gray-500 text-sm font-medium bg-gray-100  p-2 rounded-lg">
            {product.category}
          </span>
        </div>

        {/* Add to Cart & Delete */}
        <div className="flex gap-2">
          <Link
            className="w-full flex cursor-pointer items-center gap-2 justify-center bg-accent hover:bg-yellow-500 text-white font-semibold py-1 rounded-lg"
            to={`/products/${product.id}`}
          >
            <RiShoppingCart2Line />
            <span>Add to Cart</span>
          </Link>

          {showDelete && (
            <button
              className="text-accent cursor-pointer border border-accent p-2 rounded-lg hover:bg-accent hover:text-white"
              onClick={() =>
                dispatchWishlist({
                  type: "REMOVE_FROM_WISHLIST",
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
