import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    thumbnail_url,
    details,
    category_id,
  } = news;

  return (
    <div className="max-w-lg mx-auto bg-white rounded-md overflow-hidden shadow border border-gray-200">
      {/* Image */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full h-56 object-cover p-4 rounded-3xl"
      />

      {/* Content */}
      <div className="p-5">
        <h2 className="text-lg font-semibold mb-3">{title}</h2>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {details}
        </p>
      </div>

      {/* Footer Button */}
      <div className="bg-rose-600 text-white px-5 py-3 flex items-center justify-center gap-2 cursor-pointer hover:bg-rose-700 transition">
        <FaArrowLeft size={14} />
        <Link to={`/category/${category_id}`} className="text-sm font-medium">All news in this category</Link>
      </div>
    </div>
  );
};

export default NewsCard;
