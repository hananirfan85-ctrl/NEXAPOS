import React from "react";
import { ArrowLeft, Check, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for single-location retail setups.",
      price: "500 PKR",
      period: "/month",
      features: [
        "1 POS Terminal",
        "Basic Inventory Matrix",
        "Daily Sales Extracts",
        "Email Support",
        "256-bit Encryption",
      ],
      cta: "Start Free Trial",
      primary: false,
    },
    {
      name: "Professional",
      description: "Advanced controls for growing multi-location teams.",
      price: "3000 PKR",
      period: "/month",
      features: [
        "5 POS Terminals",
        "Advanced Matrix & Analytics",
        "Offline Redundancy Sync",
        "Stock Depletion Alerts",
        "Priority 24/7 Support",
      ],
      cta: "Get Started",
      primary: true,
    },
    {
      name: "Enterprise",
      description: "Custom architecture for high-volume networks.",
      price: "Custom",
      period: "",
      features: [
        "Unlimited Terminals",
        "Custom API Integrations",
        "Dedicated Account Engineer",
        "White-label Reports",
        "SLA Guarantee (99.99%)",
      ],
      cta: "Contact Sales",
      primary: false,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#030305] font-sans selection:bg-indigo-500/30 selection:text-white py-16 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="Pricing Packages | NEXA POS Software" 
        description="View our affordable pricing packages for NEXA POS. Perfect for single-location shops or enterprise supermarket chains in Pakistan."
        keywords="pos software price, shop management system cost, nexa pos pricing, retail billing software packages"
      />
      {/* Background Layer */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          backgroundPosition: "center center",
        }}
      />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <Link
          to="/home"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium mb-12 transition-colors group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Return to Launchpad
        </Link>

        <div className="text-center max-w-3xl mx-auto mb-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight mb-6">
              Transparent Architecture
            </h1>
            <p className="text-xl text-gray-400 font-light">
              Choose the tier that matches your operational scale. All plans
              include 256-bit encryption and our core speed guarantees.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto mb-24">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl backdrop-blur-xl border ${
                plan.primary
                  ? "bg-indigo-600/10 border-indigo-500/50 shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)] md:-translate-y-4"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              } p-8 flex flex-col h-full transition-all`}
            >
              {plan.primary && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-indigo-500 text-white text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                    <Zap size={14} /> Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm font-light min-h-[40px]">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8 flex items-baseline gap-2">
                <span className="text-4xl lg:text-5xl font-mono font-bold text-white tracking-tighter">
                  {plan.price}
                </span>
                <span className="text-gray-400 font-sans">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className="flex items-start gap-3 text-gray-300 font-sans font-light"
                  >
                    <Check
                      size={18}
                      className="text-indigo-400 shrink-0 mt-0.5"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/login"
                className={`w-full py-4 px-6 rounded-xl font-mono font-bold tracking-widest uppercase text-sm flex justify-center transition-all ${
                  plan.primary
                    ? "bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-lg"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Detailed SEO Content Section (Massive Payload) */}
        <div className="max-w-4xl mx-auto mt-16 bg-white/5 border border-white/10 p-8 md:p-12 lg:p-16 rounded-3xl backdrop-blur-md">
          <div className="prose prose-lg prose-invert max-w-none text-gray-300 font-light space-y-6">
            <h2 className="text-4xl font-display font-bold text-white mb-8 border-b border-white/10 pb-4">
              Our Pricing Philosophy & In-Depth Technical Breakdown
            </h2>

            <p>
              When evaluating a premium <strong>POS System in Pakistan</strong>,
              one of the most critical factors is total cost of ownership.
              Businesses require absolute transparency when it comes to adopting
              a robust <strong>Shop Management System</strong>. The digital
              transformation of a legacy store into a modern enterprise is not
              simply about swapping out cash registers; it’s about adopting an{" "}
              <strong>Inventory Management Software</strong> suite that
              guarantees zero downtime, perfect cross-node synchronization, and
              continuous uptime during routine internet outages. At NEXA POS, we
              structured our pricing modules specifically to empower small-scale
              entrepreneurs while simultaneously establishing an
              industrial-grade framework for multi-store chains.
            </p>

            <p>
              In this comprehensive breakdown, we dissect exactly what you
              receive when you deploy our exceptional{" "}
              <strong>Retail POS Software</strong>, elucidating the unique
              technical capabilities, hardware agnostic deployment processes,
              and the strategic advantages of transitioning your retail
              ecosystem into the cloud. We don't just sell you a subscription;
              we provide an unshakeable <strong>Billing Software</strong> engine
              designed to radically accelerate your checkout pipeline.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">
              Detailed Feature Enhancements (What’s Included)
            </h3>
            <p>
              Our pricing tiers have been meticulously crafted through deep
              feedback from authentic retail operators in Lahore, Karachi, and
              Islamabad. Standard off-the-shelf point-of-sale paradigms
              routinely collapse under heavy concurrent load (such as during
              massive holiday sales or Eid rush hours). Because NEXA POS
              operates utilizing Service Workers and edge-cached Progressive Web
              App capabilities, performance scales automatically.
            </p>

            <h4 className="text-xl font-semibold text-indigo-300 mt-8 mb-2">
              1. Offline-First Ledger Processing
            </h4>
            <p>
              The defining trait of our <strong>POS System in Pakistan</strong>{" "}
              is its offline resilience. In the Basic and Professional tiers,
              the moment your cashiers log into the terminal, the entire product
              matrix is fetched from the secure Supabase cluster and locally
              persisted within their browser’s IndexedDB. When the internet
              connection stutters—a notorious reality—this localized{" "}
              <strong>Shop Management System</strong> immediately assumes
              read/write authority. Bills are processed natively at blazing
              speeds and stored in a secure queue. Upon network resolution,
              background workers push this queue to the centralized database
              without user intervention. This means from a financial standpoint,
              you are never losing revenue due to bandwidth instability.
            </p>

            <h4 className="text-xl font-semibold text-indigo-300 mt-8 mb-2">
              2. Concurrent Inventory Synchronization
            </h4>
            <p>
              A major vulnerability with disparate ledger tools is negative
              stock indexing. If Cashier A and Cashier B attempt to sell the
              exact same SKU simultaneously when only one unit remains, poorly
              engineered systems crash or log a negative value. Our{" "}
              <strong>Inventory Management Software</strong> mitigates this
              entirely. Using transactional Remote Procedure Calls (RPC) inside
              our PostgreSQL instance, the moment an item is logged into the{" "}
              <strong>Billing Software</strong> cart, the database enacts a
              pessimistic lock. It deducts the value transactionally. Your
              investment in NEXA POS guarantees absolute financial fidelity.
            </p>

            <h4 className="text-xl font-semibold text-indigo-300 mt-8 mb-2">
              3. Master Data Export & Backups
            </h4>
            <p>
              Data portability protects businesses. Any owner deploying a{" "}
              <strong>Retail POS Software</strong> must hold the profound right
              to export their life's work. Within all our pricing plans, the
              core admin dashboard features a proprietary Master JSON Export
              functionality. With one click, managers download a compressed
              structural payload containing every customer profile, historic
              invoice, product variant, and employee record. This satisfies
              rigorous auditing compliances and guarantees that you aren't held
              hostage by vendor lock-in.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">
              Frequently Asked Questions (FAQs)
            </h3>

            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h4 className="font-bold text-white text-lg mb-2">
                  Why did we build a subscription-based Retail POS Software?
                </h4>
                <p className="text-gray-400">
                  Legacy systems were sold via perpetual one-time licenses.
                  However, these systems rapidly became obsolete, insecure, and
                  isolated on decaying hard drives. By utilizing a SaaS
                  (Software as a Service) paradigm, we continuously push live
                  security patches, new feature rollouts, and server maintenance
                  seamlessly. You aren't just paying for software; you are
                  paying for an active engineering team that ensures your{" "}
                  <strong>POS System in Pakistan</strong> never degrades.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h4 className="font-bold text-white text-lg mb-2">
                  Is the Billing Software hardware agnostic?
                </h4>
                <p className="text-gray-400">
                  Absolutely. One of the reasons our{" "}
                  <strong>Shop Management System</strong> shines is that it runs
                  perfectly inside modern Chromium browsers (Chrome, Edge,
                  Brave). Whether your clerks utilize 10-year-old desktop
                  computers running Windows 10, modern MacBooks, iPads, or
                  Android tablets, NEXA POS adapts flawlessly. You do not need
                  to buy expensive proprietary touchscreen registers.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <h4 className="font-bold text-white text-lg mb-2">
                  How does the Offline Inventory Management Software actually
                  work?
                </h4>
                <p className="text-gray-400">
                  We leverage native Web API technologies such as Service
                  Workers and IndexedDB. These APIs instruct the browser to
                  locally intercept API queries when the network layer is
                  non-responsive. The POS terminal assumes the main server is
                  still there by answering the API callbacks locally. It feels
                  instantly responsive. Once the network layer re-establishes,
                  the <strong>Billing Software</strong> flushes the local
                  transaction payload via encrypted pipelines to the main
                  PostgREST endpoints.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">
              Use Cases: How Industries Benefit
            </h3>

            <h4 className="text-xl font-semibold text-indigo-300 mt-8 mb-2">
              The Multi-Store Supermarket
            </h4>
            <p>
              Consider a large-scale grocery chain with 5 physical outlets.
              Unifying product pricing manually across 5 disconnected desktop
              instances in the past was a nightmare. Through NEXA POS, the core
              admin updates the selling price of an item from their mobile phone
              while at home. Within 2 milliseconds, all 5 physical stores
              instantly receive the updated pricing grid via WebSocket real-time
              subscription mechanisms. The modern{" "}
              <strong>POS System in Pakistan</strong> guarantees cohesive brand
              governance.
            </p>

            <h4 className="text-xl font-semibold text-indigo-300 mt-8 mb-2">
              The Apparel & Boutique Sector
            </h4>
            <p>
              Clothing lines have complex variants (Size, Color, Gender,
              Winter/Summer). Our <strong>Inventory Management Software</strong>{" "}
              effortlessly tackles high SKU volumes. When a customer returns an
              item, the integrated CRM generates a dynamic return ledger,
              restocking the item and calculating net-profit adjustments
              immediately. This operational depth defines world-class{" "}
              <strong>Shop Management System</strong> software.
            </p>

            <h4 className="text-xl font-semibold text-indigo-300 mt-8 mb-2">
              The Startup Pharmacy
            </h4>
            <p>
              Pharmacies demand lightning-speed item entry to alleviate queue
              pressure. Because NEXA POS limits heavy server payloads, fast
              search features instantly map to the local DB replica, outputting
              the drug name, expiry status, and cost onto the screen without
              hanging. This frictionless pipeline constitutes the core benefit
              of our proprietary <strong>Retail POS Software</strong>{" "}
              algorithms.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">
              Comparative Advantages (The NEXA Difference)
            </h3>
            <p>
              Many business owners search the market for a reliable{" "}
              <strong>Billing Software</strong>, yet find themselves inundated
              with bloated tools padded with unnecessary features they will
              never use. We stripped away the bloat.
            </p>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Zero Installation Friction:</strong> Unlike heavy C# or
                Java based executables that demand .NET frameworks and local SQL
                database configuration, NEXA POS is provisioned instantly. You
                simply register an account and start scanning items.
              </li>
              <li>
                <strong>Military-Grade Security Contexts:</strong> Your data
                sits behind Supabase Row Level Security (RLS) policies. Only
                authenticated sessions mapped exclusively to your store's UUID
                can fetch or mutate records. Cross-tenant leakage is
                mathematically impossible.
              </li>
              <li>
                <strong>Hyper-Responsive UI:</strong> Built entirely with React
                and Tailwind, the visual canvas renders elegantly. It respects
                dark mode natively, protecting your cashier's retinas during
                exhaustive evening shifts. The cognitive load required to learn
                the <strong>POS System in Pakistan</strong> is minimized to
                literally under ten minutes.
              </li>
              <li>
                <strong>Cost Efficacy:</strong> Compared to exorbitant legacy
                setups requiring $500 software licenses and paid annual updates,
                our monthly transparent fee guarantees maximum return on
                investment. The <strong>Inventory Management Software</strong>{" "}
                literally pays for itself by preventing stock shrinkages and
                optimizing operational oversight.
              </li>
            </ol>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">
              Final Verdict
            </h3>
            <p>
              Selecting the appropriate <strong>Shop Management System</strong>{" "}
              is a pivotal juncture in any retailer's journey. Your ledger is
              the lifeblood of your operation. By aligning with NEXA POS, you
              are securing a scalable, offline-capable, and aesthetically
              magnificent tool suite. Our platform represents the pinnacle of{" "}
              <strong>Billing Software</strong> engineering. Explore the tiers
              above, start your risk-free trial today, and witness firsthand why
              we are heralded as the premier{" "}
              <strong>Retail POS Software</strong> platform in the country.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
