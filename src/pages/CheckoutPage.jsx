import { useNavigate } from "react-router";
import {
  RiInformationLine,
  RiSecurePaymentLine,
  RiShieldCheckLine,
} from "react-icons/ri";
import { useAuth } from "../context/AuthContext";
import { useOrders } from "../context/OrdersContext";
import ProductContext from "../context/ProductContext";
import { useContext } from "react";

export default function Checkout() {
  const { cart, dispatch: dispatchCart } = useContext(ProductContext);
  const { user } = useAuth();
  const { dispatch: dispatchOrders } = useOrders();
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalOrder = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = totalOrder > 0 && totalOrder < 50 ? 50 : 0;

  const tax = totalItems * 9;

  const totalOrderWithShippingAndTax = totalOrder + shipping + tax;

  const handleCheckout = () => {
    dispatchOrders({
      type: "ADD_TO_ORDERS",
      payload: {
        items: [...cart],
        shipping: { ...user },
        grandTotal: totalOrderWithShippingAndTax,
      },
    });
    dispatchCart({ type: "CLEAR_CART" });
    navigate("/thank-you");
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-[#363636]">Checkout</h1>
        <p className="text-gray-600">Review your order and complete purchase</p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-[#363636]">
              Order Items
            </h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded-lg border border-gray-200 p-4"
                >
                  <img
                    className="size-20 rounded-lg object-cover object-top"
                    src={`/public/${item.image}`}
                    alt={item.name}
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#363636]">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <p className="mt-1 font-medium text-[#feba17]">
                      ${item.price} x {item.quantity}
                    </p>
                  </div>

                  <p className="text-right text-lg font-bold text-[#363636]">
                    ${(item.quantity * item.price).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-[#363636]">
              Shipping Infomation
            </h2>
            <div className="rounded-lg bg-gray-50 p-4">
              <h3 className="mb-2 font-medium text-[#363636]">
                {user.fullname}
              </h3>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-600">{user.number}</p>
              <p className="mt-2 text-sm text-gray-600">
                {user.address} <br /> {user.city}, {user.zipCode}
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="sticky top-8 rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-[#363636]">
              Order Summary
            </h2>

            <div className="mb-6 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">
                  Subtotal ({totalItems} items)
                </span>
                <span className="font-medium">${totalOrder.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span
                  className={`font-medium ${!shipping ? "text-green-600" : ""}`}
                >
                  {!shipping ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>

              <hr className="my-4 border-[#e5e7eb]" />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-[#feba17]">
                  ${totalOrderWithShippingAndTax.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="mb-3 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#feba17] px-6 py-3 text-lg font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-[#feba17] hover:text-white"
            >
              <RiSecurePaymentLine />
              Place Order
            </button>

            <div className="flex items-center justify-center gap-1 text-center text-sm text-gray-500">
              <RiShieldCheckLine className="text-[#119da5]" />
              <span>Your information is secure</span>
            </div>

            {!shipping && (
              <div className="mt-4 rounded-lg bg-blue-50 p-3">
                <p className="flex items-center gap-2 text-sm text-blue-800">
                  <RiInformationLine />
                  <span>Free shipping on all orders. No hidden fees.</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
