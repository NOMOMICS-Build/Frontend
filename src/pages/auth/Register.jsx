import React, { useState } from "react";
import bg from "../../assets/image/Bg.png";
import Nomomics from "../../assets/image/NOMOMICS_LOGO.svg";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
      receiveOffers: false,
      ageVerification: false,
    });
  
    // State for form validation errors
    const [errors, setErrors] = useState({});
  
    // State for password visibility toggles
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
    // Handle input changes
    const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
  
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
  
      // Clear error when user starts typing
      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: undefined,
        }));
      }
    };
  
    // Email validation function
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    // Form validation function
    const validateForm = () => {
      const newErrors = {};
  
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Full name is required";
      }
  
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!isValidEmail(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
  
      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters long";
      }
  
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
  
      if (!formData.agreeToTerms) {
        newErrors.agreeToTerms =
          "You must agree to the Terms of Service and Privacy Policy";
      }
  
      return newErrors;
    };
  
    // Form submission handler
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const validationErrors = validateForm();
  
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
  
      // Form is valid - you would typically send this to your backend
      console.log("Form submitted:", formData);
      alert("Account created successfully!");
    };
  return (
      <div
       className="bg-cover bg-center min-h-screen"
       style={{ backgroundImage: `url(${bg})` }}
     >
       {/* Wrapper */}
       <div className="flex flex-col md:flex-row justify-center md:justify-between items-center min-h-screen px-4 py-8 md:py-0">
         {/* Logo */}
         <div className="md:mb-0 md:mr-10">
           <img src={Nomomics} alt="nomomics logo" className="md:block md:w-100 md:ml-30" />
         </div>
   
         {/* Form Container */}
         <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-xl overflow-y-auto max-h-[90vh]">
           {/* Header */}
           <div className="text-center mb-10">
               {/* <img src={Nomomics} alt="nomomics logo" className="w-40 md:w-100" /> */}
     
             <h2 className="text-2xl font-bold text-gray-800 mb-2">
               Create your account
             </h2>
             <p className="text-gray-600 text-sm">
               Create your personal account now to access all educational benefits we have to offer you 
             </p>
           </div>
   
             {/* Form */}
               <div className="space-y-6">

                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">
                     Full Name
                   </label>
                   <input
                     type="text"
                     name="fullName"
                     value={formData.fullName}
                     onChange={handleInputChange}
                     placeholder="Enter your full name"
                     className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                       errors.fullName ? "border-red-500" : "border-gray-300"
                     }`}
                   />
                   {errors.fullName && (
                     <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                   )}
                 </div>
   
                 {/* Email */}
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">
                     Email
                   </label>
                   <input
                     type="email"
                     name="email"
                     value={formData.email}
                     onChange={handleInputChange}
                     placeholder="Enter your email"
                     className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                       errors.email ? "border-red-500" : "border-gray-300"
                     }`}
                   />
                   {errors.email && (
                     <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                   )}
                 </div>
   
                 {/* Password */}
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">
                     Password
                   </label>
                   <div className="relative">
                     <input
                       type={showPassword ? "text" : "password"}
                       name="password"
                       value={formData.password}
                       onChange={handleInputChange}
                       placeholder="Enter your password"
                       className={`w-full px-3 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                         errors.password ? "border-red-500" : "border-gray-300"
                       }`}
                     />
                     <button
                       type="button"
                       onClick={() => setShowPassword(!showPassword)}
                       className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                     >
                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                     </button>
                   </div>
                   {errors.password && (
                     <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                   )}
                   <p className="text-xs text-gray-500 mt-1">
                     Password must contain letters, numbers and symbols
                   </p>
                 </div>
   
                 {/* Submit Button */}
                 <button
                   type="button"
                   onClick={handleSubmit}
                   className="w-full bg-orange-400 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors shadow-lg"
                 >
                   Sign Up
                 </button>
               </div>
               {/* fotter */}
               <div className="mt-8 text-center">
        <p className="text-xs text-gray-500">
          By continuing, you agree to accept Nomomics{' '}
          <a href="#" className="text-orange-500 hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-orange-500 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>

         </div>
       </div>
     </div>
  )
}

export default Register