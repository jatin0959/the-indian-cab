// src/App.tsx
import { Routes, Route, useLocation, Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Services from './pages/Services'
import Fleet from './pages/Fleet'
import Features from './pages/Features'
import USP from './pages/USP'
import Contact from './pages/Contact'
import logo from './assets/logo.png'

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, left: 0 }) }, [pathname])

  const links = [
    { to: '/services', label: 'Services' },
    { to: '/fleet', label: 'Fleet' },
    { to: '/features', label: 'Features' },
    { to: '/usp', label: 'USP' },
    { to: '/contact', label: 'Contact' },
  ]

  // Navbar state
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="app-shell">
      {/* Header */}
      <header className={`nav light ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="container nav__inner">
          <Link to="/" className="brand" aria-label="Home" onClick={() => setOpen(false)}>
            <img src={logo} alt="IndianCab" className="brand__logo" />
          </Link>

          {/* Desktop nav */}
          <nav className="nav__links nav__links--desktop">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} className={({isActive}) => isActive ? 'active' : ''}>
                {l.label}
              </NavLink>
            ))}
            {/* Use a vivid WA button for contrast on white */}
            <a className="btn btn--wa" href="https://wa.me/919625818187" target="_blank" rel="noreferrer">
              Book on WhatsApp
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`hamburger ${open ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`nav-drawer ${open ? 'is-open' : ''}`} onClick={() => setOpen(false)}>
          <div className="nav-drawer__panel" onClick={e => e.stopPropagation()}>
            {links.map(l => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className={({isActive}) => isActive ? 'active' : ''}>
                {l.label}
              </NavLink>
            ))}
            <a className="btn btn--wa" href="https://wa.me/919625818187" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              Book on WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Routes */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/features" element={<Features />} />
          <Route path="/usp" element={<USP />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Upgraded footer: airy pre-footer + dark band */}
      <footer className="site-footer">
        {/* Pre-footer (blends with page) */}
        <div className="footer__pre">
          <div className="container footer__grid">
            <div>
              <div className="brand brand--footer">IndianCab</div>
              <p>Reliable rides across New Delhi & beyond.</p>
              <p className="muted">Mon–Sun: 6:00 AM – 11:00 PM</p>
              <a className="btn btn--wa" href="https://wa.me/919625818187" target="_blank" rel="noreferrer">
                Book on WhatsApp
              </a>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/fleet">Fleet</Link></li>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/usp">USP</Link></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li><Link to="/contact">New Ashok Nagar, New Delhi 110096</Link></li>
                <li><a href="tel:+919625818187">+91 96258 18187</a></li>
                <li><a href="tel:+919625818188">+91 96258 18188</a></li>
                <li><a href="mailto:support@indiancab.com">support@indiancab.com</a></li>
              </ul>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="https://maps.google.com/maps?ll=28.667694,77.276361&z=15&t=m&hl=en&gl=IN&mapclient=embed" target="_blank" rel="noreferrer">Google Maps</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dark band (clearly footer) */}
        <div className="footer__band">
          <div className="container band__inner">
            <span>© {new Date().getFullYear()} IndianCab</span>
            <div className="socials">
              <a href="#" aria-label="Twitter">X</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Facebook">FB</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WA quick action (optional, keep if you like) */}
      <a
        className="whatsapp-fab"
        href="https://wa.me/919625818187?text=Hi%20IndianCab%20team,%20I%20want%20to%20book%20a%20cab."
        target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      >WhatsApp</a>
    </div>
  )
}
