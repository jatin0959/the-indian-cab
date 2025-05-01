
'use client';
import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { motion } from 'framer-motion';

export default function BookPage() {
  const [loading, setLoading] = useState(false);
  const [popupMsg, setPopupMsg] = useState<string | null>(null);
  

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
  
    const res = await fetch('/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  
    setLoading(false);
    if (res.ok) {
      setPopupMsg("🎉 Thank you for booking with IndianCab! We'll contact you shortly.");
      e.currentTarget.reset();
    } else {
      setPopupMsg("❌ Oops! Something went wrong. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <Navbar />
      <section className="relative py-20 px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto backdrop-blur-xl bg-white/10 p-10 rounded-3xl shadow-2xl border border-white/20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-yellow-400">
            Ready for a Smooth Ride?
          </h2>
          <p className="text-lg text-center text-gray-300 mb-10">
            Book your cab now and experience seamless travel with our verified drivers and sanitized vehicles.
          </p>

          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" type="text" placeholder="Your Name" className="p-4 rounded-md bg-white/80 text-black placeholder-gray-700 w-full" required />
              <input name="phone" type="tel" placeholder="Phone Number" className="p-4 rounded-md bg-white/80 text-black placeholder-gray-700 w-full" required />
            </div>
            <input name="email" type="email" placeholder="Email Address" className="p-4 rounded-md bg-white/80 text-black placeholder-gray-700 w-full" required />
            <input name="pickup" type="text" placeholder="Pickup Location" className="p-4 rounded-md bg-white/80 text-black placeholder-gray-700 w-full" required />
            <input name="drop" type="text" placeholder="Drop Location" className="p-4 rounded-md bg-white/80 text-black placeholder-gray-700 w-full" required />
            <input name="datetime" type="datetime-local" className="p-4 rounded-md bg-white/80 text-black w-full" required />

            <div className="text-yellow-300 font-semibold mt-4">Select Cab Type</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {['Sedan', 'SUV', 'Luxury'].map((type, index) => (
                <label key={index} className="cursor-pointer">
                  <input name="cabType" type="radio" value={type} className="hidden peer" required />
                  <div className="peer-checked:bg-yellow-500 peer-checked:text-black bg-white/80 text-gray-800 text-center p-4 rounded-lg font-bold shadow hover:shadow-md transition duration-300">
                    {type}
                  </div>
                </label>
              ))}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 bg-yellow-500 hover:bg-yellow-600 p-4 rounded-md font-bold text-black text-lg shadow-md transition duration-300"
            >
              {loading ? 'Sending...' : 'Get My Ride Quote'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">Your details are safe with us. We never spam.</p>
        </motion.div>
      </section>
      <Footer />
      {popupMsg && (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
    onClick={() => setPopupMsg(null)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-white text-black p-6 rounded-2xl shadow-xl max-w-md w-full text-center"
    >
      <h3 className="text-xl font-semibold mb-3">Booking Status</h3>
      <p className="text-gray-700">{popupMsg}</p>
      <button
        className="mt-6 bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded-full font-semibold"
        onClick={() => setPopupMsg(null)}
      >
        Okay
      </button>
    </div>
  </motion.div>
)}

    </main>
  );
}