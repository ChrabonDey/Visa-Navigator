import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import image1 from "../assets/green-cards-passports-flat-lay.jpg";
import image2 from "../assets/visa-application-composition-with-canadian-flag.jpg";
import image3 from "../assets/young-bearded-student-guy-red-polo-shirt-with-backpack-holding-globe-airline-tickets-looking-up-intrigued-happy-standing.jpg";

const Banner = () => {
  return (
    <div className="my-6 px-4 md:px-20 rounded-lg shadow-lg h-[60vh] md:h-[70vh]">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full h-full p-6">
            <div className="flex-1 text-start text-black">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 w-full md:w-3/4">
                Explore Global <br /> Visa Opportunities <br />
                With Expert Visa Portal
              </h2>
              <p className="text-lg opacity-70 w-full md:w-3/4 mb-4">
                Unlock new paths with the right visa. We help you explore all
                available visa types to match your dreams.
              </p>
              <div className="flex items-center">
                <i className="fa-solid fa-plane-departure text-blue-500 text-3xl mr-4"></i>
                <span className="text-xl font-semibold">Start Your Journey</span>
              </div>
            </div>
            <div className="flex-1 relative">
              <img
                src={image1}
                alt="Global Visa Opportunities"
                className="absolute -top-16 left-8 md:-top-20 md:left-20 w-48 md:w-60 h-48 md:h-60 object-cover rounded-lg shadow-lg"
              />
              <img
                src={image2}
                alt="Global Visa Image"
                className="absolute top-16 right-8 md:top-20 md:right-20 w-48 md:w-60 h-48 md:h-60 object-cover rounded-lg shadow-lg"
              />
              <img
                src={image3}
                alt="Student with Globe"
                className="absolute w-56 md:w-60 h-48 md:h-60 -top-44 left-20 md:left-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full h-full p-6">
            <div className="flex-1 text-start text-black">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 w-full md:w-3/4">
                Track Your Visa <br /> Applications with Ease
              </h2>
              <p className="text-lg opacity-70 w-full md:w-3/4 mb-4">
                Stay updated with real-time visa application tracking. Your
                progress, one click away.
              </p>
              <div className="flex items-center">
                <i className="fa-solid fa-search text-green-500 text-3xl mr-4"></i>
                <span className="text-xl font-semibold">Track Now</span>
              </div>
            </div>
            <div className="flex-1 relative">
              <img
                src={image2}
                alt="Track Visa Applications"
                className="absolute -top-16 left-8 md:-top-20 md:left-20 w-48 md:w-60 h-48 md:h-60 object-cover rounded-lg shadow-lg"
              />
              <img
                src={image3}
                alt="Visa Image"
                className="absolute top-16 right-8 md:top-20 md:right-20 w-48 md:w-60 h-48 md:h-60 object-cover rounded-lg shadow-lg"
              />
              <img
                src={image1}
                alt="Track Progress"
                className="absolute w-56 md:w-60 h-48 md:h-60 -top-44 left-20 md:left-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full h-full p-6">
            <div className="flex-1 text-start text-black">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 w-full md:w-3/4">
                Hassle-Free Visa <br /> Processing with Experts
              </h2>
              <p className="text-lg opacity-70 w-full md:w-3/4 mb-4">
                Experience smooth and secure visa processing with our expert
                guidance and user-friendly tools.
              </p>
              <div className="flex items-center">
                <i className="fa-solid fa-check-circle text-red-500 text-3xl mr-4"></i>
                <span className="text-xl font-semibold">Learn More</span>
              </div>
            </div>
            <div className="flex-1 relative">
              <img
                src={image3}
                alt="Hassle-Free Visa Processing"
                className="absolute -top-16 left-8 md:-top-20 md:left-20 w-48 md:w-60 h-48 md:h-60 object-cover rounded-lg shadow-lg"
              />
              <img
                src={image1}
                alt="Visa Assistance"
                className="absolute top-16 right-8 md:top-20 md:right-20 w-48 md:w-60 h-48 md:h-60 object-cover rounded-lg shadow-lg"
              />
              <img
                src={image2}
                alt="Processing Help"
                className="absolute w-56 md:w-60 h-48 md:h-60 -top-44 left-20 md:left-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
