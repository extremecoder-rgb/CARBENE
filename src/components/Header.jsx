import React from 'react';
import { Search, ShoppingBag } from 'lucide-react';

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center border-b fixed top-0 left-0 right-0 bg-white z-50 md:static">
      <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">Carbene</h1>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-4">
          <button className="hover:text-purple-600">Home</button>
          <button className="hover:text-purple-600">Shop</button>
          <button className="hover:text-purple-600">About</button>
          <button className="hover:text-purple-600">Contact</button>
        </div>
        <Search className="w-5 h-5 cursor-pointer hover:text-purple-600 md:w-6 md:h-6" />
        <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-purple-600 md:w-6 md:h-6" />
      </div>
    </header>
  );
};

export default Header;