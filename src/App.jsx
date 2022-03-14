import { Helmet } from 'react-helmet'
import Home from './Home'

function App() {
  return (
    <div>
      <Helmet>
        <title>
          Solaire | The (jolliest) Cooperator App for{' '}
          {`"Dark Souls: The Board Game"`}
        </title>
        <meta property="og:title" content="Solaire - The Cooperator App" />
        <meta
          property="og:description"
          content="A helper app for playing Dark Souls: The Board Game. Use it on your phone or desktop browser, it works great in both!"
        />
        <meta
          property="og:image"
          content="https://guides.gamepressure.com/darksouls/gfx/word/464924671.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Helmet>
      <Home />
      <main />
    </div>
  )
}

export default App
