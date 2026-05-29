import React from "react";
import { Link } from "react-router-dom";
import { PublicNavbar } from "../components/layout/PublicNavbar";
import { SEO } from "../components/SEO";
import SeoGuide from "../components/SeoGuide";

export default function DemoVideo() {
  return (
    <div className="min-h-screen bg-[#030305] text-white selection:bg-indigo-500/30 flex flex-col pt-24 font-sans">
      <SEO 
        title="Software Demo Video | NEXA POS System"
        description="Watch our software demo video to see how the NEXA POS system works. Understand offline mode, Fast billing, CRM, and detailed ledgers."
        keywords="nexa pos demo video, how pos software works, retail software tutorial, inventory management video"
      />
      <PublicNavbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20 flex-1 w-full text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
          How NEXA POS Works
        </h1>
        <p className="text-xl text-gray-400 font-light mb-12">
          Discover the lightning-fast workflow of our Retail Billing and Inventory ecosystem.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-4 md:p-8 backdrop-blur-xl">
          <div className="aspect-video bg-black/60 rounded-xl overflow-hidden shadow-2xl relative flex items-center justify-center border border-white/10">
            {/* Placeholder for YouTube iframe */}
            <p className="text-gray-500 font-mono text-sm max-w-sm px-6">
              [ Video Placeholder: Embed YouTube or local video here showcasing the fast billing action, offline sync, and CRM ledger capabilities. ]
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white/5 border border-white/10 p-8 rounded-2xl text-left">
           <h3 className="text-2xl font-bold mb-4 font-display">Highlights of the Software</h3>
           <ul className="list-disc pl-6 space-y-2 text-gray-400 font-light text-lg">
             <li>Lightning Fast Keyboard-driven or Barcode-driven Billing</li>
             <li>Completely Offline-first capability. Auto syncs cloud data seamlessly</li>
             <li>Advanced Inventory Matrix locking directly tied into Sales checkout</li>
             <li>Granular customer financial ledgers, tracking what customers owe transparently</li>
           </ul>
        </div>
      </div>
      
      <SeoGuide />
    </div>
  );
}
