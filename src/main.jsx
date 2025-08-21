import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { OrdersProvider } from "./context/OrdersContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <OrdersProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </OrdersProvider>
    </AuthProvider>
  </StrictMode>,
);
