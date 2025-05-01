'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white pt-16 pb-10 mt-20 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-4 gap-10 text-sm"
      >
        <div>
          <Image src="/logos/image.png" alt="IndianCab Logo" width={160} height={60} className="mb-4" />
          <p className="text-gray-400">
            IndianCab offers reliable, fast, and comfortable rides across the city. Trusted by thousands daily.
          </p>
        </div>

        <div>
          <h4 className="text-yellow-400 font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/book" className="hover:text-yellow-300">Book Now</Link></li>
            <li><Link href="/fleet" className="hover:text-yellow-300">Fleet</Link></li>
            <li><Link href="/coverage" className="hover:text-yellow-300">Coverage</Link></li>
            <li><Link href="/testimonials" className="hover:text-yellow-300">Testimonials</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-300">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-yellow-300">FAQs</Link></li>
            <li><Link href="/faq" className="hover:text-yellow-300">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-yellow-400 font-bold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> support@indiancab.com</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 96258 18187</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 96258 18188 </li>
            <li className="flex items-center gap-2"><MapPin className="w-10 h-10" /> IndianCab HQ, New Ashok Nagar, New Delhi, India 110096</li>
          </ul>
        </div>

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
  );
}
