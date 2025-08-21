import { useContext, useState } from "react";
import {
  RiCloseFill,
  RiHeartLine,
  RiMenu3Fill,
  RiShoppingCartLine,
} from "react-icons/ri";
import { getCartCount } from "../utils/cartUtils";
import { Link, NavLink } from "react-router";
import ProductContext from "../context/ProductContext";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const { cart, wishlist } = useContext(ProductContext);
  const { user, dispatch } = useAuth();

  return (
    <header className="border-b border-gray-200 py-3 shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="font-pacifico text-accent text-2xl font-extrabold">
          VibeMart
        </h1>

        {/* desktop links */}
        <nav className="hidden space-x-8 text-base md:block">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-accent" : "hover:text-accent"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-accent" : "hover:text-accent"
            }
            to="/products"
          >
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-accent" : "hover:text-accent"
            }
            to="/orders"
          >
            Orders
          </NavLink>
        </nav>
        {/* nav icons  */}
        <div className="mt-2 mr-16 flex items-center gap-8 md:mr-0">
          <div className="relative">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-accent" : "hover:text-accent"
              }
              to="/wishlist"
            >
              <RiHeartLine className="text-xl" />{" "}
            </NavLink>
            <span className="bg-pink absolute -top-4 left-3 flex h-5 w-5 items-center justify-center rounded-full text-white">
              {wishlist.length}
            </span>
          </div>
          <div className="relative">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-accent" : "hover:text-accent"
              }
              to="/cart"
            >
              <RiShoppingCartLine className="text-xl" />{" "}
            </NavLink>
            <span className="bg-accent absolute -top-4 left-3 flex h-5 w-5 items-center justify-center rounded-full text-white">
              {getCartCount(cart)}
            </span>
          </div>

          {user ? (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-[#363636]">
                Hello, {user.fullname}
              </span>
              <button
                onClick={() => dispatch({ type: "LOGOUT" })}
                className="cursor-pointer text-sm text-[#119da5] hover:text-[#0d7a7f]"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="cursor-pointer font-medium text-[#119da5] hover:text-[#0d7a7f]"
            >
              Login
            </Link>
          )}
        </div>

        {/* menu  */}
        <div className="absolute right-6">
          {toggleMenu ? (
            <RiCloseFill
              onClick={() => setToggleMenu(!toggleMenu)}
              className="block cursor-pointer text-3xl md:hidden"
            />
          ) : (
            <RiMenu3Fill
              onClick={() => setToggleMenu(!toggleMenu)}
              className="block cursor-pointer text-3xl md:hidden"
            />
          )}
        </div>
      </div>
      {/* mobile links */}
      <nav
        className={`gap-4 space-x-8 px-6 py-4 text-base font-semibold shadow-md md:hidden ${
          toggleMenu ? "flex flex-col" : "hidden"
        }`}
      >
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-accent" : "hover:text-accent"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-accent" : "hover:text-accent"
          }
          to="/products"
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-accent" : "hover:text-accent"
          }
          to="/orders"
        >
          Orders
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
