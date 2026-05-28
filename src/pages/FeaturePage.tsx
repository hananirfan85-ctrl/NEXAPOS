import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle, Zap, ShieldCheck, BarChart3, Clock, Rocket } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const features = {
  'billing': {
    title: 'Fast & Easy Billing System',
    subtitle: 'Lightning-fast checkout, built for extreme volume and complete offline reliability in Pakistan and beyond.',
    desc: 'The NEXA POS Retail Billing module brings an architectural leap in retail management. We stripped away the bloat of traditional web apps and built a streamlined point-of-sale interface that responds in milliseconds. Whether you represent a single-lane kiosk or a massive supermarket chain, this billing software is engineered to keep queues moving and securely process offline queues during internet drops.',
    benefits: ['Sub-second transaction parsing', 'Full offline synchronization via IndexedDB', 'Search-based fast entry', 'Direct cash tender support', 'Tax & Discount computations'],
    sections: [
      {
        icon: Zap,
        title: "Microsecond Latency & Search Processing",
        content: "Traditional web POS systems often take 2-3 seconds per item because they rely on slow server callbacks. NEXA POS processes line items locally. By caching the inventory catalog inside your browser's IndexedDB, searching an item reduces the cart operation latency to under 50 milliseconds. Whether you are adding one item or one hundred, the interface never skips a beat. The cart automatically groups identical SKUs and calculates dynamic subtotals."
      },
      {
        icon: ShieldCheck,
        title: "Architectural Offline Reliability",
        content: "Built on an offline-first service worker architecture. The POS doesn't just 'tolerate' being offline—it is fundamentally designed to function exactly the same without a network. Internet instability is common; your POS System shouldn't be. When disconnected, transactions are safely queued in the browser. When the network returns, an automatic synchronization engine safely flushes the ledger to the cloud."
      },
      {
        icon: BarChart3,
        title: "Dynamic Price Adjustments",
        content: "Apply item markdowns and adjust quantities without complex configurations. The billing engine calculates tax and discounts on the fly directly inside the point of sale."
      },
      {
        icon: Clock,
        title: "Receipt Generation",
        content: "Generate a detailed, professional digital receipt instantly upon cash checkout. The system records the transaction inside your sales ledger for complete documentation."
      }
    ],
    seoContent: [
      {
        heading: "Ultimate Retail Billing Software in Pakistan",
        text: "In the rapidly evolving retail sector, a fast, reliable, and secure Billing Software is the backbone of any successful business. NEXA POS system provides the ultimate Retail POS Software solution designed specifically to meet the high demands of supermarkets, pharmacies, fashion boutiques, and cafes. We understand that every second spent at the checkout counter directly impacts your customer’s experience. That’s why our point-of-sale interface has been optimized for extreme speed, ensuring that long queues are processed efficiently and flawlessly."
      },
      {
        heading: "Why Cloud-Based POS Systems Outperform Legacy Desktop Software",
        text: "For decades, businesses relied on heavy, localized desktop software for their billing needs. These legacy systems were prone to catastrophic hard drive failures, rampant virus infections, and isolated data that managers couldn't access from home. NEXA POS revolutionizes this paradigm by offering a Cloud-Based POS System in Pakistan. By leveraging enterprise-grade cloud databases (Supabase & PostgreSQL), your sales data is backed up instantly. Owners can monitor their store’s live billing from their smartphones anywhere in the world. Furthermore, as a web application, updates are instantaneous—no manual installations or IT teams required. You always possess the latest features and security patches."
      },
      {
        heading: "Mastering the Offline-First Architecture",
        text: "One of the absolute greatest challenges for SaaS platforms in developing regions is internet stability. We built NEXA POS with an Offline-First mindset. Unlike standard web applications that display a frustrating offline dinosaur game when the connection drops, NEXA POS remains completely functional. It caches your inventory in your local cache. Your cashiers can continue to search products, add items to the cart, apply discounts, and process cash payments. The bills are held securely in a local encrypted queue. Once your connection restores, the system synchronizes the data globally. This ensures zero downtime during peak retail hours."
      },
      {
        heading: "Streamlined Cash Handling & Ledger Accuracy",
        text: "An effective POS System in Pakistan must cater to rapid consumer payment flows. NEXA POS handles cash tender smoothly, directly integrating with the backend ledgers so that at the end of a shift, you can audit the total sales with 100% data fidelity. Every single rupee is accounted for. There is no longer a need to spend hours finding mathematical discrepancies because the software calculates tax, gross totals, discounts, and net totals instantly. From the moment the payment is recorded, your digital accounting books are balanced."
      },
      {
        heading: "Scalability for Multi-Store Empires",
        text: "Are you opening a second branch? NEXA POS scales intuitively. Because the database lives in the cloud, launching a new store requires zero new software configurations. Simply log in from a new browser terminal. Product catalogs, pricing strategies, and managerial rules are globally applied across all your endpoints. This ensures absolute brand consistency and operational oversight across massive geographic distances."
      }
    ]
  },
  'inventory': {
    title: 'Real-Time Inventory Management',
    subtitle: 'Track every SKU across all locations with surgical precision and cloud persistence.',
    desc: 'Deep inventory management software that scales with your business. Get complete visibility on current stock levels, track categorization, and never accidentally oversell a product again. NEXA POS transforms chaotic stockrooms into digitally organized powerhouses.',
    benefits: ['Real-time stock deduction', 'Detailed catalog structuring', 'Simplified category filtering', 'Streamlined price management', 'Cloud-synchronized quantities'],
    sections: [
      {
        icon: BarChart3,
        title: "High-Density Tracking & Categories",
        content: "Stop wrestling with messy spreadsheets. NEXA POS allows you to structure your entire catalog into localized categories. Drill down your inventory by type, and instantly filter through your catalog during restocks or inventory audits."
      },
      {
        icon: ShieldCheck,
        title: "Immutable Stock Ledgers",
        content: "Every single sales movement is mathematically consistent. Because the POS directly ties to the inventory module, every time a cashier completes a checkout, the exact quantities are subtracted from your total stock in real-time."
      },
      {
        icon: Zap,
        title: "Total Catalog Visibility",
        content: "Instantly view the total count of distinct items across your entire retail space, ensuring your warehouse team knows exactly what exists in the system without manually counting."
      },
      {
        icon: Rocket,
        title: "Simplified Product Editing",
        content: "Quickly manage stock and pricing across your entire retail catalog. Editing product names, adjusting retail prices, or updating quantities is streamlined. The changes propagate down to every physical terminal instantly."
      }
    ],
    seoContent: [
      {
        heading: "The Power of Cloud Inventory Management Software",
        text: "Inventory is the liquid cash of your business. Mismanaging it leads to dead capital, expired goods, and lost sales revenue. Utilizing modern Inventory Management Software provides store owners with absolute visibility over their physical assets. NEXA POS utilizes highly concurrent PostgreSQL relational databases to track your stock levels dynamically. When you operate a modern POS System in Pakistan, you need software that understands the complexity of retail economics, ensuring that everything from purchasing to the final sale is meticulously recorded."
      },
      {
        heading: "Eliminating Retail Shrinkage",
        text: "Retail shrinkage—the loss of inventory due to administrative errors or shoplifting—is a massive drain on profitability. By deploying the NEXA POS Shop Management System, you establish strict digital oversight. Because every sale dictates a stock deduction, physical inventory audits quickly reveal exactly where discrepancies originate. By keeping an accurate count logged digitally, this security framework protects your profit margins."
      },
      {
        heading: "Real-Time Adjustments",
        text: "Speed is critical during receiving. When fresh stock arrives from a distributor, your warehouse team can rapidly upload or adjust inventory quantities and pricing in the dashboard. This integration between the Inventory Management Software and the point-of-sale terminal creates a harmonious, fast-paced ecosystem, lowering data-entry errors through a clean UI."
      },
      {
        heading: "Intelligent Categorization",
        text: "You cannot grow a business if you don\'t organize it correctly. By categorizing specific inventory items, business owners can engage in intelligent stock grouping. NEXA POS helps manage massive catalogs intuitively. Our comprehensive Shop Management System ensures you can always organize what your customers desire most."
      },
      {
        heading: "Data Centralization for Retail Logistics",
        text: "Operating a storefront demands centralized data. NEXA POS acts as the single source of truth for your business empire. With real-time inventory synchronization, you can monitor the stock levels of a store remotely. It simplifies logistics and ensures that you maintain absolute control over your retail footprint without needing localized IT servers."
      }
    ]
  },
  'reports': {
    title: 'Advanced Analytics & Reports',
    subtitle: 'Actionable sales insights and data visualizations, generated the moment you sell.',
    desc: 'Stop guessing and start knowing. The NEXA POS Analytics engine parses every transaction to give you beautifully rendered charts on profit margins, gross revenue, and transaction trends. This data guarantees that leaders make financially sound operational decisions.',
    benefits: ['Live profit/loss dashboards', 'Gross revenue graphical charting', 'Profit trend lines', 'Granular historical analytics', 'Custom printable views'],
    sections: [
      {
        icon: BarChart3,
        title: "Live Dashboarding",
        content: "Watch your business pulse in real-time. The main dashboard aggregates gross revenue, net profit, and total sales counts instantly as sales occur at the register. We utilize high-performance charting libraries to render this data smoothly."
      },
      {
        icon: Rocket,
        title: "Daily Revenue Charting",
        content: "NEXA POS visually graphs your sales over historical periods, helping you easily identify which days had the highest gross revenue. Understand your weekly sales cycles physically through interactive bar and line charts."
      },
      {
        icon: ShieldCheck,
        title: "Printable Sales Ledgers",
        content: "Accountants require hard data. Easily navigate through the detailed 'Sales' page to find chronological, immutable logs of every receipt printed. These records can be filtered and printed for legal tax filing and internal financial audits."
      },
      {
        icon: Clock,
        title: "Data Reliability & Speed",
        content: "Your reports are instantly generated directly from your sales ledger. No manual spreadsheet export required to know your monthly standing. Supabase handles the complex aggregations, returning your data to the dashboard in milliseconds."
      }
    ],
    seoContent: [
      {
        heading: "Data-Driven Retail Management",
        text: "In the 21st century, relying solely on intuition is a recipe for business failure. Successful enterprises rely on concrete data. NEXA POS acts as an advanced Retail POS Software that doubles as a comprehensive business intelligence tool. By analyzing massive streams of transactional data, our system compiles beautiful, intelligible graphs. This allows store owners to instantly comprehend their financial health, visualize revenue trends, and identify their highest-margin product lines without hiring an expensive data analyst."
      },
      {
        heading: "The Importance of Real-Time Profit Analytics",
        text: "Gross revenue is often a vanity metric; net profit is what sustains a business. The true power of our Shop Management System lies in its ability to automatically calculate profit margins dynamically. Because the software inherently knows the internal cost price of your inventory and the exterior retail price at checkout, every receipt generated silently computes the net gain. The executive dashboard then visualizes this profit, offering you a pristine understanding of your true financial standing."
      },
      {
        heading: "Streamlining Accounting and Tax Preparation",
        text: "Tax preparation in Pakistan, or anywhere globally, can be incredibly stressful if historical ledgers are fragmented or recorded manually on paper. The NEXA POS system digitizes the entire financial trail. The chronological sales ledger provides an unalterable history of every interaction. You can easily export or print these logs to hand over to certified public accountants, significantly reducing billable accounting hours and preventing costly taxation errors."
      },
      {
        heading: "Identifying Strategic Growth Opportunities",
        text: "Advanced reporting highlights anomalies in your business workflow. If Tuesday afternoons consistently show a major dip in transaction volume, you can utilize that data to launch targeted marketing campaigns or happy-hour discounts. Alternatively, if reporting shows a massive spike during weekends, you know exactly when to double your cashier staff to prevent long lines. Utilizing our POS System in Pakistan means deploying a scientifically optimized retail strategy."
      },
      {
        heading: "Cloud Security for Financial Ledgers",
        text: "When dealing with sensitive financial data, security is paramount. Storing accounting data on local, vulnerable hard drives exposes businesses to ransomware and physical theft. NEXA POS securely encrypts your reports in isolated cloud clusters. The robust authentication methods ensure data is kept safe, protecting your private financial state."
      }
    ]
  },
  'crm': {
    title: 'CRM & Customer Ledgers',
    subtitle: 'Track customer loyalty, manage accounts, and retain your most valuable clients.',
    desc: 'Customer relationships dictate future revenue. Maintain a highly detailed digital ledger for each customer, tracking their balances, total purchases, and contact details entirely securely in the cloud. NEXA POS enables intelligent customer interactions.',
    benefits: ['Detailed Customer CRM Profiles', 'Digital Customer Ledgers & Balances', 'Purchase History Filtering', 'Secure Contact Storage', 'Fast visual tags'],
    sections: [
      {
        icon: ShieldCheck,
        title: "Secure Customer Databases",
        content: "Keep all client information safely stored. Phone numbers, emails, addresses, and identifying parameters are easily accessible to the management team."
      },
      {
        icon: Zap,
        title: "Digital Customer Ledgers",
        content: "Managing B2B accounts or regular clients who maintain a running balance is finally easy. NEXA POS allows you to track exactly how much a customer owes your business, record partial payments, and view their complete ledger history."
      },
      {
        icon: Rocket,
        title: "Loyalty Points Tracking",
        content: "NEXA POS stores loyalty points so you can easily identify your most valuable customers, assigning VIP visual tags dynamically."
      }
    ],
    seoContent: [
      {
        heading: "Next-Generation CRM Integrated into your POS",
        text: "A standalone Customer Relationship Manager (CRM) is useful, but a CRM natively embedded into your Retail POS Software is revolutionary. NEXA POS bridges the gap between sales and relationship building. Instead of guessing who your top buyers are, the software definitively tracks lifetime value. By recording names, contacts, and historical preferences, your sales staff can provide a hyper-personalized shopping experience, greeting returning clients by name and understanding their exact purchase history."
      },
      {
        heading: "Mastering the B2B Customer Ledger Concept",
        text: "In many wholesale and regional markets, businesses operate heavily on credit or rolling balances. Traditional notebooks or generic spreadsheets fail spectacularly when trying to maintain accurate financial balances across multiple clients. The NEXA POS Shop Management System features an institutional-grade customer ledger. You can seamlessly record when a client takes goods on credit, and correctly log when they deposit partial payments. The exact accounting balance is calculated automatically, eliminating disputes over 'who owes what'."
      },
      {
        heading: "Building Long-Term Brand Loyalty",
        text: "Acquiring a new customer is significantly more expensive than retaining an existing one. Utilizing the data captured by our CRM, store owners can execute highly targeted re-engagement strategies. Knowing exactly who your VIP customers are transforms your simple POS System in Pakistan into an advanced retention platform."
      },
      {
        heading: "Data Privacy and Secure Storage",
        text: "Collecting consumer data carries immense responsibility. We engineered NEXA POS to respect data privacy boundaries. Because all information is vaulted securely within highly defended PostgreSQL structures, you are utilizing an enterprise-tier secure architecture. Roles and permissions ensure that your customer phone numbers and preferences are kept secure."
      },
      {
        heading: "The Future of Hyper-Local Retail",
        text: "We firmly believe the future of retail belongs to brands that truly understand their demographic. By digitizing your customer relationships, you pivot away from being a generic, faceless storefront into becoming a valued community hub. A digital ledger not only manages financial credit but builds immense trust. When your Shop Management System is perfectly synchronized with your actual financial reality, your operational confidence skyrockets."
      }
    ]
  },
  'users': {
    title: 'Multi-User Administration',
    subtitle: 'Manage roles and delegate operational capabilities without losing control.',
    desc: 'Scale your business by building out your workforce securely. Provide roles such as Cashier and Administrator to various employees, giving them exactly what they need, and nothing more. NEXA POS protects your sensitive analytical data.',
    benefits: ['Role Based Access Control (Admin/Cashier)', 'Database Driven Users', 'Secure Authentication Flows', 'Data Leak Prevention', 'Scalable Employee Onboarding'],
    sections: [
      {
        icon: ShieldCheck,
        title: "Role-Based Access Control",
        content: "Not all employees need to see the net profit charts. NEXA POS cleanly delineates between 'Administrators' and 'Cashiers'. Floor staff only see what they uniquely require to complete transactions, while owners retain supreme command over settings and analytics."
      },
      {
        icon: Zap,
        title: "Admin Panel Configuration",
        content: "Set up your database easily through the integrated Admin Panel. Complete control over your entire Postgres architecture allows for robust system deployments and user creations."
      },
      {
        icon: Clock,
        title: "Rapid Deployment",
        content: "If an employee joins the company, their access can be instantly created from the central database. Because the authentication is handled rapidly via Supabase cloud tokens, onboarding is secure and robust."
      }
    ],
    seoContent: [
      {
        heading: "Securing the Retail Frontier with Multi-User Systems",
        text: "One of the most dangerous flaws of legacy Desktop Billing Software was the reliance on a single shared password for all staff computers. This approach made accountability absolutely impossible. NEXA POS implements strict Role-Based Access Control (RBAC). Every cashier, floor manager, and owner receives their own unique, authenticated login credential. By distinctly identifying who is operating the POS System in Pakistan, business owners achieve complete transparency over daily operations."
      },
      {
        heading: "Preventing Internal Retail Fraud",
        text: "Unfortunately, internal shrinkage and unauthorized discounting constitute massive losses within the retail sector. By restricting specific actions—such as viewing total wholesale costs or analytics—solely to Administrator accounts, the software inherently prevents fraud. The system automatically enforces these boundaries using programmatic checks, meaning a cashier session cannot arbitrarily access the restricted administrative charts."
      },
      {
        heading: "Robust Application Foundations",
        text: "Every critical user session within the NEXA POS platform utilizes securely signed JWT tokens. When balancing the books at the end of the month, you can remain completely confident that your system wasn't compromised, fostering a culture of extreme precision within your Shop Management System."
      },
      {
        heading: "Scalable Employee Onboarding",
        text: "As your enterprise expands and you hire more floor staff, deploying software to them must be frictionless. Because NEXA POS is entirely web-based, bringing a new employee online takes practically zero time. You simply navigate to your interface, setup the database, and they login. There are no software client installations, no complex network proxy setups, and zero hardware compatibility checks necessary."
      },
      {
        heading: "Centralized Command Architecture",
        text: "The ultimate goal of our Retail POS Software is to free the business owner from the constraints of physical geography. By scaling your workforce\'s access through one unified cloud platform, you become an overarching command center. Whether you are operating three local boutiques or twenty national chain stores, the ability to utilize robust cloud credentials from a single pane of glass represents the pinnacle of modern software engineering."
      }
    ]
  },
  'cashflow': {
    title: 'Cash Flow Management',
    subtitle: 'Track every income and operational expense to realize your true net standing.',
    desc: 'With the dedicated Cash Flow module, you can track every income and expense in your business outside of purely retail sales. Log daily operational expenditures like rent, utilities, and payroll to gain a perfectly accurate net balance.',
    benefits: ['Detailed Expense Logging', 'Categorize Income vs Expenses', 'Live Net Balance Recalculation', 'Immutable Historical Records', 'Easier Tax Preparation'],
    sections: [
      {
        icon: BarChart3,
        title: 'Net Profit Tracking',
        content: 'Understand your true financial standing at a glance. By actively inputting localized operational expenses against your automated POS sales income, the dashboard will actively render your true liquid net balance.'
      },
      {
        icon: Clock,
        title: 'Chronological Logs',
        content: 'Log daily expenses manually. Scroll back through months of chronological data to pinpoint exactly where your capital is leaking, helping you restructure budgets to increase total margins.'
      },
      {
        icon: ShieldCheck,
        title: 'Isolated Financial Data',
        content: 'The cashflow ledger is kept distinct from your retail inventory sales, allowing you to clearly see the dividing line between gross product profit and overarching operational business expenses.'
      }
    ],
    seoContent: [
      {
        heading: "Beyond Retail: Holistic Business Cash Flow",
        text: "A truly powerful Shop Management System must acknowledge that a business is more than just scanning items. Operating a storefront involves rent, utility bills, employee salaries, and maintenance costs. The NEXA POS Cash Flow module bridges the gap between a standard checkout tool and a proper ERP (Enterprise Resource Planning) solution. By allowing owners to record every external expense dynamically, the software provides a holistic view of the company’s treasury, ensuring you never run into negative liquid capital due to blind spots."
      },
      {
        heading: "Dynamic Net Balance and Financial Security",
        text: "While the basic reporting dashboard shows you profit derived directly from item markups, the Cash Flow ledger illustrates your true 'take-home' reality. If your Retail POS Software reports a highly profitable month in product sales, but your Cash Flow tool highlights immense capital drain through excessive marketing expenses, you can immediately pivot your strategy. This clear demarcation of income vs. operational expenditure is the cornerstone of responsible financial engineering."
      },
      {
        heading: "Simplifying the Audit and Tax Burden",
        text: "Small to medium-sized enterprises frequently struggle during tax season due to fragmented receipts stored in shoeboxes. By strictly utilizing the NEXA POS platform to log your operational expenses alongside your daily sales, you develop a pristine, unbroken digital chain of your business’s financial history. This robust organizational habit severely reduces the hours spent by external accountants formatting your data, thereby reducing your administrative overhead substantially."
      },
      {
        heading: "Predictive Analytics and Budget Structuring",
        text: "Data is only useful if it affects future behavior. By observing your chronological expense logs, you begin to notice patterns. Perhaps utility costs spike egregiously in July, or supply chain shipping fees erode margins in December. Recognizing these trends through our POS System in Pakistan empowers you to structure intelligent predictive budgets, ensuring your cash reserves are robust enough to weather seasonal operational spikes."
      },
      {
        heading: "The Psychology of Transparent Ledgers",
        text: "Operating a business carries immense cognitive load. Wondering if your enterprise is actually profitable causes extreme stress. Adopting NEXA POS's rigorous Cash Flow tracking removes the ambiguity. When every transaction, positive or negative, is objectively recorded and displayed on an intuitive dashboard, the emotional burden lifts. You transition from hoping your business is surviving into mathematically knowing your business is thriving."
      }
    ]
  }
};

export default function FeaturePage() {
  const { featureId } = useParams();
  const feature = features[featureId as keyof typeof features];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [featureId]);

  if (!feature) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 text-center text-white">
        <h1 className="text-3xl font-bold mb-4 font-display">Feature not found</h1>
        <Link to="/home" className="text-indigo-500 hover:text-indigo-400 font-mono tracking-widest uppercase">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30 overflow-hidden">
      
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-x border-white/5 bg-black/20 backdrop-blur-3xl min-h-screen">
        <Link to="/home" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-16 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-xs tracking-widest uppercase">Back to Platform</span>
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-mono text-xs tracking-widest uppercase">
            Platform Engine Detail
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight mb-6 drop-shadow-xl">
            {feature.title}
          </h1>
          <p className="text-xl md:text-2xl font-sans font-light text-gray-400 max-w-3xl mb-16 leading-relaxed">
            {feature.subtitle}
          </p>
          
          {/* Main Hero Overview */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-16 backdrop-blur-xl shadow-2xl">
            <h3 className="text-sm font-mono text-indigo-400 tracking-widest uppercase mb-4">Architecture Brief</h3>
            <p className="text-xl text-gray-200 leading-relaxed font-light mb-12 max-w-4xl">
              {feature.desc}
            </p>
            
            <h3 className="text-sm font-mono text-indigo-400 tracking-widest uppercase mb-6">Execution Pillars</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {feature.benefits.map((b, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * i }}
                  className="bg-black/40 border border-white/5 p-4 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle className="text-indigo-500 shrink-0" size={18} />
                  <span className="text-sm text-gray-300 font-light">{b}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Detailed Massive Sections */}
          <div className="space-y-8">
             {feature.sections.map((section, idx) => {
               const Icon = section.icon;
               return (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: idx * 0.1 }}
                   className="flex flex-col md:flex-row gap-8 items-start bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-3xl p-8 hover:border-indigo-500/30 transition-colors"
                 >
                   <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                     <Icon className="text-indigo-400" size={28} />
                   </div>
                   <div>
                     <h3 className="text-2xl font-display font-bold text-white mb-4">{section.title}</h3>
                     <p className="text-gray-400 font-sans font-light leading-relaxed text-lg max-w-4xl">
                       {section.content}
                     </p>
                   </div>
                 </motion.div>
               );
             })}
          </div>

          {/* Deep Dive SEO Content */}
          {feature.seoContent && feature.seoContent.length > 0 && (
            <div className="mt-24 max-w-4xl mx-auto bg-black/40 border border-white/10 p-8 md:p-12 lg:p-16 rounded-3xl backdrop-blur-md">
              <h2 className="text-4xl font-display font-bold text-white mb-12 border-b border-white/10 pb-4">In-Depth Technical Insights & Industry Architecture</h2>
              <div className="space-y-12">
                {feature.seoContent.map((seo, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold text-indigo-300 mb-4">{seo.heading}</h3>
                    <p className="text-lg text-gray-300 font-light leading-relaxed">{seo.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
          {/* Call to action */}
          <div className="mt-32 pb-16 text-center border-t border-white/10 pt-16">
            <h2 className="text-3xl font-display font-bold mb-8">Ready to upgrade your infrastructure?</h2>
            <Link to="/signup" className="inline-flex justify-center items-center gap-3 rounded-full bg-indigo-600 px-8 py-4 text-sm font-mono tracking-widest font-bold text-white shadow-xl shadow-indigo-600/30 hover:bg-indigo-500 hover:scale-[1.02] transition-all uppercase">
              Deploy NEXA POS Platform
              <Rocket size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
