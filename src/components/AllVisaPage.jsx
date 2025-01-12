import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

const AllVisaPage = () => {
  const visas = useLoaderData();
  const navigate = useNavigate();

  const [selectedVisaType, setSelectedVisaType] = useState("");
  const [sortBy, setSortBy] = useState("");

  // Filter visas by selected type
  const filteredVisas = selectedVisaType
    ? visas.filter((visa) => visa.visaType === selectedVisaType)
    : visas;

  // Sort visas based on the selected criterion
  const sortedVisas = [...filteredVisas].sort((a, b) => {
    if (sortBy === "fee") return a.fee - b.fee;
    if (sortBy === "processingTime") return a.processingTime.localeCompare(b.processingTime);
    if (sortBy === "createdAt") return new Date(b.createdAt) - new Date(a.createdAt);
    return 0;
  });

  const visaTypes = [...new Set(visas.map((visa) => visa.visaType))];

  return (
    <div className="min-h-screen  py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-[#696B9A] mb-8 text-center">
          All Visas
        </h1>

        {/* Filter & Sort Controls */}
        <div className="flex justify-center gap-4 mb-6">
          <select
            value={selectedVisaType}
            onChange={(e) => setSelectedVisaType(e.target.value)}
            className="select select-bordered w-full max-w-xs"
          >
            <option value="">Select Visa Type</option>
            {visaTypes.map((visaType) => (
              <option key={visaType} value={visaType}>
                {visaType}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select select-bordered w-full max-w-xs"
          >
            <option value="">Sort By</option>
            <option value="fee">Fee</option>
            <option value="processingTime">Processing Time</option>
            <option value="createdAt">Newest First</option>
          </select>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedVisas.map((visa) => {
            const { _id, countryImage, countryName, visaType, processingTime, fee } = visa;

            return (
              <Fade key={_id} triggerOnce>
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
      </div>
    </div>
  );
};

export default AllVisaPage;
