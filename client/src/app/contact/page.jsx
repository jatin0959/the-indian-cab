// ✅ FILE: src/app/contact/page.tsx
'use client';
import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="min-h-screen px-0 py-0 text-white bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <Navbar />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-yellow-400 mb-6 text-center"
      >
        Contact Us
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <h4 className="text-yellow-300 text-lg font-semibold mb-1">Head Office</h4>
            <p className="text-gray-300">IndianCab HQ, New Ashok Nagar, New Delhi, India 110096</p>
          </div>
          <div>
            <h4 className="text-yellow-300 text-lg font-semibold mb-1">Phone</h4>
            <p className="text-gray-300">+91 96258 18187</p>
            <p className="text-gray-300">+91 96258 18188</p>
          </div>
          <div>
            <h4 className="text-yellow-300 text-lg font-semibold mb-1">Email</h4>
            <p className="text-gray-300">support@indiancab.com</p>
          </div>
          <div>
            <h4 className="text-yellow-300 text-lg font-semibold mb-1">Working Hours</h4>
            <p className="text-gray-300">Monday – Sunday: 6:00 AM – 11:00 PM</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-2xl border border-yellow-400/20"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.7162988298835!2d77.273775!3d28.6677018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQwJzAzLjciTiA3N8KwMTYnMzQuOSJF!5e0!3m2!1sen!2sin!4v1714581310112!5m2!1sen!2sin"
            width="100%"
            height="350"
            allowFullScreen
            loading="lazy"
            style={{ border: 0 }}
            className="w-full h-full"
          ></iframe>
        </motion.div>
      </div>

      <div className="text-center mt-14">
        <a
          href="/book"
          className="inline-block px-8 py-3 text-sm font-semibold border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
        >
          Book a Ride or Reach Out →
        </a>
      </div>

      <Footer />
    </main>
  );
}