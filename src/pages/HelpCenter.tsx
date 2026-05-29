import React from "react";
import { PublicNavbar } from "../components/layout/PublicNavbar";

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-[#030305] text-white selection:bg-indigo-500/30">
      <PublicNavbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <header className="mb-16 border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
            NEXA POS Help Center
          </h1>
          <p className="text-xl md:text-2xl font-sans font-light text-gray-400 leading-relaxed">
            Complete Help Center & User Guide for NEXA POS Software. Welcome to
            the official NEXA POS Help Center. This guide is designed to help
            business owners, retailers, shops, and store managers understand how
            to use NEXA POS effectively for daily business operations.
          </p>
        </header>

        <article className="prose prose-lg prose-invert text-gray-300 font-light max-w-none space-y-12">
          <section aria-labelledby="about-nexa-pos">
            <h2
              id="about-nexa-pos"
              className="text-3xl font-display font-bold text-white mb-6"
            >
              About NEXA POS
            </h2>
            <p>
              NEXA POS is a cloud-based retail management and point-of-sale
              software designed for modern businesses and stores. The platform
              allows businesses to manage products, customers, billing
              operations, sales records, and business analytics from one
              centralized dashboard.
            </p>
            <p className="mt-4">
              The software is built with a strong focus on:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
              <li>Simplicity</li>
              <li>Performance</li>
              <li>Responsive design</li>
              <li>Accessibility</li>
              <li>Business-focused workflows</li>
            </ul>
            <p className="mt-4">
              NEXA POS helps businesses transition from manual processes to
              organized digital operations through an easy-to-use interface and
              cloud-based system.
            </p>
          </section>

          <section aria-labelledby="dashboard-overview">
            <h2
              id="dashboard-overview"
              className="text-3xl font-display font-bold text-white mb-6"
            >
              Dashboard Overview
            </h2>
            <p>
              The dashboard is the main control center of NEXA POS. After
              logging into the software, users can access business insights,
              recent activity, sales records, and important operational
              information directly from the dashboard.
            </p>
            <p className="mt-4">The dashboard helps businesses:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
              <li>Monitor recent sales</li>
              <li>Track products</li>
              <li>View customer records</li>
              <li>Access analytics</li>
              <li>Manage store operations efficiently</li>
            </ul>
            <p className="mt-4">
              The dashboard interface is designed to provide quick access to
              important business information while maintaining a clean and
              organized user experience.
            </p>
          </section>

          <section aria-labelledby="product-management">
            <h2
              id="product-management"
              className="text-3xl font-display font-bold text-white mb-6"
            >
              Product Management System
            </h2>
            <p>
              The Product Management section allows businesses to add, edit,
              organize, and manage products within the system.
            </p>
            <p className="mt-4">Businesses can:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
              <li>Manually add products</li>
              <li>Update product details</li>
              <li>Manage pricing</li>
              <li>Organize inventory</li>
              <li>Maintain product records</li>
            </ul>
            <p className="mt-4">
              The product management system is designed for simplicity and easy
              inventory handling. Users can update product information whenever
              needed and keep product records organized for smooth business
              operations.
            </p>
            <p className="mt-4">Proper product management helps businesses:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
              <li>Improve inventory organization</li>
              <li>Simplify billing workflows</li>
              <li>Reduce manual errors</li>
              <li>Maintain accurate business records</li>
            </ul>
          </section>

          <section aria-labelledby="inventory-tracking">
            <h2
              id="inventory-tracking"
              className="text-3xl font-display font-bold text-white mb-6"
            >
              Inventory Management
            </h2>
            <p>
              Inventory management is one of the core features of NEXA POS.
              Businesses can manage stock records and maintain organized
              inventory information directly from the platform.
            </p>
            <p className="mt-4">The inventory management system helps:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
              <li>Track available products</li>
              <li>Monitor inventory records</li>
              <li>Organize stock information</li>
              <li>Improve operational management</li>
            </ul>
            <p className="mt-4">
              Keeping inventory records updated helps businesses maintain better
              control over products and sales activities.
            </p>
          </section>

          <section aria-labelledby="billing-pos">
            <h2
              id="billing-pos"
              className="text-3xl font-display font-bold text-white mb-6"
            >
              Billing & POS System
            </h2>
            <p>
              The billing system is designed to provide fast and smooth checkout
              experiences for businesses and retail stores.
            </p>
            <p className="mt-4">Using the POS system, businesses can:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
              <li>Generate bills</li>
              <li>Create customer receipts</li>
              <li>Process sales</li>
              <li>Maintain sales records</li>
            </ul>
            <p className="mt-4">
              The POS system is optimized for simplicity and usability, helping
              businesses complete transactions efficiently.
            </p>
            <p className="mt-4">NEXA POS focuses on providing:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
              <li>Fast billing workflows</li>
              <li>Organized receipt generation</li>
              <li>Clean billing interfaces</li>
              <li>Efficient sales management</li>
            </ul>
          </section>

          <section aria-labelledby="receipts">
            <h2
              id="receipts"
              className="text-3xl font-display font-bold text-white mb-6"
            >
              Customizable Receipt System
            </h2>
            <p>
              NEXA POS includes customizable receipt functionality that allows
              businesses to personalize billing receipts according to store
              information and branding preferences.
            </p>
            <p className="mt-4">Businesses can customize:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
              <li>Store names</li>
              <li>Receipt information</li>
              <li>Billing details</li>
              <li>Receipt layouts available within the software</li>
            </ul>
            <p className="mt-4">
              Customizable receipts help businesses maintain professional
              customer interactions and improve brand identity during billing
              operations.
            </p>
          </section>

          <section aria-labelledby="crm">
            <h2
              id="crm"
              className="text-3xl font-display font-bold text-white mb-6"
            >
              CRM & Customer Management
            </h2>
            <p>
              The CRM (Customer Relationship Management) system helps businesses
              organize and manage customer information directly within the
              platform.
            </p>
            <p className="mt-4">Businesses can:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
              <li>Add customer details</li>
              <li>Maintain customer records</li>
              <li>Access customer history</li>
              <li>Organize client information efficiently</li>
            </ul>
            <p className="mt-4">
              The CRM system helps improve customer management and supports
              better record organization for business operations. Maintaining
              customer records digitally helps businesses improve organization,
              maintain transaction history, and simplify customer management
              workflows.
            </p>
          </section>

          <section aria-labelledby="ledgers">
            <h2
              id="ledgers"
              className="text-3xl font-display font-bold text-white mb-6"
            >
              Customer Ledger System
            </h2>
            <p>
              The customer ledger feature helps businesses manage customer
              financial records and transaction-related information.
            </p>
            <p className="mt-4">Businesses can:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
              <li>Maintain ledger entries</li>
              <li>Organize customer transaction records</li>
              <li>Monitor customer-related financial activities</li>
            </ul>
            <p className="mt-4">
              The ledger system is designed to provide organized record
              management while helping businesses maintain better financial
              tracking processes.
            </p>
          </section>

          <section aria-labelledby="cashflow">
            <h2
              id="cashflow"
              className="text-3xl font-display font-bold text-white mb-6"
            >
              Cash Flow Management
            </h2>
            <p>
              Cash flow management is an important part of business operations,
              and NEXA POS includes a dedicated system for tracking and
              organizing cash flow activities.
            </p>
            <p className="mt-4">Businesses can:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
              <li>Monitor cash records</li>
              <li>Organize transaction history</li>
              <li>Maintain financial activity records</li>
            </ul>
            <p className="mt-4">
              This helps improve operational visibility and financial
              organization within the business workflow.
            </p>
          </section>

          <section aria-labelledby="analytics">
            <h2
              id="analytics"
              className="text-3xl font-display font-bold text-white mb-6"
            >
              Sales Analytics & Reports
            </h2>
            <p>
              NEXA POS includes analytics and reporting functionality that helps
              businesses understand sales activity and operational trends.
            </p>
            <p className="mt-4">
              The analytics system provides insights related to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
              <li>Sales activity</li>
              <li>Recent performance</li>
              <li>Business records</li>
              <li>Operational data</li>
            </ul>
            <p className="mt-4">
              The software includes analytics functionality for recent business
              activity, including last 30 days business insights and reporting
              features. Analytics help businesses understand operational
              performance, review sales records, and improve business
              decision-making processes.
            </p>
          </section>

          <section aria-labelledby="sales-history">
            <h2
              id="sales-history"
              className="text-3xl font-display font-bold text-white mb-6"
            >
              Sales History Management
            </h2>
            <p>
              The sales history feature helps businesses maintain organized
              records of completed transactions and sales activities.
            </p>
            <p className="mt-4">Businesses can:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
              <li>Access previous sales records</li>
              <li>Review transaction history</li>
              <li>Maintain organized business data</li>
            </ul>
            <p className="mt-4">
              Maintaining sales history digitally improves record management and
              operational transparency.
            </p>
          </section>

          <section aria-labelledby="activity-records">
            <h2
              id="activity-records"
              className="text-3xl font-display font-bold text-white mb-6"
            >
              Activity & Record Management
            </h2>
            <p>
              The activity and record management system helps businesses monitor
              operational activities within the platform.
            </p>
            <p className="mt-4">This feature allows users to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
              <li>Track system activities</li>
              <li>Monitor operational records</li>
              <li>Maintain organized business workflows</li>
            </ul>
            <p className="mt-4">
              Activity tracking improves operational visibility and helps
              businesses maintain better organizational control.
            </p>
          </section>

          <section aria-labelledby="multi-store">
            <h2
              id="multi-store"
              className="text-3xl font-display font-bold text-white mb-6"
            >
              Multi-Store Management
            </h2>
            <p>
              NEXA POS supports multi-store business operations, allowing
              businesses to manage multiple stores from a centralized platform.
            </p>
            <p className="mt-4">Businesses can:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
              <li>Manage separate store operations</li>
              <li>Organize store-related activities</li>
              <li>Access centralized management features</li>
            </ul>
            <p className="mt-4">
              This functionality helps growing businesses manage operations more
              efficiently across multiple store environments.
            </p>
          </section>

          <section aria-labelledby="admin-approval">
            <h2
              id="admin-approval"
              className="text-3xl font-display font-bold text-white mb-6"
            >
              Admin Approval System
            </h2>
            <p>
              The software includes an admin approval process for account access
              and platform management.
            </p>
            <p className="mt-4">After signup, users can:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
              <li>Request access</li>
              <li>Wait for approval</li>
              <li>Access the dashboard after authorization</li>
            </ul>
            <p className="mt-4">
              This process helps maintain controlled access and organized
              platform management.
            </p>
          </section>

          <section aria-labelledby="support-system">
            <h2
              id="support-system"
              className="text-3xl font-display font-bold text-white mb-6"
            >
              Support & Help System
            </h2>
            <p>
              NEXA POS includes a support messaging system that allows users to
              contact the admin if they face difficulties or require assistance
              while using the platform.
            </p>
            <p className="mt-4">Businesses can:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
              <li>Report issues</li>
              <li>Ask for support</li>
              <li>Communicate regarding platform-related problems</li>
            </ul>
            <p className="mt-4">
              The help and support system is designed to improve user experience
              and maintain smooth software operations.
            </p>
          </section>

          <section aria-labelledby="cloud-access">
            <h2
              id="cloud-access"
              className="text-3xl font-display font-bold text-white mb-6"
            >
              Cloud-Based Accessibility
            </h2>
            <p>
              NEXA POS is a cloud-based platform, allowing businesses to access
              the system online through supported devices and internet
              connectivity.
            </p>
            <p className="mt-4">Cloud accessibility helps businesses:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
              <li>Manage operations digitally</li>
              <li>Access data online</li>
              <li>Maintain operational flexibility</li>
            </ul>
            <p className="mt-4">
              The platform is designed with responsive layouts and
              accessibility-focused development practices to support smooth
              usage across multiple devices.
            </p>
          </section>

          <section aria-labelledby="mobile-experience">
            <h2
              id="mobile-experience"
              className="text-3xl font-display font-bold text-white mb-6"
            >
              Responsive Design & Mobile Experience
            </h2>
            <p>
              NEXA POS is developed with responsive design principles to improve
              usability across desktop and mobile devices.
            </p>
            <p className="mt-4">The interface is optimized for:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
              <li>Accessibility</li>
              <li>Mobile responsiveness</li>
              <li>Performance</li>
              <li>Organized user experience</li>
            </ul>
            <p className="mt-4">
              Responsive design helps businesses operate the system efficiently
              across different screen sizes and environments.
            </p>
          </section>

          <section aria-labelledby="performance-ux">
            <h2
              id="performance-ux"
              className="text-3xl font-display font-bold text-white mb-6"
            >
              Performance & User Experience
            </h2>
            <p>
              Performance optimization is an important part of the NEXA POS
              platform. The software is designed to provide:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
              <li>Smooth navigation</li>
              <li>Organized workflows</li>
              <li>Fast interface interactions</li>
              <li>User-friendly operations</li>
            </ul>
            <p className="mt-4">
              The system focuses on practical usability and efficient business
              management experiences.
            </p>
          </section>

          <section aria-labelledby="why-choose">
            <h2
              id="why-choose"
              className="text-3xl font-display font-bold text-white mb-6"
            >
              Why Businesses Choose NEXA POS
            </h2>
            <p>Businesses choose NEXA POS because of its:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
              <li>Cloud-based accessibility</li>
              <li>Modern interface</li>
              <li>Organized workflows</li>
              <li>Responsive design</li>
              <li>CRM functionality</li>
              <li>Inventory management</li>
              <li>Analytics systems</li>
              <li>Business-focused features</li>
            </ul>
            <p className="mt-4">
              The software is designed to simplify retail management while
              maintaining a clean and scalable system architecture.
            </p>
          </section>

          <section aria-labelledby="benefits">
            <h2
              id="benefits"
              className="text-3xl font-display font-bold text-white mb-6"
            >
              Benefits of Using NEXA POS
            </h2>
            <p>Using NEXA POS helps businesses:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
              <li>Organize operations digitally</li>
              <li>Manage products efficiently</li>
              <li>Improve billing workflows</li>
              <li>Maintain customer records</li>
              <li>Access business analytics</li>
              <li>Simplify daily operational tasks</li>
            </ul>
            <p className="mt-4">
              The platform helps reduce manual management complexity while
              improving operational organization.
            </p>
          </section>

          <section aria-labelledby="security">
            <h2
              id="security"
              className="text-3xl font-display font-bold text-white mb-6"
            >
              Security & Data Management
            </h2>
            <p>
              NEXA POS is developed with structured cloud-based architecture and
              organized database systems to support secure operational workflows
              and data management processes.
            </p>
            <p className="mt-4">The platform focuses on:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
              <li>Organized data handling</li>
              <li>Account-based access</li>
              <li>Cloud storage systems</li>
              <li>Operational reliability</li>
            </ul>
          </section>

          <section aria-labelledby="future-growth">
            <h2
              id="future-growth"
              className="text-3xl font-display font-bold text-white mb-6"
            >
              Future Growth & Platform Improvements
            </h2>
            <p>
              NEXA POS continues to evolve through continuous optimization and
              platform improvements focused on:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-400">
              <li>Usability</li>
              <li>Business workflows</li>
              <li>Performance</li>
              <li>Accessibility</li>
              <li>Operational management</li>
            </ul>
            <p className="mt-4">
              The platform aims to provide a scalable and modern business
              management experience for growing businesses and retail
              operations.
            </p>
          </section>

          <section aria-labelledby="faq">
            <h2
              id="faq"
              className="text-3xl font-display font-bold text-white mb-8 border-t border-white/10 pt-8"
            >
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  What is NEXA POS?
                </h3>
                <p>
                  NEXA POS is a cloud-based POS and business management software
                  designed for retail stores, shops, and businesses.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Can I manage products in NEXA POS?
                </h3>
                <p>
                  Yes, businesses can add and manage products within the
                  software.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Does NEXA POS include CRM functionality?
                </h3>
                <p>
                  Yes, the platform includes customer management and CRM-related
                  features.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Can businesses generate receipts?
                </h3>
                <p>
                  Yes, businesses can generate customizable billing receipts
                  through the POS system.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Does NEXA POS support multi-store management?
                </h3>
                <p>
                  Yes, the software supports multi-store operational management.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Can I access sales history?
                </h3>
                <p>
                  Yes, businesses can maintain and access organized sales
                  history records.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Does the platform include analytics?
                </h3>
                <p>
                  Yes, NEXA POS includes analytics and reporting functionality
                  for business insights.
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="final-words">
            <h2
              id="final-words"
              className="text-3xl font-display font-bold text-white mb-6 border-t border-white/10 pt-8"
            >
              Final Words
            </h2>
            <p>
              NEXA POS is designed to help businesses simplify operations
              through a modern cloud-based business management platform focused
              on usability, organization, and operational efficiency.
            </p>
            <p className="mt-4">
              The platform combines billing systems, inventory management, CRM
              functionality, analytics, customer ledgers, cash flow management,
              and multi-store support into one centralized system designed for
              modern retail and business environments.
            </p>
            <p className="mt-4">
              This Help Center is continuously updated to help users better
              understand and efficiently use the features available within NEXA
              POS.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
