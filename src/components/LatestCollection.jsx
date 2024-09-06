import React, { useContext, useState, useEffect } from "react";
import { shopContext } from "../context/stolen";
import Title from "./Title";
import ProductItem from "./ProductItem";

function LatestCollection() {
  let { products } = useContext(shopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    const latest = products.slice(0, 10);
    setLatestProducts(latest);
  }, [products]);
  return (
    <>
      <div className="my-6">
        <div className="text-center py-8 text-3xl">
          <Title text1={"LATEST"} text2={"COLLECTION"} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              image={product.images}
              name={product.title}
              price={product.price}
            />
          );
        })}
      </div>
    </>
  );
}

export default LatestCollection;
