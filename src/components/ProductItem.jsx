import React, { useCallback, useContext } from "react";
import { shopContext } from "../context/stolen";
import { Link } from "react-router-dom";

export default function ProductItem({ id, image, name, price }) {
  const { currency } = useContext(shopContext);
  return (
    <div>
      <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
        <div className="overflow-hidden">
          <img
            className="hover:scale-200 transition ease-in-out h-[50vh] w-[50vh] object-contain bg-gray-100"
            src={image[0]}
          />
        </div>
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
      </Link>
    </div>
  );
}
