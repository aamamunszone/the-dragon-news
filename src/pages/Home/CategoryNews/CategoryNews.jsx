import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard/NewsCard';

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(id, data);

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id === '0') {
      setCategoryNews(data);
      return;
    } else if (id === '1') {
      const breakingNews = data.filter(
        (news) => news.others.is_today_pick === true
      );
      setCategoryNews(breakingNews);
      return;
    } else {
      const filteredNews = data.filter(
        (news) => news.category_id === Number(id)
      );
      setCategoryNews(filteredNews);
    }
  }, [id, data]);

  return (
    <div className="space-y-5">
      <h2 className="text-[20px] font-semibold">Dragon News Home</h2>
      <div>
        <h3>Total - {categoryNews.length} News Found</h3>
      </div>
      <div className="grid grid-cols-1 gap-7">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
