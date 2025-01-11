import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import LatestVisa from './LatestVisa';
import VisaTips from './VisaTips';
import FAQ from './FAQ';
import Count from './Count';

const Home = () => {
 
  const savedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(savedTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); 
  };

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div>
      
      <div className="fixed top-5 right-5 z-10">
        <button
          onClick={toggleTheme}
          className="btn btn-primary text-white p-2 rounded-full"
        >
          {theme === 'light' ? '🌙' : '🌞'} 
        </button>
      </div>

      <section className="text-gray-800 dark:text-gray-100">
       
        <Banner />
        <Count></Count>
      </section>
      <section className="mt-10 text-gray-800 dark:text-gray-100">
        <LatestVisa />
      </section>
      <section className="mt-10 text-gray-800 dark:text-gray-100">
        <VisaTips />
      </section>
      <section className="mt-10 text-gray-800 dark:text-gray-100">
        <FAQ />
      </section>
    </div>
  );
};

export default Home;
