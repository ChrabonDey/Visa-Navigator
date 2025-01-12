import React from "react";
import { NavLink } from "react-router-dom";
import image1 from "../assets/2150769939.jpg";

const About = () => {
  return (
    <div
      id="about-section"
      className="flex flex-col lg:flex-row items-center justify-between gap-8 p-6 lg:p-12 py-12"
    >
      {/* Image Section */}
      <div
                        class="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-[#696B9A] rounded-3xl sm:border border-gray-200 relative">
                        <img class="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                            src={image1}alt="about Us image" />
                    </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col space-y-6 text-center lg:text-left">
        <p className="text-[#696B9A] font-semibold text-lg lg:text-xl">
          About Visa Portal
        </p>
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 leading-snug">
          Welcome to Visa Portal <br />
          Where Your Global Journey Begins
        </h1>
        <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
          The Visa Portal is a cutting-edge online platform designed to
          revolutionize the visa application process. Our mission is to make
          global travel more accessible by simplifying the steps involved in
          obtaining a visa. Whether you're traveling for business, education, or
          leisure, our platform ensures a hassle-free and transparent
          application experience.
        </p>
        <ul className="list-disc list-inside text-gray-600 text-sm lg:text-base leading-relaxed space-y-2">
          <li>
            <strong>User-Friendly Interface:</strong> A simple, intuitive design
            that guides users through each step of the application process.
          </li>
          <li>
            <strong>Document Management:</strong> Easily upload, review, and
            manage all required documents securely.
          </li>
          <li>
            <strong>Application Tracking:</strong> Stay informed with real-time
            updates on your visa application status.
          </li>
          <li>
            <strong>Appointment Scheduling:</strong> Book visa interviews and
            appointments at your convenience.
          </li>
          <li>
            <strong>Payment Integration:</strong> Secure and seamless payment
            options for application fees.
          </li>
        </ul>
        <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
          At Visa Portal, we prioritize user convenience, data security, and
          efficiency. Join us and embark on your global journey with confidence
          and ease!
        </p>
        <NavLink
          to="/"
          className="btn bg-[#1e1e60] text-white px-6 font-semibold hover:bg-[#1e1e60] hover:scale-105 ease-in-out w-fit mx-auto lg:mx-0"
        >
          Go to Home
        </NavLink>
      </div>
    </div>
  );
};

export default About;
