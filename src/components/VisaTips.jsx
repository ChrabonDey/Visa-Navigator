import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const VisaTips = () => {
  return (
    <div className="bg-gradient-to-r py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-black">
          <Typewriter
            words={['Visa Tips & Resources', 'Your Guide to Visa Applications', 'Visa Success Starts Here']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <p className="text-lg text-black mb-8">
          Get the right information to guide your visa application process. From document requirements to application tips, we have you covered.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4">Document Checklist</h3>
            <p className="text-white mb-4">
              Ensure you have all the necessary documents to avoid delays in your visa application.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4">Application Process</h3>
            <p className="text-white mb-4">
              Step-by-step guides to help you navigate through the visa application process easily.
            </p>
          </div>
          <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4">Visa Interview Tips</h3>
            <p className="text-white mb-4">
              Prepare for your visa interview with these essential tips and insights from experts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaTips;
