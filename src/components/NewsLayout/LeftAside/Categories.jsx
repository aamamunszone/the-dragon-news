import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/data/categories.json').then((res) =>
  res.json()
);

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div className="space-y-5">
      <h2 className="text-[20px] font-semibold">
        All Category ({categories.length})
      </h2>
      <div className="flex flex-col justify-between gap-1.5">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className={({ isActive }) =>
              `pl-14 p-2 font-semibold rounded-md ${
                isActive
                  ? 'bg-base-300 text-base-content'
                  : 'text-accent-content'
              }`
            }
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
