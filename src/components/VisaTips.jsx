import React from "react";
import { Typewriter } from "react-simple-typewriter";
import img1 from "../assets/16605.jpg";

const VisaTips = () => {
  return (
    <div className="bg-gradient-to-r from-white to-gray-50 py-16">
   <div className="text-center">
   <h2 className="text-3xl lg:text-4xl font-bold text-black ">
            <Typewriter
              words={[
                "Visa Tips & Resources",
                "Your Guide to Visa Applications",
                "Visa Success Starts Here",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
   </div>
      <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-center lg:justify-between gap-12">
        
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-6">
          
          <p className="text-[#696B9A] text-lg font-medium">Visa Type</p>
          <h3 className="text-2xl lg:text-3xl font-bold text-black">
            Discover the Different Types of Visas We Assist With
          </h3>
          <p className="text-gray-600 text-base lg:text-lg">
            We provide guidance and support for a wide range of visa types to
            meet your travel, education, and work needs. Let us help make your
            application process seamless and stress-free.
          </p>
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:bg-[#696B9A] hover:text-white transition duration-300 ease-in-out">
              <h3 className="text-lg font-semibold mb-2">Tourist Visa</h3>
              <p className="text-sm text-gray-600 group-hover:text-white">
                Explore new destinations and experience global adventures with
                our support for tourist visa applications.
              </p>
            </div>
            <div className="group bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:bg-[#696B9A] hover:text-white transition duration-300 ease-in-out">
              <h3 className="text-lg font-semibold mb-2">Student Visa</h3>
              <p className="text-sm text-gray-600 group-hover:text-white">
                Pursue your educational dreams abroad with our step-by-step
                guidance for student visa applications.
              </p>
            </div>
            <div className="group bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:bg-[#696B9A] hover:text-white transition duration-300 ease-in-out">
              <h3 className="text-lg font-semibold mb-2">Worker Visa</h3>
              <p className="text-sm text-gray-600 group-hover:text-white">
                Start your professional journey in another country with a
                hassle-free worker visa application process.
              </p>
            </div>
            <div className="group bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:bg-[#696B9A] hover:text-white transition duration-300 ease-in-out">
              <h3 className="text-lg font-semibold mb-2">Other Visas</h3>
              <p className="text-sm text-gray-600 group-hover:text-white">
                From family reunification to investor visas, we cover a variety
                of special visa categories.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block lg:w-1/2 md:h-96 ">
          <img
            src={img1}
            alt="Visa Assistance"
            className="rounded-lg shadow-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default VisaTips;
