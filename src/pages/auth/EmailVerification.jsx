import React, { useState } from "react";
import bg from "../../assets/image/Bg.png";
import Nomomics from "../../assets/image/NOMOMICS_LOGO.svg";

const EmailVerification = () => {
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);
  const [isResending, setIsResending] = useState(false);

  const handleInputChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    if (value && index < verificationCode.length - 1) {
      const nextInput = document.querySelector(`input[data-index="${index + 1}"]`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      const prevInput = document.querySelector(`input[data-index="${index - 1}"]`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleContinue = () => {
    alert("Continue clicked");
  };

  const handleResendCode = () => {
    setIsResending(true);
    setTimeout(() => setIsResending(false), 2000);
  };

  const isCodeComplete = verificationCode.every((digit) => digit.length === 1);

  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center min-h-screen px-4 py-8 md:py-0">
        {/* Logo */}
        <div className="mb-6 md:ml-30">
          <img src={Nomomics} alt="nomomics logo" className="w-70 md:w-100" />
        </div>

        {/* Verification Card */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-6">
            {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <span className="text-2xl font-bold text-orange-600">N</span>
            </div> */}
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Verification Code
            </h2>
            <p className="text-gray-600 text-sm">
              We have sent the verification code to your<br />
              email address
            </p>
          </div>

          {/* Code Inputs */}
          <div className="flex justify-center gap-3 mb-6">
            {verificationCode.map((digit, index) => (
              <input
                key={index}
                data-index={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                placeholder="0"
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete="one-time-code"
              />
            ))}
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            disabled={!isCodeComplete}
            className={`w-full py-3 rounded-lg font-semibold text-white transition-colors ${
              isCodeComplete
                ? "bg-orange-500 hover:bg-orange-600 active:bg-orange-700"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Continue
          </button>

          {/* Resend */}
          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm mb-2">
              Didn't get the OTP?{" "}
              <button
                onClick={handleResendCode}
                disabled={isResending}
                className="text-orange-500 hover:text-orange-600 font-medium transition-colors"
              >
                {isResending ? "Sending..." : "Send again"}
              </button>
            </p>
          </div>

          {/* Terms */}
          <div className="text-center mt-6 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              By continuing, you agree to accept Nomomics{" "}
              <a href="#" className="text-orange-500 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-orange-500 hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
