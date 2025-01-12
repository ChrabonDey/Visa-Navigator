import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import img1 from "../assets/rb_51491 (1).png";

const Register = () => {
  const { handleRegister, handleGoogleLogin } = useContext(authContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters long and include both uppercase and lowercase letters."
      );
      return;
    }

    handleRegister(email, password)
      .then(() => {
        navigate(location.state?.from || "/");
      })
      .catch((err) => {
        setError(err.message || "An unknown error occurred");
      });
  };

  const handleGoogleLoginClick = () => {
    handleGoogleLogin()
      .then(() => {
        navigate(location.state?.from || "/");
      })
      .catch((err) => {
        setError(err.message || "Google login failed. Please try again.");
      });
  };

  return (
    <div className="py-16">
      <div className="flex md:flex-row flex-col bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div className="flex-1 flex items-center justify-center">
          <img src={img1} alt="" className="w-full " />
        </div>

        {/* Right Side: Form Section */}
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-[#696B9A] text-center">Register</h2>
          <p className="text-xl text-black text-center">Create a new account</p>
          <form onSubmit={handleSubmit} className="mt-6">
            {/* Name Input */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                required
              />
            </div>

            {/* Photo URL Input */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Photo URL</label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                required
              />
            </div>

            {/* Register Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="bg-[#1e1e60] text-white font-bold py-2 px-4 w-full rounded"
              >
                Register
              </button>
            </div>
          </form>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 mt-2 text-center">
              {error.includes("/") ? "Invalid input." : error}
            </p>
          )}

          {/* Google Login Section */}
          <div className="mt-4">
            <button
              type="button"
              onClick={handleGoogleLoginClick}
              className="bg-[#4285F4] text-white font-bold py-2 px-4 w-full rounded"
            >
              Sign up with Google
            </button>
          </div>

          {/* Already have an account section */}
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <NavLink to="/login" className="text-xs text-gray-500 uppercase">
              Already have an account? Log in
            </NavLink>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
