import React from 'react';

const statsData = [
  { number: '8+', text: 'Years of R&D' },
  { number: '2400+', text: 'Skincare Formulations Made' },
  { number: '120+', text: 'Skin Recommendations Given' }
];

const Stats = () => {
  return (
    <div className="bg-blue-900 text-white p-6 m-4 rounded-lg md:m-0 md:mt-6 md:p-8 lg:p-10">
      <h3 className="text-lg font-semibold mb-4 md:text-xl lg:text-2xl">Why Choose Carbene</h3>
      <div className="md:grid md:grid-cols-3 md:gap-6 space-y-4 md:space-y-0">
        {statsData.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl font-bold md:text-3xl lg:text-4xl">{stat.number}</div>
            <div className="text-sm md:text-base lg:text-lg">{stat.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;