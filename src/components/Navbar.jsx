import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoLogOut, IoSearchOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { shopContext } from "../context/stolen";
import img from '../../public/logo.svg'

function Navbar() {
  const { setShowSearch, getCartCount } = useContext(shopContext);
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/" className="flex flex-col items-center justify-center">
        <img src={img} className="w-14" alt="None" />
        <span>Stolen Beauty</span>
      </Link>

      <ul className=" hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/StolenBeauty" className="flex flex-col items-center gap-1 ">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1  "
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1 ">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1 ">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <IoSearchOutline
          className="w-5 cursor-pointer"
          onClick={() => setShowSearch((prev) => !prev)}
        />
        <div className="group relative">
          <Link to={"/login"}>
            {" "}
            <FaUser className="w-5 cursor-pointer" />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative ">
          <CiShoppingCart className="w-5 min-w-5 size-8 " />
          <p className="absolute right-[-7px] bottom-[-1px]  w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <CiMenuBurger
          onClick={() => setVisible(true)}
          className=" sm:hidden w-5 cursor-pointer "
        />
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div className="flex items-center gap-4 p-3">
            <RxCross1
              onClick={() => setVisible(false)}
              className="cursor-pointer"
            />
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
