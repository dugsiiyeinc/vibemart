import { RiShoppingBagLine, RiFileList3Line } from "react-icons/ri";
import { Link } from "react-router";
import Empty from "../components/Empty";
import { useOrders } from "../context/OrdersContext";
import OrderCard from "../components/OrderCard";

export default function Orders() {
  const { orders } = useOrders();

  return (
    <>
      {orders.length === 0 ? (
        <Empty
          icon={<RiFileList3Line className="text-6xl text-gray-400" />}
          title="No orders yet"
          description=" When you place your first order, it will appear here."
          buttonIcon={<RiShoppingBagLine />}
          buttonText="Start Shopping"
        />
      ) : (
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold text-[#363636]">
              Order History
            </h1>
            <p className="text-gray-600">
              Track your order and view purchase history
            </p>
          </div>

          <div className="space-y-6">
            {orders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/products">
              <button className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#feba17] px-6 py-3 text-lg font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-[#e6a615]">
                <RiShoppingBagLine />
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
