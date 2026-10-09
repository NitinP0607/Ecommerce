import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const Hero = () => {
  const { navigate } = useContext(ShopContext);
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141] px-6">
          {/* Small Top Text */}
          <div className="flex items-center gap-3 mb-5">
            <p className="w-10 h-[1px] bg-[#414141]"></p>

            <p className="text-[11px] md:text-xs tracking-[0.3em] font-medium">
               NITRA / NEW SEASON
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]">
            LATEST
            <br />
            <span className="font-semibold italic">ARRIVALS</span>
          </h1>

          {/* Small Description */}
          <p className="mt-5 max-w-sm text-xs md:text-sm text-gray-500 leading-6">
            Discover the latest styles, timeless essentials and pieces made for
            your everyday look.
          </p>

          {/* Shop Now */}
          <div className="flex items-center gap-3 mt-7 group cursor-pointer w-fit">
            <p
              onClick={() => navigate("/collection")}
              className="
    inline-flex
    items-center
    justify-center
    gap-3
    px-7
    py-3
    bg-[#222]
    text-white
    font-semibold
    text-xs
    md:text-sm
    tracking-[0.2em]
    cursor-pointer
    rounded-sm
    transition-all
    duration-300
    hover:bg-black
    hover:shadow-lg
    hover:-translate-y-1
    group
  "
            >
              SHOP NOW
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </p>

            <p className="w-8 md:w-11 h-[1px] bg-[#414141] transition-all duration-300 group-hover:w-16"></p>
          </div>
        </div>
      </div>

      {/* Hero Right */}
      <img src={assets.hero_img} className="w-full sm:w-1/2" alt="" />
    </div>
  );
};

export default Hero;
