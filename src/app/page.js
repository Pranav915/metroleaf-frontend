"use client";
// Metroleaf Landing Page
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // FAQ state for collapsible answers
  const [openFAQ, setOpenFAQ] = useState(null);
  const faqs = [
    {
      q: "How do you prevent water seepage?",
      a: "We use professional-grade waterproofing and raised beds to ensure no water seeps into the terrace structure.",
    },
    {
      q: "What is the contract duration?",
      a: "Our standard contract is for 1 year, with flexible renewal options.",
    },
    {
      q: "Who maintains the garden?",
      a: "Metroleaf handles setup, maintenance, and harvesting. Societies can participate as much as they wish!",
    },
    {
      q: "What if we don't have enough terrace space?",
      a: "We assess each site and suggest optimal layouts. Even small terraces can yield surprising harvests!",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-emerald-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-16 px-4 sm:py-24 sm:px-8 bg-[url('/terrace-farming.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-green-900/40 z-0" aria-hidden="true" />
        <div className="relative z-10 max-w-2xl mx-auto text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Grow Local. Eat Fresh. Live Healthy.
          </h1>
          <p className="text-lg sm:text-2xl mb-8 font-medium drop-shadow">
            Transform your society's terrace into a thriving vegetable garden with Metroleaf.
          </p>
          <a
            href="https://forms.gle/your-google-form-link" // TODO: Replace with actual form link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors text-lg"
          >
            Express Interest
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-3xl mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-emerald-800">About Metroleaf</h2>
        <p className="text-lg text-gray-700">
          Turning unused terraces into organic vegetable gardens for healthier cities.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-emerald-800 text-center">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          {/* Step 1: Setup */}
          <div className="flex flex-col items-center">
            <span className="bg-emerald-100 p-4 rounded-full mb-4">
              <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20V10m0 0L7 15m5-5l5 5" /></svg>
            </span>
            <h3 className="font-semibold text-lg mb-2">Setup</h3>
            <p className="text-gray-600 text-center">We assess, waterproof, and install garden beds on your terrace.</p>
          </div>
          {/* Step 2: Grow */}
          <div className="flex flex-col items-center">
            <span className="bg-emerald-100 p-4 rounded-full mb-4">
              <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
            </span>
            <h3 className="font-semibold text-lg mb-2">Grow</h3>
            <p className="text-gray-600 text-center">We plant and nurture a variety of organic vegetables.</p>
          </div>
          {/* Step 3: Harvest & Deliver */}
          <div className="flex flex-col items-center">
            <span className="bg-emerald-100 p-4 rounded-full mb-4">
              <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8" /></svg>
            </span>
            <h3 className="font-semibold text-lg mb-2">Harvest & Deliver</h3>
            <p className="text-gray-600 text-center">Weekly harvests are shared with residents or delivered to your door.</p>
          </div>
          {/* Step 4: Sustain */}
          <div className="flex flex-col items-center">
            <span className="bg-emerald-100 p-4 rounded-full mb-4">
              <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v8m0 0l-4-4m4 4l4-4" /></svg>
            </span>
            <h3 className="font-semibold text-lg mb-2">Sustain</h3>
            <p className="text-gray-600 text-center">We maintain the garden and help your community thrive year-round.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-emerald-800 text-center">Benefits for Societies</h2>
        <ul className="space-y-4 text-lg">
          <li className="flex items-center gap-3"><span className="text-emerald-600"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg></span>Healthier food for residents</li>
          <li className="flex items-center gap-3"><span className="text-emerald-600"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg></span>Greener, cooler spaces</li>
          <li className="flex items-center gap-3"><span className="text-emerald-600"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg></span>Revenue-sharing (15%)</li>
          <li className="flex items-center gap-3"><span className="text-emerald-600"><svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg></span>Community development & engagement</li>
        </ul>
      </section>

      {/* Our Promise Section */}
      <section className="bg-emerald-50 py-12 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-emerald-800">Our Promise</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Weekly fresh veggie baskets grown on-site or sourced from local organic farms. Taste the difference, support your community, and eat with peace of mind.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 px-4 text-center">
        <a
          href="https://forms.gle/your-google-form-link" // TODO: Replace with actual form link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors text-lg"
        >
          Join Now
        </a>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-emerald-800 text-center">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border rounded-lg bg-white shadow-sm">
              <button
                className="w-full flex justify-between items-center p-4 text-lg font-medium text-left text-emerald-700 focus:outline-none"
                onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                aria-expanded={openFAQ === idx}
                aria-controls={`faq-${idx}`}
              >
                {faq.q}
                <span>{openFAQ === idx ? "-" : "+"}</span>
              </button>
              {openFAQ === idx && (
                <div id={`faq-${idx}`} className="p-4 pt-0 text-gray-600 border-t">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-emerald-100 py-12 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-emerald-800">Contact Us</h2>
        <div className="text-lg text-gray-700 space-y-2">
          <div>📞 <a href="tel:+919999999999" className="underline hover:text-emerald-700">+91 99999 99999</a></div>
          <div>✉️ <a href="mailto:info@metroleaf.in" className="underline hover:text-emerald-700">info@metroleaf.in</a></div>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="hover:text-emerald-700" aria-label="Instagram"><svg className="w-6 h-6 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.5" y2="6.5" /></svg></a>
            <a href="#" className="hover:text-emerald-700" aria-label="Facebook"><svg className="w-6 h-6 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a4 4 0 0 0-4 4v3H7v4h4v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z" /></svg></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-4 px-4 text-center text-sm flex flex-col sm:flex-row justify-between items-center gap-2">
        <div>© {new Date().getFullYear()} Metroleaf. All rights reserved.</div>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </footer>
    </div>
  );
}
