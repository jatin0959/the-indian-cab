// src/pages/USP.tsx
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type USPItem = { title: string; text: string; key: keyof typeof Icons }

const Icons = {
  time:   <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden><path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2Zm1 11h-4V7h2v4h2z"/></svg>,
  shield: <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden><path fill="currentColor" d="M12 2 4 5v6c0 5 3.8 9.7 8 11 4.2-1.3 8-6 8-11V5Z"/><path fill="#fff" d="M11 15 7.5 11.5 9 10l2 2 4-4 1.5 1.5z"/></svg>,
  bill:   <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden><path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14l-3-2-3 2-3-2-3 2-3-2-3 2V5a2 2 0 0 1 2-2Z"/><rect x="7" y="8" width="10" height="2" rx="1" fill="#fff"/><rect x="7" y="12" width="7" height="2" rx="1" fill="#fff"/></svg>,
  clean:  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden><path fill="currentColor" d="M4 15h16l-2 6H6zM7 4h10l2 9H5z"/><circle cx="9" cy="7" r="1" fill="#fff"/><circle cx="12" cy="7" r="1" fill="#fff"/><circle cx="15" cy="7" r="1" fill="#fff"/></svg>,
  map:    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden><path fill="currentColor" d="M9 3 3 5v16l6-2 6 2 6-2V3l-6 2Z"/><circle cx="15" cy="9" r="2" fill="#fff"/></svg>,
  support:<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden><path fill="currentColor" d="M12 4a8 8 0 0 0-8 8v2a3 3 0 0 0 3 3h1v-6H7a5 5 0 0 1 10 0v6h1a3 3 0 0 0 3-3v-2a8 8 0 0 0-8-8Z"/></svg>,
}

export default function USP() {
  const usps: USPItem[] = [
    { key: 'time',    title: 'On-Time Guarantee',   text: 'If we’re late beyond the grace period, your next base fare is discounted.' },
    { key: 'shield',  title: 'Safety First',        text: 'Background-verified drivers, SOS support, and live trip sharing.' },
    { key: 'bill',    title: 'Transparent Billing', text: 'No surge shocks. See your fare before you ride.' },
    { key: 'clean',   title: 'Clean Cars',          text: 'Regularly sanitized, inspected vehicles.' },
    { key: 'map',     title: 'Local Expertise',     text: 'Routes optimized for Delhi traffic in real-time.' },
    { key: 'support', title: 'Priority Support',    text: 'WhatsApp-first assistance, 6:00 AM–11:00 PM.' },
  ]

  const [isSmall, setIsSmall] = useState(false)
  useEffect(() => {
    const m = window.matchMedia('(max-width: 600px)')
    const h = () => setIsSmall(m.matches)
    h(); m.addEventListener('change', h); return () => m.removeEventListener('change', h)
  }, [])

  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  // car motion
  const yCar = useTransform(scrollYProgress, [0, 1], ['30vh', '-85vh'])
  const xCar = useTransform(scrollYProgress, [0, 0.5, 1], ['2vw', '0vw', '-2vw'])
  const shadowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.12, 0.22, 0.12])

  // timing helpers
  const step = 1 / (usps.length + 1)
  const rangeFor = (i: number) => {
    const start = i * step + 0.05
    const pop = start + 0.10
    const next = (i + 1) * step + 0.05
    return { start, pop, next }
  }

  // overlay anchors
  const desktopAnchors = [
    { top: '14%', left:  '6%'  },
    { top: '30%', right: '6%'  },
    { top: '48%', left:  '4%'  },
    { top: '64%', right: '4%'  },
    { top: '80%', left:  '10%' },
    { top: '92%', right: '8%'  },
  ]
  const mobileAnchors = [
    { top: '22%' }, { top: '40%' }, { top: '58%' }, { top: '76%' }, { top: '88%' }, { top: '94%' },
  ]
  const anchors = isSmall ? mobileAnchors : desktopAnchors

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <header className="section__head">
          <h1>Ensuring a Comfortable and Reliable Ride</h1>
          <p>USPs stay steady while the car glides behind them.</p>
        </header>
      </div>

      <div className="usp-scene">
        {/* moving car */}
        <div className="usp-sticky">
          <div className="usp-center">
            <motion.div className="car-wrap" style={{ x: xCar, y: yCar }}>
              <img src="/top-view.webp" alt="Car top view" className="car-img" />
              <motion.div className="car-shadow" style={{ opacity: shadowOpacity }} />
            </motion.div>
          </div>

          {/* steady overlay callouts */}
          <div className="callouts-overlay">
            {usps.map((u, i) => {
              const { start, pop, next } = rangeFor(i)

              // Desktop: pop and HOLD (cumulative)
              const opDesktop = useTransform(scrollYProgress, [start, pop, 1], [0, 1, 1])

              // Mobile: pop, HOLD until *next* starts, then fade out quickly
              const opMobile = useTransform(
                scrollYProgress,
                [start, pop, next, next + 0.03],
                [0, 1, 1, 0]
              )

              const opacity = isSmall ? opMobile : opDesktop
              const y = useTransform(scrollYProgress, [start, pop], [14, 0])
              const anchor = anchors[i] || {}

              return (
                <motion.div
                  key={u.title}
                  className={`callout ${isSmall ? 'centered' : ''}`}
                  style={{ opacity, y, ...(anchor as React.CSSProperties) }}
                >
                  <div className="callout__icon">{Icons[u.key]}</div>
                  <div className="callout__copy">
                    <strong>{u.title}</strong>
                    <span>{u.text}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="usp-spacer" aria-hidden />
      </div>

      <style>{`
        .usp-scene { position: relative; min-height: 200vh; } /* a bit tighter; no long white tail */
        .usp-sticky {
          position: sticky; top: var(--nav-offset, 80px);
          min-height: calc(100vh - 120px);
          display: grid; place-items: center;
        }
        .usp-center { display:grid; place-items:center; width:100%; }
        .car-wrap { position: relative; width: min(56vw, 520px); aspect-ratio: 2 / 3.8; }
        .car-img { width:100%; height:100%; object-fit:cover; border-radius:26px; display:block; z-index:1; }
        .car-shadow { position:absolute; inset:auto 8% -18% 8%; height:30%; filter:blur(26px); background:rgba(0,0,0,.30); border-radius:100%; pointer-events:none; z-index:0; }

        .callouts-overlay {
          position: absolute; inset: 0;
          pointer-events: none;
          width: min(1200px, 92%);
          margin-inline: auto;
          z-index: 5;
        }
        .callout {
          position: absolute; max-width: 340px;
          background:#fff; border:1px solid var(--border);
          border-radius:12px; box-shadow: var(--shadow);
          padding:12px 14px; display:grid; grid-template-columns:30px 1fr; gap:10px;
        }
        .callout__icon { width:30px; height:30px; border-radius:8px; background:linear-gradient(45deg, var(--brand), var(--brand-2)); display:grid; place-items:center; color:#111; box-shadow:0 8px 20px var(--ring); }
        .callout__copy strong { display:block; line-height:1.15; }
        .callout__copy span { display:block; color:var(--muted); font-size:.94rem; }

        .usp-spacer { height: 6vh; }

        @media (max-width: 600px) {
          .car-wrap { width: 86vw; }
          .callouts-overlay { width: 100%; }
          .callout.centered {
            left: 50% !important; right: auto !important; transform: translateX(-50%);
            max-width: 92vw; padding: 12px; grid-template-columns: 28px 1fr;
          }
          .callout__icon { width:28px; height:28px; }
        }
      `}</style>
    </section>
  )
}
