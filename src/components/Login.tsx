import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useAuthStore } from "../store/authStore"; // ✅ import the store

const Login = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "student" as "student" | "client",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:6001/${formData.userType}s/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Login failed");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("userType", data.userType);
      login(data.userType);

      navigate(data.userType === "student" ? "/student-dashboard" : "/client-dashboard");
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong during login");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOptionClick = (userType: "student" | "client") => {
    setFormData((prev) => ({ ...prev, userType }));
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="card max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-8">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          <div>
            <label htmlFor="userType" className="block text-sm font-medium text-gray-700">
              Login as
            </label>
            <div className="custom-dropdown" ref={dropdownRef}>
              <button
                type="button"
                className="custom-dropdown-button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>
                  {formData.userType.charAt(0).toUpperCase() + formData.userType.slice(1)}
                </span>
                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform ${
                    isDropdownOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <div className="custom-dropdown-menu">
                  <div
                    className={`custom-dropdown-option ${
                      formData.userType === "student" ? "selected" : ""
                    }`}
                    onClick={() => handleOptionClick("student")}
                  >
                    Student
                  </div>
                  <div
                    className={`custom-dropdown-option ${
                      formData.userType === "client" ? "selected" : ""
                    }`}
                    onClick={() => handleOptionClick("client")}
                  >
                    Client
                  </div>
                </div>
              )}
            </div>
          </div>
          <button type="submit" className="btn-primary w-full">
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-blue-600 hover:text-blue-800"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
