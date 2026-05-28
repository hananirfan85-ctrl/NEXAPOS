import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans p-4 md:p-8 lg:p-16">
      <div className="max-w-4xl mx-auto bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-gray-100">
        <Link to="/home" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors mb-10">
          <ArrowLeft size={20} />
          <span className="font-semibold uppercase tracking-wide text-sm">Return to Platform</span>
        </Link>

        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
            <Shield size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Privacy Policy</h1>
        </div>

        <div className="prose prose-lg text-gray-600 max-w-none space-y-8">
          <p>
            At NEXA POS, accessible from our application platform, one of our main priorities is the privacy of our visitors and registered clients. This Privacy Policy document contains types of information that is collected and recorded by NEXA POS and how we use it.
          </p>
          <p>
            If you have additional questions or require more information about our Privacy Policy regarding our <strong>POS System in Pakistan</strong>, do not hesitate to contact us.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p>
              When you register for our <strong>Retail POS Software</strong>, we ask for your contact information, including items such as name, company name, address, email address, and telephone number. This information is vital to provision your dedicated workspace within our <strong>Shop Management System</strong>.
            </p>
            <p>
              Additionally, as you utilize the <strong>Inventory Management Software</strong>, the system strictly records your operational data. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
              <li>Customer contact metrics and historical product purchase logs.</li>
              <li>Financial logs involving the <strong>Billing Software</strong> ledgers.</li>
              <li>Inventory SKU counts, categorized item variants, and metadata.</li>
              <li>User analytical behaviors to optimize dashboard UI performance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p>
              The primary purpose of collecting cloud-synchronized data is to guarantee an operational <strong>POS System in Pakistan</strong>. We utilize your data in various ways, including to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
              <li>Provide, operate, and securely maintain our website and platform architecture.</li>
              <li>Improve, personalize, and expand the functionality of the <strong>Retail POS Software</strong> for faster checkout capabilities.</li>
              <li>Understand and analyze how your cashiers and managers utilize our interfaces to reduce friction.</li>
              <li>Develop new features for the <strong>Inventory Management Software</strong>, such as AI forecasting and shortage warnings.</li>
              <li>Communicate with you directly for customer service, to provide updates, and handle support requests involving the <strong>Billing Software</strong>.</li>
              <li>Find and prevent fraudulent activities or unauthorized ledger adjustments inside the <strong>Shop Management System</strong>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Log Files and Local Caching</h2>
            <p>
              NEXA POS follows a standard procedure of utilizing log files. Since our application functions as a robust Progressive Web App (PWA) <strong>POS System in Pakistan</strong>, it deeply integrates with your local browser storage (IndexedDB and LocalStorage). This is paramount to facilitate the offline-caching mechanisms of our <strong>Retail POS Software</strong>. The offline storage retains temporary records of products and queued bills which guarantees that your <strong>Billing Software</strong> will not cease operations if internet connectivity vanishes.
            </p>
            <p>
              Once connectivity restores, our <strong>Shop Management System</strong> syncs encrypted data back to our secured Supabase backend infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Privacy Policies and Infrastructure</h2>
            <p>
              NEXA POS's Privacy Policy does not apply to other advertisers or websites. Our <strong>Inventory Management Software</strong> is hosted using enterprise-level infrastructure on Vercel Edge networks and Supabase PostgreSQL BaaS. We rely on their universally accepted strict data privacy regulations to ensure your data rests securely encrypted. Adherence to strict Row Level Security (RLS) ensures that distinct client branches cannot intersect or read unauthorized data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. CCPA & GDPR Data Protection Rights</h2>
            <p>
              We would like to make sure you are fully aware of all of your data protection rights. Every user operating within our <strong>POS System in Pakistan</strong> is entitled to the following:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
              <li><strong>The right to access:</strong> You have the right to request copies of your personal data. We provide export features built directly inside the admin panel of the <strong>Shop Management System</strong>.</li>
              <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
              <li><strong>The right to erasure:</strong> You have the right to request that we completely erase your operational databases, customer lists, and product matrixes from our servers.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
