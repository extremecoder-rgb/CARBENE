import React from 'react';

const experts = [
  { name: 'Dr. Shaheen', title: 'Dermatologist', id: 1 },
  { name: 'Dr. Abu Zafar', title: 'Dermatologist', id: 2 },
  { name: 'Dr. Emma', title: 'Cosmetic Surgeon', id: 3 },
  { name: 'Dr. John', title: 'Skin Expert', id: 4 }
];

const Experts = () => {
  return (
    <div className="p-4 md:p-0 md:mt-8">
      <h3 className="text-lg font-semibold mb-4 md:text-xl lg:text-2xl">We've got you covered</h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
        {experts.map((expert) => (
          <div key={expert.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <div className="bg-gray-200 h-32 rounded-lg mb-2 md:h-48"></div>
            <p className="font-semibold md:text-lg">{expert.name}</p>
            <p className="text-sm text-gray-600 md:text-base">{expert.title}</p>
            <button className="mt-2 text-purple-600 text-sm hover:text-purple-700 transition-colors md:text-base">
              Connect Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experts;