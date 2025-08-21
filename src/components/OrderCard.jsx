import { RiFileDownloadLine, RiTimeLine, RiTruckLine } from "react-icons/ri";
import OrderItem from "./OrderItem";

export default function OrderCard({ order }) {
  console.log(order);

  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div>
              <h3 className="font-semibold text-[#363636]">
                Order #{order.id}
              </h3>
              <p className="text-sm text-gray-600">Placed on 8/21/2025</p>
            </div>

            <span className="flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
              <RiTimeLine />
              {order.badge}
            </span>
          </div>
          <div className="mt-2 md:mt-0">
            <span className="text-lg font-bold text-[#feba17]">
              ${order.grandTotal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h4 className="mb-4 font-medium text-[#363636]">Items Ordered</h4>
        <div className="space-y-4">
          {order.items.map((item) => (
            <OrderItem key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-6 border-t border-gray-200 pt-6">
          <h4 className="mb-2 font-medium text-[#363636]">Shipping Address</h4>
          <div className="text-sm text-gray-600">
            <p>{order.shipping.fullname}</p>
            <p>{order.shipping.address}</p>
            <p>
              {order.shipping.city}, {order.shipping.zipCode}
            </p>
            <p>{order.shipping.phone}</p>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3 border-t border-gray-200 pt-6 sm:flex-row">
          <button className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-[#feba17] px-3 py-1.5 text-sm font-medium whitespace-nowrap text-[#feba17] transition-colors duration-200 hover:bg-[#feba17] hover:text-white">
            <RiFileDownloadLine />
            Download Receipt
          </button>

          <button className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-[#feba17] px-3 py-1.5 text-sm font-medium whitespace-nowrap text-[#feba17] transition-colors duration-200 hover:bg-[#feba17] hover:text-white">
            <RiTruckLine />
            Track Package
          </button>
        </div>
      </div>
    </div>
  );
}
