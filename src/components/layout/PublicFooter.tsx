import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Instagram } from "lucide-react";

export function PublicFooter() {
  return (
    <footer className="bg-[#050507] text-gray-300 py-16 px-4 border-t border-white/5 relative z-10 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 font-bold text-2xl mb-6 text-white tracking-widest uppercase">
            <img
              src="/logo.png"
              alt="NEXA POS Logo"
              className="h-10 w-auto bg-white p-1 rounded-lg"
            />
          </div>
          <p className="text-gray-400 font-light leading-relaxed mb-8 max-w-sm">
            NEXA POS is the ultimate point of sale system, crafting
            high-performance, real-time POS and inventory solutions that
            redefine retail architecture globally.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/hananirfan91"
              target="_blank"
              rel="noreferrer noopener"
              title="Twitter Profile"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"
            >
              <Twitter size={18} />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/hananirfan/"
              target="_blank"
              rel="noreferrer noopener"
              title="LinkedIn Profile"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"
            >
              <Linkedin size={18} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://instagram.com/hananirfan2026"
              target="_blank"
              rel="noreferrer noopener"
              title="Instagram Profile"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"
            >
              <Instagram size={18} />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide">Platform</h4>
          <ul className="space-y-4 font-light text-sm text-gray-400">
            <li>
              <Link to="/home" className="hover:text-indigo-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-indigo-400 transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-indigo-400 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-indigo-400 transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide">Legal</h4>
          <ul className="space-y-4 font-light text-sm text-gray-400">
            <li>
              <Link to="/privacy-policy" className="hover:text-indigo-400 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-indigo-400 transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/disclaimer" className="hover:text-indigo-400 transition-colors">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link to="/docs" className="hover:text-indigo-400 transition-colors">
                Documentation
              </Link>
            </li>
            <li>
              <Link to="/sitemap" className="hover:text-indigo-400 transition-colors">
                Sitemap
              </Link>
            </li>
            <li>
              <Link to="/cookie-policy" className="hover:text-indigo-400 transition-colors">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col items-center justify-center gap-4 text-xs font-light text-gray-500 text-center">
        <p>
          © {new Date().getFullYear()} NEXA POS System in Pakistan. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
