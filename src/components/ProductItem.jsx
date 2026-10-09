import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({ id, name, image, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="group block"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden bg-[#f5f5f3] aspect-[3/4]">
        <img
          src={Array.isArray(image) ? image[0] : image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* View Product */}
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="bg-white text-gray-900 flex items-center justify-between px-4 py-3 text-xs tracking-wide">
            <span>VIEW PRODUCT</span>
            <ArrowUpRight size={17} strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div className="pt-4 pb-2">
        <h3 className="text-sm font-normal text-gray-800 leading-5 line-clamp-1 group-hover:text-gray-500 transition-colors">
          {name}
        </h3>

        <div className="flex items-center justify-between mt-2">
          <p className="text-sm font-medium text-gray-900">
            {currency}{price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;