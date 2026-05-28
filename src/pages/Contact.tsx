import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Building, Clock, Search, Briefcase } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <Link to="/home" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors mb-12">
          <ArrowLeft size={20} />
          <span className="font-semibold uppercase tracking-wide text-sm">Back to Home</span>
        </Link>
        
        <header className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
            Contact NEXA POS Support
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with the leading provider of POS Systems in Pakistan. We provide dedicated assistance for our Retail POS Software, Inventory Management Software, and Billing Software solutions.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-16 mb-24">
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject (e.g. Retail POS Software Inquiry)</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="How does your billing software work?" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                <textarea rows={5} className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell us more about your inventory management software requirements..."></textarea>
              </div>
              <button type="button" className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-6">Our Contact Information</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you are looking to upgrade your legacy Shop Management System or deploy a brand new Retail POS Software across multiple branches in Pakistan, our team is ready to assist you. 
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Email Us</h3>
                  <p className="text-gray-600 mb-1">We aim to reply to all queries within 24 hours.</p>
                  <a href="mailto:hananirfan85@gmail.com" className="text-indigo-600 font-medium hover:underline">hananirfan85@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Call Support</h3>
                  <p className="text-gray-600 mb-1">Available Mon-Fri, 9am to 6pm (PKT).</p>
                  <p className="text-indigo-600 font-medium">+92 (XXX) XXXXXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Headquarters</h3>
                  <p className="text-gray-600">
                    NEXA POS Systems<br />
                    KFUEIT Innovation Center<br />
                    Rahim Yar Khan, Pakistan
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-2xl mt-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Clock size={20} /> Operational Hours</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between"><span>Monday - Friday</span> <span>9:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span>10:00 AM - 2:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span className="text-gray-500">Closed</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Massive SEO Content for Contact Page */}
        <section className="bg-white rounded-3xl p-10 lg:p-16 shadow-sm border border-gray-100 mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Choose NEXA POS System in Pakistan?</h2>
          <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
            <p>
              When choosing a <strong>POS System in Pakistan</strong>, businesses demand reliability, offline capabilities, and instant synchronization. At NEXA POS, our primary goal is delivering an unparalleled <strong>Shop Management System</strong> that caters specifically to the requirements of the fast-paced retail landscape. If you possess a grocery store, a fashion boutique, a high-volume restaurant, or an electronics outlet, our premium <strong>Retail POS Software</strong> is engineered to scale harmoniously with your business expansion.
            </p>
            <p>
              The most commonly asked question we receive through our contact form is whether our <strong>Billing Software</strong> can function without an active internet connection. The answer is unconditionally yes. We built NEXA POS with cutting-edge Progressive Web App (PWA) architecture. This guarantees that if your local internet drops, your Cashiers can continue processing bills locally in their browser. Then, automatically, the sales data is synced securely back to the <strong>Inventory Management Software</strong> cloud servers once connection restores. This level of robustness prevents checkout bottlenecks and ensures that you never miss a sale.
            </p>
            <h3>Extensive Billing Software Capabilities</h3>
            <p>
              Every modern retailer requires advanced metrics. It is not sufficient to simply produce receipts. A functional <strong>POS System in Pakistan</strong> must integrate deeply with stock ledgers, profitability tracking suites, and tax compliances. Our dedicated engineering team continually refines the <strong>Retail POS Software</strong> to ensure it surpasses the industry standard for performance. With integrated supplier tracking, automated shortage alerts, and dynamic product variation handling, our <strong>Inventory Management Software</strong> forms the backbone of a successful enterprise. For queries related to specialized hardware integrations—such as thermal receipt printers, barcode scanners, and cash drawers—please send us a detailed message above.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
