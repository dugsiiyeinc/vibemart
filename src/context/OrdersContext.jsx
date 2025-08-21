import { createContext, useContext, useEffect, useReducer } from "react";

const OrdersContext = createContext(null);

const initialState = JSON.parse(localStorage.getItem("orders")) || [];

const reducer = (orders, action) => {
  switch (action.type) {
    case "ADD_TO_ORDERS":
      return [
        ...orders,
        {
          id: Date.now(),
          items: [...action.payload.items],
          shipping: { ...action.payload.shipping },
          grandTotal: action.payload.grandTotal,
          badge: "Processing",
        },
      ];
  }
};

export function OrdersProvider({ children }) {
  const [orders, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  return (
    <OrdersContext.Provider value={{ orders, dispatch }}>
      {children}
    </OrdersContext.Provider>
  );
}

export function useOrders() {
  return useContext(OrdersContext);
}
