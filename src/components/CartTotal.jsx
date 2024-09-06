import React, { useContext } from "react";
import { shopContext } from "../context/stolen";
import Title from "../components/Title";

function CartTotal() {
  const { totalAmt, deliveryFee, currency } = useContext(shopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={" TOTALS"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {totalAmt()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {deliveryFee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}
            {totalAmt() === 0 ? 0 : totalAmt() + deliveryFee}
          </b>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
