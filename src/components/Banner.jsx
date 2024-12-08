import React from "react";
import image1 from '../assets/green-cards-passports-flat-lay.jpg';
import image2 from '../assets/visa-application-composition-with-canadian-flag.jpg';
import image3 from '../assets/young-bearded-student-guy-red-polo-shirt-with-backpack-holding-globe-airline-tickets-looking-up-intrigued-happy-standing.jpg';

const Banner = () => {
  return (
    <div className="carousel w-full max-w-screen-xl mx-auto my-6 rounded-lg shadow-lg">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img src={image1} alt="Global Visa Opportunities" className="w-full h-[300px] object-cover rounded-lg" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Explore Global Visa Opportunities
            </h2>
            <p className="text-lg">
              Unlock new paths with the right visa. We help you explore all
              available visa types to match your dreams.
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

     
      <div id="slide2" className="carousel-item relative w-full">
        <img src={image2} alt="Track Visa Applications" className="w-full h-[300px] object-cover rounded-lg" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Track Your Visa Applications
            </h2>
            <p className="text-lg">
              Stay updated with real-time visa application tracking. Your
              progress, one click away.
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src={image3} alt="Hassle-Free Visa Processing" className="w-full h-[300px] object-cover rounded-lg" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Hassle-Free Visa Processing
            </h2>
            <p className="text-lg">
              Experience smooth and secure visa processing with our expert
              guidance and user-friendly tools.
            </p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
