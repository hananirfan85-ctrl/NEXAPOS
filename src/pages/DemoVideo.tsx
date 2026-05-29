```tsx
import React from "react";
import { PublicNavbar } from "../components/layout/PublicNavbar";
import { SEO } from "../components/SEO";
import SeoGuide from "../components/SeoGuide";

export default function DemoVideo() {
  return (
    <div className="min-h-screen bg-[#030305] text-white selection:bg-indigo-500/30 flex flex-col pt-24 font-sans">

      {/* SEO */}
      <SEO
        title="Software Demo Video | NEXA POS System"
        description="Watch the official NEXA POS software demo video and explore billing, inventory management, CRM, customer ledgers, sales tracking, analytics, and multi-store business management features."
        keywords="nexa pos demo video, POS software tutorial, inventory management system, billing software demo, retail POS software, CRM software, business management software"
      />

      {/* Navbar */}
      <PublicNavbar />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20 flex-1 w-full">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-6">
            NEXA POS Software Demo
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Watch how NEXA POS helps businesses manage billing, inventory,
            CRM, customer ledgers, analytics, sales records, and store
            operations through a modern cloud-based POS system.
          </p>
        </div>

        {/* Video Container */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-4 md:p-8 backdrop-blur-xl shadow-2xl">

          <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black">

            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/8paPp1OU7jc"
              title="NEXA POS Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-xl">

          <h2 className="text-3xl font-bold mb-8 font-display">
            Features Demonstrated in the Video
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-white">
                POS Billing System
              </h3>

              <p className="leading-relaxed text-gray-400">
                Generate customer bills quickly with a modern billing workflow
                designed for retail stores and businesses.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Inventory Management
              </h3>

              <p className="leading-relaxed text-gray-400">
                Organize and manage products, inventory records, and stock
                information through a centralized dashboard.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-white">
                CRM & Customer Ledger
              </h3>

              <p className="leading-relaxed text-gray-400">
                Maintain customer records, ledgers, and transaction-related
                information for organized business operations.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Sales Analytics
              </h3>

              <p className="leading-relaxed text-gray-400">
                View business insights, recent sales activity, and operational
                analytics directly from the dashboard.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Customizable Receipts
              </h3>

              <p className="leading-relaxed text-gray-400">
                Generate professional receipts customized according to store
                information and branding preferences.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-white">
                Multi-Store Management
              </h3>

              <p className="leading-relaxed text-gray-400">
                Manage multiple business stores and operational workflows from
                one cloud-based system.
              </p>
            </div>

          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Why Businesses Choose NEXA POS
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mx-auto">
            NEXA POS is designed to simplify retail and business management
            through modern cloud-based technology. The platform combines POS
            billing, inventory management, CRM functionality, customer ledgers,
            sales analytics, and business records into one centralized software
            system optimized for usability, performance, and operational
            efficiency.
          </p>
        </div>

      </div>

      {/* SEO Guide */}
      <SeoGuide />

    </div>
  );
}
```
