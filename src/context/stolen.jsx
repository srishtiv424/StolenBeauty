import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const shopContext = createContext();

let StolenBeauty = ({ children }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const currency = "$";
  const deliveryFee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [cart, setCart] = useState({});

  useEffect(() => {
    fetch(
      "https://dummyjson.com/products?limit=0&skip=0&select=title,price,images,thumbnail,category,tags"
    )
      .then((res) => res.json())
      .then((obj) => obj.products)
      .then((arr) => {
        setProducts(arr);
      });
  }, []);

  const totalAmt = () => {
    let total = 0;
    Object.values(cart).forEach((item) => {
      total += item.product.price * item.quantity;
    });
    console.log(total);
    return total;
  };

  const addToCart = (productId, product) => {
    let newCart = { ...cart };
    if (newCart[productId]) {
      newCart[productId].quantity += 1;
    } else {
      newCart[productId] = {
        id: productId,
        product: product,
        quantity: 1,
      };
    }
    setCart(newCart);
  };
  const getCartCount = () => {
    let count = 0;
    for (let productId in cart) {
      count += cart[productId].quantity;
    }
    return count;
  };

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    cart,
    setCart,
    getCartCount,
    totalAmt,
    navigate,
  };

  return <shopContext.Provider value={value}>{children}</shopContext.Provider>;
};

export default StolenBeauty;
