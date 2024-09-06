import React, { useContext, useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";
import RelatedProducts from "../components/RelatedProducts";
import { useParams } from "react-router-dom";
import { FaStar, FaRegStarHalfStroke, FaRegStar } from "react-icons/fa6";
import { shopContext } from "../context/stolen";

function Product() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const [image, setImage] = useState("");
  const [selectedTab, setSelectedTab] = useState("reviews");
  const { currency, addToCart } = useContext(shopContext);
  const renderStars = () => {
    const stars = [];
    for (let a = 1; a <= 5; a++) {
      if (a <= product.rating) {
        stars.push(<FaStar key={a} className="text-yellow-400 text-lg" />);
      } else if (a - product.rating < 1) {
        stars.push(
          <FaRegStarHalfStroke key={a} className="text-yellow-400 text-lg" />
        );
      } else {
        stars.push(<FaRegStar key={a} className="text-gray-300 text-lg" />);
      }
    }
    return stars;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((obj) => {
        setProduct(obj);
        setImage(obj.images ? `${obj.images[0]}` : "");
      });
  }, [productId]);

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {product.images &&
              product.images.map((imge, idx) => (
                <img
                  key={idx}
                  src={imge}
                  onClick={() => setImage(imge)}
                  className="w-[28%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer bg-gray-100 border-radius-50 p-1"
                />
              ))}
          </div>
          <div className="w-full sm:w-[80%] ">
            <img className="w-full h-auto bg-gray-100 p-1" src={image} />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2 text-gray-700">
            {product.title}
          </h1>
          <div className="flex items-center gap-1 mt-2">
            {renderStars()}
            <p>({product.rating})</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency} {product.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">{product.description}</p>
          <button
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-900 mt-4"
            onClick={() => addToCart(productId,product)}
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex">
          <b
            className={`border px-5 py-3 text-sm cursor-pointer ${
              selectedTab === "description" ? "text-black" : "text-gray-500"
            }`}
            onClick={() => setSelectedTab("description")}
          >
            Description
          </b>
          <b
            className={`border px-5 py-3 text-sm cursor-pointer ${
              selectedTab === "reviews" ? "text-black" : "text-gray-500"
            }`}
            onClick={() => setSelectedTab("reviews")}
          >
            Reviews ({product.reviews ? product.reviews.length : 0})
          </b>
        </div>
        {selectedTab === "reviews" ? (
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
            {product.reviews && product.reviews.length > 0 ? (
              product.reviews.map((review, index) => (
                <ReviewCard
                  key={index}
                  rating={review.rating}
                  comment={review.comment}
                  name={review.reviewerName}
                />
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        ) : (
          <div className="border p-4 rounded  h-[40vh] text-gray-500">
            {product.description}
          </div>
        )}
      </div>
      <RelatedProducts product={product} />
    </div>
  );
}

export default Product;
