// src/pages/USP.tsx
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type USPItem = { title: string; text: string }

export default function USP() {
  const usps: USPItem[] = [
    { title: 'On-Time Guarantee', text: 'If we’re late for pickup beyond the grace period, your next base fare is discounted.' },
    { title: 'Safety First', text: 'Background-verified drivers, SOS support, and live trip sharing.' },
    { title: 'Transparent Billing', text: 'No surge shocks. See your fare before you ride.' },
    { title: 'Clean Cars', text: 'Regularly sanitized, inspected vehicles.' },
    { title: 'Local Expertise', text: 'Routes optimized for Delhi traffic in real-time.' },
    { title: 'Priority Support', text: 'WhatsApp-first assistance, 6:00 AM–11:00 PM.' },
  ]

  // Scroll-driven animation
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Car tilt and slight vertical drift
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 0, 8])
  const yCar = useTransform(scrollYProgress, [0, 1], [20, -20])
  const shadowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.08, 0.18, 0.08])

  // Helper to stagger each USP reveal on scroll
  const rangeFor = (i: number) => {
    const step = 1 / (usps.length + 1)
    const start = i * step + 0.05
    const end = start + 0.18
    return { start, end }
  }

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <header className="section__head">
          <h1>Ensuring a Comfortable and Reliable Ride</h1>
          <p>Our unique selling points that customers love.</p>
        </header>
      </div>

      {/* Sticky scene */}
      <div className="usp-scene">
        <div className="usp-sticky">
          {/* Left column of USP bullets */}
          <div className="usp-col usp-col--left">
            {usps.slice(0, Math.ceil(usps.length / 2)).map((u, i) => {
              const { start, end } = rangeFor(i)
              const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
              const y = useTransform(scrollYProgress, [start, end], [24, 0])
              return (
                <motion.article key={u.title} style={{ opacity, y }} className="usp-card">
                  <div className="usp-icon" />
                  <div>
                    <h3>{u.title}</h3>
                    <p>{u.text}</p>
                  </div>
                </motion.article>
              )
            })}
          </div>

          {/* Car in the center */}
          <div className="usp-center">
            <motion.div className="car-wrap" style={{ rotate, y: yCar }}>
              <img
                src="/top-view.webp"
                alt="Car top view"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 26 }}
              />
              <motion.div className="car-shadow" style={{ opacity: shadowOpacity }} />
            </motion.div>
          </div>

          {/* Right column of USP bullets */}
          <div className="usp-col usp-col--right">
            {usps.slice(Math.ceil(usps.length / 2)).map((u, j) => {
              const i = j + Math.ceil(usps.length / 2)
              const { start, end } = rangeFor(i)
              const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
              const y = useTransform(scrollYProgress, [start, end], [24, 0])
              return (
                <motion.article key={u.title} style={{ opacity, y }} className="usp-card">
                  <div className="usp-icon" />
                  <div>
                    <h3>{u.title}</h3>
                    <p>{u.text}</p>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>

        {/* Spacer to guarantee we can scroll past the sticky block */}
        <div className="usp-spacer" aria-hidden />
      </div>

      {/* Component-scoped styles */}
      <style>{`
        /* Give plenty of runway for scrolling; don't hard-lock the height */
        .usp-scene {
          position: relative;
          min-height: 240vh;     /* was height: 180vh; -> use min-height for safety */
        }

        .usp-sticky {
          position: sticky;
          top: var(--nav-offset, 80px);  /* safe sticky offset below navbar */
          display: grid;
          grid-template-columns: 1fr minmax(280px, 560px) 1fr;
          align-items: center;
          gap: 24px;
          min-height: calc(100vh - 120px);
          padding-block: 12px;
        }

        /* Extra runway so the next section is always reachable (especially on iOS) */
        .usp-spacer { height: 12vh; }

        .usp-col { display: grid; gap: 18px; }
        .usp-card {
          display: grid; grid-template-columns: 44px 1fr; gap: 12px; align-items: start;
          background: var(--card); border: 1px solid var(--border); border-radius: 14px;
          padding: 14px 16px; box-shadow: var(--shadow);
        }
        .usp-card h3 { margin: 0 0 6px 0; }
        .usp-card p { margin: 0; color: var(--muted); }

        .usp-icon {
          width: 44px; height: 44px; border-radius: 12px;
          background: linear-gradient(45deg, var(--brand), var(--brand-2));
          box-shadow: 0 8px 20px var(--ring);
        }

        .usp-center { display: grid; place-items: center; }
        .car-wrap {
          position: relative;
          width: min(56vw, 460px);
          aspect-ratio: 2 / 3.8;
          display: grid; place-items: center;
          will-change: transform;   /* smoother on mobile */
        }
        .car-shadow {
          position: absolute;
          inset: auto 8% -18% 8%;
          height: 30%;
          filter: blur(26px);
          background: rgba(0,0,0,0.25);
          border-radius: 100%;
          pointer-events: none;
        }

        @media (max-width: 1100px) {
          .usp-sticky {
            grid-template-columns: 1fr;
            gap: 20px;
            min-height: calc(100vh - 140px);
          }
          .usp-col--left, .usp-col--right { order: 2; }
          .usp-center { order: 1; }
          .usp-scene { min-height: 280vh; }  /* more runway on smaller screens */
        }
      `}</style>
    </section>
  )
}
