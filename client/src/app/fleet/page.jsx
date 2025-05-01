// ✅ FILE: src/app/fleet/page.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { motion } from 'framer-motion';

export default function FleetPage() {
  const cars = [
    {
      label: "Sedan",
      desc: "Perfect for solo or business travelers. Sleek, efficient, and comfortable rides at great value.",
      img: "https://images.unsplash.com/photo-1600369671858-43ee759d2d2f",
      cta: "Book a Sedan Now",
    },
    {
      label: "SUV",
      desc: "Spacious and powerful, ideal for family trips and off-road comfort with luggage capacity.",
      img: "https://images.unsplash.com/photo-1597001523210-90072468c2b2",
      cta: "Reserve an SUV",
    },
    {
      label: "Luxury",
      desc: "For those who demand the best. Travel in premium style with leather seats and executive touch.",
      img: "https://images.unsplash.com/photo-1609621838510-bb37f2ae5e4b",
      cta: "Ride in Luxury",
    },
    {
      label: "Auto Rickshaw",
      desc: "Quick and affordable rides for short distances within city areas. The go-to for daily commutes.",
      img: "https://images.unsplash.com/photo-1621072150129-d708181bde1e",
      cta: "Find an Auto",
    },
    {
      label: "Bike Taxi",
      desc: "Beat the traffic with our quick and budget-friendly two-wheeler taxi rides. Fast and reliable.",
      img: "https://images.unsplash.com/photo-1613636262829-e39f674ecba9",
      cta: "Hop on a Bike Taxi",
    },
    {
      label: "Outstation",
      desc: "Comfortable long-distance cabs for intercity travel. Ideal for weekend getaways and business trips.",
      img: "https://images.unsplash.com/photo-1518441744120-04eec3e203a2",
      cta: "Book Outstation Ride",
    },
    {
      label: "Electric Cabs",
      desc: "Eco-friendly electric vehicles for conscious commuters. Silent, clean, and smart travel.",
      img: "https://images.unsplash.com/photo-1625873783604-bfd7b24f46a7",
      cta: "Go Electric",
    },
    {
      label: "Tempo Traveller",
      desc: "Group travel made easy. Perfect for events, family outings, or tours with up to 12–16 passengers.",
      img: "https://images.unsplash.com/photo-1611075382348-d104b62a4b07",
      cta: "Hire a Tempo",
    },
  ];

  return (
    <main className="min-h-screen px-0 pt-0 pb-20 text-white bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <Navbar />
      <h1 className="text-4xl font-bold text-yellow-400 mb-12 text-center">Explore Our Premium Fleet</h1>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {cars.map((car, idx) => (
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
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-700 ease-in-out contrast-[1.1] saturate-150"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-yellow-600 mb-2">{car.label}</h3>
              <p className="text-gray-700 mb-4">{car.desc}</p>
              <a
                href="/book"
                className="inline-block mt-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-full shadow-md transition-transform transform hover:scale-105"
              >
                {car.cta}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-16">
        <a
          href="/book"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10 py-4 rounded-full shadow-lg transition duration-300"
        >
          Book Your Perfect Cab Now →
        </a>
      </div>
      <Footer />
    </main>
  );
}
