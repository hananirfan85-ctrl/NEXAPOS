import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PublicNavbar } from "../components/layout/PublicNavbar";
import {
  ArrowRight,
  BarChart3,
  Package,
  ShoppingCart,
  Zap,
  ShieldCheck,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Download,
  X,
  Users,
  Smartphone,
  Settings,
  Building2,
  Store,
  PlusCircle,
  Factory,
  Shield,
  ChevronDown,
  Hexagon,
  Menu,
} from "lucide-react";
import { usePwaInstall } from "../hooks/usePwaInstall";

export default function Landing() {
  const { deferredPrompt, initiateInstall } = usePwaInstall();
  const [showInstallModal, setShowInstallModal] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDownloadClick = async () => {
    if (deferredPrompt) {
      await initiateInstall();
    } else {
      setShowInstallModal(true);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "NEXA POS System",
    operatingSystem: "Any",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "NEXA POS is an advanced Point of Sale system designed to help businesses manage sales, billing, inventory, and customers in one powerful platform.",
  };

  const faqs = [
    {
      q: "What is NEXA POS System?",
      a: "NEXA POS is a modern Point of Sale software solution that simplifies business operations by automating billing, tracking inventory in real-time, and generating detailed sales reports.",
    },
    {
      q: "Can I use the POS system without internet?",
      a: "Yes! NEXA POS uses offline-first architecture, allowing you to manage billing and inventory offline. All data will automatically sync securely to the cloud once an internet connection is re-established.",
    },
    {
      q: "Does this POS software work for supermarkets and pharmacies?",
      a: "Absolutely. During setup, you can define standard units (e.g., strips, kg, boxes, liters) so NEXA POS fully adapts to retail shops, supermarkets, restaurants, and medical stores.",
    },
    {
      q: "Is it a cloud-based system?",
      a: "Yes, NEXA POS is a hybrid system. It offers cloud-based data backup for supreme security while retaining lightning-fast local performance.",
    },
  ];

  return (
    <div className="relative min-h-screen font-sans selection:bg-indigo-500/30 selection:text-white overflow-hidden bg-[#0a0a0c]">
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Modern Refined Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0c] via-[#0f111a] to-[#0a0a0c]" />
        <div className="absolute w-[60vw] h-[60vw] rounded-full blur-[120px] bg-indigo-600/10 mix-blend-screen" />
        <div className="absolute right-0 top-0 w-[40vw] h-[40vw] rounded-full blur-[100px] bg-sky-500/10 mix-blend-screen" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <PublicNavbar />

        {/* Hero Section */}
        <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto">
            <div>
              <span className="inline-block py-2 px-5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-mono font-bold tracking-widest uppercase mb-8">
                Everything your business needs at the point of sale.
              </span>
              <h1 className="text-5xl md:text-7xl font-sans font-extrabold text-white tracking-tight leading-tight mb-8 drop-shadow-2xl">
                NEXA POS System <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  Smart, Fast & Reliable
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-sans text-gray-300 mb-12 leading-relaxed font-light drop-shadow-md max-w-3xl mx-auto">
                NEXA POS is an advanced Point of Sale (POS) system designed to
                help businesses manage sales, billing, inventory, and customers
                in one powerful platform.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  to="/signup"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-xl font-sans font-bold hover:bg-indigo-500 hover:-translate-y-1 transition-all shadow-xl shadow-indigo-600/30 text-base"
                >
                  Get Started Now
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/login"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 text-white px-8 py-4 rounded-xl border border-white/10 font-sans font-bold hover:bg-white/10 hover:-translate-y-1 transition-all text-base"
                >
                  Request a Free Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Overview - MASSIVE CONTENT SECTION */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-white/5 backdrop-blur-md border-t border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-center">
                Comprehensive POS System in Pakistan
              </h2>
              <div className="prose prose-lg prose-invert max-w-none text-gray-300 font-light leading-relaxed space-y-6">
                <p>
                  As the retail landscape evolved rapidly, businesses demanded a
                  robust, lightning-fast, and secure{" "}
                  <strong>POS System in Pakistan</strong>. Enter NEXA POS, a
                  masterfully engineered <strong>Retail POS Software</strong>{" "}
                  that combines extreme front-end acceleration with
                  enterprise-grade cloud persistence. We didn’t just build
                  another calculator; we forged an all-encompassing{" "}
                  <strong>Shop Management System</strong> designed to handle
                  massive concurrent transaction loads without faltering.
                </p>
                <p>
                  At its core, NEXA POS integrates{" "}
                  <strong>Inventory Management Software</strong> directly into
                  the checkout pipeline. When your cashiers process a sale, the
                  ledger is updated, inventory levels are universally
                  deprecated, and profit algorithms immediately adjust your
                  dashboard analytics in real time. We built this{" "}
                  <strong>Billing Software</strong> to eliminate manual
                  human-error from accounting. The days of struggling to find
                  discrepancies at the end of the shift are over.
                </p>

                <h3 className="text-2xl font-bold text-white mt-12 mb-4">
                  Why We Built This Feature and How They Work
                </h3>
                <p>
                  Traditional <strong>Billing Software</strong> usually fails
                  during internet outages. We built an offline-first service
                  worker architecture to counter this infrastructure weakness.
                  How does it work? Simple. The POS terminal caches your entire
                  product catalog inside the browser's IndexedDB. When the
                  internet drops, your cashiers notice zero latency. They
                  continue processing bills entirely offline. The moment
                  connectivity restores, our synchronization engine pushes the
                  queued ledgers to the cloud. This ensures your{" "}
                  <strong>Retail POS Software</strong> never stops, ensuring you
                  never miss a sale or frustrate a customer in a long queue.
                </p>

                <h3 className="text-2xl font-bold text-white mt-12 mb-4">
                  Real-World Use Cases
                </h3>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong>Supermarkets & Groceries:</strong> Utilize fast
                    entry with our <strong>Shop Management System</strong> to
                    checkout dozens of items in seconds. The system handles
                    partial quantities (like 1.5kg of rice) seamlessly.
                  </li>
                  <li>
                    <strong>Fashion & Apparel Boutiques:</strong> Track granular
                    inventory levels. If you sell out of a specific variant, the{" "}
                    <strong>Inventory Management Software</strong> instantly
                    flags it as out-of-stock.
                  </li>
                  <li>
                    <strong>Restaurants & Cafes:</strong> Keep tables moving
                    fast. The minimal, high-contrast dark theme reduces cashier
                    eye strain during late-night shifts.
                  </li>
                  <li>
                    <strong>Wholesale Distributors:</strong> The CRM module
                    allows managing B2B clients, tracking their ledger balances,
                    logging partial payments, and maintaining strict credit
                    limits.
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-white mt-12 mb-4">
                  Comparison Table: NEXA POS vs Legacy Systems
                </h3>
                <div className="overflow-x-auto mt-6 border border-white/10 rounded-xl bg-[#0a0a0c]">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-white/5 border-b border-white/10 text-white font-bold">
                        <th className="p-4">Feature</th>
                        <th className="p-4 border-l border-white/10 text-indigo-400">
                          NEXA POS System
                        </th>
                        <th className="p-4 border-l border-white/10 text-gray-500">
                          Legacy Desktop Software
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-sm">
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Accessibility
                        </td>
                        <td className="p-4 border-l border-white/10 text-indigo-300">
                          Web, Mobile, Desktop (PWA)
                        </td>
                        <td className="p-4 border-l border-white/10 text-gray-400">
                          Restricted to one PC
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Offline Mode
                        </td>
                        <td className="p-4 border-l border-white/10 text-indigo-300">
                          Yes, fully cached with auto-sync
                        </td>
                        <td className="p-4 border-l border-white/10 text-gray-400">
                          Usually fails or requires LAN
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Data Safety
                        </td>
                        <td className="p-4 border-l border-white/10 text-indigo-300">
                          Instant Cloud Backup (Supabase)
                        </td>
                        <td className="p-4 border-l border-white/10 text-gray-400">
                          Vulnerable to Hard Drive Crashes
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-white">
                          Multi-User Roles
                        </td>
                        <td className="p-4 border-l border-white/10 text-indigo-300">
                          Admin, Cashier RLS enforced
                        </td>
                        <td className="p-4 border-l border-white/10 text-gray-400">
                          Basic passwords, easily bypassed
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-bold text-white mt-12 mb-4">
                  Customer Reviews
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <p className="italic text-gray-300 mb-4">
                      "Switching to NEXA POS completely saved our inventory
                      tracking. Since it runs smoothly on iPads and Desktops, we
                      abandoned our clunky legacy system. Phenomenal{" "}
                      <strong>Retail POS Software</strong>."
                    </p>
                    <span className="font-bold text-white">
                      - Tariq, Supermarket Owner, Lahore
                    </span>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <p className="italic text-gray-300 mb-4">
                      "The <strong>Shop Management System</strong> offline mode
                      is a lifesaver in Pakistan where internet drops daily. The
                      ledgers sync flawlessly when connections return."
                    </p>
                    <span className="font-bold text-white">
                      - Ahsan, Boutique Manager, Karachi
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Features of NEXA POS System
              </h2>
              <p className="text-gray-400 font-light max-w-2xl mx-auto">
                Discover why our retail POS system is trusted by thousands of
                businesses globally.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Fast & Easy Billing",
                  desc: "Process sales instantly with an optimized checkout.",
                },
                {
                  icon: Package,
                  title: "Real-Time Inventory",
                  desc: "Manage stock across multiple locations efficiently.",
                },
                {
                  icon: BarChart3,
                  title: "Advanced Reports",
                  desc: "Detailed sales reports and analytics.",
                },
                {
                  icon: Users,
                  title: "Multi-User Access",
                  desc: "Role-based access controls for your team.",
                },
                {
                  icon: Smartphone,
                  title: "Fast Search",
                  desc: "Support for hardware or device-bound scanners.",
                },
                {
                  icon: Zap,
                  title: "Cloud Data Backup",
                  desc: "Secure cloud backups ensure your data is safe.",
                },
                {
                  icon: Shield,
                  title: "Secure & Reliable",
                  desc: "End-to-end encryption for maximum protection.",
                },
                {
                  icon: Store,
                  title: "CRM & Ledgers",
                  desc: "Manage customer debts and loyalty seamlessly.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#11131a] border border-white/5 hover:bg-[#1a1d26] hover:border-white/10 transition-colors"
                >
                  <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center mb-5">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & Industries Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-b from-black/20 to-black/60 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Benefits of Using NEXA POS
              </h2>
              <ul className="space-y-4">
                {[
                  "Increase business efficiency and speed",
                  "Reduce human errors in billing",
                  "Improve customer experience with fast checkouts",
                  "Track inventory automatically with precision",
                  "Make better business decisions with sales software reports",
                  "Save massive amounts of time and operational cost",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="p-1 rounded-full bg-teal-500/20 text-teal-400">
                      <ShieldCheck size={16} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries We Serve */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Industries We Serve
              </h2>
              <p className="text-gray-400 mb-6 font-light">
                NEXA POS system is perfectly tailored for various business
                management verticals:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: ShoppingCart, text: "Retail Shops" },
                  { icon: Building2, text: "Supermarkets" },
                  { icon: Factory, text: "Wholesale Businesses" },
                  { icon: Shield, text: "Pharmacies" },
                  { icon: BarChart3, text: "Restaurants & Cafes" },
                  { icon: Building2, text: "Small & Medium Enterprises" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5"
                  >
                    <div className="text-indigo-400">
                      <item.icon size={20} />
                    </div>
                    <span className="text-sm font-medium text-white">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose NEXA */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 text-center border-t border-b border-white/5 bg-[#0a0a0c]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Why Choose NEXA POS Over Others?
            </h2>
            <p className="text-lg text-gray-300 font-light leading-relaxed">
              Unlike traditional POS systems, NEXA POS offers a modern,
              lightweight, and scalable business management software solution
              that grows with your business. It is designed for speed, accuracy,
              and ease of use, making it ideal for both small shops and large
              enterprises. Skip the manual systems and embrace top-tier billing
              software today.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-400">
                Everything you need to know about the product and software
                architecture.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-bold text-white">{faq.q}</span>
                    <ChevronDown
                      size={20}
                      className={`text-gray-400 transition-transform ${activeFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <>
                    {activeFaq === i && (
                      <div className="px-6 pb-6 text-gray-400 font-light leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center p-12 md:p-20 rounded-[3rem] bg-indigo-900/20 border border-indigo-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 mix-blend-overlay pointer-events-none"></div>
            <div className="relative z-10 w-full pointer-events-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Manage Your Business Smarter
              </h2>
              <p className="text-xl text-indigo-200 font-light mb-10 max-w-2xl mx-auto">
                Start managing your business smarter with NEXA POS System today.
                Experience fast billing, real-time inventory tracking, and
                complete business control in one powerful solution.
              </p>
              <Link
                to="/signup"
                className="inline-flex items-center gap-3 bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 hover:scale-105 transition-all shadow-xl text-lg relative z-20"
              >
                Get Started Now <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#050507] text-gray-300 py-16 px-4 border-t border-white/5 relative z-10">
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
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/hananirfan/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://instagram.com/hananirfan2026"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-indigo-400 font-mono text-xs tracking-widest uppercase font-bold mb-6">
                Explore
              </h4>
              <ul className="space-y-4 font-light text-sm">
                <li>
                  <Link
                    to="/features/billing"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Fast & Easy Billing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/features/inventory"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Real-Time Inventory
                  </Link>
                </li>
                <li>
                  <Link
                    to="/features/cashflow"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Cash Flow
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-indigo-400 font-mono text-xs tracking-widest uppercase font-bold mb-6">
                Support & Legal
              </h4>
              <ul className="space-y-4 font-light text-sm">
                <li className="flex items-start gap-3">
                  <Link
                    to="/contact"
                    className="hover:text-indigo-400 transition-colors flex items-center gap-2"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="flex items-start gap-3">
                  <Link
                    to="/privacy-policy"
                    className="hover:text-indigo-400 transition-colors flex items-center gap-2"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="flex items-start gap-3">
                  <Link
                    to="/terms"
                    className="hover:text-indigo-400 transition-colors flex items-center gap-2"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li className="flex items-start gap-3">
                  <Link
                    to="/disclaimer"
                    className="hover:text-indigo-400 transition-colors flex items-center gap-2"
                  >
                    Disclaimer
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
      </div>

      <>
        {showInstallModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-[#111111] border border-white/10 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col">
              <div className="p-6 border-b border-white/10 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <img
                    src="/logo.png"
                    alt="NEXA POS Logo"
                    className="h-8 w-auto bg-white p-1 rounded-lg"
                  />
                  <h3 className="text-xl font-bold text-white">
                    Install NEXA POS App
                  </h3>
                </div>
                <button
                  onClick={() => setShowInstallModal(false)}
                  className="p-2 text-gray-400 hover:text-white rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 text-sm text-gray-400 space-y-4">
                <p>
                  NEXA POS is a Progressive Web App (PWA). You can install it
                  directly to your device for offline use without going through
                  an app store.
                </p>
                <div className="bg-white/5 p-4 rounded-lg">
                  <strong className="text-white block mb-2">
                    On iOS (Safari):
                  </strong>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>
                      Tap the <strong>Share</strong> button.
                    </li>
                    <li>
                      Tap <strong>Add to Home Screen</strong>.
                    </li>
                  </ol>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <strong className="text-white block mb-2">
                    On Desktop (Chrome/Edge):
                  </strong>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>
                      Click the <strong>Install</strong> icon in the address
                      bar.
                    </li>
                    <li>
                      Or click the 3-dots menu and select{" "}
                      <strong>Install NEXA POS</strong>.
                    </li>
                  </ol>
                </div>
              </div>

              <div className="p-6 bg-black/40 border-t border-white/5 flex gap-3 shrink-0">
                <button
                  onClick={() => setShowInstallModal(false)}
                  className="w-full px-4 py-3 text-sm font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
}
