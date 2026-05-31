import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { ArrowLeft } from "lucide-react";
import { PublicFooter } from "../components/layout/PublicFooter";
import { PublicNavbar } from "../components/layout/PublicNavbar";

export default function Sitemap() {
  const pageLinks = [
    { title: "Home", path: "/home" },
    { title: "Demo Video", path: "/demo" },
    { title: "Login", path: "/login" },
    { title: "Sign Up", path: "/signup" },
    { title: "Documentation", path: "/docs" },
    { title: "About Us", path: "/about" },
    { title: "Help Center", path: "/help" },
    { title: "Pricing", path: "/pricing" },
    { title: "Contact Us", path: "/contact" },
  ];

  const legalLinks = [
    { title: "Terms of Service", path: "/terms" },
    { title: "Privacy Policy", path: "/privacy-policy" },
    { title: "Disclaimer", path: "/disclaimer" },
    { title: "Cookie Policy", path: "/cookie-policy" },
  ];

  const featureLinks = [
    { title: "Fast & Easy Billing System", path: "/features/billing" },
    { title: "Real-Time Inventory Management", path: "/features/inventory" },
    { title: "Advanced Analytics & Reports", path: "/features/reports" },
    { title: "CRM & Customer Ledgers", path: "/features/crm" },
    { title: "Multi-User Administration", path: "/features/users" },
    { title: "Cash Flow Management", path: "/features/cashflow" },
  ];

  return (
    <div className="min-h-screen bg-[#030305] text-white selection:bg-indigo-500/30">
      <SEO 
        title="Sitemap | NEXA POS" 
        description="Navigate throughout our website efficiently utilizing our sitemap directory."
        keywords="sitemap, directory, navigation, nexa pos"
      />
      <PublicNavbar />
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-32 pb-24">
        <header className="mb-16">
          <Link
            to="/home"
            className="inline-flex items-center gap-2 text-indigo-500 hover:text-indigo-400 font-mono tracking-widest uppercase mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
            Sitemap
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            An organized directory of all pages available on the NEXA POS platform.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">Main Platform</h2>
            <ul className="space-y-3">
              {pageLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-gray-400 hover:text-indigo-400 transition-colors block">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">Legal & Policies</h2>
            <ul className="space-y-3">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-gray-400 hover:text-indigo-400 transition-colors block">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">Feature Details</h2>
            <ul className="space-y-3">
              {featureLinks.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-gray-400 hover:text-indigo-400 transition-colors block">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <PublicFooter />
    </div>
  );
}
