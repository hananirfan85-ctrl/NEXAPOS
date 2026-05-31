import React, { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

export function OnlineOnlyWrap({ children }: { children: React.ReactNode }) {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (isOffline) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden p-6 animate-in fade-in zoom-in duration-200">
          <div className="flex justify-center mb-4">
            <div className="bg-yellow-100 p-4 rounded-full text-yellow-600">
              <AlertTriangle size={32} />
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
            You are offline
          </h3>
          <p className="text-gray-500 text-sm text-center mb-6">
            You cannot be able to view this page until you are online. Please connect to the internet.
          </p>
          <div className="flex justify-center gap-3">
            <Link
              to="/pos"
              className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-sm transition-all text-center"
            >
              Go to POS (Offline Mode)
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
