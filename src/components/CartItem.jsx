import React, { useContext, useState } from "react";
import { shopContext } from "../context/stolen";
import { RiDeleteBin6Line } from "react-icons/ri";

function CartItem({ product, quantity }) {
  const { currency, cart, setCart } = useContext(shopContext);
  const [quantit, setQuantity] = useState(quantity);

  let updateQuantity = (e) => {
    let value = parseInt(e.target.value);
    setQuantity(value)
    let newCart = { ...cart };
    if (value > 0) {
      newCart[product.id] = { ...newCart[product.id], quantity: value };
    } else {
      delete newCart[product.id];
    }
    setCart(newCart);
  };

  let deleteItem = () => {
    let newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  };
  return (
    <div className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
      <div className="flex items-start gap-6">
        <img src={product.images[0]} className="w-16 sm:w-20" />
        <div>
          <p className="text-xs sm:text-lg font-medium">{product.title}</p>
          <div className="flex items-center gap-5 mt-2">
            <p>
              {currency}
              {product.price}
            </p>
          </div>
        </div>
      </div>
      <input
        className="border max-w-10 sm:max-w-20 sm:px-2 py-1"
        type="number"
        value={quantit}
        onChange={(e) => updateQuantity(e)}
      />
      <RiDeleteBin6Line
        className="w-4 mr-4 sm:w-5 cursor-pointer"
        onClick={deleteItem}
      />
    </div>
  );
}

export default CartItem;
