
export default function Contact(){
  return (
    <section className="section alt">
      <div className="container">
        <header className="section__head">
          <h1>Contact</h1>
          <p>Reach us on WhatsApp for bookings. No form — instant response.</p>
        </header>
        <div className="contact-grid bare">
          <div className="card">
            <h3>Head Office</h3>
            <p>IndianCab HQ, New Ashok Nagar, New Delhi, India 110096</p>
            <h3>Phone</h3>
            <p><a href="tel:+919625818187">+91 96258 18187</a><br/><a href="tel:+919625818188">+91 96258 18188</a></p>
            <h3>Email</h3>
            <p><a href="mailto:support@indiancab.com">support@indiancab.com</a></p>
            <h3>Working Hours</h3>
            <p>Monday – Sunday: 6:00 AM – 11:00 PM</p>
            <a className="btn btn--primary" href="https://wa.me/919625818187" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          </div>
          <div className="card">
            <h3>Map</h3>
            <p><a target="_blank" rel="noreferrer" href="https://maps.google.com/maps?ll=28.667694,77.276361&z=15&t=m&hl=en&gl=IN&mapclient=embed">Open in Google Maps</a></p>
            <div className="img-placeholder tall"><div className="img-label">Map preview</div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
