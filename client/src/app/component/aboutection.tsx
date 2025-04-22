import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="relative py-20 px-6 md:px-16 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400"
      >
        About IndianCab – Trusted Nationwide
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-300 space-y-6 text-center"
      >
        <p>
          Welcome to <span className="text-yellow-300 font-semibold">IndianCab</span> – your all-in-one cab booking partner offering
          <span className="text-white font-semibold"> affordable and reliable taxi services pan India</span>. 
        </p>
        
        {expanded && (
          <>
            <p>
              Whether it’s a quick city ride, long-distance travel, or a last-minute airport pickup, we provide top-notch service
              in over <span className="text-yellow-300 font-semibold">500+ cities</span> with our clean, comfortable, and well-maintained fleet.
            </p>
            <p>
              We offer a wide range of vehicles – from budget sedans to premium SUVs – backed by <span className="text-white font-semibold">24/7 customer support</span> and trained, verified drivers.
              Our rides are trusted by <span className="text-yellow-300 font-semibold">thousands of users every day</span>.
            </p>
            <p>
              Enjoy <span className="text-yellow-300 font-semibold">transparent fares</span>, <span className="text-yellow-300 font-semibold">secure payment options</span>, and a <span className="text-yellow-300 font-semibold">stress-free booking experience</span>.
              IndianCab is your smart choice for modern, safe, and efficient transportation—anywhere in India.
            </p>
          </>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-6 inline-flex items-center justify-center px-6 py-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full transition duration-300 ease-in-out"
        >
          {expanded ? (
            <>
              Read Less <ChevronUp className="ml-2 w-4 h-4" />
            </>
          ) : (
            <>
              Read More <ChevronDown className="ml-2 w-4 h-4" />
            </>
          )}
        </button>
      </motion.div>
    </section>
  );
};

export default AboutSection;
