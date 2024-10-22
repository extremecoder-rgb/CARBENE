import React from 'react';

const categoryData = [
  { title: 'Acne', id: 1 },
  { title: 'Oily Skin', id: 2 },
  { title: 'Anti-Aging', id: 3 },
  { title: 'Wrinkles', id: 4 }
];

const Categories = () => {
  return (
    <div className="p-4 md:p-0">
      <h3 className="text-lg font-semibold mb-4 md:text-xl">Shop by Concerns</h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
        {categoryData.map((category) => (
          <div key={category.id} className="border rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
            <div className="hidden md:block bg-gray-100 h-32 rounded-lg mb-4"></div>
            <h4 className="font-semibold md:text-lg">{category.title}</h4>
            <button className="mt-2 text-purple-600 text-sm hover:text-purple-700 transition-colors md:text-base">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;