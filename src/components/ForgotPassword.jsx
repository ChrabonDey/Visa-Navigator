import { useContext, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const ForgotPassword = () => {
  const { handleResetPassword } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const prefilledEmail = searchParams.get("email");
    if (prefilledEmail) {
      setEmail(prefilledEmail);
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    try {
      await handleResetPassword(email);
      alert("Password reset email sent! Redirecting to Gmail...");
      window.location.href = "https://mail.google.com";
    } catch (error) {
      
      alert(`Failed to send reset email: ${error.message}`);
    }
  };

  return (
    <div className="flex justify-center items-center my-10">
      <form onSubmit={handleSubmit}>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Forgot Password</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
