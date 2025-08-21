import { Link } from "react-router";

export default function OrderItem({ item }) {
  return (
    <div className="flex items-center gap-4">
      <Link>
        <img
          className="size-16 object-cover object-top rounded-lg cursor-pointer"
          src={`/public/${item.image}`}
          alt=""
        />
      </Link>

      <div className="flex-1">
        <Link className="font-medium text-[#363636] hover:text-[#feba17] cursor-pointer">
          {item.name}
        </Link>
        <p className="text-sm text-gray-600">
          Quantity: {item.quantity} x ${item.price}
        </p>
      </div>

      <p className="text-right font-medium">
        ${(item.quantity * item.price).toFixed(2)}
      </p>
    </div>
  );
}
