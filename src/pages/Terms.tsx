import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, CheckCircle } from "lucide-react";
import { PublicFooter } from "../components/layout/PublicFooter";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans p-4 md:p-8 lg:p-16">
      <div className="max-w-4xl mx-auto bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-gray-100">
        <Link
          to="/home"
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors mb-10"
        >
          <ArrowLeft size={20} />
          <span className="font-semibold uppercase tracking-wide text-sm">
            Return to Platform
          </span>
        </Link>

        <div className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
            <FileText size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Terms & Conditions
          </h1>
        </div>

        <div className="prose prose-lg text-gray-600 max-w-none space-y-8">
          <p>
            Welcome to NEXA POS! These terms and conditions outline the rules
            and regulations for the use of NEXA POS's Website and Application
            Software, located at our official Vercel deployment URL.
          </p>
          <p>
            By accessing this application and deploying our{" "}
            <strong>POS System in Pakistan</strong>, we assume you accept these
            terms and conditions. Do not continue to use NEXA POS if you do not
            agree to take all of the terms and conditions stated on this page.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="text-emerald-500" size={24} /> 1. License
              to Use
            </h2>
            <p>
              Unless otherwise stated, NEXA POS and/or its licensors own the
              intellectual property rights for all material concerning the{" "}
              <strong>Retail POS Software</strong> and the{" "}
              <strong>Inventory Management Software</strong> interfaces. All
              intellectual property rights are reserved. You may access this
              from NEXA POS for your own personal and commercial retail use
              subjected to restrictions set in these terms and conditions.
            </p>
            <p>You must not:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
              <li>
                Republish material from our{" "}
                <strong>Shop Management System</strong> UI as your own code.
              </li>
              <li>
                Sell, rent or sub-license material from the{" "}
                <strong>Billing Software</strong>.
              </li>
              <li>
                Reproduce, duplicate or copy core proprietary algorithms
                determining our offline-caching layers.
              </li>
              <li>
                Redistribute content from NEXA POS without active partnership
                agreements.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="text-emerald-500" size={24} /> 2. Data and
              Ledger Accuracy
            </h2>
            <p>
              By inserting products into our{" "}
              <strong>Inventory Management Software</strong>, you agree that you
              are solely responsible for verifying the accuracy of the monetary
              representations, stock values, and unit prices. The integrity of
              your business relies on correct data entry. While our{" "}
              <strong>Retail POS Software</strong> is engineered for
              high-frequency concurrent stability (preventing negative stocks
              utilizing RPC database transactions), any clerical human-error
              resulting in financial anomalies is exclusively the burden of the
              client utilizing our <strong>Billing Software</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="text-emerald-500" size={24} /> 3. Fair
              Usage & Abuse Prevention
            </h2>
            <p>
              An active subscription or access grant to our{" "}
              <strong>POS System in Pakistan</strong> infrastructure enables
              robust edge computing capabilities. However, users are strictly
              prohibited from implementing malicious scripts, automation bots,
              scraping architectures, or attempting forced sequential iterations
              against our login/registration portals. Our{" "}
              <strong>Shop Management System</strong> employs rate-limits to
              govern these aspects.
            </p>
            <p>
              In the event a user account attempts to destabilize the remote{" "}
              <strong>Inventory Management Software</strong> database through
              spam requests, administrative access will be revoked uniformly
              without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="text-emerald-500" size={24} /> 4. Hardware
              and Network Responsibilities
            </h2>
            <p>
              NEXA POS operates utilizing Service Workers to execute as a
              Progressive Web App. Due to its nature, while the{" "}
              <strong>Billing Software</strong> operates dynamically without an
              internet connection, it remains the merchant's fundamental
              responsibility to routinely expose the hardware to internet
              connectivity to facilitate cloud synchronizations.
            </p>
            <p>
              Failure to allow the <strong>Retail POS Software</strong> to sync
              its local IndexedDB to the centralized cloud over prolonged
              periods runs a theoretical risk of browser-cache eviction by the
              host Operating System, which could culminate in data loss. We are
              indemnified from such occurrences.
            </p>
          </section>
        </div>
      </div>
      <PublicFooter />
    </div>
  );
}
