import React from 'react';

const Hero = () => {
  return (
    <div className="p-4 bg-purple-100 rounded-lg m-4 mt-16 md:mt-0 md:m-0 md:mb-6">
      <div className="md:flex md:items-center md:justify-between md:p-6 lg:p-8">
        <div className="md:w-1/2">
          <h2 className="text-lg font-semibold md:text-2xl lg:text-3xl">CERA is Here</h2>
          <p className="text-sm mt-2 md:text-base lg:text-lg">Experience revolutionary skincare technology</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-purple-700 transition-colors md:text-lg">
            Ask CERA
          </button>
        </div>
        <div className="hidden md:block md:w-1/2">
          <div className="bg-purple-200 h-48 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
