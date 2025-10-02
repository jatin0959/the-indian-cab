// src/pages/Fleet.tsx
import { useMemo } from 'react'

type Cab = {
  name: string
  desc: string
  tag: string
  seats: string
  bags?: string
  query: string // for Unsplash Source images
}

export default function Fleet() {
  const cars: Cab[] = useMemo(
    () => [
      { name: 'Hatchback', desc: 'Best for solo or two riders', tag: 'Budget', seats: '4', bags: '2', query: 'hatchback car interior city' },
      { name: 'Sedan', desc: 'Comfort for 3–4 passengers', tag: 'Popular', seats: '5', bags: '3', query: 'sedan car exterior clean' },
      { name: 'SUV', desc: 'Extra room for family & luggage', tag: 'Spacious', seats: '7', bags: '4', query: 'suv car road trip family' },
      { name: 'MUV (Ertiga/Innova)', desc: 'Ideal for group trips', tag: 'Group', seats: '7', bags: '4', query: 'toyota innova mpv people mover' },
      { name: 'Premium', desc: 'Executive rides & occasions', tag: 'Executive', seats: '5', bags: '3', query: 'mercedes bmw premium car' },
      { name: 'Tempo Traveller', desc: 'Small groups & tours', tag: 'Touring', seats: '12', bags: '8', query: 'tempo traveller minibus india' },
      { name: 'Mini Bus', desc: 'Office/team outings', tag: 'Corporate', seats: '18', bags: '12', query: 'mini bus coach interior' },
      { name: 'Tour Bus / Coach', desc: 'Large tours & events', tag: 'Large', seats: '30+', bags: '20+', query: 'tour bus coach charter' },
    ],
    []
  )

  // Unsplash Source: fast + free. It returns a relevant, license-safe photo.
  const imgUrl = (q: string) =>
    // size can be tweaked; keep Web performance in mind
    `/assets/?${encodeURIComponent(q)}`

  const waLink = (vehicle: string) =>
    `https://wa.me/919625818187?text=${encodeURIComponent(
      `Hi IndianCab team, I want to book a ${vehicle}. Please share options and pricing.`
    )}`

  return (
    <section className="section alt">
      <div className="container">
        <header className="section__head">
          <h1>Our Cabs</h1>
          <p>From daily city rides to long tours — pick what fits your trip.</p>
        </header>

        <div className="fleet-grid">
          {cars.map((c) => (
            <article key={c.name} className="fleet-card">
              <div className="fleet-media">
                <img
                  src={imgUrl(c.query)}
                  alt={`${c.name} example`}
                  loading="lazy"
                  decoding="async"
                  width={720}
                  height={480}
                />
                <span className="tag">{c.tag}</span>
              </div>

              <div className="fleet-body">
                <h3 className="fleet-title">{c.name}</h3>
                <p className="fleet-desc">{c.desc}</p>

                <ul className="meta">
                  <li><span className="bullet" /> Seats: <strong>{c.seats}</strong></li>
                  {c.bags && <li><span className="bullet" /> Bags: <strong>{c.bags}</strong></li>}
                  <li><span className="bullet" /> AC · Clean · Verified Drivers</li>
                </ul>

                <div className="actions">
                  <a className="btn btn--wa" href={waLink(c.name)} target="_blank" rel="noreferrer">
                    Book {c.name}
                  </a>
                  <a className="btn btn--light" href="/contact">Need Help?</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* component-scoped styles */}
      <style>{`
        .fleet-grid{
          display:grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(14px, 2vw, 18px);
        }
        @media (max-width: 900px){
          .fleet-grid{ grid-template-columns: 1fr; }
        }

        .fleet-card{
          display:grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 14px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 18px;
          box-shadow: var(--shadow);
          overflow:hidden;
        }
        @media (max-width: 900px){
          .fleet-card{ grid-template-columns: 1fr; }
        }

        .fleet-media{
          position:relative;
          overflow:hidden;
          background:#fff;
          min-height: 220px;
        }
        .fleet-media img{
          width:100%; height:100%; display:block; object-fit:cover;
          transition: transform .35s ease;
        }
        .fleet-card:hover .fleet-media img{ transform: scale(1.04); }

        .tag{
          position:absolute; top:10px; left:10px;
          background: linear-gradient(90deg, var(--brand), var(--brand-2));
          color:#fff; font-weight:800; font-size:.85rem;
          padding:6px 10px; border-radius:999px;
          box-shadow: 0 8px 22px rgba(0,0,0,.08);
        }

        .fleet-body{ padding: 12px 12px 14px 0; }
        @media (max-width: 900px){ .fleet-body{ padding: 12px 12px 16px; } }

        .fleet-title{ margin: 2px 0 6px 0; }
        .fleet-desc{ margin: 0 0 10px 0; color: var(--muted); }

        .meta{
          display:flex; flex-wrap:wrap; gap: 8px 14px;
          margin: 0 0 14px; padding:0; list-style:none;
          color: var(--text);
        }
        .bullet{
          width:6px; height:6px; border-radius:999px; display:inline-block; margin-right:8px;
          background: linear-gradient(45deg, var(--brand), var(--brand-2));
          box-shadow: 0 0 8px var(--ring);
        }

        .actions{
          display:flex; flex-wrap:wrap; gap:10px;
        }
        .btn{
          display:inline-flex; align-items:center; justify-content:center;
          padding: 11px 14px; border-radius: 12px; text-decoration:none;
          font-weight:800; border:1px solid var(--border);
          transition: transform .18s ease, filter .18s ease;
        }
        .btn--wa{ background:#25D366; color:#fff; border-color:#25D366; }
        .btn--wa:hover{ transform: translateY(-2px); filter: brightness(1.06); }
        .btn--light{ background:#fff; color:var(--text); }
      `}</style>
    </section>
  )
}
