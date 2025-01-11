import React from 'react';
import CountUp from 'react-countup';
import '../App.css';

const Count = () => {
    return (
        <div className="flex flex-col lg:flex-row bg-[#696B9A] text-white">
            {/* Metrics Section */}
            <div className="flex flex-col lg:flex-row gap-4 p-4 lg:w-3/4">
                {/* Clients Worked With */}
                <div className="flex flex-col items-center justify-center p-6 bg-[#696B9A] border-b lg:border-r lg:border-b-0 border-gray-300">
                    <div>
                        <CountUp delay={2} end={650} className="font-bold text-6xl" />
                        <span className="text-6xl">+</span>
                    </div>
                    <p className="text-center mt-2">We Have Worked With Clients</p>
                </div>

                {/* Successful Visa Process Rate */}
                <div className="flex flex-col items-center justify-center p-6 bg-[#696B9A] border-b lg:border-r lg:border-b-0 border-gray-300">
                    <div>
                        <CountUp delay={2} end={99} className="font-bold text-6xl" />
                        <span className="text-6xl">%</span>
                    </div>
                    <p className="text-center mt-2">Successful Visa Process Rate</p>
                </div>

                {/* Application Approval Time */}
                <div className="flex flex-col items-center justify-center p-6 bg-[#696B9A]">
                    <div>
                        <CountUp delay={2} end={48} className="font-bold text-6xl" />
                        <span className="text-6xl font-bold">hrs</span>
                    </div>
                    <p className="text-center mt-2">Application Approval Time</p>
                </div>
            </div>

            {/* Information Section */}
            <div className="flex flex-col bg-[#1e1e60] text-white lg:w-2/4 p-6">
                <h1 className="font-semibold text-3xl mb-4">Visa & Immigration Services</h1>
                <p className="text-base leading-6">
                    Visa requirements can vary widely based on the country you're applying to, so always consult official government sources.
                </p>
            </div>
        </div>
    );
};

export default Count;
