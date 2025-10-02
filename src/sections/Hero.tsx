import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function Hero() {
  // --- Typewriter (lightweight, no libs) ---
  const phrases = useMemo(() => ['smooth', 'safe', 'on-time'], [])
  const [pIndex, setPIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[pIndex]
    const base = 110
    const speed = deleting ? base * 1.7 : base
    const t = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1))
        if (text.length + 1 === current.length) setDeleting(true)
      } else {
        setText(current.slice(0, text.length - 1))
        if (text.length === 0) {
          setDeleting(false)
          setPIndex(p => (p + 1) % phrases.length)
        }
      }
    }, speed)
    return () => clearTimeout(t)
  }, [text, deleting, pIndex, phrases])

  useEffect(() => {
    if (!deleting && text.length === phrases[pIndex].length) {
      const hold = setTimeout(() => setDeleting(true), 900)
      return () => clearTimeout(hold)
    }
  }, [text, deleting, pIndex, phrases])

  // --- Count-up for rides completed ---
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 120, damping: 18, mass: 0.6 })
  const rides = useTransform(spring, v => Math.round(v))
  const started = useRef(false)
  useEffect(() => {
    if (!started.current) { started.current = true; mv.set(3200) }
  }, [mv])

  return (
    <section className="hero-typo hero-bokeh" id="hero" aria-labelledby="hero-title">
      {/* animated bokeh / aurora background */}
      <div className="bokeh" aria-hidden>
        <span className="b b1" />
        <span className="b b2" />
        <span className="b b3" />
      </div>

      <div className="container hero__grid">
        {/* LEFT */}
        <div className="hero__text">
          <motion.h1
            id="hero-title"
            className="hero__title"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            Book reliable cabs<br />in seconds.
          </motion.h1>

          {/* Subline with typewriter */}
          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
          >
            IndianCab —{' '}
            <span className="typewrap" aria-live="polite">
              <span className="typed">{text}</span>
              <span className="caret" aria-hidden />
            </span>{' '}
            rides across New Delhi &amp; NCR.
          </motion.p>

          {/* Trust chips: includes animated count */}
          <ul className="chips" aria-label="Proof points">
            <li className="chip">
              <span className="dot" />
              <span className="count"><motion.span>{rides}</motion.span>+ rides</span>
            </li>
            <li className="chip"><span className="dot" /> 4.9/5 rating</li>
            <li className="chip"><span className="dot" /> 98% on-time pickups</li>
          </ul>

          {/* CTAs */}
          <div className="cta">
            <a
              className="btn btn--wa"
              href="https://wa.me/919625818187?text=Hi%20IndianCab%20team,%20I%20want%20to%20book%20a%20cab."
              target="_blank" rel="noreferrer"
            >
              Book on WhatsApp
            </a>
            <a className="btn btn--light" href="/features">See Features</a>
            <a className="btn btn--outline" href="tel:+919625818187">Call +91 96258 18187</a>
          </div>

          <p className="fineprint">
            <strong>On-Time Promise:</strong> late beyond grace period? Next base fare is discounted.
          </p>
        </div>

        {/* RIGHT — simple, elegant visual card */}
        <motion.figure
          className="hero__visual"
          initial={{ opacity: 0, y: 8, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <img
            src="/assets/hero.jpg"
            alt="IndianCab car & app"
            loading="eager"
            decoding="async"
            width={1200}
            height={900}
          />
        </motion.figure>
      </div>

      <style>{`
        .hero-typo{
          position: relative;
          padding: clamp(56px, 8vw, 112px) 0 clamp(36px, 6vw, 80px);
          background:
            linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0)) 0 0 / 100% 220px no-repeat,
            var(--bg);
          overflow: clip;
          isolation: isolate;
        }

        /* ---- Bokeh / aurora (very subtle, GPU-friendly) ---- */
        .hero-bokeh .bokeh{
          position:absolute; inset:-15% -10% -10% -10%;
          z-index:0; pointer-events:none;
          filter: blur(30px);
        }
        .hero-bokeh .b{
          position:absolute; border-radius:50%;
          opacity:.18; transform: translateZ(0);
          animation: float 18s ease-in-out infinite;
          will-change: transform, opacity;
        }
        .hero-bokeh .b1{
          width:52vw; height:52vw; left:-8%; top:-18%;
          background: radial-gradient(closest-side, rgba(245,180,0,.55), rgba(245,180,0,0) 70%);
        }
        .hero-bokeh .b2{
          width:36vw; height:36vw; right:-6%; top:-6%;
          background: radial-gradient(closest-side, rgba(255,214,102,.5), rgba(255,214,102,0) 70%);
          animation-delay: -6s;
        }
        .hero-bokeh .b3{
          width:26vw; height:26vw; left:30%; bottom:-10%;
          background: radial-gradient(closest-side, rgba(255,199,0,.4), rgba(255,199,0,0) 70%);
          animation-delay: -12s;
        }
        @keyframes float{
          0%,100%{ transform: translate3d(0,0,0) }
          50%{ transform: translate3d(0,-2.5%,0) }
        }

        .hero__grid{
          position:relative; z-index:1;
          display:grid; grid-template-columns: 1.05fr 1fr;
          gap: clamp(20px, 4vw, 44px); align-items: center;
        }

        .hero__title{
          margin:0 0 8px;
          font-size: clamp(34px, 5vw, 62px);
          line-height:1.04; letter-spacing:-0.02em;
        }

        .hero__subtitle{
          margin: 0 0 16px; color: var(--muted);
          font-size: clamp(16px, 1.5vw, 18px);
        }

        /* Typewriter */
        .typewrap{ position: relative; display: inline-flex; align-items: baseline; }
        .typed{ font-weight: 800; color: var(--text); }
        .caret{
          width: 2px; height: 1em; margin-left: 2px; align-self: center;
          background: currentColor; opacity: 0.8; animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }

        /* Trust chips */
        .chips{ display:flex; flex-wrap:wrap; gap:10px 12px; margin: 0 0 16px; padding:0; list-style:none; }
        .chip{
          background:#fff; border:1px solid var(--border); border-radius:999px;
          padding:8px 12px; font-weight:700; box-shadow:0 2px 10px rgba(0,0,0,.03);
        }
        .dot{ width:6px; height:6px; border-radius:999px; display:inline-block; margin-right:8px;
          background: linear-gradient(45deg, var(--brand), var(--brand-2));
          box-shadow: 0 0 8px var(--ring);
        }
        .count { font-variant-numeric: tabular-nums; }

        /* CTAs */
        .cta{ display:flex; gap:10px; flex-wrap:wrap; margin:4px 0 10px; }
        .btn{ display:inline-flex; align-items:center; justify-content:center;
          padding:12px 16px; border-radius:12px; text-decoration:none;
          font-weight:800; border:1px solid var(--border); transition: transform .18s ease, filter .18s ease;
        }
        .btn--wa{ background:#25D366; border-color:#25D366; color:#fff; }
        .btn--wa:hover{ transform: translateY(-2px); filter: brightness(1.06); }
        .btn--light{ background:#fff; color:var(--text); }
        .btn--outline{ background:transparent; color:var(--text); }
        .btn--outline:hover{ background:#fff; }

        .fineprint{ margin:4px 0 0; color: var(--muted); }

        /* Visual */
        .hero__visual{
          border:1px solid var(--border); border-radius:16px; overflow:hidden; background:#fff;
          box-shadow: 0 8px 32px rgba(0,0,0,.06); aspect-ratio: 16/12; display:grid; place-items:center;
        }
        .hero__visual img{ width:100%; height:100%; object-fit:cover; display:block; }

        /* Responsive */
        @media (max-width: 1024px){
          .hero__grid{ grid-template-columns: 1fr; text-align: center; }
          .cta{ justify-content: center; }
          .chips{ justify-content: center; }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce){
          .caret{ display:none; }
          .hero-bokeh .b{ animation: none !important; }
        }
      `}</style>
    </section>
  )
}
