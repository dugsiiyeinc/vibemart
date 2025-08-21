import { useState } from "react";
import { RiUserLine } from "react-icons/ri";
import { RiLoginCircleLine } from "react-icons/ri";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  });
  const { dispatch } = useAuth();
  const navigator = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN", payload: formData });
    navigator("/");
  };

  return (
    <div className="mx-auto max-w-md px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-lg bg-white p-8 shadow-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-[#feba17]">
            <RiUserLine className="text-2xl text-white" />
          </div>
          <h1 className="mb-2 text-2xl font-bold text-[#363636]">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-gray-600">
            {isLogin ? "Sign in to your account" : "Join VibeMart today"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="w-full">
            <label className="mb-1 block text-sm font-medium text-[#363636]">
              Full Name
              <span className="ml-1 text-[#ee2a7b]">*</span>
            </label>
            <input
              value={formData.fullname}
              onChange={(e) =>
                setFormData({ ...formData, fullname: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm transition-colors outline-none focus:border-[#feba17] focus:ring-2 focus:ring-[#feba17]"
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          <div className="w-full">
            <label className="mb-1 block text-sm font-medium text-[#363636]">
              Email Address
              <span className="ml-1 text-[#ee2a7b]">*</span>
            </label>
            <input
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm transition-colors outline-none focus:border-[#feba17] focus:ring-2 focus:ring-[#feba17]"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          {!isLogin && (
            <>
              <div className="w-full">
                <label className="mb-1 block text-sm font-medium text-[#363636]">
                  Phone Number
                  <span className="ml-1 text-[#ee2a7b]">*</span>
                </label>
                <input
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm transition-colors outline-none focus:border-[#feba17] focus:ring-2 focus:ring-[#feba17]"
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="w-full">
                <label className="mb-1 block text-sm font-medium text-[#363636]">
                  Address
                  <span className="ml-1 text-[#ee2a7b]">*</span>
                </label>
                <input
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm transition-colors outline-none focus:border-[#feba17] focus:ring-2 focus:ring-[#feba17]"
                  type="text"
                  placeholder="Enter your address"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="w-full">
                  <label className="mb-1 block text-sm font-medium text-[#363636]">
                    City
                    <span className="ml-1 text-[#ee2a7b]">*</span>
                  </label>
                  <input
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm transition-colors outline-none focus:border-[#feba17] focus:ring-2 focus:ring-[#feba17]"
                    type="text"
                    placeholder="City"
                  />
                </div>

                <div className="w-full">
                  <label className="mb-1 block text-sm font-medium text-[#363636]">
                    ZIP Code
                    <span className="ml-1 text-[#ee2a7b]">*</span>
                  </label>
                  <input
                    value={formData.zipCode}
                    onChange={(e) =>
                      setFormData({ ...formData, zipCode: e.target.value })
                    }
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm transition-colors outline-none focus:border-[#feba17] focus:ring-2 focus:ring-[#feba17]"
                    type="text"
                    placeholder="ZIP"
                  />
                </div>
              </div>
            </>
          )}

          <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#feba17] px-6 py-3 text-lg font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-[#e6a615]">
            {isLogin && <RiLoginCircleLine />}
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="cursor-pointer font-medium text-[#feba17] hover:text-[#e6a615]"
          >
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Sign in"}
          </button>
        </div>

        <div className="mt-6 text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Note</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            This is a demo authentication system. Your information is stored
            locally in your browser.
          </p>
        </div>
      </div>
    </div>
  );
}
