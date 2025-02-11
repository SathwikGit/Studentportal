import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 flex w-3/4 max-w-4xl border border-gray-300">
        {/* Left Side - Illustration */}
        <div className="w-1/2 hidden md:flex justify-center items-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQHSNGa3bEDqqw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702760187501?e=1744848000&v=beta&t=8h9RGIDUiKDsJpyPbCDLQc0EFPTlfMU9v91NjfAg178"
            alt="Illustration"
            className="w-3/4 rounded-lg border border-gray-300 shadow-md"
          />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-center text-3xl font-semibold mb-6 text-gray-800">
            Sign In
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-200"
            >
              LOGIN
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-red-500 font-semibold hover:underline"
              >
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
