import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Fade, Zoom, Slide } from "react-awesome-reveal";


const LatestVisa = () => {
  const visas = useLoaderData() || [];
  const navigate = useNavigate();

  const sortedVisas = [...visas].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <Zoom triggerOnce>
          <p className="text-xl text-[#696B9A] font-normal mb-3 text-center">
            Latest Visas
          </p>

          <h1 className="text-4xl text-black font-extrabold mb-14 w-2/4 mx-auto  text-center">
            Visa Portal Gives You a Chance To Fulfil Your Dreams. 
          </h1>

        </Zoom>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedVisas.slice(0, 8).map((visa) => {
            const {
              _id,
              countryImage,
              countryName,
              visaType,
              processingTime,
              fee,
              validity,
              applicationMethod,
            } = visa;

            return (
              <Fade key={_id} bottom triggerOnce>
                <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200">
                  {/* Image Section */}
                  <div className="relative h-40 overflow-hidden rounded-t-lg">
                    <img
                      src={countryImage}
                      alt={countryName}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-4">
                    <h6 className="mb-2 text-slate-800 text-lg font-semibold">
                      {countryName}
                    </h6>
                    <p className="text-slate-600 text-sm leading-normal mb-1">
                      <strong>Visa Type:</strong> {visaType}
                    </p>
                    <p className="text-slate-600 text-sm leading-normal mb-1">
                      <strong>Processing Time:</strong> {processingTime}
                    </p>
                    <p className="text-slate-600 text-sm leading-normal mb-1">
                      <strong>Fee:</strong> ${fee}
                    </p>
                  </div>

                  {/* Button Section */}
                  <div className="px-4 pb-4">
                    <Slide direction="up" triggerOnce>
                      <button
                        onClick={() => navigate(`/visa-details/${_id}`)}
                        className="w-full rounded-md btn bg-[#1e1e60] text-white px-6 font-semibold hover:bg-[#1e1e60] hover:scale-105 ease-in-out"
                      >
                        See Details
                      </button>
                    </Slide>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>

        {/* See All Button */}
        <div className="mt-10 flex justify-center">
          <Zoom triggerOnce>
            <button
              onClick={() => navigate("/all-visas")}
              className=" py-2 btn bg-[#1e1e60] text-white px-6 font-semibold hover:bg-[#1e1e60] hover:scale-105 ease-in-out"
            >
              See All Visas
            </button>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default LatestVisa;
