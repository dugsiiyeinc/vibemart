import React from "react";
import { BiCart, BiSearch } from "react-icons/bi";
import { RiShoppingBagLine } from "react-icons/ri";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.4),  rgba(0, 0, 0, 0.4)), url("https://readdy.ai/api/search-image?query=modern%20ecommerce%20shopping%20website%20hero%20background%20with%20vibrant%20colors%20golden%20orange%20accents%20clean%20minimalist%20design%20professional%20photography&width=1200&height=600&seq=hero1&orientation=landscape")',
      }}
      className="relative h-96 flex items-center flex-col justify-center bg-cover bg-center"
    >
     <div className="text-center px-4">
       <h1 className="text-5xl md:text-7xl text-gray-50 font-bold mb-4">
        Welcome to{" "}
        <span className="text-accent font-pacifico font-bold">VibeCart</span>
      </h1>

      <p className="text-gray-300 text-2xl">Discover amazing products that match your vibe</p>

     </div>

      <div className="mt-6 flex w-[80%] flex-col justify-center md:flex-row gap-4 text-gray-50">
        <Link
          to="/menu"
          className="bg-accent font-bold justify-center flex items-center gap-2 text-lg px-6 py-3 rounded-lg hover:bg-accent"
        >
          <RiShoppingBagLine /> Shop Now
        </Link>

        <Link
          to="/booking"
          className="border justify-center  text-lg font-bold flex items-center gap-2 hover:text-accent  border-[#fff] px-6 py-3 rounded-lg hover:bg-[#fff]"
        >
          <BiSearch /> Browse Products
        </Link>
      </div>
    </div>
  );
};

export default Hero;
