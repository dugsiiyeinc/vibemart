import { useContext } from "react";
import { BiCart, BiHeart, BiMinus, BiPlus } from "react-icons/bi";
import {
  RiArrowLeftBoxFill,
  RiArrowLeftBoxLine,
  RiArrowLeftLine,
  RiDeleteBinLine,
  RiShoppingBag2Line,
} from "react-icons/ri";
import { Link, useNavigate } from "react-router";
import ProductContext from "../context/ProductContext";
import OrderSummary from "../components/OrderSummary";

const CartPage = () => {
  const { cart, dispatch } = useContext(ProductContext);

  const navigate = useNavigate();

  return cart.length === 0 ? (
    <div className="mx-auto flex max-w-7xl flex-col justify-center gap-4 pt-12 text-gray-500">
      <div className="flex flex-col items-center gap-2">
        <BiCart size={60} />
        <h5 className="text-2xl font-bold">Your cart is empty</h5>
        <p>Looks like you haven't added any items to your cart yet.</p>
      </div>
      <button
        onClick={onreset}
        className="bg-accent cursor-pointer self-start rounded-lg px-4 py-2 text-white"
      >
        <div
          onClick={() => navigate("/products")}
          className="flex items-center gap-2"
        >
          <RiShoppingBag2Line /> <span>Start Shopping</span>
        </div>
      </button>
    </div>
  ) : (
    <div className="min-h-screen bg-[#F9F9F9] py-6">
      <div className="mx-auto max-w-6xl px-4">
        <div>
          <h2 className="mb-1 text-3xl font-bold">Shopping Cart</h2>
          <p className="text-gray-500">
            Review your items and proceed to checkout
          </p>
        </div>
        {/* grid  */}
        <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-[1fr_350px]">
          <div className="space-y-5">
            {cart.map((p) => (
              <div
                key={p.id}
                className="h-auto rounded-lg bg-white p-8 shadow hover:shadow-lg"
              >
                <div className="flex justify-between">
                  <div className="flex flex-col gap-4 md:flex-row">
                    {/* img  */}
                    <img
                      className="h-24 w-24 cursor-pointer rounded-lg object-cover object-top"
                      src={p.image}
                      alt={[p.name]}
                    />
                    <div className="space-y-4">
                      {/* name  */}
                      <Link
                        to={`/products/${p.id}`}
                        className="hover:text-accent text-lg font-medium"
                      >
                        {[p.name]}
                      </Link>
                      <p className="text-sm text-gray-500">{[p.category]}</p>

                      {/* price */}
                      <div className="flex items-center gap-2">
                        <span className="text-accent text-lg font-bold">
                          ${p.price}
                        </span>

                        {p.original_price && (
                          <span className="text-sm text-gray-500 line-through">
                            ${p.original_price}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="mt-12 flex flex-col items-center justify-end gap-4">
                    <div className="flex gap-2">
                      <div className="flex items-center gap-6 rounded-lg border border-gray-300 px-3 py-1">
                        <button className="cursor-pointer">
                          <BiMinus
                            onClick={() =>
                              dispatch({
                                type: "DECREMENT",
                                payload: { id: p.id },
                              })
                            }
                          />
                        </button>
                        <span className="font-medium">{p.quantity}</span>
                        <button className="cursor-pointer">
                          <BiPlus
                            onClick={() =>
                              dispatch({
                                type: "INCREMENT",
                                payload: { id: p.id },
                              })
                            }
                          />
                        </button>
                      </div>
                      <button
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: { id: p.id },
                          })
                        }
                        className="text-pink cursor-pointer"
                      >
                        <RiDeleteBinLine />
                      </button>
                    </div>
                    <h5 className="text-lg font-medium">
                      Subtotal: ${(p.price * (p.quantity || 1)).toFixed(2)}
                    </h5>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between">
              <button
                onClick={() => dispatch({ type: "CLEAR_CART" })}
                className="text-accent border-accent flex cursor-pointer items-center gap-2 rounded-lg border px-6 py-3"
              >
                <RiDeleteBinLine /> <span>Clear cart</span>
              </button>
              <button
                onClick={() => navigate("/products")}
                className="text-accent border-accent flex cursor-pointer items-center gap-2 rounded-lg border px-6 py-3"
              >
                <RiArrowLeftLine />
                <span>Continue Shopping</span>
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside>
            <OrderSummary />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
