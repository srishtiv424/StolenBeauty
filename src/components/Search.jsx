import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/stolen";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useLocation } from "react-router-dom";

function Search() {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(shopContext);
  const location = useLocation();
  
  return (
    showSearch && (
      <div className="border-t border-b bg-gray-50 text-center">
        <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
            className="flex-1 outline-none bg-inherit text-sm"
          />
          <CiSearch className="inline w-3 cursor-pointer" />
        </div>
        <RxCross1
          onClick={() => setShowSearch(false)}
          className="inline  w-3 cursor-pointer"
        />
      </div>
    )
  );
}

export default Search;
