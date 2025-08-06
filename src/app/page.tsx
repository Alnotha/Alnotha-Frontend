'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [showDemoModal, setShowDemoModal] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)

  const handleGetDemo = () => {
    // In a real app, this would redirect to Calendly or similar
    setShowDemoModal(true)
  }

  const handleLogin = () => {
    // In a real app, this would redirect to login page
    setShowLoginModal(true)
  }

  const handleModalClose = () => {
    setShowDemoModal(false)
    setShowLoginModal(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-gray-900 cursor-pointer hover:text-gray-700 transition-colors">
          Alnotha
        </div>
        <div className="flex items-center gap-6">
          <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
            About
          </a>
          <button
            onClick={handleLogin}
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Log In
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center px-6 py-16">
        {/* Document illustration */}
        <div className="mb-12">
          <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto mb-8">
            <rect x="30" y="20" width="60" height="80" fill="none" stroke="#000" strokeWidth="2" rx="2"/>
            <path d="M75 20 L75 35 L90 35 Z" fill="none" stroke="#000" strokeWidth="2"/>
            <line x1="40" y1="45" x2="70" y2="45" stroke="#000" strokeWidth="1.5"/>
            <line x1="40" y1="52" x2="75" y2="52" stroke="#000" strokeWidth="1.5"/>
            <line x1="40" y1="59" x2="65" y2="59" stroke="#000" strokeWidth="1.5"/>
            <line x1="40" y1="66" x2="70" y2="66" stroke="#000" strokeWidth="1.5"/>
            <line x1="40" y1="73" x2="75" y2="73" stroke="#000" strokeWidth="1.5"/>
            <line x1="40" y1="80" x2="60" y2="80" stroke="#000" strokeWidth="1.5"/>
            {/* Hands */}
            <path d="M20 85 Q25 80 30 85 Q25 90 20 85" fill="none" stroke="#000" strokeWidth="2"/>
            <path d="M90 85 Q95 80 100 85 Q95 90 90 85" fill="none" stroke="#000" strokeWidth="2"/>
          </svg>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Slot Machine tracking made simple.
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Alontha turns machine data into actionable insights — keeping you focused on performance 
          and showing exactly where revenue is coming from.
        </p>

        <button
          onClick={handleGetDemo}
          className="bg-white border-2 border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          Get a demo →
        </button>
      </section>

      {/* Airplane Hero Image
      <section className="px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <img
              src="https://ext.same-assets.com/952798608/3473801020.png"
              alt="Airplane on runway"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section> */}

      {/* Testimonial Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="text-3xl text-gray-900 mb-8 font-light leading-relaxed">
          I believe Alnotha will elevate how slot operators manage machines, optimize performance, and drive results in real time.
        </div>

        <div className="flex items-center justify-center gap-4">
          <img
            src="https://alyantharani.com/assets/images/my-avatar.png"
            alt="Kyle Clark"
            className="w-12 h-12 rounded-full"
          />
          <div className="text-left">
            <div className="font-semibold text-gray-900">Alyan Tharani</div>
            <div className="text-sm text-gray-600">CEO, Lead Developer</div>
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-center gap-12 opacity-60 flex-wrap">
          <div className="text-lg font-semibold text-gray-500">BETA</div>
          <div className="text-lg font-bold text-gray-500">DEKA</div>
          <div className="text-lg font-light text-gray-500">Dynamic Aviation</div>
          <img src="https://ext.same-assets.com/952798608/907997980.png" alt="Bay State Milling" className="h-8" />
        </div>
      </section>

      {/* Black Value Proposition Section */}
      <section className="bg-black text-white py-20 rounded-2xl mx-6 mb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Simple circular diagram */}
          <div className="flex items-center justify-center mb-12">
            <svg width="300" height="80" viewBox="0 0 300 80" className="text-white">
              <circle cx="40" cy="40" r="25" fill="none" stroke="white" strokeWidth="2"/>
              <path d="M35 35 L40 40 L45 35" stroke="white" strokeWidth="2" fill="none"/>
              <line x1="65" y1="40" x2="235" y2="40" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <circle cx="260" cy="40" r="15" fill="white"/>
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="white"/>
                </marker>
              </defs>
            </svg>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Simplify strategy, create transparency,<br />and unlock team potential.
          </h2>

          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
            Alnotha turns vision into weekly execution by aligning teams, sharpening focus, and tapping everyone's best skills.
          </p>
        </div>
      </section>

      {/* Feature Sections */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-20">
        {/* Feature 1: Shared Strategy */}
        <div>
          <div className="text-sm font-medium text-gray-900 mb-2">Shared Strategy, Clear Priorities</div>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            One plan, shared by all — so priorities are clear and decisions are fast.
          </h3>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">Key Benefits</h4>
            <p className="text-gray-700">
              Clear roadmap, faster progress, and the ability to adapt when things change.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Why It Matters</h4>
            <p className="text-gray-700">
              50% of middle managers can't name their company's top priorities, and less than 5% of employees understand them. — <a href="https://hbr.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">HBR</a>
            </p>
          </div>
        </div>

        {/* Feature 2: Team Strengths */}
        <div>
          <div className="text-sm font-medium text-gray-900 mb-2">Surface your Team's Strengths</div>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Match every skill to high-impact work — unlocking each person's best contribution and fulfillment.
          </h3>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">Key Benefits</h4>
            <p className="text-gray-700">
              Insight into team strengths, smoother feedback loops, and smarter use of existing knowledge and interests.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Why It Matters</h4>
            <p className="text-gray-700">
              Employees stay when they can use their skills and passions — it's a top retention driver. - <a href="https://mckinsey.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">McKinsey</a>
            </p>
          </div>
        </div>

        {/* Feature 3: Weekly Action */}
        <div>
          <div className="text-sm font-medium text-gray-900 mb-2">Weekly Action, Visible to All</div>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Shared focus every week — higher accountability, zero silos.
          </h3>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">Key Benefits</h4>
            <p className="text-gray-700">
              Crystal-clear tasks and outcomes, more accountability, and open communication at every level.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Why It Matters</h4>
            <p className="text-gray-700">
              75% of cross-functional teams fail to meet goals due to misalignment and poor coordination. — <a href="https://hbr.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">HBR</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="border-t border-gray-200 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="text-2xl font-bold text-gray-900 mb-2">Alnotha</div>
            <p className="text-gray-600">Turn strategy into action.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Security</a></li>
                <li><a href="#about" className="hover:text-gray-900 transition-colors">About</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Use Cases</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Business Leaders</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Program Leads</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">R&D + Manufacturing</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Strategy Planners</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Get in touch</h4>
              <ul className="space-y-2 text-gray-600">
                <li><button onClick={() => alert('Contact form would open here')} className="hover:text-gray-900 transition-colors text-left">Send a message</button></li>
                <li><button onClick={handleGetDemo} className="hover:text-gray-900 transition-colors text-left">Schedule demo</button></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500">
            © 2025 Alnotha, LLC
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Schedule a Demo</h3>
            <p className="text-gray-600 mb-6">
              Ready to see Alnotha in action? We'd love to show you how our platform can help your team get aligned and stay focused.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => window.open('https://calendly.com/alnotha/45min', '_blank')}
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Open Calendly Scheduler
              </button>
              <button
                onClick={handleModalClose}
                className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Log In to Alnotha</h3>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Sign In
              </button>
              <button
                onClick={handleModalClose}
                className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
