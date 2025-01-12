import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import LatestVisa from './LatestVisa';
import VisaTips from './VisaTips';
import FAQ from './FAQ';
import Count from './Count';
import AboutVisa from './AboutVisa';
import Testimonial from './Testimonial';

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
     

      <section className="text-gray-800 dark:text-gray-100">
        <Banner />
        <Count />
      </section>
      <section className="mt-8">
        <AboutVisa />
      </section>
      <section className="mt-10 text-gray-800 dark:text-gray-100">
        <LatestVisa />
      </section>

      <section className="mt-10 text-gray-800 dark:text-gray-100">
        <VisaTips />
      </section>
      <section className="mt-10">
        <Testimonial />
      </section>
      <section className="mt-10 text-gray-800 dark:text-gray-100">
        <FAQ />
      </section>
    </div>
  );
};

export default Home;
