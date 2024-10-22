import React from 'react';
import Header from './components/Header';
import Hero from './components/hero';
import Login from './components/Login';
import Categories from './components/Categories';
import CustomFormulation from './components/CustomFormulation';
import Stats from './components/Stats';
import LaunchingSoon from './components/LaunchingSoon';
import Experts from './components/Experts';
import Newsletter from './components/Newsletter';


const App = () => {
  return (
    <div className="mx-auto bg-white min-h-screen pb-16 md:pb-0 max-w-[1440px]">
      <Header />
      <div className="md:grid md:grid-cols-12 md:gap-6 md:p-6 lg:p-8">
        <div className="md:col-span-8">
          <Hero />
          <Categories />
          <CustomFormulation />
          <Stats />
        </div>
        <div className="md:col-span-4">
          <Login />
          <LaunchingSoon />
        </div>
        <div className="md:col-span-12">
          <Experts />
          <Newsletter />
        </div>
    </div>
    </div>
  );
};

export default App;