import { useEffect, useState } from 'react'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import TechnologyDirectory from './components/TechnologyDirectory.jsx'

function App() {
  const [technologies, setTechnologies] = useState([])
  const [selectedTechnologies, setSelectedTechnologies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/data/technologies.json')
      .then((response) => response.json())
      .then((data) => setTechnologies(data))
      .finally(() => setIsLoading(false))
  }, [])

  const addToStack = (technology) => {
    if (selectedTechnologies.some((item) => item.id === technology.id)) return
    setSelectedTechnologies((current) => [...current, technology])
  }

  const removeFromStack = (technologyId) => {
    setSelectedTechnologies((current) =>
      current.filter((technology) => technology.id !== technologyId),
    )
  }

  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <TechnologyDirectory
          technologies={technologies}
          selectedTechnologies={selectedTechnologies}
          isLoading={isLoading}
          onAdd={addToStack}
          onRemove={removeFromStack}
          onRemoveAll={() => setSelectedTechnologies([])}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App
