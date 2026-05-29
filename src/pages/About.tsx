import React from "react";
import { ArrowLeft, User, GraduationCap, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";

export default function About() {
  return (
    <div className="min-h-screen bg-[#030305] text-white selection:bg-indigo-500/30">
      <SEO 
        title="About NEXA POS | Founder Hanan Irfan" 
        description="Learn about the origins of NEXA POS and its founder, Hanan Irfan. A modern cloud-based POS and retail management system."
        keywords="about nexa pos, hanan irfan, developer, pos system founder, saas founder pakistan"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link
          to="/home"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          <span className="font-mono text-sm tracking-widest uppercase">
            Back to Platform
          </span>
        </Link>

        <div>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
            About NEXA POS
          </h1>
          <p className="text-xl md:text-2xl font-sans font-light text-gray-400 mb-12 leading-relaxed">
            NEXA POS is a next-generation Point of Sale (POS), CRM, and
            Inventory Management system designed for speed, simplicity, and
            extreme scalability. Built with a focus on immersive aesthetics and
            offline-first capabilities.
          </p>

          <div className="w-full h-px border-t border-white/10 mb-12" />

          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-8">
              The Visionaries Behind It
            </h2>

            <div className="flex flex-col gap-12">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl flex flex-col md:flex-row gap-12 items-start">
                <div className="flex-1">
                  <h3 className="text-4xl md:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 mb-6">
                    Hanan Irfan
                  </h3>
                  <div className="prose prose-lg prose-invert text-gray-300 font-light max-w-none space-y-6">
                    <p className="text-xl font-medium text-white">
                      Full-Stack Developer, SaaS Founder, SEO Expert &
                      Technology Enthusiast
                    </p>
                    <p>
                      Hanan Irfan is a Pakistani Full-Stack Developer, SaaS
                      Founder, SEO Expert, and technology enthusiast with over 2
                      years of practical experience in software development,
                      cloud-based systems, business automation platforms, and
                      search engine optimization. He is the founder and lead
                      developer of Nexa POS, a modern cloud-based POS and
                      business management platform designed to simplify
                      operations for retail stores, shops, startups, and
                      multi-store businesses.
                    </p>
                    <p>
                      Currently based in Rahim Yar Khan (RYK), Pakistan, Hanan
                      is actively focused on building scalable SaaS products,
                      modern web applications, and business-focused software
                      systems that combine performance, usability, and modern
                      technology.
                    </p>
                    <p>
                      He is currently pursuing a Bachelor of Science in Computer
                      Science (BSCS) at Khwaja Fareed University of Engineering
                      and Information Technology (KFUEIT), Pakistan. Hanan is
                      currently studying in his 5th semester with a CGPA of 3.6,
                      balancing both academic excellence and practical
                      industry-level development experience.
                    </p>
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-4 text-gray-200">
                      <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                        <GraduationCap size={24} className="text-indigo-400" />
                      </div>
                      <div>
                        <div className="font-mono text-sm uppercase tracking-widest text-indigo-300">
                          KFUEIT University
                        </div>
                        <div className="text-gray-400 mt-1 font-light">
                          BSCS (5th Semester) - CGPA: 3.6
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/3 flex justify-center shrink-0">
                  <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-indigo-500/20 shadow-[0_0_50px_-10px_rgba(99,102,241,0.5)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-800 flex items-center justify-center">
                      <span className="text-6xl lg:text-8xl font-display font-bold text-white/50">
                        <img src="https://pbs.twimg.com/profile_images/2022622427378020352/xOqGLbdb.jpg"alt="hanan irfan founder of nexa pos system" style="width=100%;height=100%;"></img>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg prose-invert max-w-none text-gray-300 font-light space-y-8">
                <div>
                  <h3 className="text-3xl font-display font-bold text-white mb-6">
                    Professional Journey
                  </h3>
                  <p>
                    Hanan Irfan started his journey in software development with
                    a strong passion for technology, digital systems, and modern
                    web applications. Over time, he expanded his expertise from
                    frontend development into full-stack development,
                    cloud-based architecture, SEO optimization, SaaS
                    development, and scalable business solutions.
                  </p>
                  <p>
                    His work focuses on solving real-world business problems
                    through software systems that are practical, accessible,
                    responsive, and performance-oriented. By combining technical
                    development with business understanding, Hanan creates
                    applications that are both visually modern and operationally
                    efficient.
                  </p>
                  <p>
                    As a developer and entrepreneur, he believes modern software
                    should not only look professional but also provide real
                    value, speed, and simplicity for users and businesses.
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-display font-bold text-white mb-6">
                    Founder of Nexa POS
                  </h3>
                  <p>
                    Hanan Irfan is the founder and lead developer behind Nexa
                    POS, a cloud-based point-of-sale and retail management
                    platform developed to help businesses digitize and manage
                    their operations more efficiently.
                  </p>
                  <p>
                    Nexa POS combines multiple business systems into one
                    centralized SaaS platform, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>POS Billing Systems</li>
                    <li>Inventory Management</li>
                    <li>CRM & Customer Records</li>
                    <li>Customer Ledger Tracking</li>
                    <li>Multi-Store Management</li>
                    <li>Cash Flow Management</li>
                    <li>Analytics & Reports</li>
                    <li>Sales History Tracking</li>
                    <li>Activity Record Systems</li>
                    <li>Customizable Receipts</li>
                    <li>Cloud Dashboard Access</li>
                  </ul>
                  <p className="mt-4">
                    The platform was designed with a clear vision: to create a
                    modern, reliable, and easy-to-use business management
                    solution for retailers and growing businesses. Unlike many
                    traditional POS systems that are difficult to use or
                    overloaded with unnecessary complexity, Nexa POS focuses
                    heavily on simplicity, user experience, scalability,
                    performance, accessibility, and practical business
                    workflows. The system continues to evolve through continuous
                    optimization, feature improvements, and user-focused
                    development practices.
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-display font-bold text-white mb-6">
                    Academic Background
                  </h3>
                  <p>
                    Hanan Irfan is currently pursuing a Bachelor of Science in
                    Computer Science (BSCS) at KFUEIT, Pakistan. Alongside his
                    academic studies, he continues to actively develop SaaS
                    products, business systems, cloud applications, SEO-focused
                    platforms, and modern web solutions.
                  </p>
                  <p>
                    Maintaining a CGPA of 3.6 while simultaneously working on
                    real-world development projects demonstrates his commitment
                    to both academic growth and professional excellence. His
                    educational background helps strengthen his understanding of
                    software engineering, system architecture, programming
                    concepts, databases, algorithms, and scalable application
                    development.
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-display font-bold text-white mb-6">
                    Leadership & Team Experience
                  </h3>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-6">
                    <h4 className="text-xl font-bold text-indigo-300 mb-4">
                      Development Team Head — ACM KFUEIT International Society
                    </h4>
                    <p>
                      Hanan Irfan currently serves as the Development Team Head
                      at ACM KFUEIT International Society, where he leads
                      technical and development-related activities within the
                      organization.
                    </p>
                    <p className="mt-4 mb-2 font-semibold text-white">
                      His responsibilities include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Managing development workflows</li>
                      <li>Coordinating with team members</li>
                      <li>Leading software-related initiatives</li>
                      <li>Planning technical projects</li>
                      <li>
                        Contributing to digital innovation within the university
                        community
                      </li>
                    </ul>
                    <p className="mt-4">
                      This leadership role has significantly strengthened his
                      communication skills, team management, project planning,
                      technical leadership, and collaborative development
                      capabilities.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-display font-bold text-white mb-6">
                    Professional Experience
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <h4 className="text-xl font-bold text-indigo-300 mb-3">
                        Developer & Teacher <br />
                        <span className="text-sm font-light text-gray-400">
                          Stars Computer Academy
                        </span>
                      </h4>
                      <p>
                        Hanan worked as both a Developer and Teacher at Stars
                        Computer Academy, where he contributed to software
                        development projects while also helping students
                        understand programming concepts and modern web
                        technologies. This role enhanced his mentoring skills,
                        technical explanation abilities, development expertise,
                        and communication with learners and teams.
                      </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <h4 className="text-xl font-bold text-indigo-300 mb-3">
                        Developer <br />
                        <span className="text-sm font-light text-gray-400">
                          Nayi Manzil
                        </span>
                      </h4>
                      <p>
                        At Nayi Manzil, Hanan Irfan worked as a developer
                        contributing to digital and software development
                        projects. Through this experience, he gained practical
                        exposure to workflow management, application
                        development, problem-solving, and project execution in
                        real environments.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#0c0c11] to-[#12121a] border border-white/10 rounded-3xl p-8 lg:p-12 mt-12">
                  <h3 className="text-3xl font-display font-bold text-white mb-8">
                    Technical Skills & Expertise
                  </h3>
                  <p className="mb-8">
                    Hanan specializes in modern full-stack web development,
                    cloud-based SaaS architecture, responsive design systems,
                    and SEO-focused software engineering.
                  </p>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-bold text-indigo-400 mb-4 border-b border-white/10 pb-2">
                        Core Expertise
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>Full-Stack Web Development</li>
                        <li>SaaS Product Development</li>
                        <li>Technical & On-Page SEO</li>
                        <li>POS & Retail Management Systems</li>
                        <li>Inventory Management Solutions</li>
                        <li>CRM Development</li>
                        <li>Cloud-Based Application Development</li>
                        <li>Business Automation Systems</li>
                        <li>UI/UX Focused Development</li>
                        <li>Dashboard & Analytics Systems</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-indigo-400 mb-4 border-b border-white/10 pb-2">
                        Technologies Stack
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>Next.js & React.js</li>
                        <li>TypeScript & JavaScript</li>
                        <li>Tailwind CSS</li>
                        <li>Supabase & PostgreSQL</li>
                        <li>Firebase</li>
                        <li>REST APIs</li>
                        <li>Vercel Deployment</li>
                        <li>Cloud Services</li>
                        <li>Responsive UI Systems</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-indigo-400 mb-4 border-b border-white/10 pb-2">
                        SEO Specialization
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li>Technical & On-Page SEO</li>
                        <li>Semantic HTML Structure</li>
                        <li>Topical Mapping</li>
                        <li>Website Architecture Optimization</li>
                        <li>Mobile Performance Optimization</li>
                        <li>Accessibility Improvements</li>
                        <li>Core Web Vitals Optimization</li>
                        <li>Search Visibility Enhancement</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-display font-bold text-white mt-12 mb-8">
                    Featured Projects & Portfolio
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <h4 className="text-xl font-bold text-indigo-300 mb-2">
                        Hanzor Store
                      </h4>
                      <a
                        href="https://hanzorstore.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-mono text-blue-400 hover:underline block mb-4"
                      >
                        hanzorstore.vercel.app
                      </a>
                      <p className="text-sm">
                        An eCommerce and online shopping platform focused on
                        responsive design, modern layouts, optimized product
                        presentation, and smooth user experience. Demonstrates
                        frontend development, responsive UI systems, SEO
                        optimization, and scalable design architecture.
                      </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <h4 className="text-xl font-bold text-indigo-300 mb-2">
                        ACM KFUEIT
                      </h4>
                      <a
                        href="https://acm-kfueit.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-mono text-blue-400 hover:underline block mb-4"
                      >
                        acm-kfueit.vercel.app
                      </a>
                      <p className="text-sm">
                        A digital platform developed for ACM KFUEIT
                        International Society featuring organizational
                        information, activities, technical events, and digital
                        presentation systems. Highlights responsive development,
                        structured UI systems, and modern organizational web
                        design.
                      </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <h4 className="text-xl font-bold text-indigo-300 mb-2">
                        Hadith Wisdom Hub
                      </h4>
                      <a
                        href="https://hadithwisdomhub0.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-mono text-blue-400 hover:underline block mb-4"
                      >
                        hadithwisdomhub0.vercel.app
                      </a>
                      <p className="text-sm">
                        An educational and informational platform focused on
                        Islamic content and hadith-related resources presented
                        in an organized and user-friendly digital format.
                        Emphasizes readability, structured content, SEO
                        optimization, and accessibility.
                      </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <h4 className="text-xl font-bold text-indigo-300 mb-2">
                        Other Key Projects
                      </h4>
                      <ul className="text-sm space-y-3">
                        <li>
                          <strong>Lahore Girls Hostel:</strong> (
                          <a
                            href="https://lahoregirlshostel.vercel.app"
                            className="text-blue-400 hover:underline"
                          >
                            Link
                          </a>
                          ) - Responsive platform for accommodation services.
                        </li>
                        <li>
                          <strong>Caesar 2026:</strong> (
                          <a
                            href="https://caesar2026.vercel.app"
                            className="text-blue-400 hover:underline"
                          >
                            Link
                          </a>
                          ) - Modern frontend responsive interfaces project.
                        </li>
                        <li>
                          <strong>Free Tools Hub:</strong> (
                          <a
                            href="https://freetoolshub1.vercel.app"
                            className="text-blue-400 hover:underline"
                          >
                            Link
                          </a>
                          ) - Web-based utility tools optimized for SEO.
                        </li>
                        <li>
                          <strong>Garden Layout Tips:</strong> (
                          <a
                            href="https://gardenlayouttips.vercel.app"
                            className="text-blue-400 hover:underline"
                          >
                            Link
                          </a>
                          ) - SEO-optimized informational website.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-3xl p-8 lg:p-12 mb-12">
                  <h3 className="text-3xl font-display font-bold text-white mb-6">
                    Development Philosophy & Vision
                  </h3>
                  <p className="mb-4">
                    Hanan Irfan believes software should be simple, scalable,
                    accessible, fast, and focused on solving practical problems.
                    Rather than building unnecessarily complicated systems, his
                    development approach focuses on creating digital products
                    that are easy to understand, easy to use, and optimized for
                    long-term growth. This philosophy is reflected strongly in
                    Nexa POS and all other projects he develops.
                  </p>
                  <p className="mb-4">
                    His long-term vision is to continue building innovative SaaS
                    platforms, cloud-based systems, and scalable business
                    applications that help businesses improve operational
                    efficiency through modern technology.
                  </p>
                  <p className="font-semibold text-white mb-2">Future Goals:</p>
                  <ul className="list-disc pl-6 space-y-1 mb-8">
                    <li>Building globally scalable SaaS systems</li>
                    <li>Improving business automation</li>
                    <li>Creating high-performance web applications</li>
                    <li>
                      Contributing to modern digital transformation solutions
                    </li>
                  </ul>

                  <div className="border-t border-indigo-500/20 pt-8 mt-8">
                    <h3 className="text-2xl font-display font-bold text-white mb-4">
                      Connect With Hanan Irfan
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href="mailto:hananirfan91@gmail.com"
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-mono text-sm transition-colors text-white border border-white/10"
                      >
                        Email: hananirfan91@gmail.com
                      </a>
                      <a
                        href="https://www.linkedin.com/in/hananirfan/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg font-mono text-sm transition-colors text-white"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold mb-6">
              Software Awareness & Philosophy
            </h2>
            <div className="prose prose-lg prose-invert max-w-none text-gray-400 font-light leading-relaxed mb-8">
              <p>
                Our core philosophy centers around providing a hyper-optimized{" "}
                <strong>POS System in Pakistan</strong> capable of empowering
                small boutiques and multi-branch retail empires alike. When we
                observed the state of <strong>Retail POS Software</strong>, we
                found clunky desktop applications that crashed on legacy
                hardware or web applications that failed miserably immediately
                upon network disconnect.
              </p>
              <p>
                By engineering NEXA POS from the ground up utilizing Vite,
                React, and Supabase via edge network rendering, we solved the
                classic synchronization dilemma. The{" "}
                <strong>Shop Management System</strong> features complete
                offline-first paradigms, which is critically essential for
                uninterrupted <strong>Billing Software</strong> in regions where
                the internet bandwidth is unreliable.
              </p>
              <h3>Robust Inventory Management Software</h3>
              <p>
                As <strong>Inventory Management Software</strong> evolves, so
                does the sheer amount of ledger complexity. NEXA POS automates
                financial cash-flows and stock deductions instantaneously. Every
                time an item is entered on the{" "}
                <strong>POS System in Pakistan</strong> terminal, background
                workers parse the transaction, verify available quantity, commit
                the sale remotely, log cashier actions, and return a successful
                payload within milliseconds. This is what enterprise scale looks
                like.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 font-light text-gray-300">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="text-white font-bold mb-3 tracking-wide">
                  Design First
                </h4>
                <p>
                  Ugly software slows people down. NEXA POS prioritizes a
                  polished, high-contrast, dark-mode-first aesthetic that
                  reduces eye strain and increases focus during high-volume
                  retail hours.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="text-white font-bold mb-3 tracking-wide">
                  Anywhere, Offline & Online
                </h4>
                <p>
                  NEXA POS works seamlessly through cutting-edge Electron
                  integration on Desktop, enabling extreme performance. Keep
                  selling offline, and sync to the cloud instantly when back
                  online.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="text-white font-bold mb-3 tracking-wide">
                  Enterprise Feature Set
                </h4>
                <p>
                  Complete with an intuitive CRM Admin Panel, automated
                  analytics, offline caching mechanisms, and secure Supabase
                  backend to keep your inventory matrix perfectly balanced at
                  all times.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="text-white font-bold mb-3 tracking-wide">
                  Install Anywhere
                </h4>
                <p>
                  Install via your browser to launch it right from your dock or
                  home screen, offering an instantaneous, app-like experience
                  backed by Service Workers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
