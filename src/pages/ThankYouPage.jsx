import {
  RiCheckboxCircleFill,
  RiCheckLine,
  RiFileList3Line,
  RiNotificationLine,
  RiShoppingBagLine,
  RiTruckLine,
} from "react-icons/ri";
import { Link } from "react-router";

export default function ThankYou() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-lg bg-white p-8 text-center shadow-md">
        <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-green-100">
          <RiCheckboxCircleFill className="text-4xl text-green-600" />
        </div>
        <h1 className="mb-4 text-3xl font-bold text-[#363636]">
          Thank You for Your Order!
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          Your order has been successfully placed and is being processed.
        </p>
        <div className="mb-8 rounded-lg bg-gray-50 p-6">
          <h2 className="mb-4 text-lg font-semibold text-[#363636]">
            Order Details
          </h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Order Number:</span>
              <span className="font-medium text-[#363636]">#1755808893586</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-600">Order Date:</span>
              <span className="font-medium text-[#363636]">8/21/2025</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-600">Total Amount:</span>
              <span className="text-lg font-bold text-[#feba17]">$98.99</span>
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-lg bg-blue-50 p-6">
          <h3 className="mb-3 font-semibold text-[#363636]">
            What happens next?
          </h3>
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-3">
              <RiCheckLine className="text-green-600" />
              <span className="text-sm text-gray-700">
                Order confirmation sent to your email
              </span>
            </div>

            <div className="flex items-center gap-3">
              <RiTruckLine className="text-blue-600" />
              <span className="text-sm text-gray-700">
                Your order will be processed within 24 hours
              </span>
            </div>

            <div className="flex items-center gap-3">
              <RiNotificationLine className="text-red-600" />
              <span className="text-sm text-gray-700">
                You'll receive tracking information once shipped
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link to="/orders">
            <button className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#feba17] px-6 py-3 text-lg font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-[#e6a615]">
              <RiFileList3Line />
              View Order History
            </button>
          </Link>
          <Link to="/products">
            <button className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-[#feba17] px-6 py-3 text-lg font-medium whitespace-nowrap text-[#feba17] transition-colors duration-200 hover:bg-[#feba17] hover:text-white">
              <RiShoppingBagLine />
              Continue Shopping
            </button>
          </Link>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-600">
            Questions about your order?{" "}
            <span className="ml-1 font-medium text-[#feba17]">
              Contact our support team
            </span>
          </p>
        </div>
      </div>
      <div className="mt-8 rounded-lg bg-white p-6 text-center shadow-md">
        <h3 className="mb-2 text-lg font-semibold text-[#363636]">
          Stay Updated!
        </h3>
        <p className="mb-4 text-gray-600">
          Get notified about new products and exclusive offers.
        </p>
        <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
          <input
            className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm outline-none focus:border-transparent focus:ring-2 focus:ring-[#feba17]"
            type="text"
            placeholder="Enter your email"
          />
          <button className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#feba17] px-6 py-2 font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-[#e6a615]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
