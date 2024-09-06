import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { shopContext } from "../context/stolen";
import CartItem from "../components/CartItem";
import CartTotal from "../components/CartTotal";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart ,navigate} = useContext(shopContext);
  
  let items = Object.values(cart);
  return (
    <>
      <div className="border-t pt-14">
        <div className="text-2xl mb-3">
          <Title text1={"YOUR"} text2={"  CART"} />
        </div>
        {items.length > 0 ? (
          <>
            <div>
              {items &&
                items.map((item, idx) => (
                  <CartItem
                    key={idx}
                    product={item.product}
                    quantity={item.quantity}
                  />
                ))}
            </div>
            <div className="flex justify-end my-20">
              <div className="w-full sm:w-[450px]">
                <CartTotal />
                <div className="w-full text-end">
                  <button
                    onClick={() => navigate("/place-order")}
                    className="bg-black text-white text-sm my-8 px-8  py-3"
                  >
                    PROCEED TO CHECKOUT
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="border h-[50vh] flex justify-center items-center text-2xl font-bold text-gray-600">
            YOUR CART IS EMPTY
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
