
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hero__title"
          >
            Book reliable cabs in seconds.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero__subtitle"
          >
            IndianCab — smooth, safe and on‑time rides across New Delhi.
          </motion.p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="https://wa.me/919625818187" target="_blank" rel="noreferrer">Book on WhatsApp</a>
            <a className="btn btn--ghost" href="/features">See Features</a>
          </div>

          <div className="hero__badges">
            <div className="badge">On‑Time Guarantee</div>
            <div className="badge">Verified Drivers</div>
            <div className="badge">Transparent Pricing</div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hero__visual img-placeholder big"
          aria-label="Replace with hero image or mockup"
        >
          <div className="img-label">Hero image / car mockup</div>
        </motion.div>
      </div>
    </section>
  )
}
