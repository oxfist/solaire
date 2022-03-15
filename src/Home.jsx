import './Home.css'

export default function Home() {
  return (
    <div id="base-container">
      <div id="main-container">
        <main className="container">
          <section id="main-header" className="container">
            <h1 id="main-title">Solaire</h1>
            <p id="main-subtitle">
              An App for Playing Dark Souls: The Board Game
            </p>
          </section>
          <section className="action-group">
            <p>Push Action</p>
            <button type="button" className="btn btn-encounter">
              Regular Encounter
            </button>
            <button type="button" className="btn btn-encounter">
              Boss or Mini-Boss Encounter
            </button>
          </section>
        </main>
      </div>
      <footer>
        <p>website created with no commercial interest</p>
      </footer>
    </div>
  )
}
