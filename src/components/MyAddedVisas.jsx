import React, { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const MyAddedVisas = () => {
  const [visas, setVisas] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVisa, setCurrentVisa] = useState(null);
  const navigate = useNavigate();

  const { user, loading } = useContext(authContext);

  useEffect(() => {
    if (loading) return;

    if (!user) {
      navigate("/login");
    } else {
      fetch(`https://visa-navigator-server-eta.vercel.app/user-visas?email=${user.email}`)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch visas.");
          return res.json();
        })
        .then((data) => setVisas(data))
        .catch(() => Swal.fire("Error", "Failed to fetch visas.", "error"));
    }
  }, [user, loading, navigate]);

  const handleDelete = (visaId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://visa-navigator-server-eta.vercel.app/delete-visa/${visaId}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) throw new Error("Failed to delete visa.");
            return res.json();
          })
          .then(() => {
            Swal.fire("Deleted!", "Visa has been deleted.", "success");
            setVisas(visas.filter((visa) => visa._id !== visaId));
          })
          .catch(() => Swal.fire("Error", "Failed to delete visa.", "error"));
      }
    });
  };

  const handleOpenUpdate = (visa) => {
    setCurrentVisa(visa);
    setIsModalOpen(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedVisa = {
      ...currentVisa,
      country: form.country.value,
      visaType: form.visaType.value,
      processingTime: form.processingTime.value,
      fee: form.fee.value,
      validity: form.validity.value,
      applicationMethod: form.applicationMethod.value,
    };

    fetch(`https://visa-navigator-server-eta.vercel.app/update-visa/${currentVisa._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedVisa),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update visa.");
        return res.json();
      })
      .then(() => {
        Swal.fire("Success", "Visa updated!", "success");
        setVisas(visas.map((visa) => (visa._id === currentVisa._id ? updatedVisa : visa)));
        setIsModalOpen(false);
      })
      .catch(() => Swal.fire("Error", "Failed to update visa.", "error"));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 py-10">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">My Added Visas</h1>
        {visas.length === 0 ? (
          <p className="text-gray-500 text-center text-lg">You haven't added any visas yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visas.map((visa) => (
              <div key={visa._id} className="card bg-white shadow-xl rounded-lg overflow-hidden">
                <img
                  src={visa.countryImage}
                  alt={visa.country}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">{visa.country}</h2>
                  <p className="text-sm text-gray-600">
                    <strong>Visa Type:</strong> {visa.visaType}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Processing Time:</strong> {visa.processingTime}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Fee:</strong> ${visa.fee}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Validity:</strong> {visa.validity}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Application Method:</strong> {visa.applicationMethod}
                  </p>
                  <div className="flex justify-between mt-4">
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      onClick={() => handleOpenUpdate(visa)}
                    >
                      Update
                    </button>
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      onClick={() => handleDelete(visa._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {isModalOpen && currentVisa && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">Update Visa</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <input
                  type="text"
                  name="country"
                  defaultValue={currentVisa.country}
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Visa Type</label>
                <input
                  type="text"
                  name="visaType"
                  defaultValue={currentVisa.visaType}
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Processing Time</label>
                <input
                  type="text"
                  name="processingTime"
                  defaultValue={currentVisa.processingTime}
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Fee</label>
                <input
                  type="number"
                  name="fee"
                  defaultValue={currentVisa.fee}
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Validity</label>
                <input
                  type="text"
                  name="validity"
                  defaultValue={currentVisa.validity}
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Application Method</label>
                <input
                  type="text"
                  name="applicationMethod"
                  defaultValue={currentVisa.applicationMethod}
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex gap-4 mt-6">
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full">
                  Update
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 w-full"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAddedVisas;
