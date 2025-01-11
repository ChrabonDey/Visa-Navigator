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
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <img src={countryImage} alt={countryName} className="w-full h-64 object-cover rounded-t-lg mb-6" />
        <h1 className="text-3xl font-bold text-blue-600 mb-4">{countryName}</h1>
        <p><strong>Visa Type:</strong> {visaType}</p>
        <p><strong>Processing Time:</strong> {processingTime}</p>
        <p><strong>Fee:</strong> ${fee}</p>
        <p><strong>Validity:</strong> {validity}</p>
        <p><strong>Application Method:</strong> {applicationMethod}</p>
        <p><strong>Age Restriction:</strong> {ageRestriction}+</p>
        <p className="mt-4">{description}</p>
        <ul className="list-disc ml-8 mt-4">
          {requiredDocuments.map((doc, index) => (
            <li key={index}>{doc}</li>
          ))}
        </ul>
        <button
          className="btn btn-primary mt-6"
          onClick={() => setIsModalOpen(true)}
        >
          Apply for Visa
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Visa Application</h2>
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
              <button type="submit" className="btn btn-primary w-full">
                Apply
              </button>
              <button
                type="button"
                className="btn btn-secondary w-full mt-2"
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
