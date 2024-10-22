import React from 'react';

const products = [
  { title: 'New Serum', id: 1 },
  { title: 'Face Cream', id: 2 }
];

const LaunchingSoon = () => {
  return (
    <div className="p-4 md:p-0 md:mt-6">
      <h3 className="text-lg font-semibold mb-4 md:text-xl">Launching Soon</h3>
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <div className="bg-gray-200 h-32 rounded-lg mb-2 md:h-48"></div>
            <p className="text-sm md:text-base">{product.title}</p>
            <button className="mt-2 text-purple-600 text-sm hover:text-purple-700 transition-colors md:text-base">
              Notify Me
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaunchingSoon;