import { useContext } from "react";
import { RiSecurePaymentLine, RiShieldCheckLine } from "react-icons/ri";
import { Link } from "react-router";
import ProductContext from "../context/ProductContext";
import {
  getCartCount,
  getCartSubtotal,
  getCartTax,
  getCartTotal,
} from "../utils/cartUtils";

const OrderSummary = () => {
  const { cart } = useContext(ProductContext);

  const subtotal = getCartSubtotal(cart);
  const tax = getCartTax(subtotal);
  const total = getCartTotal(cart);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h4 className="text-xl font-medium">Order Summary</h4>
      <ul className="space-y-4 border-b border-gray-200 pb-4">
        <li className="flex justify-between">
          <span className="text-gray-600">Items ({getCartCount(cart)})</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </li>
        <li className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium text-[#16a34a]">Free</span>
        </li>
        <li className="flex justify-between">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </li>
      </ul>

      <div className="flex justify-between m-4">
        <h5 className="text-xl font-bold">Total</h5>
        <span className="font-bold text-accent">${total.toFixed(2)}</span>
      </div>

      <Link
        to="/checkout"
        className="bg-accent gap-2 mt-4 text-white text-xl font-medium cursor-pointer flex items-center rounded-lg py-3 px-6"
      >
        <RiSecurePaymentLine /> <span>Proceed to Checkout</span>
      </Link>

      <p className="text-center flex justify-center items-center gap-1 my-4 text-sm text-gray-500">
        <RiShieldCheckLine /> <span>Secure checkout with SSL encryption</span>
      </p>
    </div>
  );
};

export default OrderSummary;
