import React from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";

function OurPolicy() {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center  text-xs sm:text-sm md:text-base text-gray-700 " >
      <div>
        <FaExchangeAlt className="w-12 m-auto mb-5 size-max" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div>
        <FaCircleCheck className="w-12 m-auto mb-5 size-max" />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We offer 7 days free return policy</p>
      </div>
      <div>
        <FaHeadphonesSimple className="w-12 m-auto mb-5 size-max" />
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-400">
          We offer hassle free customer support 24*7
        </p>
      </div>
    </div>
  );
}

export default OurPolicy;
