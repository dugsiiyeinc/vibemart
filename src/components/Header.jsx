import { useContext, useState } from "react";
import {
  RiCloseFill,
  RiHeartLine,
  RiMenu3Fill,
  RiShoppingCartLine,
} from "react-icons/ri";
import { getCartCount } from "../utils/cartUtils";
import { NavLink } from "react-router";
import ProductContext from "../context/ProductContext";


const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  const { cart, wishlist } = useContext(ProductContext);

  return (
    <header className="border-b border-b-gray-200 shadow-md py-3">
      <div className="max-w-7xl mx-auto px-6 flex h-16  items-center justify-between">
        <h1 className="font-pacifico font-extrabold text-accent text-2xl">
          VibeCart
        </h1>

        {/* desktop links */}
        <nav className="space-x-8 text-base hidden md:block">
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
        <div className="flex items-center mt-2 gap-8 mr-16 md:mr-0">
          <div className="relative">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-accent" : "hover:text-accent "
              }
              to="/wishlist"
            >
              <RiHeartLine className="text-xl" />{" "}
            </NavLink>
            <span className="bg-pink absolute -top-4 left-3 w-5 h-5 flex justify-center items-center text-white rounded-full">
              {wishlist.length}
            </span>
          </div>
          <div className="relative">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-accent" : "hover:text-accent "
              }
              to="/cart"
            >
              <RiShoppingCartLine className="text-xl" />{" "}
            </NavLink>
            <span className="bg-accent absolute -top-4 left-3 w-5 h-5 flex justify-center items-center text-white rounded-full">
              {getCartCount(cart)}
              
            </span>
          </div>

          <NavLink
            className={({ isActive }) =>
              isActive ? " text-accent" : "hover:text-accent "
            }
            to="/login"
          >
            <span className="text-[#0d7a7f]  font-medium">Login</span>
          </NavLink>
        </div>

        {/* menu  */}
        <div className="absolute  right-6">
          {toggleMenu ? (
            <RiCloseFill
              onClick={() => setToggleMenu(!toggleMenu)}
              className=" text-3xl md:hidden block cursor-pointer"
            />
          ) : (
            <RiMenu3Fill
              onClick={() => setToggleMenu(!toggleMenu)}
              className=" text-3xl md:hidden block cursor-pointer"
            />
          )}
        </div>
      </div>
      {/* mobile links */}
      <nav
        className={`space-x-8 md:hidden px-6 py-4 gap-4 font-semibold shadow-md text-base ${
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
