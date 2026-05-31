import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPolicy() {
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
          <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
            <Shield size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Privacy Policy
          </h1>
        </div>

        <div className="prose prose-lg text-gray-600 max-w-none space-y-8">
          <p>
            At NEXA POS, accessible from our application platform (nexapossystem.vercel.app), one of our
            main priorities is the privacy of our visitors and registered
            clients. This Privacy Policy document contains comprehensive details on the types of information
            that is collected and recorded by NEXA POS and how we use it, in compliance with international privacy protocols including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
          </p>
          <p>
            If you have additional questions or require more information about
            our Privacy Policy regarding our{" "}
            <strong>POS System in Pakistan</strong>, do not hesitate to contact
            us. This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in NEXA POS.
          </p>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. When you register for an account with our <strong>Retail POS Software</strong>, we
              ask for your contact information, including items such as your name,
              company name, business address, email address, and telephone number. This
              information is strictly vital to provision your dedicated workspace within
              our <strong>Shop Management System</strong>.
            </p>
            <p className="mb-4">
              If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            </p>
            <p>
              Additionally, as you utilize the{" "}
              <strong>Inventory Management Software</strong>, the system
              securely processes and records your operational data. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
              <li>
                Customer contact metrics, historical product purchase logs, and CRM data.
              </li>
              <li>
                Financial logs and transactional data involving the <strong>Billing Software</strong>{" "}
                ledgers.
              </li>
              <li>
                Inventory SKU counts, categorized item variants, barcodes, and stock metadata.
              </li>
              <li>
                User analytical behaviors, session durations, and interaction metrics to optimize dashboard UI performance.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">
              The primary purpose of collecting cloud-synchronized data is to
              guarantee a seamless, operational <strong>POS System in Pakistan</strong>.
              We utilize your data in various ways, including to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
              <li>Provide, operate, and securely maintain our website and platform architecture.</li>
              <li>Improve, personalize, and expand the functionality of the <strong>Retail POS Software</strong> for faster checkout capabilities.</li>
              <li>Understand and analyze how your cashiers and managers utilize our interfaces to reduce friction and improve user experience.</li>
              <li>Develop new products, services, features, and functionalities for the <strong>Inventory Management Software</strong>, such as AI forecasting, low stock warnings, and automated reporting.</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
              <li>Send you administrative emails, transactional receipts, and support requests involving the <strong>Billing Software</strong>.</li>
              <li>Find and prevent fraudulent activities or unauthorized ledger adjustments inside the <strong>Shop Management System</strong>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              3. Log Files and Local Caching
            </h2>
            <p className="mb-4">
              NEXA POS follows a standard procedure of utilizing log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
            </p>
            <p>
              Furthermore, since our application functions as a robust Progressive Web App
              (PWA) <strong>POS System in Pakistan</strong>, it deeply
              integrates with your local browser storage mechanisms (including IndexedDB and
              LocalStorage). This is paramount to facilitate the offline-caching
              mechanisms of our <strong>Retail POS Software</strong>. The
              offline storage retains temporary records of products and queued
              bills which guarantees that your <strong>Billing Software</strong>{" "}
              will not cease operations if internet connectivity vanishes. Once connectivity restores, our{" "}
              <strong>Shop Management System</strong> synchronizes the encrypted data back
              to our secured Supabase backend infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              4. Google DoubleClick DART Cookie and AdSense
            </h2>
            <p className="mb-4">
              Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our platform and other sites on the internet. We may utilize Google AdSense advertising on our website to sustain our platform.
            </p>
            <p className="mb-4">
              Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy at the following URL: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">https://policies.google.com/technologies/ads</a>.
            </p>
            <p>
              We have implemented the following capabilities (if applicable via Google AdSense): 
              Remarketing with Google AdSense, Google Display Network Impression Reporting, and Demographics and Interests Reporting. We, along with third-party vendors such as Google use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together to compile data regarding user interactions with ad impressions and other ad service functions as they relate to our website.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              5. Advertising Partners Privacy Policies
            </h2>
            <p className="mb-4">
              You may consult this list to find the Privacy Policy for each of the advertising partners of NEXA POS.
            </p>
            <p>
              Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on NEXA POS, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit. Note that NEXA POS has no access to or control over these cookies that are used by third-party advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              6. Third-Party Privacy Policies and Infrastructure
            </h2>
            <p className="mb-4">
              NEXA POS's Privacy Policy does not apply to other advertisers or
              websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>
            <p>
              Our <strong>Inventory Management Software</strong> is
              hosted using enterprise-level infrastructure on Vercel Edge
              networks and Supabase PostgreSQL BaaS. We rely on their
              universally accepted strict data privacy regulations to ensure
              your data rests securely encrypted. Adherence to strict Row Level
              Security (RLS) ensures that distinct client branches cannot
              intersect or read unauthorized data. You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              7. CCPA Privacy Rights (Do Not Sell My Personal Information)
            </h2>
            <p className="mb-4">
              Under the CCPA, among other rights, California consumers have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
              <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
              <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
              <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
            </ul>
            <p className="mt-4">
              If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              8. GDPR Data Protection Rights
            </h2>
            <p className="mb-4">
              We would like to make sure you are fully aware of all of your data
              protection rights. Every user operating within our{" "}
              <strong>POS System in Pakistan</strong> is entitled to the
              following:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-700">
              <li>
                <strong>The right to access:</strong> You have the right to
                request copies of your personal data. We may charge you a small fee for this service, though we natively provide free export features
                built directly inside the admin panel of the{" "}
                <strong>Shop Management System</strong>.
              </li>
              <li>
                <strong>The right to rectification:</strong> You have the right
                to request that we correct any information you believe is
                inaccurate. You also have the right to request that we complete the information you believe is incomplete.
              </li>
              <li>
                <strong>The right to erasure:</strong> You have the right to
                request that we completely erase your operational databases,
                customer lists, and product matrixes from our servers, under certain conditions.
              </li>
              <li>
                <strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.
              </li>
              <li>
                <strong>The right to object to processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.
              </li>
              <li>
                <strong>The right to data portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
              </li>
            </ul>
            <p className="mt-4">
              If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at our provided support channels.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
              9. Children's Information
            </h2>
            <p className="mb-4">
              Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
            </p>
            <p>
              NEXA POS does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records out of our databases.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
