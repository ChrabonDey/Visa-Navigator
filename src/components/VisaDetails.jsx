import React, { useState, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../AuthProvider/AuthProvider";

const VisaDetails = () => {
  const { user } = useContext(authContext);
  const visa = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    countryImage,
    countryName,
    visaType,
    processingTime,
    requiredDocuments,
    description,
    ageRestriction,
    fee,
    validity,
    applicationMethod,
  } = visa;

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;

    const applicationData = {
      email: user?.email,
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      appliedDate: new Date().toISOString().split("T")[0],
      fee,
      visaDetails: {
        countryImage,
        countryName,
        visaType,
        processingTime,
        requiredDocuments,
        description,
        ageRestriction,
        validity,
        applicationMethod,
      },
    };

    fetch("https://visa-navigator-server-eta.vercel.app/apply-visa", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(applicationData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire("Success", "Application submitted!", "success");
          setIsModalOpen(false);
        } else {
          Swal.fire("Error", "Failed to submit application.", "error");
        }
      })
      .catch((error) => {
        console.error("Error submitting application:", error);
        Swal.fire("Error", "An unexpected error occurred.", "error");
      });
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Image Section */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <img
              src={countryImage}
              alt={countryName}
              className="w-full h-auto rounded-lg shadow-md mb-4"
            />
          
          </div>

          {/* Visa Details Section */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-2">{countryName}</h2>
            <p className="text-gray-600 mb-4">{visaType}</p>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">${fee}</span>
              <span className="text-gray-500 line-through">${fee}</span>
            </div>
            <div className="mb-4">
              <span className="text-xl">Processing Time: </span>
              {processingTime}
            </div>
            <div className="mb-4">
              <span className="text-xl">Validity: </span>
              {validity}
            </div>
            <div className="mb-4">
              <span className="text-xl">Age Restriction: </span>
              {ageRestriction}+
            </div>
            <p className="text-gray-700 mb-6">{description}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Required Documents:</h3>
              <ul className="list-disc ml-8">
                {requiredDocuments.map((doc, index) => (
                  <li key={index}>{doc}</li>
                ))}
              </ul>
            </div>

            {/* Apply Button */}
            <button
              className="btn bg-[#1e1e60] text-white px-6 font-semibold"
              onClick={() => setIsModalOpen(true)}
            >
              Apply for Visa
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Application Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-[#696B9A] mb-4">Visa Application</h2>
            <form onSubmit={handleApply} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={user?.email || ""}
                  disabled
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Applied Date</label>
                <input
                  type="text"
                  value={new Date().toISOString().split("T")[0]}
                  disabled
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Fee</label>
                <input
                  type="text"
                  value={`$${fee}`}
                  disabled
                  className="input input-bordered w-full"
                />
              </div>
              <button type="submit" className="btn bg-[#1e1e60] text-white px-6 font-semibold w-full">
                Apply
              </button>
              <button
                type="button"
                className="btn  w-full mt-2"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaDetails;
