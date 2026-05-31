import React from "react";
import { ArrowLeft, BookOpen, Terminal, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Documentation() {
  const sections = [
    {
      title: "Platform Overview",
      icon: <Zap className="w-6 h-6 text-indigo-400" />,
      content:
        "NEXA POS is an enterprise-grade cloud-native point of sale and comprehensive retail management suite. Engineered for speed and high availability, it guarantees real-time synchronization of sales, inventory, and analytics across all your connected branches. Our architecture utilizes React, Node, and Supabase to provide an offline-first resilient topology. This means that if an individual store's internet connection drops, the local cashier terminals immediately pivot to IndexedDB local caching, securely queuing all transaction ledgers and stock decrementations. Once the network is restored, the synchronization engine automatically flushes the queue to the master database. To begin deploying this infrastructure in your business, the first step requires an administrator to create a master account. Upon creation, you have complete access to the central dashboard, whereas all subsequent employee signups will be placed in a 'pending approval' state until you manually authorize their access level.",
    },
    {
      title: "Inventory Management Protocol",
      icon: <BookOpen className="w-6 h-6 text-indigo-400" />,
      content:
        "At the core of the NEXA POS platform is our rigorous Inventory Matrix. Managing huge product catalogs can be overwhelming, which is why our inventory interface supports rapid bulk loading, granular categorization, and automated low-stock threshold alerting. When you register a new product, you define its universal SKU (Stock Keeping Unit), bar-code identifier (if applicable), base unit cost, and final retail price. The system automatically calculates gross margin percentages. Because the inventory and POS systems communicate seamlessly in real time, every successful checkout at the counter instantly subtracts from the globally available item count, ensuring that multiple branches never accidentally oversell existing physical stock. For warehouse operations, the stock adjustment module logs chronological updates preventing undetected shrinkage or administrative mismanagement.",
    },
    {
      title: "Operating the Point of Sale Interface",
      icon: <Terminal className="w-6 h-6 text-indigo-400" />,
      content:
        "The Point of Sale (POS) interface is the highest traffic junction of your entire business. Therefore, we optimized it for absolute microsecond latency. The cart interface supports both manual search typing with a sub-50ms debounce rate, or instantaneous laser barcode scanning. Your floor cashiers can add items, rapidly alter quantities, and apply discretionary discounts (if enabled under their permission set). When concluding a sale, simply enter the amount tendered to view the exact change required. Once completed, a pristine digital receipt is immediately generated and securely written to the master SQL transaction ledger. For multi-language demographics, the cash drawer operation supports visual iconography ensuring that temporary or seasonal staff can operate the checkout lanes with practically zero training curves.",
    },
    {
      title: "Security & Administrative Controls",
      icon: <Shield className="w-6 h-6 text-indigo-400" />,
      content:
        "Information security is non-negotiable. The Master Dashboard utilizes Role-Based Access Control (RBAC) to ensure that sensitive financial telemetry—such as net margin reports, operational cashflow loss, and supplier contact lists—are kept strictly confined to executive personnel. 'Cashier' accounts are strictly sandboxed, meaning they can only execute sales, view active inventory quantities, and process refunds. They absolutely cannot access macro-level analytics or modify core system settings. All data transfer is wrapped in 256-bit TLS encryption, guarding against localized network sniffing, and our underlying database enforces strict Row Level Security (RLS) policies. Even if a bad actor attempts to forge an API call, the database will instantly drop the request if the cryptographic JWT signature does not match an authorized administrative entity.",
    },
    {
      title: "Deployment & Maintenance Strategies",
      icon: <Zap className="w-6 h-6 text-indigo-400" />,
      content:
        "Because NEXA POS operates perfectly within a modern browser, your hardware requirements are incredibly slim. Deploying the system across a new franchise simply requires any competent computing device—a tablet, a desktop PC, or a laptop—running a standard updated browser. No complex local software installations or networking voodoo is required. Furthermore, when our engineering team pushes system updates, bug fixes, or entirely new features, your terminals receive the upgrade instantly upon page refresh. We handle the heavy lifting regarding database maintenance, backups, and server redundancy, allowing you to focus entirely on expanding your retail empire.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#030305] font-sans selection:bg-indigo-500/30 selection:text-white py-16 px-4 sm:px-6 lg:px-8">
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

      <div className="relative z-10 max-w-4xl mx-auto">
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

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Platform Documentation
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl">
            Everything you need to deploy, manage, and scale the NEXA POS
            immersive management system.
          </p>
        </div>

        <div className="grid gap-8">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:bg-white/[0.07] transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  {section.title}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed font-light ml-16">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
