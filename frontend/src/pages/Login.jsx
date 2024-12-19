import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {login} from "../services/authService";
import {jwtDecode} from "jwt-decode";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [err, setErr] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({email, password});
      const token = localStorage.getItem("token"); // Retrieve the token from local storage

      try {
        const decoded = jwtDecode(token);
        if (decoded.roles[0] == "ADMIN") {
          navigate("/admin");
        } else if (decoded.roles[0] == "STUDENT") {
          navigate("/student");
        } else if (decoded.roles[0] == "PARENT") {
          navigate("/parent");
        }
        console.log(decoded);
      } catch (error) {
        console.error("Error decoding JWT:", error);
      }
    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-[800px] bg-white rounded-lg shadow-lg overflow-hidden flex">
        {/* Left Side - Image and Welcome Text */}
        <div className="w-1/2 bg-purple-200 relative">
          <img
            src="https://media.istockphoto.com/id/1267593738/photo/successful-partnership.webp?a=1&b=1&s=612x612&w=0&k=20&c=YUdv6uSEqy8acwLNp1aZ_40_VdEqFa9OPCxyvXDMYXs="
            alt="Login"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center  px-8 text-center">
            <h2 className="text-3xl font-bold">GetStarted</h2>
            <p className="mt-2">
              Join us today and start exploring new career and educational
              opportunities.
            </p>
            <Link
              to="/signup"
              className="mt-6 px-6 py-2 bg-white text-purple-600 rounded-md font-semibold hover:bg-gray-100"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-4xl font-semibold text-purple-600 mb-4">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleEmail}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            {/* <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required
            /> */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={password}
                onChange={handlePassword}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {/* Forgot Password Link */}
            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-purple-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-purple-600  rounded-md font-semibold hover:bg-purple-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
