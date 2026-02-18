import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Benefits } from './components/Benefits'
import { Recommended } from './components/Recommended'
import { FAQ } from './components/FAQ'
import { Closing } from './components/Closing'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Recommended />
        <FAQ />
        <Closing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
