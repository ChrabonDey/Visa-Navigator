import React, { useState, useEffect, useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider"; // Assuming you have a context for user data

const VisaApplications = () => {
  const { user } = useContext(authContext); 
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState(""); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      if (!user?.email) return; // Exit if user is not logged in

      try {
        const response = await fetch(`http://localhost:4000/user-visas?email=${user.email}&searchParams=${search}`);
        const data = await response.json();
        if (response.ok) {
          setApplications(data);
        } else {
          console.error("Error fetching data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching applications:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchApplications();
  }, [search, user?.email]); // Run whenever the search or user email changes

  const handleSearchChange = (event) => {
    setSearch(event.target.value); // Update search query
  };

  if (loading) {
    return <p>Loading your visa applications...</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Visa Applications</h1>
      
      <div className="mb-4">
        {/* Search input field */}
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search by country name"
          className="p-2 border rounded"
        />
      </div>
      
      {applications.length === 0 ? (
        <p className="text-center">You have no visa applications.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((application) => (
            <div
              key={application._id}
              className="card shadow-lg rounded-lg p-4 bg-white"
            >
              <img
                src={application.visaDetails.countryImage}
                alt={application.visaDetails.countryName}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{application.visaDetails.countryName}</h2>
              <p><strong>Visa Type:</strong> {application.visaDetails.visaType}</p>
              <p><strong>Processing Time:</strong> {application.visaDetails.processingTime}</p>
              <p><strong>Fee:</strong> ${application.fee}</p>
              <p><strong>Validity:</strong> {application.visaDetails.validity}</p>
              <p><strong>Applied Date:</strong> {application.appliedDate}</p>
              <p><strong>Applicant's Name:</strong> {`${application.firstName} ${application.lastName}`}</p>
              <p><strong>Applicant's Email:</strong> {application.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VisaApplications;
