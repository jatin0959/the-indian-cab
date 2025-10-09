import { useMemo } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

// --- Types --------------------------------------------------------------

type Cab = {
  slug: string
  name: string
  desc: string
  tag: string
  seats: string
  bags?: string
  img: string
}

type Tour = {
  slug: string
  name: string
  desc: string
  tag: string
  duration?: string
  ex?: string
  highlights?: string[]
  img: string
}

type Review = { author: string; rating: number; text: string; date?: string }

type FAQ = { q: string; a: string }

// --- Utils --------------------------------------------------------------

const toSlug = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')

const waLink = (msg: string) =>
  `https://wa.me/919625818187?text=${encodeURIComponent(msg)}`

function useCanonical() {
  const { pathname, search } = useLocation()
  const base = 'https://indiancab.in'
  return base + pathname + (search || '')
}

// --- Catalog ------------------------------------------------------------

const CABS: Cab[] = [
  { slug: toSlug('Hatchback'), name: 'Hatchback', desc: 'Best for solo or two riders', tag: 'Budget', seats: '4', bags: '2', img: '/assets/cabs/hatchback.jpg' },
  { slug: toSlug('Sedan'), name: 'Sedan', desc: 'Comfort for 3–4 passengers', tag: 'Popular', seats: '5', bags: '3', img: '/assets/cabs/sedan.webp' },
  { slug: toSlug('SUV'), name: 'SUV', desc: 'Extra room for family & luggage', tag: 'Spacious', seats: '7', bags: '4', img: '/assets/cabs/suv.png' },
  { slug: toSlug('MUV (Ertiga/Innova)'), name: 'MUV (Ertiga/Innova)', desc: 'Ideal for group trips', tag: 'Group', seats: '7', bags: '4', img: '/assets/cabs/innova.jpg' },
  { slug: toSlug('Premium'), name: 'Premium', desc: 'Executive rides & occasions', tag: 'Executive', seats: '5', bags: '3', img: '/assets/cabs/premium-cab.png' },
  { slug: toSlug('Tempo Traveller'), name: 'Tempo Traveller', desc: 'Small groups & tours', tag: 'Touring', seats: '12', bags: '8', img: '/assets/cabs/tempo.webp' },
  { slug: toSlug('Mini Bus'), name: 'Mini Bus', desc: 'Office/team outings', tag: 'Corporate', seats: '18', bags: '12', img: '/assets/cabs/minibus.jpg' },
  { slug: toSlug('Tour Bus / Coach'), name: 'Tour Bus / Coach', desc: 'Large tours & events', tag: 'Large', seats: '30+', bags: '20+', img: '/assets/cabs/tourbus.jpg' },
]

const TOURS: Tour[] = [
  { slug: toSlug('Jagannath Puri Yatra'), name: 'Jagannath Puri Yatra', desc: 'Darshan at the sacred Shri Jagannath Temple with nearby sightseeing.', tag: 'Odisha', duration: '2–3 Days', ex: 'Bhubaneswar / Puri', highlights: ['Jagannath Temple', 'Puri Beach', 'Konark Temple'], img: '/assets/tours/jagannath.jpg' },
  { slug: toSlug('Char Dham Yatra'), name: 'Char Dham Yatra', desc: 'The circuit of Yamunotri, Gangotri, Kedarnath & Badrinath.', tag: 'Uttarakhand', duration: '9–12 Days', ex: 'Haridwar / Rishikesh', highlights: ['Kedarnath', 'Badrinath', 'Gangotri', 'Yamunotri'], img: '/assets/tours/chardham.webp' },
  { slug: toSlug('Mussoorie Getaway'), name: 'Mussoorie Getaway', desc: 'Queen of Hills—perfect for a weekend escape.', tag: 'Uttarakhand', duration: '2–3 Days', ex: 'Dehradun', highlights: ['Mall Road', 'Kempty Falls', 'George Everest'], img: '/assets/tours/mussoorie.jpg' },
  { slug: toSlug('Shimla–Kufri'), name: 'Shimla–Kufri', desc: 'Pine valleys, colonial charm & Kufri activities.', tag: 'Himachal', duration: '3–4 Days', ex: 'Chandigarh', highlights: ['Mall Road', 'Jakhu Temple', 'Kufri'], img: '/assets/tours/shimla.jpg' },
  { slug: toSlug('Manali Adventure'), name: 'Manali Adventure', desc: 'Scenic drives, Solang Valley & Atal Tunnel.', tag: 'Himachal', duration: '4–5 Days', ex: 'Chandigarh', highlights: ['Solang Valley', 'Atal Tunnel', 'Old Manali'], img: '/assets/tours/manali.jpg' },
  { slug: toSlug('Golden Triangle'), name: 'Golden Triangle', desc: 'Delhi, Agra & Jaipur—India’s most iconic circuit.', tag: 'North India', duration: '4–6 Days', ex: 'Delhi', highlights: ['Taj Mahal', 'Amber Fort', 'Qutub Minar'], img: '/assets/tours/goldentriangle.jpg' },
  { slug: toSlug('Vaishno Devi Yatra'), name: 'Vaishno Devi Yatra', desc: 'Spiritual journey to Mata Vaishno Devi shrine.', tag: 'J&K', duration: '2–3 Days', ex: 'Jammu / Katra', highlights: ['Bhavan Darshan', 'Bhairon Temple'], img: '/assets/tours/vaishnodevi.jpg' },
  { slug: toSlug('Shirdi Darshan'), name: 'Shirdi Darshan', desc: 'Seek blessings at Shri Saibaba Temple.', tag: 'Maharashtra', duration: '1–2 Days', ex: 'Pune / Mumbai', highlights: ['Saibaba Temple', 'Shani Shingnapur'], img: '/assets/tours/shirdi.webp' },
  { slug: toSlug('Goa City & Beaches'), name: 'Goa City & Beaches', desc: 'Sun, sand & heritage churches.', tag: 'Goa', duration: '3–4 Days', ex: 'Goa', highlights: ['Calangute', 'Bom Jesus', 'Fort Aguada'], img: '/assets/tours/goa.jpg' },
  { slug: toSlug('Somnath–Dwarka'), name: 'Somnath–Dwarka', desc: 'Sacred coastal temples and sea views.', tag: 'Gujarat', duration: '3–4 Days', ex: 'Rajkot / Jamnagar', highlights: ['Somnath Temple', 'Dwarkadhish Temple'], img: '/assets/tours/somnath.jpg' },
]

// --- Social proof content ----------------------------------------------

const DEFAULT_REVIEWS: Review[] = [
  { author: 'Rishabh P.', rating: 5, text: 'Clean car, polite driver, on-time pickup. WhatsApp booking was super quick.' },
  { author: 'Meera S.', rating: 5, text: 'Did Manali trip with family—driver knew scenic stops and food joints. Great experience.' },
  { author: 'Akhil G.', rating: 4.8, text: 'Transparent pricing, professional support. Will book again for airport runs.' }
]

const DEFAULT_FAQS: FAQ[] = [
  { q: 'What does the price include?', a: 'Driver charges, basic tolls where pre‑paid FASTag applies, and standard parking as per itinerary. State taxes, extra detours, and night halt charges are additional if applicable.' },
  { q: 'Can I get an invoice?', a: 'Yes, GST invoice is available on request. Please share your GST details on WhatsApp before the ride.' },
  { q: 'How do I pay?', a: 'UPI, card link, or cash. Advance may be required for outstation bookings.' },
  { q: 'What is your cancellation policy?', a: 'Full refund if cancelled 24 hours before pickup. Within 24 hours, a nominal cancellation fee may apply to cover driver blocking.' }
]

const USP_POINTS = [
  'Top‑rated drivers with verified IDs',
  'Clean, well‑maintained cars',
  'On‑time pickups with live tracking',
  'Upfront pricing—no hidden charges',
  '24×7 WhatsApp support',
]

// --- JSON-LD ------------------------------------------------------------

const OrgJSONLD = () => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'IndianCab',
      url: 'https://indiancab.in',
      logo: 'https://indiancab.in/logo.png',
      sameAs: [
        'https://www.facebook.com/',
        'https://www.instagram.com/'
      ],
      contactPoint: [{
        '@type': 'ContactPoint',
        telephone: '+91-96258-18187',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English','Hindi']
      }]
    })
  }} />
)

function CabJSONLD({ cab }: { cab: Cab }) {
  const url = `https://indiancab.in/cabs/${cab.slug}`
  const data: any = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${cab.name} Cab on Hire`,
    serviceType: 'Outstation / Local Cab Service',
    provider: { '@type': 'Organization', name: 'IndianCab' },
    areaServed: 'India',
    description: cab.desc,
    image: `https://indiancab.in${cab.img}`,
    url,
    offers: {
      '@type': 'Offer',
      url,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '120'
    }
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

function TourJSONLD({ tour }: { tour: Tour }) {
  const url = `https://indiancab.in/tours/${tour.slug}`
  const data: any = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: `${tour.name} Package`,
    description: tour.desc,
    image: `https://indiancab.in${tour.img}`,
    url,
    itinerary: tour.highlights?.map((h) => ({ '@type': 'TouristAttraction', name: h })),
    offers: {
      '@type': 'Offer',
      url,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock'
    },
    provider: { '@type': 'Organization', name: 'IndianCab' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '200'
    }
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

function BreadcrumbsJSONLD({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem', position: i + 1, name: it.name, item: it.url
    }))
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

function Meta({
  title, description, image, canonical
}: { title: string; description: string; image: string; canonical: string }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

// --- Main landing component (single template) --------------------------

export default function Landing({ type }: { type: 'cab' | 'tour' }) {
  const { slug = '' } = useParams()
  const canonical = useCanonical()

  const cab = type === 'cab' ? CABS.find((c) => c.slug === slug) : undefined
  const tour = type === 'tour' ? TOURS.find((t) => t.slug === slug) : undefined

  const title = cab
    ? `${cab.name} on Hire | IndianCab`
    : tour
    ? `${tour.name} Package | IndianCab`
    : 'Not Found | IndianCab'

  const description = cab
    ? `${cab.desc}. Seats ${cab.seats}${cab.bags ? `, ${cab.bags} bags` : ''}. Pan‑India service. Instant WhatsApp booking.`
    : tour
    ? `${tour.desc} • Duration ${tour.duration} • Ex: ${tour.ex}. Get instant quotes on WhatsApp.`
    : 'The page you are looking for does not exist.'

  const image = cab ? cab.img : tour ? tour.img : '/share.jpg'

  const crumbs = useMemo(() => {
    const items = [
      { name: 'Home', url: 'https://indiancab.in/' },
      type === 'cab'
        ? { name: 'Cabs', url: 'https://indiancab.in/fleet' }
        : { name: 'Tours', url: 'https://indiancab.in/fleet#tours' },
      { name: cab?.name || tour?.name || 'Not Found', url: canonical }
    ].filter(Boolean) as { name: string; url: string }[]
    return items
  }, [type, cab?.name, tour?.name, canonical])

  return (
    <HelmetProvider>
      <section className="landing section alt">
        <Meta title={title} description={description} image={image} canonical={canonical} />
        <OrgJSONLD />
        <BreadcrumbsJSONLD items={crumbs} />
        {cab && <CabJSONLD cab={cab} />}
        {tour && <TourJSONLD tour={tour} />}

        <div className="container">
          {/* HERO */}
          {(cab || tour) && (
            <header className="hero">
              <div className="hero__media">
                <img src={(cab || tour)!.img} alt={(cab ? `${cab.name} cab` : `${tour!.name} package`)} width={1400} height={900} loading="eager" />
                <span className="tag">{(cab || tour)!.tag}</span>
              </div>
              <div className="hero__body">
                <h1>
                  {cab ? `${cab.name} on Hire` : `${tour!.name} Package`}
                  <span className="rating-pill">⭐ 4.9 <em>(120+)</em></span>
                </h1>
                <p className="lead">{cab ? cab.desc : tour!.desc}</p>
                {cab ? (
                  <ul className="hero__meta">
                    <li>Seats <strong>{cab.seats}</strong></li>
                    {cab.bags && <li>Bags <strong>{cab.bags}</strong></li>}
                    <li>Service <strong>Pan‑India</strong></li>
                  </ul>
                ) : (
                  <ul className="hero__meta">
                    <li>Duration <strong>{tour!.duration}</strong></li>
                    <li>Ex <strong>{tour!.ex}</strong></li>
                  </ul>
                )}
                <div className="hero__cta">
                  {cab ? (
                    <a className="btn btn--wa" href={waLink(`Hi IndianCab, I want to book a ${cab.name}. Please share best quote.`)} target="_blank" rel="noreferrer">Book {cab.name}</a>
                  ) : (
                    <a className="btn btn--wa" href={waLink(`Hi IndianCab, I’m interested in the ${tour!.name} package. Please share itinerary & best quote.`)} target="_blank" rel="noreferrer">Get Quote</a>
                  )}
                  <Link className="btn" to={cab ? '/fleet' : '/fleet#tours'}>← Back</Link>
                </div>
              </div>
            </header>
          )}

          {/* CONTENT GRID */}
          {(cab || tour) && (
            <div className="grid">
              {/* left column */}
              <section className="card">
                <h2>Why ride with us</h2>
                <ul className="chips">
                  {USP_POINTS.map((p) => (
                    <li key={p} className="chip">{p}</li>
                  ))}
                </ul>
              </section>

              <section className="card">
                <h2>{cab ? 'What riders say' : 'Traveler reviews'}</h2>
                <div className="reviews__grid">
                  {DEFAULT_REVIEWS.map((r) => (
                    <figure key={r.author} className="review">
                      <blockquote>“{r.text}”</blockquote>
                      <figcaption>— {r.author}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              {tour?.highlights?.length ? (
                <section className="card">
                  <h2>Highlights</h2>
                  <ul className="bulleted">
                    {tour.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              <section className="card">
                <h2>FAQs</h2>
                <div className="faqs">
                  {DEFAULT_FAQS.map((f) => (
                    <details key={f.q}>
                      <summary>{f.q}</summary>
                      <p>{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>

              <section className="card">
                <h2>Inclusions & Policies</h2>
                <ul className="bulleted">
                  <li>Driver charges included. Tolls/state taxes as per route.</li>
                  <li>Flexible payment: UPI / Card link / Cash.</li>
                  <li>Free cancellation up to 24 hours before pickup.</li>
                  <li>Emergency support: 24×7 WhatsApp helpline.</li>
                </ul>
              </section>
            </div>
          )}

          {!cab && !tour && (
            <div className="notfound">
              <h1>Not Found</h1>
              <p>We couldn’t find that page. Try exploring our <Link to="/fleet">Fleet</Link> or <Link to="/fleet#tours">Tours</Link>.</p>
            </div>
          )}
        </div>

        <style>{`
          /* Scoped to landing only to avoid messing with footer/header */
          .landing { --radius:18px }
          .landing .container{max-width:960px;margin:0 auto;padding:0 16px}

          /* Section spacing (lighter on mobile) */
          .landing.section.alt{padding:40px 0}
          @media(max-width:700px){.landing.section.alt{padding:20px 0}}

          /* HERO */
          .landing .hero{display:grid;gap:18px;grid-template-columns:1.2fr 1fr;margin-top:8px;align-items:center}
          .landing .hero__media{position:relative;border-radius:var(--radius);overflow:hidden}
          .landing .hero__media img{width:100%;height:420px;object-fit:cover;display:block}
          .landing .tag{position:absolute;top:12px;left:12px;background:linear-gradient(90deg,var(--brand),var(--brand-2));color:#fff;font-weight:700;padding:6px 12px;border-radius:999px}
          .landing .hero__body h1{font-size:28px;margin:0 0 6px;display:flex;gap:10px;align-items:center;flex-wrap:wrap}
          .landing .rating-pill{background:var(--card);border:1px solid var(--border);padding:4px 10px;border-radius:999px;font-size:14px}
          .landing .lead{color:var(--muted);margin:.25rem 0 1rem}
          .landing .hero__meta{display:flex;gap:10px;flex-wrap:wrap;color:var(--muted)}
          .landing .hero__meta li{background:var(--card);border:1px solid var(--border);padding:6px 10px;border-radius:999px;font-size:14px}
          .landing .hero__cta{display:flex;gap:10px;flex-wrap:wrap;margin-top:10px}
          .landing .hero__cta .btn{min-width:140px}

          /* Mobile hero tweaks */
          @media(max-width:880px){
            .landing .hero{grid-template-columns:1fr}
            .landing .hero__media img{height:260px}
            .landing .hero__body h1{font-size:22px}
            .landing .rating-pill{font-size:12px;padding:3px 8px}
            .landing .hero__meta li{font-size:12px;padding:6px 8px}
            .landing .hero__cta{gap:8px}
            .landing .hero__cta .btn{flex:1}
          }

          /* GRID */
          .landing .grid{display:grid;gap:16px;margin:18px 0 36px;grid-template-columns:1fr}
          @media(min-width:960px){.landing .grid{grid-template-columns:1fr 1fr}}

          .landing .card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:16px;box-shadow:var(--shadow)}
          .landing .card h2{font-size:18px;margin:0 0 10px}
          @media(max-width:700px){.landing .card{padding:12px}}

          /* Chips */
          .landing .chips{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin:0;padding:0;list-style:none}
          @media(max-width:560px){.landing .chips{grid-template-columns:1fr}}
          .landing .chip{border:1px solid var(--border);padding:8px 12px;border-radius:999px;background:linear-gradient(180deg,rgba(255,255,255,.6),rgba(255,255,255,.2));backdrop-filter:saturate(120%);font-size:14px}
          @media(max-width:700px){.landing .chip{font-size:13px;padding:8px 10px}}

          /* Reviews */
          .landing .reviews__grid{display:grid;grid-template-columns:1fr;gap:12px}
          @media(min-width:700px){.landing .reviews__grid{grid-template-columns:1fr 1fr}}
          .landing .review{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:14px}
          .landing .review blockquote{margin:0 0 8px;line-height:1.55}
          .landing .review figcaption{color:var(--muted)}

          /* Lists */
          .landing .bulleted{list-style:none;padding:0;margin:0}
          .landing .bulleted li{position:relative;padding-left:18px;margin:6px 0}
          .landing .bulleted li::before{content:'•';position:absolute;left:0;top:0;color:var(--brand)}

          /* Not found */
          .landing .notfound{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:24px;text-align:center}

          /* Buttons */
          .landing .btn{padding:10px 14px;border-radius:12px;text-decoration:none;font-weight:700;transition:0.2s;border:1px solid var(--border)}
          .landing .btn:hover{transform:translateY(-1px)}
          .landing .btn--wa{background:#25D366;color:#fff;border:none}
        `}</style>
      </section>
    </HelmetProvider>
  )
}
