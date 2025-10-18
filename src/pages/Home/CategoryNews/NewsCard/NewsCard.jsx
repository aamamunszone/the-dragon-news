import React, { useState } from 'react';
import { FaEye, FaRegBookmark, FaStar } from 'react-icons/fa';
import { IoMdShare } from 'react-icons/io';

const NewsCard = ({ news }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const formattedDate = new Date(
    news.author.published_date
  ).toLocaleDateString();

  const maxLength = 200;

  const shortDetails =
    news.details.length > maxLength
      ? news.details.slice(0, maxLength)
      : news.details;

  return (
    <div className="border border-gray-200 shadow-md">
      <div className="bg-base-200 p-3 flex justify-between items-center gap-2.5">
        <div className="flex justify-between items-center gap-2.5">
          <img
            className="rounded-full overflow-hidden w-[48px]"
            src={news.author.img}
            alt={news.author.name}
          />
          <div className="flex flex-col justify-between">
            <span>{news.author.name}</span>
            <span>{formattedDate}</span>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2.5">
          <FaRegBookmark size={22} />
          <IoMdShare size={22} />
        </div>
      </div>

      <div className="p-4 space-y-5">
        <h3 className="text-xl font-semibold">{news.title}</h3>
        <img
          src={news.thumbnail_url}
          alt={news.title}
          className="rounded-md overflow-hidden object-cover"
        />

        <p className="text-accent-content">
          {isExpanded ? news.details : shortDetails}
          {news.details.length > maxLength && (
            <span
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[orangered] cursor-pointer ml-2"
            >
              {isExpanded ? 'Show Less' : '...Read More'}
            </span>
          )}
        </p>

        <hr />

        <div className="flex justify-between items-center gap-2.5">
          <div className="flex justify-between items-center gap-2.5">
            <FaStar size={20} color="orangered" />
            <FaStar size={20} color="orangered" />
            <FaStar size={20} color="orangered" />
            <FaStar size={20} color="orangered" />
            <FaStar size={20} color="orangered" />
            <span className="text-xl">{news.rating.number}</span>
          </div>

          <div className="flex justify-between items-center gap-2.5">
            <FaEye />
            <span>{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
