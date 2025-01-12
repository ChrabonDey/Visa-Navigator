import React from 'react';
import image1 from '../assets/2150769939.jpg';
import { NavLink } from 'react-router-dom';

const AboutVisa = () => {
    

    return (
        <>
            {/* About Section */}
            <div id="about-section" className=" flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 bg-white p-6 lg:p-10 py-10 lg:py-16 space-y-2">
                 <div
                                        class="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-[#696B9A] rounded-3xl sm:border border-gray-200 relative">
                                        <img class="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                            src={image1}alt="about Us image" />
                                    </div>
                <div className="w-full lg:w-1/2 flex flex-col space-y-6 text-center lg:text-start">
                    <p className="text-[#696B9A] text-lg lg:text-xl ">About Visa Portal</p>
                    <h1 className="text-2xl lg:text-4xl font-bold">
                        Welcome To Visa Portal <br />
                        Where Your Global Journey Begins Visa Portal
                    </h1>
                    <p className="text-sm lg:text-base w-3/4">
                        A Visa Portal is an online platform designed to streamline and simplify the visa application process for individuals and organizations. It provides features like visa application submission, document uploading, tracking application status, scheduling interviews, and payment processing.
                    </p>

                    <div className='flex flex-col md:flex-row items-center '>
                    <NavLink to='/about'
                    
                    className="btn bg-[#1e1e60] text-white px-6 font-semibold hover:bg-[#1e1e60] hover:scale-105 ease-in-out w-1/4"
                >
                    Learn More
                </NavLink>
                       <div>
                          
                       </div>
                    </div>
                </div>
            </div>

           
           
               
            
        </>
    );
};

export default AboutVisa;
