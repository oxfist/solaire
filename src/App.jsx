import { Helmet } from 'react-helmet'

import metaImage from '/src/images/solaire-phantom.jpg'
import './App.css'

function App() {
  return (
    <div className="">
      <Helmet>
        <title>
          Solaire | The (jolliest) Cooperator App for "Dark Souls: The Board Game"
        </title>
        <meta property="og:title" content="Solaire - The Cooperator App" />
        <meta property="og:description" content="A helper app for playing Dark Souls: The Board Game. Use on your phone or desktop browser, it works great in both!" />
        <meta property="og:image" content="https://guides.gamepressure.com/darksouls/gfx/word/464924671.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      <header className="">
        <h1>Dark Souls</h1>
        <h2>The Board Game</h2>
      </header>
      <main>
      </main>
    </div>
  )
}

export default App
