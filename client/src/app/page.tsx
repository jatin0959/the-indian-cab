'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CarTaxiFront, UserCheck, PhoneCall, MapPin, Menu, X } from 'lucide-react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white font-sans">
<header className="flex items-center justify-between px-6 md:px-10 py-5 shadow-xl backdrop-blur-md bg-black/80 sticky top-0 z-50 border-b border-gray-700">
  <div className="flex items-center space-x-4">
    <Image src="/logos/image.png" alt="IndianCab Logo" width={160} height={60} className="drop-shadow-xl" />
  </div>

  {/* Desktop Navigation */}
  <nav className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-semibold tracking-wide">
    <Link href="#services" className="hover:text-yellow-400 transition">Services</Link>
    <Link href="#fleet" className="hover:text-yellow-400 transition">Fleet</Link>
    <Link href="#testimonials" className="hover:text-yellow-400 transition">Testimonials</Link>
    <Link href="#coverage" className="hover:text-yellow-400 transition">Coverage</Link>
    <Link href="#contact" className="hover:text-yellow-400 transition">Contact</Link>
  </nav>

  {/* Mobile Menu Button */}
  <div className="md:hidden">
    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="focus:outline-none">
      {isMobileMenuOpen ? <X className="text-yellow-400 w-6 h-6" /> : <Menu className="text-yellow-400 w-6 h-6" />}
    </button>
  </div>
</header>

{/* Mobile Dropdown Menu */}
{isMobileMenuOpen && (
  <div className="md:hidden bg-black/90 backdrop-blur-sm px-6 py-4 space-y-4 text-sm font-semibold tracking-wide text-white">
    <Link href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-yellow-400">Services</Link>
    <Link href="#fleet" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-yellow-400">Fleet</Link>
    <Link href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-yellow-400">Testimonials</Link>
    <Link href="#coverage" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-yellow-400">Coverage</Link>
    <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-yellow-400">Contact</Link>
  </div>
)}


      <a
        href="tel:+919999999999"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-yellow-500 text-black px-5 py-3 rounded-full shadow-xl hover:bg-yellow-400 transition-transform transform hover:scale-105"
      >
        <PhoneCall className="w-5 h-5" />
        <span className="font-bold text-sm">Call Your Ride Buddy</span>
      </a>

      <section className="relative h-[95vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-yellow-400 drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)] mb-6"
          >
            Ride Smarter with <span className="text-white">IndianCab</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="text-base md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Your trusted cab booking partner for fast, safe, and reliable rides across the city — anytime, anywhere.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <Link
              href="#book"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-10 py-4 rounded-full shadow-xl transition-transform transform hover:scale-105"
            >
              Book a Ride Now
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-12 text-sm text-gray-300 tracking-wider"
          >
            Trusted by <span className="text-yellow-300 font-semibold">thousands</span> of riders every day.
          </motion.div>
        </div>
      </section>
      <section id="book" className="relative py-20 bg-black text-white px-6 md:px-16 overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-30 z-0">
          <source src="/ride-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-yellow-800/70 z-0"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold text-center mb-10 text-yellow-400"
          >
            Book Your Ride
          </motion.h2>
          <form className="grid gap-6 bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-xl">
            <input type="text" placeholder="Pickup Location" className="p-4 rounded-md bg-white/80 text-black placeholder-gray-700 w-full" />
            <input type="text" placeholder="Drop Location" className="p-4 rounded-md bg-white/80 text-black placeholder-gray-700 w-full" />
            <input type="datetime-local" className="p-4 rounded-md bg-white/80 text-black w-full" />
            <button className="bg-yellow-500 hover:bg-yellow-600 p-4 rounded-md font-bold text-black text-lg shadow-md transition">Confirm Booking</button>
          </form>
        </div>
      </section>

      <section id="services" className="bg-white text-black py-20 px-6 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Why Choose IndianCab?
        </motion.h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[{
            icon: <CarTaxiFront className="w-10 h-10 text-white" />, title: "Instant Booking", desc: "Book your cab in just a few clicks with our ultra-fast booking engine."
          }, {
            icon: <UserCheck className="w-10 h-10 text-white" />, title: "Verified Drivers", desc: "Professional and background-verified drivers to ensure your safety."
          }, {
            icon: <PhoneCall className="w-10 h-10 text-white" />, title: "24/7 Support", desc: "We’re here for you — always available, no matter the time."
          }].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-center shadow-xl p-8 rounded-3xl bg-gradient-to-br from-yellow-100 via-white to-yellow-50 hover:shadow-2xl"
            >
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400 text-white text-3xl shadow-lg">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-yellow-600 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="fleet" className="py-20 px-6 md:px-16 bg-gradient-to-br from-white to-yellow-50 text-black">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900"
        >
          Our Fleet
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.5 }}
            className="shadow-xl p-6 rounded-2xl text-center bg-white hover:shadow-2xl hover:bg-yellow-100 transition"
          >
            <div className="relative w-full h-[200px] md:h-[250px] overflow-hidden rounded-md">
              <Image src="/sedan.webp" alt="Sedan" layout="fill" objectFit="cover" className="hover:scale-105 transition-transform duration-500 contrast-[1.1] saturate-150" />
            </div>
            <h3 className="mt-4 font-bold text-xl text-yellow-600">Sedan</h3>
            <p className="text-gray-700">Comfortable rides for city and airport trips.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.5 }}
            className="shadow-xl p-6 rounded-2xl text-center bg-white hover:shadow-2xl hover:bg-yellow-100 transition"
          >
            <div className="relative w-full h-[200px] md:h-[250px] overflow-hidden rounded-md">
              <Image src="/suv.webp" alt="SUV" layout="fill" objectFit="cover" className="hover:scale-105 transition-transform duration-500 contrast-[1.1] saturate-150" />
            </div>
            <h3 className="mt-4 font-bold text-xl text-yellow-600">SUV</h3>
            <p className="text-gray-700">Spacious SUVs for family or group rides.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.5 }}
            className="shadow-xl p-6 rounded-2xl text-center bg-white hover:shadow-2xl hover:bg-yellow-100 transition"
          >
            <div className="relative w-full h-[200px] md:h-[250px] overflow-hidden rounded-md">
              <Image src="/luxury.webp" alt="Luxury" layout="fill" objectFit="cover" className="hover:scale-105 transition-transform duration-500 contrast-[1.1] saturate-150" />
            </div>
            <h3 className="mt-4 font-bold text-xl text-yellow-600">Luxury</h3>
            <p className="text-gray-700">Premium experience for business and executive rides.</p>
          </motion.div>
        </div>
      </section>

      <section id="coverage" className="py-20 px-6 md:px-16 bg-white text-black">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900"
        >
          We Operate In
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {["Mumbai", "Delhi", "Bangalore", "Hyderabad"].map((city, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-yellow-50 p-6 rounded-xl shadow hover:bg-yellow-100 text-lg font-semibold text-gray-800 flex flex-col items-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-yellow-200 flex items-center justify-center shadow-inner">
                <MapPin className="w-7 h-7 text-yellow-600" />
              </div>
              <span>{city}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white pt-16 pb-10 mt-20 px-6 md:px-16">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="grid md:grid-cols-4 gap-10 text-sm"
  >
    {/* Brand & Description */}
    <div>
      <Image src="/logos/image.png" alt="IndianCab Logo" width={160} height={60} className="mb-4" />
      <p className="text-gray-400">
        IndianCab offers reliable, fast, and comfortable rides across the city. Trusted by thousands daily.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-yellow-400 font-bold mb-4">Quick Links</h4>
      <ul className="space-y-2">
        <li><Link href="#services" className="hover:text-yellow-300">Services</Link></li>
        <li><Link href="#fleet" className="hover:text-yellow-300">Fleet</Link></li>
        <li><Link href="#coverage" className="hover:text-yellow-300">Coverage</Link></li>
        <li><Link href="#testimonials" className="hover:text-yellow-300">Testimonials</Link></li>
        <li><Link href="#contact" className="hover:text-yellow-300">Contact</Link></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h4 className="text-yellow-400 font-bold mb-4">Contact Us</h4>
      <ul className="space-y-2 text-gray-400">
        <li>Email: support@indiancab.com</li>
        <li>Phone: +91 99999 99999</li>
        <li>Office: 123 City Center, New Delhi</li>
      </ul>
    </div>

    {/* Social Links */}
    <div>
      <h4 className="text-yellow-400 font-bold mb-4">Follow Us</h4>
      <div className="flex space-x-4">
        <a href="#" className="hover:scale-110 transition"><img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" /></a>
        <a href="#" className="hover:scale-110 transition"><img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" /></a>
        <a href="#" className="hover:scale-110 transition"><img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" /></a>
      </div>
    </div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.5 }}
    viewport={{ once: true }}
    className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-xs"
  >
    &copy; {new Date().getFullYear()} IndianCab. All rights reserved.
  </motion.div>
</footer>

    </main>
  );
}