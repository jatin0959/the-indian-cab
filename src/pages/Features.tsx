// src/pages/Features.tsx
import { useState } from 'react'

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
        {/* Left: ultra-light showcase with CSS cross-fade */}
        <figure className="fx-showcase" aria-label={feats[active]?.title}>
          <div className="fx-frame">
            {/* Layered images; only the active one is opaque */}
            {feats.map((f, i) => (
              <img
                key={f.img}
                src={f.img}
                alt={i === active ? f.title : ''}
                className={`fx-img ${i === active ? 'is-active' : ''}`}
                loading={i === active ? 'eager' : 'lazy'}
                decoding="async"
                width={1200}
                height={900}
              />
            ))}
          </div>
          <figcaption className="fx-showcase__caption">
            <span className="dot" />
            <strong>{feats[active]?.title}</strong>
            <span className="muted"> — {feats[active]?.text}</span>
          </figcaption>
        </figure>

        {/* Right: simple cards; no scroll/hover animations beyond CSS */}
        <div className="fx-cards">
          {feats.map((f, i) => (
            <article
              key={f.title}
              className={`fx-card ${active === i ? 'is-active' : ''}`}
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
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .fx-wrap { background: var(--bg); }

        .fx-underline {
          display: block; height: 3px; width: 180px; margin: 14px auto 0;
          background: linear-gradient(90deg, var(--brand), var(--brand-2));
          border-radius: 4px;
        }

        .fx-layout {
          display: grid;
          grid-template-columns: 1.05fr 1.2fr;
          gap: 26px; align-items: start;
        }

        /* Showcase: NOT sticky (to avoid scroll jank) */
        .fx-showcase { margin: 0; }
        .fx-frame {
          position: relative; border-radius: 16px; overflow: hidden;
          background: #fff; border: 1px solid var(--border); box-shadow: var(--shadow);
          aspect-ratio: 16/12;
        }
        .fx-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%; object-fit: cover; display: block;
          opacity: 0; transition: opacity .35s ease;
          will-change: opacity; /* safe, cheap */
          filter: none !important; mix-blend-mode: normal;
        }
        .fx-img.is-active { opacity: 1; }

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

        /* Cards */
        .fx-cards { display: grid; gap: 14px; }
        .fx-card {
          display: grid; grid-template-columns: 90px 1fr; align-items: center; gap: 14px;
          border-radius: 16px; background: var(--card);
          border: 1px solid var(--border); box-shadow: var(--shadow);
          padding: 12px; outline: none;
          transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
        }
        .fx-card:hover, .fx-card:focus { transform: translateY(-3px); }
        .fx-card.is-active {
          border-color: rgba(245,180,0,0.45);
          box-shadow: 0 8px 18px rgba(0,0,0,0.06), 0 0 0 4px rgba(245,180,0,0.05);
        }

        .fx-thumb {
          width: 90px; height: 70px; border-radius: 12px; overflow: hidden;
          background: #fff; border: 1px solid var(--border);
        }
        .fx-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .fx-copy h3 { margin: 2px 0 4px 0; }
        .fx-copy p { margin: 0; color: var(--muted); }

        /* Responsive */
        @media (max-width: 1100px){
          .fx-layout { grid-template-columns: 1fr; }
        }

        /* Optional: bring back sticky ONLY on big screens for a nicer feel without jank */
        @media (min-width: 1280px){
          .fx-showcase { position: sticky; top: 96px; }
        }
      `}</style>
    </section>
  )
}
