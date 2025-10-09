// src/pages/Features.tsx
import { useEffect, useMemo, useRef, useState } from 'react'

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

  // active index (debounced to rAF)
  const [active, setActive] = useState(0)
  const hoverIdxRef = useRef(0)
  const rAFRef = useRef<number | null>(null)

  const requestSetActive = (i: number) => {
    hoverIdxRef.current = i
    if (rAFRef.current != null) return
    rAFRef.current = requestAnimationFrame(() => {
      setActive(hoverIdxRef.current)
      rAFRef.current && cancelAnimationFrame(rAFRef.current)
      rAFRef.current = null
    })
  }

  // --- Double buffer images: only two <img/> elements crossfading ----
  const [frontIsA, setFrontIsA] = useState(true)
  const [srcA, setSrcA] = useState(feats[0].img)
  const [srcB, setSrcB] = useState(feats[0].img)
  const pendingRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const nextSrc = feats[active]?.img
    if (!nextSrc) return
    // load nextSrc into the "back" buffer first
    const backIsA = !frontIsA
    if (backIsA) setSrcA(nextSrc)
    else setSrcB(nextSrc)
  }, [active]) // eslint-disable-line

  const onBackLoaded = () => {
    // swap buffers only after the back image has loaded -> smooth crossfade, no blank
    setFrontIsA((v) => !v)
  }

  // responsive srcsets (reduce decode/paint cost)
  const srcSet = (p: string) =>
    `${p}?w=480 480w, ${p}?w=768 768w, ${p}?w=1200 1200w, ${p}?w=1600 1600w`
  const sizes = '(max-width:1100px) 100vw, 52vw'

  // small preloader for the next few images to reduce hitch on first hover
  useEffect(() => {
    const nexts = feats.slice(1, 4).map((f) => f.img)
    nexts.forEach((src) => {
      const im = new Image()
      im.decoding = 'async'
      im.loading = 'eager'
      im.src = src
    })
  }, []) // once

  return (
    <section className="section fx-wrap">
      <div className="container">
        <header className="section__head">
          <h1>Features</h1>
          <p>Everything you expect from a modern cab service — made delightful.</p>
          <span className="fx-underline" />
        </header>
      </div>

      <div className="container fx-layout">
        {/* Left: double-buffer showcase */}
        <figure className="fx-showcase" aria-label={feats[active]?.title}>
          <div className="fx-frame">
            {/* FRONT */}
            <img
              key={`front-${frontIsA ? srcA : srcB}`}
              className="fx-layer fx-front"
              src={frontIsA ? srcA : srcB}
              srcSet={srcSet(frontIsA ? srcA : srcB)}
              sizes={sizes}
              alt={feats[active]?.title || 'Feature'}
              width={1200}
              height={900}
              decoding="async"
              fetchPriority="high"
            />
            {/* BACK (hidden until loaded, then we flip) */}
            <img
              key={`back-${frontIsA ? srcB : srcA}`}
              className="fx-layer fx-back"
              src={frontIsA ? srcB : srcA}
              srcSet={srcSet(frontIsA ? srcB : srcA)}
              sizes={sizes}
              alt=""
              width={1200}
              height={900}
              decoding="async"
              onLoad={onBackLoaded}
            />
          </div>
          <figcaption className="fx-showcase__caption">
            <span className="dot" />
            <strong>{feats[active]?.title}</strong>
            <span className="muted"> — {feats[active]?.text}</span>
          </figcaption>
        </figure>

        {/* Right: cards */}
        <div className="fx-cards">
          {feats.map((f, i) => (
            <article
              key={f.title}
              className={`fx-card ${active === i ? 'is-active' : ''}`}
              onMouseEnter={() => requestSetActive(i)}
              onFocus={() => requestSetActive(i)}
              tabIndex={0}
              role="button"
              aria-label={`Showcase ${f.title}`}
            >
              <div className="fx-thumb">
                <img
                  src={`${f.img}?w=360`}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={360}
                  height={270}
                />
              </div>
              <div className="fx-copy">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .fx-wrap { background: var(--bg); }
        .fx-underline {
          display:block;height:3px;width:180px;margin:14px auto 0;
          background:linear-gradient(90deg,var(--brand),var(--brand-2));border-radius:4px;
        }
        .fx-layout {
          display:grid;grid-template-columns:1.05fr 1.2fr;gap:26px;align-items:start;
        }
        .fx-showcase { margin:0; }
        .fx-frame {
          position:relative;border-radius:16px;overflow:hidden;
          background:#fff;border:1px solid var(--border);
          /* lighter shadow: large blurs are expensive */
          box-shadow:0 8px 24px rgba(0,0,0,.06);
          aspect-ratio:16/12;
        }
        .fx-layer {
          position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;
          will-change:opacity;backface-visibility:hidden;contain:paint;
        }
        .fx-front { opacity:1; transition:opacity .35s ease; }
        .fx-back  { opacity:0; }
        /* when frontIsA flips, React remount keys such that 'front' always shows current, avoiding 6-image stack */
        
        .fx-showcase__caption {
          margin-top:10px;font-size:0.98rem;
          display:flex;align-items:center;gap:8px;flex-wrap:wrap;
        }
        .fx-showcase__caption .dot {
          width:8px;height:8px;border-radius:999px;
          background:linear-gradient(45deg,var(--brand),var(--brand-2));
          box-shadow:0 0 8px var(--ring);
        }
        .fx-showcase__caption .muted { color: var(--muted); }

        .fx-cards { display:grid; gap:14px; }
        .fx-card {
          display:grid; grid-template-columns: 90px 1fr; align-items:center; gap:14px;
          border-radius:16px; background:var(--card);
          border:1px solid var(--border);
          /* gentler shadow to reduce paint cost */
          box-shadow:0 4px 14px rgba(0,0,0,.05);
          padding:12px; outline:none;
          transition:transform .18s ease, box-shadow .18s ease, border-color .18s ease;
          will-change:transform;
        }
        .fx-card:hover, .fx-card:focus { transform: translateY(-2px); }
        .fx-card.is-active {
          border-color: rgba(245,180,0,0.45);
          box-shadow:0 10px 20px rgba(0,0,0,0.06), 0 0 0 4px rgba(245,180,0,0.05);
        }

        .fx-thumb { width:90px;height:70px;border-radius:12px;overflow:hidden;background:#fff;border:1px solid var(--border); }
        .fx-thumb img { width:100%;height:100%;object-fit:cover;display:block; }

        .fx-copy h3 { margin:2px 0 4px 0; }
        .fx-copy p { margin:0;color:var(--muted); }

        @media (max-width:1100px){ .fx-layout { grid-template-columns:1fr; } }
        @media (min-width:1280px){ .fx-showcase { position: sticky; top: 96px; } }
      `}</style>
    </section>
  )
}
