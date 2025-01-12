import React from "react";
import Swal from "sweetalert2";

const AddVisa = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const countryImage = form.countryImage.value;
    const countryName = form.countryName.value;
    const processingTime = form.processingTime.value;
    const description = form.description.value;
    const visaType = form.visaType.value;
    const ageRestriction = parseInt(form.ageRestriction.value, 10);
    const fee = parseFloat(form.fee.value);
    const validity = form.validity.value;
    const applicationMethod = form.applicationMethod.value;

    
    const requiredDocuments = Array.from(
      form.querySelectorAll('input[name="requiredDocuments"]:checked')
    ).map((checkbox) => checkbox.value);

    const visa = { countryImage,countryName,visaType,processingTime,requiredDocuments,description,ageRestriction,fee,validity,applicationMethod};

    console.log(visa);

    fetch("https://visa-navigator-server-eta.vercel.app/add-visa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(visa),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Visa added successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error",
          text: "Something went wrong!",
          icon: "error",
          confirmButtonText: "Retry",
        });
      });
  };

  return (
    <div className="min-h-screen my-16 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-4xl font-bold text-[#696B9A] mb-8 text-center">Add Visa</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Country Image (URL)</label>
            <input
              type="url"
              name="countryImage"
              placeholder="Enter image URL"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Country Name</label>
            <input
              type="text"
              name="countryName"
              placeholder="Enter country name"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Visa Type</label>
            <select name="visaType" className="select select-bordered w-full mt-2" required>
              <option value="Tourist visa">Tourist visa</option>
              <option value="Student visa">Student visa</option>
              <option value="Official visa">Official visa</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Processing Time</label>
            <input
              type="text"
              name="processingTime"
              placeholder="Enter processing time (e.g., 10-15 days)"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Required Documents</label>
            <div className="mt-2 space-y-2">
              {["Valid passport", "Visa application form", "Recent passport-sized photograph"].map((doc) => (
                <label key={doc} className="flex items-center space-x-2">
                  <input type="checkbox" name="requiredDocuments" value={doc} className="checkbox" />
                  <span>{doc}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              placeholder="Enter description"
              className="textarea textarea-bordered w-full mt-2"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Age Restriction</label>
            <input
              type="number"
              name="ageRestriction"
              placeholder="Enter age restriction"
              className="input input-bordered w-full mt-2"
              min="0"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Fee</label>
            <input
              type="number"
              name="fee"
              placeholder="Enter fee amount"
              className="input input-bordered w-full mt-2"
              min="0"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Validity</label>
            <input
              type="text"
              name="validity"
              placeholder="Enter validity period (e.g., 6 months)"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Application Method</label>
            <input
              type="text"
              name="applicationMethod"
              placeholder="Enter application method (e.g., Online, Embassy)"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>
          <button type="submit" className=" btn bg-[#1e1e60] text-white px-6 font-semibold hover:bg-[#1e1e60] hover:scale-105 ease-in-out w-full">
            Add Visa
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVisa;
