import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SEO } from "../components/SEO";
import { PublicFooter } from "../components/layout/PublicFooter";
import { PublicNavbar } from "../components/layout/PublicNavbar";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-[#030305] text-white selection:bg-indigo-500/30">
      <SEO 
        title="Cookie Policy | NEXA POS" 
        description="Cookie Policy for NEXA POS outlining our usage of tracking and caching technologies."
        keywords="cookie policy, privacy, tracking, nexa pos, cookies"
      />
      <PublicNavbar />
      <div className="max-w-4xl mx-auto px-4 lg:px-8 pt-32 pb-24">
        <Link
          to="/home"
          className="inline-flex items-center gap-2 text-indigo-500 hover:text-indigo-400 font-mono tracking-widest uppercase mb-12 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Platform
        </Link>
        <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-8">
          Cookie Policy
        </h1>
        <article className="prose prose-invert prose-lg text-gray-300 font-light max-w-none space-y-8">
          <p>
            Last Updated: {new Date().toLocaleDateString()}
          </p>
          
          <section>
            <h2 className="text-3xl font-display font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              This Cookie Policy explains how NEXA POS ("we," "us," or "our") utilizes cookies and similar tracking technologies on our platform. 
              By utilizing our services, you consent to the strategic placement of these cookies on your device.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-semibold text-white mb-4">2. What are Cookies?</h2>
            <p>
              Cookies are minor text files that websites actively send to your computer or mobile device. They uniquely identify your browser and securely remember your device state when navigating our platform, allowing us to implement offline caching natively in your browser.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-semibold text-white mb-4">3. Types of Cookies We Use</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Strictly Necessary Cookies:</strong> Essential for standard operation, such as preserving your authentication session payload safely across the cloud environment.
              </li>
              <li>
                <strong>Performance & Analytical Cookies:</strong> Utilized strictly for collecting non-identifying macroscopic performance metric data on how users interact with our site.
              </li>
              <li>
                <strong>Functional Storage (IndexedDB/Local Storage):</strong> Because NEXA POS boasts a massive offline capability engine, we aggressively utilize IndexedDB and `localStorage` as digital vaults for pending transactions before syncing networks globally.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-display font-semibold text-white mb-4">4. Strategic Purpose of Storage</h2>
            <p>
              Traditional websites use cookies solely for tracking; NEXA POS uses progressive browser storage logic solely for structural reliability. Preserving session tokens guarantees rapid point-of-sale response metrics for our merchants without causing latency overhead or compromising data fidelity.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-semibold text-white mb-4">5. Rejection & Disablement</h2>
            <p>
              You maintain the right to instruct your browser to refuse all cookies globally. However, if you disable necessary operational caches, you will be unable to log in to the NEXA POS administrative panel, and offline mode components will fail to operate structurally as intended.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-semibold text-white mb-4">6. Policy Iteration</h2>
            <p>
              We periodically revise our Cookie Policy. Significant structural alterations will be officially published to this page. Please continually review this directory document.
            </p>
          </section>

          <div className="pt-8 border-t border-white/10 mt-12">
            <h3 className="text-2xl font-semibold mb-4 text-white">Inquiries & Contact</h3>
            <p>
              If further clarification is required, consult our <Link to="/contact" className="text-indigo-400 hover:underline">Contact Center</Link>.
            </p>
          </div>
        </article>
      </div>
      <PublicFooter />
    </div>
  );
}
