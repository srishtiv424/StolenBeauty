import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { shopContext } from "../context/stolen";
import ProductItem from "../components/ProductItem";

function RelatedProducts({ product }) {
  const { products } = useContext(shopContext);
  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    let arr = [...products];
    arr = products.filter(
      (item) =>
        product.category === item.category ||
        (product.tags && product.tags.includes(item.category))
    );
    setRelatedProducts(arr.slice(0, 5));
  }, []);
  return (
    <>
      <hr />
      <span className="text-xl mt-7 sm:text-2xl">
        <Title text1={"RELATED "} text2={"PRODUCTS"} />
      </span>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {relatedProducts.map((product) => {
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

export default RelatedProducts;
