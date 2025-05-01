'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CarTaxiFront, UserCheck, PhoneCall, MapPin, Menu, X, Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';
import AboutSection from './component/aboutection';
export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
const [popupMsg, setPopupMsg] = useState<string | null>(null);


  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/680b36420ba5311912fea8a8/1iplsntku";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  

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
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white font-sans">
<header className="flex items-center justify-between px-6 md:px-10 py-5 shadow-xl backdrop-blur-md bg-black/80 sticky top-0 z-50 border-b border-gray-700">
  <div className="flex items-center space-x-4">
    <Image src="/logos/image.png" alt="IndianCab Logo" width={160} height={60} className="drop-shadow-xl" />
  </div>

  {/* Desktop Navigation */}
  <nav className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-semibold tracking-wide">
    <Link href="/book" className="hover:text-yellow-400 transition">Book Now</Link>
    <Link href="/fleet" className="hover:text-yellow-400 transition">Fleet</Link>
    <Link href="/testimonials" className="hover:text-yellow-400 transition">Testimonials</Link>
    <Link href="/coverage" className="hover:text-yellow-400 transition">Coverage</Link>
    <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>
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
    <Link href="/book" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-yellow-400">Book Now</Link>
    <Link href="/fleet" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-yellow-400">Fleet</Link>
    <Link href="/testimonials" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-yellow-400">Testimonials</Link>
    <Link href="/coverage" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-yellow-400">Coverage</Link>
    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-yellow-400">Contact</Link>
  </div>
)}

<a
  href="https://wa.me/919625818187"
  target="_blank"
  rel="noopener noreferrer"
  className="group fixed bottom-20 left-6 z-50 flex items-center gap-3 bg-green-500 text-white px-5 py-3 rounded-full shadow-xl hover:bg-green-600 transition-transform transform hover:scale-105"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-white" viewBox="0 0 32 32">
    <path d="M16 0a16 16 0 0 0-13.879 24.193L0 32l8.086-2.114A15.96 15.96 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0Zm0 29.6a13.514 13.514 0 0 1-6.9-1.846l-.493-.293-4.814 1.258 1.274-4.684-.32-.512a13.533 13.533 0 1 1 11.253 6.077Zm7.339-9.856c-.4-.2-2.356-1.167-2.724-1.3-.368-.134-.637-.2-.906.2-.268.4-1.04 1.3-1.275 1.567-.234.267-.468.3-.868.1-.4-.2-1.688-.625-3.213-1.99-1.186-1.057-1.987-2.36-2.217-2.76-.233-.4-.025-.617.175-.817.18-.18.4-.468.6-.7.2-.233.267-.4.4-.667.133-.267.066-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.325-.8-.65-.7-.868-.717h-.75c-.2 0-.518.067-.785.367s-1.03 1.004-1.03 2.434 1.053 2.823 1.199 3.017c.145.193 2.072 3.167 5.016 4.443.701.3 1.248.478 1.674.612.703.224 1.343.193 1.85.117.564-.084 1.73-.707 1.976-1.39.243-.682.243-1.267.17-1.39-.07-.123-.261-.194-.676-.393Z" />
  </svg>
  <span className="hidden group-hover:inline font-bold text-sm transition-opacity duration-300">Chat on WhatsApp</span>
</a>



<a
  href="tel:+919625818188"
  className="group fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-yellow-500 text-black px-5 py-3 rounded-full shadow-xl hover:bg-yellow-400 transition-transform transform hover:scale-105"
>
  <PhoneCall className="w-5 h-5" />
  <span className="hidden group-hover:inline font-bold text-sm transition-opacity duration-300">Call Your Ride Buddy</span>
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
      <section id="book" className="relative py-24 bg-black text-white px-6 md:px-16 overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-30 z-0">
          <source src="/ride-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-yellow-800/60 z-0"></div>

        <div className="relative z-10 max-w-3xl mx-auto backdrop-blur-xl bg-white/10 p-10 rounded-3xl shadow-2xl border border-white/20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold text-center mb-10 text-yellow-400"
          >
            Book Your Ride
          </motion.h2>

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
              {["Sedan", "SUV", "Luxury"].map((type, index) => (
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
              {loading ? 'Sending...' : 'Get a Quote'}
            </button>
          </form>
        </div>
      </section>


<section id="fleet" className="relative py-24 px-6 md:px-16 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-3xl md:text-4xl font-bold text-center mb-14 text-yellow-400"
  >
    Our Fleet
  </motion.h2>

  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {[
      {
        label: "Sedan",
        desc: "Comfortable rides for city and airport trips.",
        img: "/sedan.webp",
      },
      {
        label: "SUV",
        desc: "Spacious SUVs for family or group rides.",
        img: "/suv.webp",
      },
      {
        label: "Luxury",
        desc: "Premium experience for business and executive rides.",
        img: "/luxury.webp",
      },
    ].map((car, idx) => (
      <motion.div
        key={idx}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-tr from-yellow-50 via-white to-yellow-100 text-black rounded-3xl overflow-hidden shadow-2xl hover:shadow-yellow-300/30 transition-all duration-500"
      >
        <div className="relative w-full h-[200px] md:h-[250px] overflow-hidden">
          <Image
            src={car.img}
            alt={car.label}
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transition-transform duration-700 ease-in-out contrast-[1.1] saturate-150"
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-yellow-600 mb-2">{car.label}</h3>
          <p className="text-gray-700">{car.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>

  <div className="mt-14 text-center">
    <p className="text-gray-300 text-lg">
      Choose from a wide range of <span className="text-yellow-300 font-semibold">well-maintained, sanitized vehicles</span> that suit your comfort and budget.
    </p>
  </div>
</section>


      <section id="coverage" className="relative py-24 px-6 md:px-16 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400"
  >
    We Operate Pan India
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-relaxed mb-12"
  >
    No matter where you are — from metros to tier-2 & tier-3 towns — IndianCab brings <span className="text-yellow-300 font-semibold">safe, fast, and affordable rides</span> to your doorstep.
  </motion.p>

  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
    {["Metropolitan Cities", "Tier-2 Towns", "Remote Locations", "Tourist Hotspots"].map((area, idx) => (
      <motion.div
        key={idx}
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.4 }}
        className="p-6 rounded-2xl shadow-xl bg-gradient-to-br from-yellow-100 via-white to-yellow-50 text-black hover:shadow-2xl transition-all"
      >
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-yellow-300 flex items-center justify-center shadow-md">
          <MapPin className="w-7 h-7 text-black" />
        </div>
        <h3 className="font-bold text-lg">{area}</h3>
        <p className="text-sm text-gray-600 mt-2">IndianCab is available in all corners of the country.</p>
      </motion.div>
    ))}
  </div>

  <div className="text-center mt-14">
    <span className="inline-block px-6 py-3 text-sm font-semibold border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition">
      500+ Cities Covered & Expanding Rapidly 🚕
    </span>
  </div>
</section>
          <AboutSection/>
          <section id="contact" className="relative py-24 px-6 md:px-16 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }} 
    viewport={{ once: true }}
    className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400"
  >
    Contact Us
  </motion.h2>

  <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
    {/* Contact Info */}
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

    {/* Google Maps Location */}
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
</section>


          <section id="testimonials" className="py-24 px-6 md:px-16 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400"
  >
    What Our Riders Say
  </motion.h2>

  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {[
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
    ].map((user, idx) => (
      <motion.div
        key={idx}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
        className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-yellow-400/20"
      >
        <div className="flex items-center gap-4 mb-4">
          <img
            src={user.image}
            alt={user.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400"
          />
          <div>
            <h4 className="font-bold text-yellow-300">{user.name}</h4>
            <span className="text-sm text-gray-400">Verified Customer</span>
          </div>
        </div>
        <p className="text-gray-300 leading-relaxed">{user.text}</p>
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
        <li><Link href="#book" className="hover:text-yellow-300">Book Now</Link></li>
        <li><Link href="#fleet" className="hover:text-yellow-300">Fleet</Link></li>
        <li><Link href="#coverage" className="hover:text-yellow-300">Coverage</Link></li>
        <li><Link href="#testimonials" className="hover:text-yellow-300">Testimonials</Link></li>
        <li><Link href="#contact" className="hover:text-yellow-300">Contact</Link></li>
        <li><Link href="/faq" className="hover:text-yellow-300">FAQs</Link></li>
        <li><Link href="/faq" className="hover:text-yellow-300">Terms & Conditions</Link></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h4 className="text-yellow-400 font-bold mb-4">Contact Us</h4>
      <ul className="space-y-3 text-gray-400 break-words">
  <li className="flex items-start gap-2">
    <Mail className="w-4 h-4 mt-1" />
    <span>support@indiancab.com</span>
  </li>
  <li className="flex items-center gap-2">
    <Phone className="w-4 h-4" />
    +91 96258 18187
  </li>
  <li className="flex items-center gap-2">
    <Phone className="w-4 h-4" />
    +91 96258 18188
  </li>
  <li className="flex items-start gap-2">
    <MapPin className="w-4 h-4 mt-1" />
    <span>IndianCab HQ, New Ashok Nagar, New Delhi, India 110096</span>
  </li>
</ul>

    </div>

    {/* Social Icons */}
    <div>
      <h4 className="text-yellow-400 font-bold mb-4">Follow Us</h4>
      <div className="flex gap-4">
        <a href="#" className="hover:text-yellow-400 transition-all">
          <Facebook className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-yellow-400 transition-all">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-yellow-400 transition-all">
          <Twitter className="w-5 h-5" />
        </a>
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