// src/pages/Features.tsx
import { useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

type Feature = { title: string; text: string; img: string }

export default function Features() {
  const feats: Feature[] = [
    { title: 'Live Tracking', text: 'Know where your cab is in real-time.', img: '/assets/feat-live.jpg' },
    { title: 'Upfront Pricing', text: 'No hidden fees or surge shocks.', img: '/assets/feat-pricing.jpg' },
    { title: 'Pro Drivers', text: 'Verified, courteous & trained professionals.', img: '/assets/feat-drivers.jpg' },
    { title: 'Cashless Payments', text: 'UPI, cards, and wallets supported.', img: '/assets/feat-pay.jpg' },
    { title: '24/7 Support', text: 'Always reachable when you need us.', img: '/assets/feat-support.jpg' },
    { title: 'Rewards', text: 'Earn perks on every ride.', img: '/assets/feat-rewards.jpg' },
  ]

  const [active, setActive] = useState(0)

  const headRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: headRef, offset: ['start end', 'end start'] })
  const underlineScale = useTransform(scrollYProgress, [0, 1], [0.2, 1])

  return (
    <section className="section fx-wrap">
      <div className="container">
        <header className="section__head" ref={headRef}>
          <h1>Features</h1>
          <p>Everything you expect from a modern cab service — made delightful.</p>
          <motion.span className="fx-underline" style={{ scaleX: underlineScale }} />
        </header>
      </div>

      <div className="container fx-layout">
        {/* Left: sticky showcase */}
        <div className="fx-showcase">
          <div className="fx-frame">
            {/* No blur/gradient overlays */}
            <AnimatePresence mode="popLayout">
              <motion.img
                key={active}
                src={feats[active]?.img}
                alt={feats[active]?.title}
                className="fx-img"
                loading="lazy"
                decoding="async"
                width={1200}
                height={900}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </AnimatePresence>
          </div>
          <div className="fx-showcase__caption">
            <span className="dot" />
            <strong>{feats[active]?.title}</strong>
            <span className="muted"> — {feats[active]?.text}</span>
          </div>
        </div>

        {/* Right: interactive feature cards */}
        <div className="fx-cards">
          {feats.map((f, i) => (
            <motion.article
              key={f.title}
              className={`fx-card ${active === i ? 'is-active' : ''}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -6 }}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              tabIndex={0}
              role="button"
              aria-label={`Showcase ${f.title}`}
            >
              <div className="fx-thumb">
                <img
                  src={f.img}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={480}
                  height={360}
                />
              </div>
              <div className="fx-copy">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
              <div className="fx-glow" aria-hidden />
            </motion.article>
          ))}
        </div>
      </div>

      <div className="fx-spacer" aria-hidden />

      <style>{`
        .fx-wrap {
          position: relative;
          background: var(--bg); /* removed radial tint */
        }

        .fx-underline {
          display: block;
          height: 3px; width: 180px; margin: 14px auto 0;
          background: linear-gradient(90deg, var(--brand), var(--brand-2));
          transform-origin: left center; border-radius: 4px;
        }

        .fx-layout {
          display: grid;
          grid-template-columns: 1.05fr 1.2fr;
          gap: 26px; align-items: start;
          min-height: calc(100vh - 120px);
        }

        /* Sticky showcase */
        .fx-showcase { position: sticky; top: 96px; }
        .fx-frame {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: #fff;             /* plain, no tint */
          border: 1px solid var(--border);
          box-shadow: var(--shadow);
          aspect-ratio: 16/12;
        }
        .fx-img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          filter: none !important;       /* ensure no filters apply */
          mix-blend-mode: normal;        /* no blending */
        }

        .fx-showcase__caption {
          margin-top: 10px; font-size: 0.98rem;
          display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
        }
        .fx-showcase__caption .dot {
          width: 8px; height: 8px; border-radius: 999px;
          background: linear-gradient(45deg, var(--brand), var(--brand-2));
          box-shadow: 0 0 12px var(--ring);
        }
        .fx-showcase__caption .muted { color: var(--muted); }

        /* Cards list */
        .fx-cards { display: grid; gap: 14px; }
        .fx-card {
          position: relative; display: grid;
          grid-template-columns: 90px 1fr; align-items: center; gap: 14px;
          border-radius: 16px; background: var(--card);
          border: 1px solid var(--border); box-shadow: var(--shadow);
          padding: 12px; isolation: isolate;
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .fx-card.is-active {
          border-color: rgba(245,180,0,0.45);
          box-shadow: 0 12px 26px rgba(0,0,0,0.08), 0 0 0 4px rgba(245,180,0,0.08);
        }

        .fx-thumb {
          width: 90px; height: 70px; border-radius: 12px; overflow: hidden;
          background: #fff;               /* no gradient */
          border: 1px solid var(--border);
        }
        .fx-thumb img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          filter: none !important; mix-blend-mode: normal;
        }

        .fx-copy h3 { margin: 2px 0 4px 0; }
        .fx-copy p { margin: 0; color: var(--muted); }

        .fx-glow {
          position: absolute; inset: -30% -10% auto -10%; height: 60%;
          background: radial-gradient(260px 120px at 20% 40%, rgba(245,180,0,0.18), rgba(255,214,102,0.0) 60%);
          opacity: 0; transition: opacity .25s ease; pointer-events: none; z-index: -1;
        }
        .fx-card:hover .fx-glow { opacity: 1; }

        .fx-spacer { height: 10vh; }

        @media (max-width: 1100px){
          .fx-layout { grid-template-columns: 1fr; min-height: auto; }
          .fx-showcase { position: relative; top: 0; }
        }
      `}</style>
    </section>
  )
}
