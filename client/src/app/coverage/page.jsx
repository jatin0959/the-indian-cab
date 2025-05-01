// ✅ FILE: src/app/coverage/page.tsx
'use client';
import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CoveragePage() {
  const areas = [
    "Metropolitan Cities",
    "Tier-2 Towns",
    "Remote Locations",
    "Tourist Hotspots",
    "Industrial Hubs",
    "Pilgrimage Sites",
    "Coastal Cities",
    "Hill Stations"
  ];

  const topCities = [
    "Delhi",
    "Mumbai",
    "Bengaluru",
    "Hyderabad",
    "Chennai",
    "Ahmedabad",
    "Kolkata",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Varanasi",
    "Goa",
    "Shimla",
    "Manali",
    "Rishikesh"
  ];

  return (
    <main className="min-h-screen px-0 py-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <Navbar />

      <h1 className="text-4xl font-bold text-yellow-400 mb-10 text-center">We Operate Pan India</h1>

      <p className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-relaxed mb-12">
        Whether you're commuting daily or planning a weekend getaway, IndianCab is at your service. We proudly operate in <span className="text-yellow-300 font-semibold">500+ cities and towns</span> across India, ensuring reliable transportation no matter where you are.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center mb-12">
        {areas.map((area, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-2xl shadow-xl bg-gradient-to-br from-yellow-100 via-white to-yellow-50 text-black hover:shadow-2xl transition-all"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-yellow-300 flex items-center justify-center shadow-md">
              <MapPin className="w-7 h-7 text-black" />
            </div>
            <h3 className="font-bold text-lg">{area}</h3>
            <p className="text-sm text-gray-600 mt-2">IndianCab covers all types of regions with tailored transport options.</p>
          </motion.div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-yellow-300 text-center mb-6">Popular Indian Destinations We Serve</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 text-center text-sm font-medium text-gray-300">
        {topCities.map((city, index) => (
          <span key={index} className="bg-white/10 rounded-full px-4 py-2 hover:bg-yellow-300 hover:text-black transition">
            {city}
          </span>
        ))}
      </div>

      <div className="text-center mt-14">
        <a
          href="/book"
          className="inline-block px-6 py-3 text-sm font-semibold border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
        >
          Book Your Ride From Anywhere in India →
        </a>
      </div>

      <Footer />
    </main>
  );
}