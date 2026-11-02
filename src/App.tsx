import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Prologue from './components/Prologue'
import Specialists from './components/Specialists'
import RepoSpread from './components/RepoSpread'
import Adventures from './components/Adventures'
import Battles from './components/Battles'
import Trophies from './components/Trophies'
import FinalSpread from './components/FinalSpread'
import Footer from './components/Footer'

function App() {
  return (
    <div className="manga-page">
      <Navbar />
      <main>
        <Hero />
        <Prologue />
        <Specialists />
        <RepoSpread />
        <Adventures />
        <Battles />
        <Trophies />
        <FinalSpread />
      </main>
      <Footer />
    </div>
  )
}

export default App
