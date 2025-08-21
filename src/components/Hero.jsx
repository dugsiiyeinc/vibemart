import React from "react";
import { BiCart, BiSearch } from "react-icons/bi";
import { RiShoppingBagLine } from "react-icons/ri";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="relative flex h-96 flex-col items-center justify-center bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url('images/hero.png')] bg-cover bg-center">
      <div className="px-4 text-center">
        <h1 className="mb-4 text-5xl font-bold text-gray-50 md:text-7xl">
          Welcome to
          <span className="text-accent font-pacifico font-bold">VibeMart</span>
        </h1>

        <p className="text-2xl text-gray-300">
          Discover amazing products that match your vibe
        </p>
      </div>

      <div className="mt-6 flex w-[80%] flex-col justify-center gap-4 text-gray-50 md:flex-row">
        <Link
          to="/products"
          className="bg-accent hover:bg-accent flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-lg font-bold"
        >
          <RiShoppingBagLine /> Shop Now
        </Link>

        <Link
          to="/products"
          className="hover:text-accent flex items-center justify-center gap-2 rounded-lg border border-[#fff] px-6 py-3 text-lg font-bold hover:bg-[#fff]"
        >
          <BiSearch /> Browse Products
        </Link>
      </div>
    </div>
  );
};

export default Hero;
