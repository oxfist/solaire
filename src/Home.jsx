import './Home.css'

import bonfireUrl from './images/bonfire.png'

export default function Home() {
  return (
    <div id="base-container">
      <main id="main-container" className="container">
        <section id="main-header" className="container">
          <h1 id="main-title">Solaire</h1>
          <p id="main-subtitle">
            An App for Playing <em>Dark Souls: The Board Game</em>
          </p>
          <img id="bonfire" src={bonfireUrl} alt="Bonfire with a sword" />
        </section>
        <section className="action-group">
          <p>Push Action</p>
          <div className="action-buttons">
            <button
              type="button"
              id="regular-encounter"
              className="btn btn-encounter"
            >
              <span className="text-background-black">Regular Encounter</span>
            </button>
            <button
              type="button"
              id="boss-encounter"
              className="btn btn-encounter"
            >
              <span className="text-background-black">
                Boss or Mini-Boss Encounter
              </span>
            </button>
          </div>
        </section>
      </main>
      <footer>
        <p>website created with no commercial interest</p>
      </footer>
    </div>
  )
}
