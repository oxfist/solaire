import './Home.css'

export default function Home() {
  return (
    <div id="base-container">
      <main id="main-container" className="container">
        <section id="main-header" className="container">
          <h1 id="main-title">Solaire</h1>
          <p id="main-subtitle">
            An App for Playing <em>Dark Souls: The Board Game</em>
          </p>
        </section>
        <section className="action-group">
          <p>Push Action</p>
          <button
            type="button"
            id="regular-encounter"
            className="btn btn-encounter"
          >
            Regular Encounter
          </button>
          <button
            type="button"
            id="boss-encounter"
            className="btn btn-encounter"
          >
            Boss or Mini-Boss Encounter
          </button>
        </section>
      </main>
      <footer>
        <p>website created with no commercial interest</p>
      </footer>
    </div>
  )
}
