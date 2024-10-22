import React from 'react';

const Newsletter = () => {
  return (
    <div className="p-4 md:p-0 md:mt-8">
      <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow md:p-6 lg:p-8">
        <div className="md:flex md:items-center md:gap-8">
          <div className="md:w-2/3">
            <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">Subscribe to our newsletter</h3>
            <p className="text-sm text-gray-600 mt-2 md:text-base">Get the latest updates and exclusive offers</p>
          </div>
          <div className="md:w-1/3 mt-4 md:mt-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-600 md:text-base"
            />
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg mt-2 hover:bg-purple-700 transition-colors md:text-base">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
