import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, Download, HelpCircle } from "lucide-react";
import { usePwaInstall } from "../../hooks/usePwaInstall";

export function PublicNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { deferredPrompt, initiateInstall } = usePwaInstall();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0c]/80 backdrop-blur-xl border-b border-white/5 py-2 shadow-2xl"
          : "bg-transparent py-4"
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link
            to="/home"
            className="flex items-center gap-3 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
            aria-label="NEXA POS Home"
          >
            <img
              src="/logo.png"
              alt="NEXA POS Logo"
              className="h-10 w-auto bg-white p-1 rounded-lg"
              width="40"
              height="40"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/about"
              className="text-sm font-sans font-medium text-gray-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md px-2 py-1"
            >
              About
            </Link>
            <Link
              to="/demo"
              className="text-sm font-sans font-medium text-gray-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md px-2 py-1"
            >
              Demo
            </Link>
            <div className="relative group">
              <button
                className="text-sm font-sans font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md px-2 py-1"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Features <ChevronDown size={14} aria-hidden="true" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-[#111111] border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden text-sm">
                <Link
                  to="/features/billing"
                  className="block px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-white transition-colors border-b border-white/5 focus:bg-white/5 outline-none"
                >
                  Fast & Easy Billing
                </Link>
                <Link
                  to="/features/inventory"
                  className="block px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-white transition-colors border-b border-white/5 focus:bg-white/5 outline-none"
                >
                  Real-Time Inventory
                </Link>
                <Link
                  to="/features/reports"
                  className="block px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-white transition-colors border-b border-white/5 focus:bg-white/5 outline-none"
                >
                  Advanced Reports
                </Link>
                <Link
                  to="/features/crm"
                  className="block px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-white transition-colors border-b border-white/5 focus:bg-white/5 outline-none"
                >
                  CRM & Ledgers
                </Link>
                <Link
                  to="/features/cashflow"
                  className="block px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-white transition-colors border-b border-white/5 focus:bg-white/5 outline-none"
                >
                  Cash Flow Insights
                </Link>
                <Link
                  to="/features/users"
                  className="block px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-white transition-colors focus:bg-white/5 outline-none"
                >
                  Multi-User Access
                </Link>
              </div>
            </div>
            <Link
              to="/pricing"
              className="text-sm font-sans font-medium text-gray-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md px-2 py-1"
            >
              Pricing
            </Link>
            <Link
              to="/help"
              className="text-sm font-sans font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md px-2 py-1"
            >
              <HelpCircle size={14} aria-hidden="true" />
              Help Center
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm font-sans font-medium text-gray-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md px-3 py-2"
            >
              Sign In
            </Link>
            {deferredPrompt && (
              <button
                onClick={initiateInstall}
                className="text-sm font-sans font-medium text-white border border-white/20 hover:bg-white/10 px-4 py-2 rounded-lg transition-all flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                aria-label="Install App"
              >
                <Download size={16} aria-hidden="true" /> Install PWA
              </button>
            )}
            <Link
              to="/signup"
              className="text-sm font-sans font-bold text-white bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-lg transition-all shadow-lg shadow-indigo-600/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            {deferredPrompt && (
              <button
                onClick={initiateInstall}
                className="text-gray-300 p-2 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md"
                aria-label="Install App"
              >
                <Download size={20} aria-hidden="true" />
              </button>
            )}
            <Link
              to="/login"
              className="text-sm font-medium text-indigo-400 hover:text-indigo-300 focus:outline-none px-2 py-1"
            >
              Login
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md"
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0c] border-b border-white/10 px-4 pt-2 pb-6 space-y-4 shadow-xl">
          <Link
            to="/about"
            className="block text-base font-medium text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/demo"
            className="block text-base font-medium text-cyan-400 hover:text-cyan-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Demo Video
          </Link>
          <div className="block text-base font-medium text-gray-500 mt-4 mb-2">
            Features
          </div>
          <div className="pl-4 border-l border-white/10 space-y-4">
            <Link
              to="/features/billing"
              className="block text-sm text-gray-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Fast & Easy Billing
            </Link>
            <Link
              to="/features/inventory"
              className="block text-sm text-gray-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Real-Time Inventory
            </Link>
            <Link
              to="/features/reports"
              className="block text-sm text-gray-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Advanced Reports
            </Link>
            <Link
              to="/features/crm"
              className="block text-sm text-gray-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CRM & Ledgers
            </Link>
            <Link
              to="/features/cashflow"
              className="block text-sm text-gray-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cash Flow Insights
            </Link>
            <Link
              to="/features/users"
              className="block text-sm text-gray-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Multi-User Access
            </Link>
          </div>
          <Link
            to="/pricing"
            className="block text-base font-medium text-gray-300 hover:text-white pt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            to="/help"
            className="block text-base font-medium text-indigo-400 hover:text-indigo-300 pt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Help Center
          </Link>
          <div className="pt-4 mt-2 border-t border-white/10">
            <Link
              to="/signup"
              className="w-full block text-center text-sm font-sans font-bold text-white bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-lg transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
