import React from 'react';

const CustomFormulation = () => {
  return (
    <div className="p-4 md:p-0 md:mt-6">
      <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow md:p-6 lg:p-8">
        <div className="md:flex md:items-center md:gap-8">
          <div className="md:w-2/3">
            <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">Custom formulations</h3>
            <p className="text-sm text-gray-600 mt-2 md:text-base lg:text-lg">
              At carbene we understand that every skin has different needs and need different attention, thus we have custom formulations for you.

              Take assessment to know what your skin needs.
            </p>
            <button className="w-full md:w-auto bg-purple-600 text-white py-2 px-6 rounded-lg mt-4 hover:bg-purple-700 transition-colors">
              Take Assessment
            </button>
          </div>
          <div className="hidden md:block md:w-1/3">
            <div className="bg-gray-100 h-48 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomFormulation;