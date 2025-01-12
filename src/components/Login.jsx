import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import img1 from "../assets/rb_51491 (1).png";

const Login = () => {
  const { handleLogin } = useContext(authContext);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setIsLoading(true);

    try {
      await handleLogin(email, password);
      navigate(location.state?.from || "/");
    } catch (err) {
      setError(err.message || "An unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-16">
      <div className="flex md:flex-row flex-col bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div className="flex-1 flex items-center justify-center">
          <img src={img1} alt="" className="f" />
        </div>

        {/* Right Side: Form Section */}
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-[#696B9A] text-center">
          Login
          </h2>
          <p className="text-xl text-black text-center">Welcome back!</p>
          <form onSubmit={handleSubmit} className="mt-6">
            {/* Email Input */}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <NavLink
                  to={`/forgot-password?email=${encodeURIComponent(email)}`}
                  className="text-xs text-gray-500"
                >
                  Forgot Password?
                </NavLink>
              </div>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                required
              />
            </div>

            {/* Login Button */}
            <div className="mt-8">
              <button
                type="submit"
                className={`bg-[#1e1e60] text-white font-bold py-2 px-4 w-full rounded  ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 mt-2 text-center">
              {error.includes("/") ? "Invalid email or password." : error}
            </p>
          )}

          {/* Register Section */}
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <NavLink to="/register" className="text-xs text-gray-500 uppercase">
              Or sign up
            </NavLink>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
