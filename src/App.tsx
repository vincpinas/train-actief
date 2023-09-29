import './scss/app.scss'
import Navigation from './components/navigation'
import Hero from './components/hero'
import ScrollingBar from './components/scrollingbar'
import Supporters from './components/support'
import Info from './components/info'
import Contact from './components/contact'
import Services from './components/services'

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <ScrollingBar />
      <Supporters />
      <Services />
      <Info />
      <Contact />
    </>
  )
}

export default App
