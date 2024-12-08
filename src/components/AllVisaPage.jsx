import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const AllVisaPage = () => {
  const visas = useLoaderData();
  const navigate = useNavigate();

  
  const [selectedVisaType, setSelectedVisaType] = useState("");


  const filteredVisas = selectedVisaType
    ? visas.filter((visa) => visa.visaType === selectedVisaType)
    : visas;

  
  const visaTypes = [...new Set(visas.map((visa) => visa.visaType))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          All Visas
        </h1>

        {/* Dropdown menu for filtering visas */}
        <div className="mb-6 flex justify-center">
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
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredVisas.map((visa) => {
            const { _id, countryImage, countryName, visaType, processingTime, fee } = visa;

            return (
              <div key={_id} className="card bg-white shadow-lg rounded-lg">
                <figure>
                  <img
                    src={countryImage}
                    alt={countryName}
                    className="h-40 w-full object-cover rounded-t-lg"
                  />
                </figure>

                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800 mb-2">
                    {countryName}
                  </h2>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Visa Type:</strong> {visaType}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Processing Time:</strong> {processingTime}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Fee:</strong> ${fee}
                  </p>

                  <button
                    onClick={() => navigate(`/visa-details/${_id}`)}
                    className="btn btn-primary mt-4 w-full"
                  >
                    See Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllVisaPage;
