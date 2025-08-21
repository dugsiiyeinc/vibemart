import { BiMinus, BiPlus, BiStar } from "react-icons/bi";
import data from "../../public/data/products.json";
import { Link, useParams } from "react-router";
import { BsFillStarFill } from "react-icons/bs";
import {
  RiArrowRightSLine,
  RiShoppingCart2Line,
  RiCustomerService2Line,
  RiShieldLine,
  RiTruckLine,
  RiHeartFill,
} from "react-icons/ri";
import ProductCard from "../components/ProductCard";
import { useContext, useState } from "react";
import ProductContext from "../context/ProductContext";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const product = data.products.find((p) => id == p.id);

  const { dispatch, wishlist, dispatchWishlist } = useContext(ProductContext);

  const handleAddCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, quantity },
    });
  };



  const handleToggleWishlist = () => {
    dispatchWishlist({ type: "TOGGLE_WISHLIST", payload: product });
  };


  return (
    <section className="min-h-full bg-[#F9F9F9]">
      <div className="mx-auto max-w-7xl px-4">
        {/* breadcrumb navigation */}
        <nav className="flex items-center gap-4 py-8 text-sm text-gray-600">
          <Link to="/">
            <div className="hover:text-accent flex items-center gap-2">
              <span className="cursor-pointer">Home </span>
              <RiArrowRightSLine />
            </div>
          </Link>
          <Link to="/products">
            <div className="hover:text-accent flex items-center gap-2">
              <span>Products</span> <RiArrowRightSLine />
            </div>
          </Link>
            <div className="hover:text-accent flex items-center gap-2">
              <span>{product.name}</span>
            </div>
        </nav>

        {/* product img & info */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* product img  */}
          <div className="relative">
            {product.on_sale && (
              <span className="bg-pink absolute top-5 left-5 rounded px-2 py-1 text-white">
                Sale
              </span>
            )}
            <img
              className="h-96 w-full  rounded-lg object-cover object-top shadow-lg lg:h-[500px]"
              src={product.image}
              alt="photo"
            />
          </div>

          {/* product info */}
          <div className="space-y-5">
            {/* category */}
            <span className="rounded-lg bg-gray-100 p-2 text-sm font-medium text-gray-500">
              {product.category}
            </span>
            {/* name */}
            <h4 className="mt-5 text-3xl font-bold">{product.name}</h4>

            {/* rating  */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                <BsFillStarFill className="text-sm text-[#facc15]" />
                <BsFillStarFill className="text-sm text-[#facc15]" />
                <BsFillStarFill className="text-sm text-[#facc15]" />
                <BsFillStarFill className="text-sm text-[#facc15]" />
                <BiStar className="text-sm text-[#facc15]" />
              </div>
              <span className="text-sm">({product.reviews} reviews)</span>
            </div>

            {/* price */}
            <div className="flex items-center gap-6">
              <span className="text-accent text-3xl font-bold">
                ${product.price}
              </span>

              {product.original_price && (
                <span className="text-xl text-gray-600 line-through">
                  ${product.original_price}
                </span>
              )}
            </div>

            {/* Description */}
            <div>
              <h5 className="text-lg font-medium">Description</h5>
              <p className="max-w-xl text-base text-gray-600">
                Premium wireless headphones with noise cancellation and 30-hour
                battery life. Perfect for music lovers and professionals.
              </p>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <h4 className="text-sm font-medium">Quantity: </h4>
              <div className="flex items-center gap-6 rounded-lg border border-gray-300 px-4 py-2">
                <button className="cursor-pointer">
                  <BiMinus onClick={decreaseQty} />
                </button>
                <span className="font-medium">{quantity}</span>
                <button className="cursor-pointer">
                  <BiPlus onClick={increaseQty} />
                </button>
              </div>
            </div>

            {/* cta buttons */}
            <div className="mt-6 flex flex-col gap-4 md:flex-row">
              <button
                onClick={handleAddCart}
              
              className="bg-accent flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg py-4 text-lg font-bold text-white hover:bg-yellow-500">
                <RiShoppingCart2Line />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={handleToggleWishlist}
                className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border py-4 text-lg font-bold ${
                  wishlist.find((item) => item.id === product.id)
                    ? "border-pink bg-pink hover:bg-pink text-white"
                    : "border-accent text-accent hover:bg-accent bg-transparent hover:text-white"
                }`}
              >
                <RiHeartFill />
                <span>
                  {wishlist.find((item) => item.id === product.id)
                    ? "Remove from Wishlist"
                    : "Add to Wishlist"}
                </span>
              </button>
            </div>

            {/* Why Choose This Product */}
            <div className="mb-12 flex flex-col gap-4 rounded-lg bg-white p-4 shadow">
              <h5 className="font-medium">Why Choose This Product</h5>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2 text-base">
                  <RiTruckLine className="text-[#119da5]" />
                  <span className="text-gray-500">
                    Free shipping on orders over $50
                  </span>
                </li>

                <li className="flex items-center gap-2 text-base">
                  <RiShieldLine className="text-[#119da5]" />
                  <span className="text-gray-500">
                    30-day money back guarantee
                  </span>
                </li>
                <li className="flex items-center gap-2 text-base">
                  <RiCustomerService2Line className="text-[#119da5]" />
                  <span className="text-gray-500">24/7 customer support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* related product */}
        <div className="mt-12 mb-6 max-w-[300px]">
          {data.products.filter(
            (relatedProduct) =>
              relatedProduct.name !== product.name &&
              relatedProduct.category === product.category,
          ).length > 0 && (
            <>
              <h4 className="mb-4 text-2xl font-bold">Related Products</h4>
              {data.products
                .filter(
                  (relatedProduct) =>
                    relatedProduct.name !== product.name &&
                    relatedProduct.category === product.category,
                )
                .map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    to={`/products/${relatedProduct.id}`}
                  >
                    <ProductCard product={relatedProduct} />
                  </Link>
                ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
