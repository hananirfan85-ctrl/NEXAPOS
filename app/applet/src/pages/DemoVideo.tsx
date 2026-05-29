import React from 'react';
import { Home, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export default function DemoVideo() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <SEO 
        title="How it Works - NEXA POS Demo" 
        description="Watch our video tutorial to see how NEXA POS can streamline your inventory, sales, and billing operations."
        keywords="nexa pos demo, point of sale tutorial, how to use pos software, inventory management demo"
      />
      <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/home" className="flex items-center gap-2 group">
            <div className="bg-indigo-600 p-2 rounded-lg group-hover:bg-indigo-700 transition">
              <span className="text-white font-bold text-xl leading-none block">
                N
              </span>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-800">
              NEXA POS
            </span>
          </Link>
          <Link
            to="/home"
            className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition font-medium"
          >
            <Home size={18} />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        <section className="bg-indigo-900 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              See NEXA POS in Action
            </h1>
            <p className="text-xl text-indigo-200 max-w-2xl mx-auto leading-relaxed">
              Watch this quick demo to learn how our comprehensive point-of-sale system helps you manage inventory, sales, customers, and more—all from one intuitive dashboard.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 -mt-10">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-2 sm:p-4 relative">
              
              {/* Video Aspect Ratio Container Defaulting to 16:9 */}
              <div className="w-full relative rounded-xl overflow-hidden shadow-inner bg-black flex items-center justify-center aspect-video group">
                 {/* Placeholder for actual video / iframe, replacing with a play prompt */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4">
                    <PlayCircle size={64} className="text-white/80 group-hover:scale-110 group-hover:text-white transition-all duration-300 drop-shadow-md cursor-pointer mb-4" />
                    <p className="text-white font-medium text-lg text-center drop-shadow-md">Click to view demonstration</p>
                 </div>
                 
                 {/* Visual placeholder background, matching brand */}
                 <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-indigo-500 to-purple-600"></div>

                 {<iframe width="560" height="315" src="https://www.youtube.com/embed/8paPp1OU7jc?si=b1oe5KzTuwcbdsz_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Add Products</h3>
                <p className="text-gray-600 leading-relaxed">Learn how to easily initialize your stock, track variants, and set reorder limits before making your first sale.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Manage Sales</h3>
                <p className="text-gray-600 leading-relaxed">See the POS terminal in action. Process fast checkouts, calculate change, and print receipts effortlessly.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Track Reports</h3>
                <p className="text-gray-600 leading-relaxed">Review powerful visual analytics, export ledgers, and stay on top of your daily, weekly, and monthly cash flows.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} NEXA POS. Founded by Hanan Irfan.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-indigo-600 transition">Privacy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-indigo-600 transition">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
