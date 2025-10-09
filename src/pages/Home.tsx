// src/pages/Home.tsx
import { Link } from 'react-router-dom'
import Hero from '@/sections/Hero'
import Features from '@/pages/Features'
import USP from '@/pages/USP'
import Contact from './Contact'

// small helper to match your landing routes
const toSlug = (s: string) =>
  s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')

const CAB_HIGHLIGHTS = [
  { name: 'Sedan', tag: 'Popular', seats: '5', img: '/assets/cabs/sedan.webp' },
  { name: 'SUV', tag: 'Spacious', seats: '7', img: '/assets/cabs/suv.png' },
  { name: 'Premium', tag: 'Executive', seats: '5', img: '/assets/cabs/premium-cab.png' },
]

const TOUR_HIGHLIGHTS = [
  { name: 'Golden Triangle', tag: 'North India', duration: '4–6 Days', img: '/assets/tours/goldentriangle.jpg' },
  { name: 'Manali Adventure', tag: 'Himachal', duration: '4–5 Days', img: '/assets/tours/manali.jpg' },
  { name: 'Char Dham Yatra', tag: 'Uttarakhand', duration: '9–12 Days', img: '/assets/tours/chardham.webp' },
]

export default function Home(){
  return (
    <>
      <Hero />

      {/* ===== Home Highlights ===== */}
      <section className="section home-highlights">
        <div className="container">
          {/* Cabs */}
          <header className="hl-head">
            <div>
              <h2>Popular Cabs</h2>
              <p className="muted">Comfortable rides for city, airport & outstation trips.</p>
            </div>
            <Link className="btn" to="/Cabs">Explore all Cabs →</Link>
          </header>

          <div className="hl-grid">
            {CAB_HIGHLIGHTS.map(c => {
              const slug = toSlug(c.name)
              return (
                <article key={c.name} className="hl-card">
                  <Link to={`/cabs/${slug}`} className="media" aria-label={`View ${c.name} details`}>
                    <img src={c.img} alt={c.name} loading="lazy" width={640} height={420} />
                    <span className="tag">{c.tag}</span>
                  </Link>
                  <div className="body">
                    <h3><Link to={`/cabs/${slug}`}>{c.name}</Link></h3>
                    <p className="muted">Seats {c.seats}</p>
                    <div className="actions">
                      <Link className="btn btn--wa" to={`/cabs/${slug}`}>Book</Link>
                      <Link className="btn" to={`/cabs/${slug}`}>View</Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Tours */}
          <header className="hl-head" style={{marginTop: 24}}>
            <div>
              <h2>Top Tour Packages</h2>
              <p className="muted">Pilgrimage, hills & heritage—curated and driver-led.</p>
            </div>
            <Link className="btn" to="/Cabs#tours">Explore Tours →</Link>
          </header>

          <div className="hl-grid">
            {TOUR_HIGHLIGHTS.map(t => {
              const slug = toSlug(t.name)
              return (
                <article key={t.name} className="hl-card">
                  <Link to={`/tours/${slug}`} className="media" aria-label={`View ${t.name} package`}>
                    <img src={t.img} alt={t.name} loading="lazy" width={640} height={420} />
                    <span className="tag">{t.tag}</span>
                  </Link>
                  <div className="body">
                    <h3><Link to={`/tours/${slug}`}>{t.name}</Link></h3>
                    <p className="muted">Duration {t.duration}</p>
                    <div className="actions">
                      <Link className="btn btn--wa" to={`/tours/${slug}`}>Get Quote</Link>
                      <Link className="btn" to={`/tours/${slug}`}>Details</Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        {/* Scoped styles so it won’t affect other pages */}
        <style>{`
          .home-highlights .hl-head{
            display:flex; align-items:end; justify-content:space-between; gap:12px;
            margin-bottom:12px;
          }
          .home-highlights .muted{ color: var(--muted); margin:0; }
          .home-highlights .hl-grid{
            display:grid; gap:14px;
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
          @media(max-width: 980px){
            .home-highlights .hl-grid{ grid-template-columns: repeat(2, 1fr); }
          }
          @media(max-width: 640px){
            .home-highlights .hl-grid{ grid-template-columns: 1fr; }
          }
          .home-highlights .hl-card{
            background: var(--card); border:1px solid var(--border); border-radius: var(--radius);
            overflow:hidden; box-shadow: var(--shadow);
            display:flex; flex-direction:column;
          }
          .home-highlights .media{ position:relative; display:block; }
          .home-highlights img{ width:100%; height:200px; object-fit:cover; display:block; }
          .home-highlights .tag{
            position:absolute; top:10px; left:10px;
            background:linear-gradient(90deg,var(--brand),var(--brand-2));
            color:#fff; font-weight:800; padding:5px 10px; border-radius:999px; font-size:.9rem;
          }
          .home-highlights .body{ padding:12px; }
          .home-highlights h3{ margin:4px 0 4px; font-size:1.05rem; }
          .home-highlights h3 a{ text-decoration:none; color:inherit; }
          .home-highlights .actions{ display:flex; gap:8px; margin-top:8px; flex-wrap:wrap; }
          .home-highlights .btn{ padding:10px 12px; border-radius:10px; }
          .home-highlights .btn--wa{ background:#25D366; color:#fff; border:none; }
        `}</style>
      </section>

      <Features />
      <USP />
      <Contact />
    </>
  )
}
