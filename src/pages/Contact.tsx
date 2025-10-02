// src/pages/Contact.tsx
import { useState } from 'react'

export default function Contact() {
  const [mapInteractive, setMapInteractive] = useState(false)

  const mapsEmbed =
    'https://www.google.com/maps?q=28.667694,77.276361&z=15&output=embed'
  const mapsLink =
    'https://maps.google.com/maps?ll=28.667694,77.276361&z=15&t=m&hl=en&gl=IN&mapclient=embed'

  return (
    <section className="section contact-wrap">
      <div className="container">
        <header className="section__head">
          <h1>Contact</h1>
          <p>WhatsApp-first support. No forms — real humans, fast responses.</p>
        </header>

        <div className="contact-grid">
          {/* LEFT — details + cover image */}
          <article className="card card--profile">
            <figure className="hero-photo">
              {/* Use your desired hero image */}
              <img
                src="/assets/feat-support.jpg"
                alt="IndianCab support team"
                loading="lazy"
                decoding="async"
                width={1600}
                height={1000}
              />
              <figcaption className="photo-cap">
                We’re based in New Ashok Nagar, New Delhi.
              </figcaption>
            </figure>

            <div className="who">
              <div className="avatar">
                {/* PNG logo on white background */}
                <img src="/assets/logo.png" alt="IndianCab" />
              </div>
              <div>
                <h3>IndianCab HQ</h3>
                <p className="muted">New Ashok Nagar, New Delhi • 110096</p>
              </div>
            </div>

            <div className="chips">
              <span className="chip"><i>🕘</i> Mon–Sun: 6:00 AM – 11:00 PM</span>
              <span className="chip"><i>⭐</i> 4.9/5 service rating</span>
              <span className="chip"><i>⚡</i> Fast WhatsApp response</span>
            </div>

            <div className="cta-col">
              <a className="btn btn--wa" href="https://wa.me/919625818187" target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
              <a className="btn btn--light" href="tel:+919625818187">Call +91 96258 18187</a>
              <a className="btn btn--light" href="tel:+919625818188">Call +91 96258 18188</a>
              <a className="btn btn--outline" href="mailto:support@indiancab.com">support@indiancab.com</a>
            </div>

            <div className="note">
              <strong>Tip:</strong> Drop your pickup & drop location on WhatsApp to get an instant quote.
            </div>
          </article>

          {/* RIGHT — Google Map with "tap to interact" guard */}
          <article className="card card--map">
            <div className="map-head">
              <h3>Find us</h3>
              <a href={mapsLink} target="_blank" rel="noreferrer" className="maps-link">
                Open in Google Maps ↗
              </a>
            </div>

            <div
              className={`map-frame ${mapInteractive ? 'is-live' : ''}`}
              onMouseLeave={() => setMapInteractive(false)} // desktop: auto-exit when leaving map
            >
              <iframe
                title="IndianCab HQ on Google Maps"
                src={mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              {!mapInteractive && (
                <button
                  type="button"
                  className="map-guard"
                  aria-label="Enable map interactions"
                  onClick={() => setMapInteractive(true)}
                >
                  <span>Click / Tap to interact</span>
                </button>
              )}
              {mapInteractive && (
                <button
                  type="button"
                  className="map-exit"
                  aria-label="Disable map interactions"
                  onClick={() => setMapInteractive(false)}
                >
                  Exit map
                </button>
              )}
            </div>

            <div className="mini-actions">
              <a className="btn btn--light" href={`${mapsLink}&daddr=28.667694,77.276361`} target="_blank" rel="noreferrer">
                Get Directions
              </a>
              <a className="btn btn--outline" href="https://wa.me/919625818187?text=Hi%20IndianCab%2C%20I%20need%20a%20cab%20from%20[Pickup]%20to%20[Drop]." target="_blank" rel="noreferrer">
                Send Pickup on WhatsApp
              </a>
            </div>
          </article>
        </div>
      </div>

      {/* spacer so footer never feels cramped */}
      <div style={{ height: '6vh' }} aria-hidden />

      <style>{`
        .contact-wrap{ background: var(--bg-alt); }

        .contact-grid{
          display:grid; grid-template-columns: 1.05fr 1fr;
          gap: 18px; align-items: start;
        }

        .card{ background: var(--card); border: 1px solid var(--border); border-radius: 16px; box-shadow: var(--shadow); padding: 16px; }

        .card--profile { display: grid; gap: 14px; }
        .hero-photo{ margin: -16px -16px 6px -16px; border-radius: 16px 16px 0 0; overflow:hidden; position:relative; background:#fff; border-bottom:1px solid var(--border); }
        .hero-photo img{ width:100%; height: clamp(180px, 26vw, 320px); object-fit: cover; display:block; }
        .photo-cap{ position:absolute; right:10px; bottom:10px; background: rgba(255,255,255,.9); backdrop-filter: blur(6px); border: 1px solid var(--border); border-radius: 999px; padding: 6px 10px; font-size: .85rem; }

        .who{ display:flex; align-items:center; gap:10px; }
        .avatar{
          width:42px; height:42px; border-radius:12px; background: #fff; /* white bg requested */
          display:grid; place-items:center; box-shadow: 0 8px 20px var(--ring);
          border: 1px solid var(--border);
        }
        .avatar img{ width:28px; height:auto; display:block; }

        .chips{ display:flex; flex-wrap:wrap; gap:8px; }
        .chip{ background:#fff; border:1px solid var(--border); border-radius:999px; padding:8px 12px; font-weight:700; box-shadow:0 2px 10px rgba(0,0,0,.03); display:inline-flex; align-items:center; gap:8px; }
        .chip i{ font-style: normal; }

        .cta-col{ display:flex; flex-wrap:wrap; gap:8px; }
        .btn{ display:inline-flex; align-items:center; justify-content:center; padding:12px 14px; border-radius:12px; text-decoration:none; font-weight:800; border:1px solid var(--border); }
        .btn--wa{ background:#25D366; border-color:#25D366; color:#fff; }
        .btn--light{ background:#fff; color:var(--text); }
        .btn--outline{ background:transparent; color:var(--text); }

        .note{ padding:10px 12px; border-radius:12px; background:#fff; border:1px dashed var(--border); color:var(--muted); }

        /* Map */
        .card--map{ display:grid; gap: 12px; }
        .map-head{ display:flex; align-items:center; justify-content:space-between; gap: 12px; }
        .maps-link{ color: var(--text); text-decoration:none; font-weight:800; }
        .maps-link:hover{ text-decoration: underline; }

        .map-frame{
          position: relative; border-radius: 14px; overflow: hidden;
          border: 1px solid var(--border); background: #fff; box-shadow: var(--shadow);
          touch-action: pan-y; /* always allow vertical scroll */
        }
        .map-frame iframe{
          width:100%; height: clamp(260px, 36vw, 420px); display:block; border:0;
          pointer-events: none; /* default: don't capture scroll */
        }
        .map-frame.is-live iframe{
          pointer-events: auto; /* user opted in */
        }

        .map-guard{
          position:absolute; inset:0; display:grid; place-items:center;
          background: linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.6));
          backdrop-filter: blur(4px);
          border:0; cursor:pointer; font-weight:800; color:#111;
          touch-action: pan-y; /* permit page scroll even over the guard */
        }
        .map-guard span{
          background:#fff; border:1px solid var(--border); padding:10px 12px; border-radius:12px;
          box-shadow: 0 6px 16px rgba(0,0,0,.06);
        }
        .map-exit{
          position:absolute; right:10px; top:10px; border:0; border-radius:10px; padding:8px 10px; font-weight:800; cursor:pointer;
          background:#fff; border:1px solid var(--border); box-shadow:0 6px 16px rgba(0,0,0,.06);
          touch-action: manipulation;
        }

        .mini-actions{ display:flex; flex-wrap:wrap; gap:8px; }

        /* Responsive */
        @media (max-width: 1100px){
          .contact-grid{ grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
