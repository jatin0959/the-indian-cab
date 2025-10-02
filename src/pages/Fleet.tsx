
export default function Fleet(){
  const cars = [
    { name:'Hatchback', desc:'Best for solo rides' },
    { name:'Sedan', desc:'Comfort for 3–4 passengers' },
    { name:'SUV', desc:'Extra room for family & luggage' },
    { name:'Premium', desc:'Executive rides' },
  ]
  return (
    <section className="section alt">
      <div className="container">
        <header className="section__head">
          <h1>Fleet</h1>
          <p>Choose what fits your ride.</p>
        </header>
        <div className="cards cards--grid4">
          {cars.map(c => (
            <article key={c.name} className="card card--tall">
              <div className="img-placeholder large" />
              <h3>{c.name}</h3>
              <p>{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
