import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          
          {/* Top Products */}
          <div>
            <h3 className="font-semibold mb-4">Top Products</h3>
            <ul className="space-y-2 text-sm">
              <li>Managed Website</li>
              <li>Manage Reputation</li>
              <li>Power Tools</li>
              <li>Marketing Service</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>Jobs</li>
              <li>Brand Assets</li>
              <li>Investor Relations</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-sm">
              <li>Jobs</li>
              <li>Brand Assets</li>
              <li>Investor Relations</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>Guides</li>
              <li>Research</li>
              <li>Experts</li>
              <li>Agencies</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-3">Subscribe to get updates</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="px-3 py-2 rounded-md text-black flex-1 min-w-0"
              />
              <button
                type="submit"
                className="btnStyle px-4 py-2 rounded-md text-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>







  )
}
