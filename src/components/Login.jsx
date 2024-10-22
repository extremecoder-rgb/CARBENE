import React from 'react';

const Login = () => {
  return (
    <div className="p-4">
      <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-semibold mb-2">Login is required</h3>
        <p className="text-sm text-gray-600 mb-4">
          Login / Sigup to use CERA, get personal recommendation and much more.
        </p>
        <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;