
export default function Services(){
  const items = [
    { title: 'Airport Transfers', text: 'Punctual pickup & drop with flight tracking.' },
    { title: 'City Rides', text: 'On‑demand cabs for quick, safe trips.' },
    { title: 'Outstation', text: 'Intercity round trips with transparent fares.' },
    { title: 'Hourly Rentals', text: 'Flexible packages for errands & meetings.' },
  ]
  return (
    <section className="section">
      <div className="container">
        <header className="section__head">
          <h1>Our Services</h1>
          <p>Pick the ride that suits your plan.</p>
        </header>
        <div className="cards">
          {items.map(s => (
            <article key={s.title} className="card">
              <div className="img-placeholder large" />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
