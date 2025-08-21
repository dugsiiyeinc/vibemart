import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { OrdersProvider } from "./context/OrdersContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <OrdersProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </OrdersProvider>
  </StrictMode>,
);
