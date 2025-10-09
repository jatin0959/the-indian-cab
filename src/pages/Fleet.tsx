// src/pages/Fleet.tsx
import { useMemo } from 'react'
import { Link } from 'react-router-dom' // NEW

type Cab = {
  name: string
  desc: string
  tag: string
  seats: string
  bags?: string
  img: string
}

type Tour = {
  name: string
  desc: string
  tag: string
  duration?: string
  ex?: string
  highlights?: string[]
  img: string
}

// small helper to create URL slugs (same logic as in Landing.tsx)
const toSlug = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')

export default function Fleet() {
  const cars: Cab[] = useMemo(
    () => [
      { name: 'Hatchback', desc: 'Best for solo or two riders', tag: 'Budget', seats: '4', bags: '2', img: '/assets/cabs/hatchback.jpg' },
      { name: 'Sedan', desc: 'Comfort for 3–4 passengers', tag: 'Popular', seats: '5', bags: '3', img: '/assets/cabs/sedan.webp' },
      { name: 'SUV', desc: 'Extra room for family & luggage', tag: 'Spacious', seats: '7', bags: '4', img: '/assets/cabs/suv.png' },
      { name: 'MUV (Ertiga/Innova)', desc: 'Ideal for group trips', tag: 'Group', seats: '7', bags: '4', img: '/assets/cabs/innova.jpg' },
      { name: 'Premium', desc: 'Executive rides & occasions', tag: 'Executive', seats: '5', bags: '3', img: '/assets/cabs/premium-cab.png' },
      { name: 'Tempo Traveller', desc: 'Small groups & tours', tag: 'Touring', seats: '12', bags: '8', img: '/assets/cabs/tempo.webp' },
      { name: 'Mini Bus', desc: 'Office/team outings', tag: 'Corporate', seats: '18', bags: '12', img: '/assets/cabs/minibus.jpg' },
      { name: 'Tour Bus / Coach', desc: 'Large tours & events', tag: 'Large', seats: '30+', bags: '20+', img: '/assets/cabs/tourbus.jpg' },
    ],
    []
  )

  const tours: Tour[] = useMemo(
    () => [
      { name: 'Jagannath Puri Yatra', desc: 'Darshan at the sacred Shri Jagannath Temple with nearby sightseeing.', tag: 'Odisha', duration: '2–3 Days', ex: 'Bhubaneswar / Puri', highlights: ['Jagannath Temple', 'Puri Beach', 'Konark Temple'], img: '/assets/tours/jagannath.jpg' },
      { name: 'Char Dham Yatra', desc: 'The circuit of Yamunotri, Gangotri, Kedarnath & Badrinath.', tag: 'Uttarakhand', duration: '9–12 Days', ex: 'Haridwar / Rishikesh', highlights: ['Kedarnath', 'Badrinath', 'Gangotri', 'Yamunotri'], img: '/assets/tours/chardham.webp' },
      { name: 'Mussoorie Getaway', desc: 'Queen of Hills—perfect for a weekend escape.', tag: 'Uttarakhand', duration: '2–3 Days', ex: 'Dehradun', highlights: ['Mall Road', 'Kempty Falls', 'George Everest'], img: '/assets/tours/mussoorie.jpg' },
      { name: 'Shimla–Kufri', desc: 'Pine valleys, colonial charm & Kufri activities.', tag: 'Himachal', duration: '3–4 Days', ex: 'Chandigarh', highlights: ['Mall Road', 'Jakhu Temple', 'Kufri'], img: '/assets/tours/shimla.jpg' },
      { name: 'Manali Adventure', desc: 'Scenic drives, Solang Valley & Atal Tunnel.', tag: 'Himachal', duration: '4–5 Days', ex: 'Chandigarh', highlights: ['Solang Valley', 'Atal Tunnel', 'Old Manali'], img: '/assets/tours/manali.jpg' },
      { name: 'Golden Triangle', desc: 'Delhi, Agra & Jaipur—India’s most iconic circuit.', tag: 'North India', duration: '4–6 Days', ex: 'Delhi', highlights: ['Taj Mahal', 'Amber Fort', 'Qutub Minar'], img: '/assets/tours/goldentriangle.jpg' },
      { name: 'Vaishno Devi Yatra', desc: 'Spiritual journey to Mata Vaishno Devi shrine.', tag: 'J&K', duration: '2–3 Days', ex: 'Jammu / Katra', highlights: ['Bhavan Darshan', 'Bhairon Temple'], img: '/assets/tours/vaishnodevi.jpg' },
      { name: 'Shirdi Darshan', desc: 'Seek blessings at Shri Saibaba Temple.', tag: 'Maharashtra', duration: '1–2 Days', ex: 'Pune / Mumbai', highlights: ['Saibaba Temple', 'Shani Shingnapur'], img: '/assets/tours/shirdi.webp' },
      { name: 'Goa City & Beaches', desc: 'Sun, sand & heritage churches.', tag: 'Goa', duration: '3–4 Days', ex: 'Goa', highlights: ['Calangute', 'Bom Jesus', 'Fort Aguada'], img: '/assets/tours/goa.jpg' },
      { name: 'Somnath–Dwarka', desc: 'Sacred coastal temples and sea views.', tag: 'Gujarat', duration: '3–4 Days', ex: 'Rajkot / Jamnagar', highlights: ['Somnath Temple', 'Dwarkadhish Temple'], img: '/assets/tours/somnath.jpg' },
    ],
    []
  )

  const waLink = (msg: string) =>
    `https://wa.me/919625818187?text=${encodeURIComponent(msg)}`

  return (
    <section className="section alt">
      <div className="container">
        <header className="section__head">
          <h1>Our Cabs</h1>
          <p>From city rides to long tours — pick what fits your trip.</p>
        </header>

        <div className="fleet-grid">
          {cars.map((c) => {
            const slug = toSlug(c.name)
            return (
              <article key={c.name} className="fleet-card">
                <div className="fleet-media">
                  <Link to={`/cabs/${slug}`} aria-label={`View ${c.name} details`}>
                    <img src={c.img} alt={c.name} width={720} height={480} loading="lazy" decoding="async" />
                    <span className="tag">{c.tag}</span>
                  </Link>
                </div>

                <div className="fleet-body">
                  <h3 className="fleet-title">
                    <Link to={`/cabs/${slug}`}>{c.name}</Link>
                  </h3>
                  <p className="fleet-desc">{c.desc}</p>

                  <ul className="meta">
                    <li><span className="bullet" /> Seats: <strong>{c.seats}</strong></li>
                    {c.bags && <li><span className="bullet" /> Bags: <strong>{c.bags}</strong></li>}
                  </ul>

                  <div className="actions">
                    <a className="btn btn--wa" href={waLink(`Hi IndianCab, I want to book a ${c.name}`)} target="_blank" rel="noreferrer">
                      Book {c.name}
                    </a>
                    <Link className="btn" to={`/cabs/${slug}`}>View Details</Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <div className="container tours" id="tours">
        <header className="section__head">
          <h2>Popular Tour Packages</h2>
          <p>Explore India’s top pilgrimage, hill & heritage destinations.</p>
        </header>

        <div className="tour-grid">
          {tours.map((t) => {
            const slug = toSlug(t.name)
            return (
              <article key={t.name} className="tour-card">
                <div className="tour-media">
                  <Link to={`/tours/${slug}`} aria-label={`View ${t.name} details`}>
                    <img src={t.img} alt={t.name} width={900} height={600} loading="lazy" decoding="async" />
                    <span className="tag">{t.tag}</span>
                  </Link>
                </div>

                <div className="tour-body">
                  <h3>
                    <Link to={`/tours/${slug}`}>{t.name}</Link>
                  </h3>
                  <p>{t.desc}</p>
                  <p><strong>Duration:</strong> {t.duration} · <strong>Ex:</strong> {t.ex}</p>

                  <div className="actions">
                    <a className="btn btn--wa" href={waLink(`Hi IndianCab, I’m interested in the ${t.name} package`)} target="_blank" rel="noreferrer">
                      Get Quote
                    </a>
                    <Link className="btn" to={`/tours/${slug}`}>View Details</Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <div className="container">
        <div className="pan-card">
          <div>
            <h3>Route not listed?</h3>
            <p>We serve <strong>Pan-India</strong>. Share your pickup & destination for a custom quote.</p>
          </div>
          <a className="btn btn--wa" href={waLink('Hi IndianCab, my route is not listed. Please help me with a custom cab quote.')} target="_blank" rel="noreferrer">
            Talk to Us
          </a>
        </div>
      </div>

      <style>{`
        .fleet-grid, .tour-grid {
          display:grid; gap:18px;
          grid-template-columns: repeat(auto-fit,minmax(340px,1fr));
        }
        .fleet-card, .tour-card {
          background:var(--card); border:1px solid var(--border);
          border-radius:18px; box-shadow:var(--shadow); overflow:hidden;
          transition:transform .25s ease;
        }
        .fleet-card:hover, .tour-card:hover { transform:translateY(-3px); }

        .fleet-media, .tour-media { position:relative; overflow:hidden; }
        .fleet-media img, .tour-media img { width:100%; height:260px; object-fit:cover; display:block; }
        .fleet-media a, .tour-media a { display:block; }
        .tag {
          position:absolute; top:10px; left:10px;
          background:linear-gradient(90deg,var(--brand),var(--brand-2));
          color:#fff; font-weight:700; padding:5px 10px; border-radius:999px;
        }

        .fleet-body, .tour-body { padding:14px; }
        .fleet-title{margin:2px 0 6px;}
        .fleet-title a{color:inherit; text-decoration:none;}
        .fleet-title a:hover{text-decoration:underline;}
        .fleet-desc{margin:0 0 8px;color:var(--muted);}
        .meta{list-style:none;padding:0;margin:0 0 10px;display:flex;gap:14px;flex-wrap:wrap;}
        .bullet{width:6px;height:6px;border-radius:50%;background:linear-gradient(45deg,var(--brand),var(--brand-2));display:inline-block;margin-right:6px;}
        .actions{display:flex;gap:10px;flex-wrap:wrap;}

        .btn{padding:10px 14px;border-radius:12px;text-decoration:none;font-weight:700;transition:0.2s;border:1px solid var(--border);}
        .btn:hover{transform:translateY(-1px);}
        .btn--wa{background:#25D366;color:#fff;border:none;}
        .btn--wa:hover{filter:brightness(1.1);}
        .pan-card{margin-top:32px;padding:20px;border:1px solid var(--border);border-radius:16px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;}
      `}</style>
    </section>
  )
}
