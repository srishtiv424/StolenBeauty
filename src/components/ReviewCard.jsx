import React from "react";
import { FaStar, FaRegStarHalfStroke, FaRegStar } from "react-icons/fa6";

function ReviewCard({ rating, comment, name }) {
  const renderStars = () => {
    const stars = [];
    for (let a = 1; a <= 5; a++) {
      if (a <= rating) {
        stars.push(<FaStar key={a} className="text-yellow-400 text-lg" />);
      } else if (a - rating < 1) {
        stars.push(
          <FaRegStarHalfStroke key={a} className="text-yellow-400 text-lg" />
        );
      } else {
        stars.push(<FaRegStar key={a} className="text-gray-300 text-lg" />);
      }
    }
    return stars;
  };

  return (
    <div className="border p-4 rounded shadow-md">
      <p className="font-semibold text-gray-900 mb-2">{name}</p>
      <div className="flex items-center mb-2">{renderStars()}</div>
      <p className="text-gray-700">{comment}</p>
    </div>
  );
}

export default ReviewCard;
