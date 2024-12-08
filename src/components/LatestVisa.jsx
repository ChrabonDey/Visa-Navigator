import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Fade, Zoom, Slide } from "react-awesome-reveal";

const LatestVisa = () => {
  const visas = useLoaderData() || []; 
  const navigate = useNavigate();


  const sortedVisas = [...visas].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 py-10">
      <div className="max-w-7xl mx-auto">
       
        <Zoom triggerOnce>
          <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">
            Latest Visas
          </h1>
        </Zoom>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {sortedVisas.slice(0, 6).map((visa) => {
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
                <div className="card bg-white shadow-lg rounded-lg">
                 
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
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>Validity:</strong> {validity}
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>Application Method:</strong> {applicationMethod}
                    </p>

                   
                    <Slide direction="up" triggerOnce>
                      <button
                        onClick={() => navigate(`/visa-details/${_id}`)}
                        className="btn btn-primary mt-4 w-full"
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

      
        <div className="mt-10 flex justify-center">
          <Zoom triggerOnce>
            <button
              onClick={() => navigate("/all-visas")}
              className="btn btn-secondary px-6 py-2 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
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
