import { Route, Routes } from "react-router";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import OrdersPage from "./pages/OrdersPage";
import ThankYouPage from "./pages/ThankYouPage";
import WishlistPage from "./pages/WishlistPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductContext from "./context/ProductContext";
import { useEffect, useReducer } from "react";
import { wishlistReducer } from "./context/wishlistReducer";
import { cartReducer } from "./context/cartReducer";

function App() {
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const initialWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const [wishlist, dispatchWishlist] = useReducer(
    wishlistReducer,
    initialWishlist,
  );
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <ProductContext.Provider
      value={{ cart, dispatch, wishlist, dispatchWishlist }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ProductContext.Provider>
  );
}

export default App;
