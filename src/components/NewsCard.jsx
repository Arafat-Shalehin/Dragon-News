import React from "react";
import { FaEye, FaStar, FaShareAlt } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    tags,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleString();

  return (
    <div className="card bg-base-100 shadow-md rounded-2xl border border-gray-200 overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg duration-300">
      {/* Author Section */}
      <div className="bg-base-200 flex items-center justify-between px-4 pt-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover border border-gray-300"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <button className="btn btn-ghost btn-sm text-gray-500 hover:text-primary sm:space-x-2">
          <FaRegBookmark size={17}/>
          <FaShareAlt size={17}/>
        </button>
      </div>

      {/* Title */}
      <div className="px-4 mt-2">
        <h2 className="font-bold text-lg leading-tight hover:text-primary transition-colors duration-200">
          {title}
        </h2>
      </div>

      {/* Tags */}
      <div className="px-4 mt-2 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="badge badge-outline text-xs font-medium capitalize"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Thumbnail */}
      <figure className="px-4 mt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover h-48 sm:h-56"
        />
      </figure>

      {/* Details */}
      <div className="px-4 mt-3 text-sm text-gray-600 line-clamp-3">
        {details}
      </div>

      {/* Read More */}
      <p className="px-4 mt-2 text-primary font-semibold cursor-pointer hover:underline">
        Read More
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t text-sm mt-3">
        <div className="flex items-center text-warning">
          <FaStar className="mr-1" />
          <span className="font-medium">{rating.number.toFixed(1)}</span>
        </div>
        <div className="flex items-center text-gray-500">
          <FaEye className="mr-1" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;