// ✅ FILE: src/app/faq/page.tsx
'use client';
import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { motion } from 'framer-motion';

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <Navbar />

      <section className="px-6 md:px-16 py-20 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-yellow-400 mb-10 text-center"
        >
          Frequently Asked Questions
        </motion.h1>

        <div className="space-y-8">
          {[{
            q: 'How do I book a cab with IndianCab?',
            a: 'You can book a ride through our website by filling out the booking form or contacting us directly via call or WhatsApp.'
          }, {
            q: 'Are your drivers verified?',
            a: 'Yes, all our drivers go through background checks and are verified before onboarding.'
          }, {
            q: 'Do you provide intercity cab services?',
            a: 'Yes, we offer outstation rides to major cities and towns across India.'
          }, {
            q: 'How can I cancel or reschedule my booking?',
            a: 'Please contact our support team at least 1 hour before your scheduled pickup time to make changes.'
          }].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/10 p-6 rounded-xl shadow-md"
            >
              <h3 className="text-yellow-300 font-bold text-lg mb-2">Q: {item.q}</h3>
              <p className="text-gray-300">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-16 py-20 max-w-5xl mx-auto border-t border-gray-700">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-yellow-400 mb-8 text-center"
        >
          Terms & Conditions
        </motion.h2>

        <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
          <p>1. Booking must be made at least 30 minutes before pickup time.</p>
          <p>2. Cancellations done less than 30 minutes before the ride may incur a cancellation charge.</p>
          <p>3. IndianCab is not responsible for delays caused by traffic or unforeseen road conditions.</p>
          <p>4. The rider is responsible for ensuring their belongings are not left behind in the vehicle.</p>
          <p>5. Payment must be completed before or at the end of the ride unless otherwise agreed.</p>
          <p>6. We reserve the right to modify services or pricing at any time without prior notice.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
