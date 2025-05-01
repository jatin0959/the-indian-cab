'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/680b36420ba5311912fea8a8/1iplsntku";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  return (
    <header className="flex items-center justify-between px-6 md:px-10 py-5 shadow-xl backdrop-blur-md bg-black/80 sticky top-0 z-50 border-b border-gray-700">
      <div className="flex items-center space-x-4">
  <Link href="/">
    <Image
      src="/logos/image.png"
      alt="IndianCab Logo"
      width={160}
      height={60}
      className="drop-shadow-xl cursor-pointer"
    />
  </Link>
</div>


      <nav className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-semibold tracking-wide">
        <Link href="/book" className="hover:text-yellow-400 transition">Book Now</Link>
        <Link href="/fleet" className="hover:text-yellow-400 transition">Fleet</Link>
        <Link href="/testimonials" className="hover:text-yellow-400 transition">Testimonials</Link>
        <Link href="/coverage" className="hover:text-yellow-400 transition">Coverage</Link>
        <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>
      </nav>

      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="focus:outline-none">
          {isMobileMenuOpen ? <X className="text-yellow-400 w-6 h-6" /> : <Menu className="text-yellow-400 w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm px-6 py-4 space-y-4 text-sm font-semibold tracking-wide text-white md:hidden">
          <Link href="/book" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-yellow-400">Book Now</Link>
          <Link href="/fleet" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-yellow-400">Fleet</Link>
          <Link href="/testimonials" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-yellow-400">Testimonials</Link>
          <Link href="/coverage" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-yellow-400">Coverage</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-yellow-400">Contact</Link>
        </div>
      )}
    </header>
  );
}