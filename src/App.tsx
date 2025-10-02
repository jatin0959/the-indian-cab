// src/App.tsx
import { Routes, Route, useLocation, Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Services from './pages/Services'
import Fleet from './pages/Fleet'
import Features from './pages/Features'
import USP from './pages/USP'
import Contact from './pages/Contact'
import Welcome from './pages/Welcome'
import WelcomeSplash from './components/WelcomeSplash'

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, left: 0 }) }, [pathname])

  const links = [
    { to: '/services', label: 'Services' },
    { to: '/Cabs', label: 'Cabs' },
    { to: '/features', label: 'Features' },
    { to: '/Experience', label: 'Experience' },
    { to: '/contact', label: 'Contact' },
  ]

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // splash loader state
  const [showSplash, setShowSplash] = useState(() => !localStorage.getItem('ic_seen_welcome'))
  const handleSplashDone = () => {
    localStorage.setItem('ic_seen_welcome', '1')
    setShowSplash(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when drawer is open
  useEffect(() => {
    const b = document.body
    if (open) {
      const prev = b.style.overflow
      b.style.overflow = 'hidden'
      return () => { b.style.overflow = prev }
    }
  }, [open])

  // close drawer on route change
  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="app-shell">
      {/* Welcome Splash */}
      {showSplash && <WelcomeSplash onDone={handleSplashDone} durationMs={5600} />}

      {/* Header */}
      <header className={`nav light ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="container nav__inner">
          <Link to="/" className="brand" aria-label="Home">
            <img src="/assets/logo.png" alt="IndianCab" className="brand__logo" />
          </Link>

          {/* Desktop nav */}
          <nav className="nav__links nav__links--desktop" aria-label="Primary">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} className={({isActive}) => isActive ? 'active' : ''}>
                {l.label}
              </NavLink>
            ))}
            <a className="btn btn--wa nav__wa" href="https://wa.me/919625818187" target="_blank" rel="noreferrer">
              Book on WhatsApp
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`hamburger ${open ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen(v => !v)}
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          id="mobile-drawer"
          className={`nav-drawer ${open ? 'is-open' : ''}`}
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div className="nav-drawer__panel" onClick={e => e.stopPropagation()}>
            <div className="drawer__head">
              <Link to="/" className="brand" onClick={() => setOpen(false)}>
                <img src="/assets/logo.png" alt="IndianCab" className="brand__logo" />
              </Link>
              <button className="drawer__close" aria-label="Close menu" onClick={() => setOpen(false)}>✕</button>
            </div>
            <nav className="drawer__links" aria-label="Mobile">
              {links.map(l => (
                <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className={({isActive}) => isActive ? 'active' : ''}>
                  {l.label}
                </NavLink>
              ))}
              <a className="btn btn--wa" href="https://wa.me/919625818187" target="_blank" rel="noreferrer">
                Book on WhatsApp
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Routes */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Cabs" element={<Fleet />} />
          <Route path="/features" element={<Features />} />
          <Route path="/Experience" element={<USP />} />
          <Route path="/contact" element={<Contact />} />
          {/* keep welcome route for testing */}
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="ic-footer">
        <section className="ic-footer__cta">
          <div className="container ic-footer__cta-inner">
            <div className="cta-copy">
              <img src="/assets/logo.png" alt="IndianCab" className="cta-logo" />
              <div>
                <h3>Ready when you are.</h3>
                <p>Fast, safe and on-time rides across India.</p>
              </div>
            </div>
            <div className="cta-actions">
              <a className="btn btn--wa btn--lg" href="https://wa.me/919625818187" target="_blank" rel="noreferrer">
                Book on WhatsApp
              </a>
              <a className="btn btn--light btn--lg" href="tel:+919625818187">
                Call +91 96258 18187
              </a>
            </div>
          </div>
        </section>

        <section className="ic-footer__main">
          <div className="container ic-footer__grid">
            <div className="col brand-col">
              <div className="brand-line">
                <div>
                  <div className="brand-name">The Indian Cab</div>
                  <div className="tagline">Reliable rides, every time.</div>
                </div>
              </div>
              <ul className="meta">
                <li>🕘 Mon–Sun: 6:00 AM – 11:00 PM</li>
                <li>📍 New Ashok Nagar, New Delhi • 110096</li>
              </ul>
            </div>
            <div className="col">
              <h4>Company</h4>
              <ul className="links">
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/Cabs">Cabs</Link></li>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/Experience">Experience</Link></li>
              </ul>
            </div>
            <div className="col">
              <h4>Contact</h4>
              <ul className="links">
                <li><a href="tel:+919625818187">+91 96258 18187</a></li>
                <li><a href="tel:+919625818188">+91 96258 18188</a></li>
                <li><a href="mailto:support@indiancab.com">support@indiancab.com</a></li>
                <li><a href="https://maps.google.com/maps?ll=28.667694,77.276361&z=15&t=m&hl=en&gl=IN&mapclient=embed" target="_blank" rel="noreferrer">Google Maps ↗</a></li>
              </ul>
            </div>
            <div className="col">
              <h4>Quick Links</h4>
              <ul className="links">
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="https://wa.me/919625818187?text=Hi%20IndianCab%2C%20I%20need%20a%20cab" target="_blank" rel="noreferrer">Send Pickup on WA</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="ic-footer__tail">
          <div className="container tail-inner">
            <span>© {new Date().getFullYear()} The Indian Cab</span>
            <span className="tiny">Designed & Developed by Jatin Dubey</span>
          </div>
        </section>
      </footer>

      {/* Floating WhatsApp FAB */}
      <a
        className="whatsapp-fab"
        href="https://wa.me/919625818187?text=Hi%20IndianCab%20team,%20I%20want%20to%20book%20a%20cab."
        target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      >
        WhatsApp
      </a>
    </div>
  )
}
