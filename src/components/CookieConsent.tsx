import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("nexa_cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("nexa_cookie_consent", "true");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("nexa_cookie_consent", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:p-6 z-[100] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-sm text-gray-600">
          <p>
            We use cookies to improve your experience on our site, analyze site
            traffic, and for our advertising purposes in compliance with GDPR. 
            By clicking "Accept", you agree to our use of cookies as described in our{" "}
            <Link to="/privacy-policy" className="text-indigo-600 hover:underline">
              Privacy Policy
            </Link>.
          </p>
        </div>
        <div className="flex gap-3 w-full md:w-auto shrink-0">
          <button
            onClick={declineCookies}
            className="flex-1 md:flex-none px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="flex-1 md:flex-none px-4 py-2 bg-indigo-600 rounded-lg text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
}
