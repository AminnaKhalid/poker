import React, { useState } from "react";
import loginbg from "./assets/loginbg.png";
import loginlogo from "./assets/loginlogo.png";
import lock from "./assets/lock.png";
import sms from "./assets/sms.png";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${loginbg})` }}
    >
      <div className="relative z-10 w-full max-w-xl px-6 py-8">
        <div className="flex flex-col items-center mb-3">
          <img
            src={loginlogo}
            alt="Company Logo"
            className="w-24 h-24 mb-2 object-cover"
          />
          <span className="text-black text-3xl font-medium">
            Raising the <span className="text-[#D35C57]">stakes</span> in hiring
          </span>
        </div>

        <div className="rounded-xl shadow-2xl p-8 bg-[#FFEAEA]">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Welcome</h1>
            <p className="text-gray-800">Sign in with your Gmail</p>
          </div>

          <form className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src={sms} alt="Email" className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:border-transparent bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img
                  src={lock}
                  alt="Password"
                  className="h-5 w-5 text-gray-400"
                />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:border-transparent bg-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-center"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>

            <Link to="/dashboard">
              <button
                type="submit"
                className="w-full bg-[#D35C57] hover:bg-[#c04a45] text-white font-medium py-3 px-4 rounded-lg transition duration-200"
              >
                Login
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
