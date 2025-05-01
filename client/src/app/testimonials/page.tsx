// ✅ FILE: src/app/testimonials/page.tsx
'use client';
import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { motion } from 'framer-motion';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Aarav Mehta",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Booking with IndianCab was effortless and quick. The driver arrived on time, and the cab was super clean. Will definitely book again!",
    },
    {
      name: "Riya Sharma",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "I used IndianCab during a solo trip — I felt safe and cared for. Loved the professional service!",
    },
    {
      name: "Kabir Singh",
      image: "https://randomuser.me/api/portraits/men/85.jpg",
      text: "Affordable pricing and premium experience. Their support team even helped me change my pickup on short notice!",
    },
    {
      name: "Priya Desai",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      text: "Loved the cleanliness and promptness. The driver even offered water bottles — truly premium service!",
    },
    {
      name: "Vikram Chauhan",
      image: "https://images.unsplash.com/photo-1573497019517-340f0ec48c7c",
      text: "Took a ride from Delhi to Jaipur — great experience and the cab was very comfortable. Highly recommend IndianCab for intercity travel.",
    },
    {
      name: "Neha Kapoor",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
      text: "I booked a luxury ride for my business meeting. The car was spotless, and the chauffeur was polite and professional.",
    },
  ];

  return (
    <main className="min-h-screen px-0 py-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <Navbar />
      <h1 className="text-4xl font-bold text-yellow-400 mb-12 text-center">What Our Riders Say</h1>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((user, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-yellow-400/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={user.image} alt={user.name} className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400" />
              <div>
                <h4 className="font-bold text-yellow-300">{user.name}</h4>
                <span className="text-sm text-gray-400">Verified Customer</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">{user.text}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-16">
        <a
          href="/book"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10 py-4 rounded-full shadow-lg transition duration-300"
        >
          Book Your Ride with Confidence →
        </a>
      </div>
      <Footer />
    </main>
  );
}