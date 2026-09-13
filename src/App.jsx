import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import TechnologyDirectory from './components/TechnologyDirectory.jsx'

function App() {
  const [technologies, setTechnologies] = useState([])
  const [selectedTechnologies, setSelectedTechnologies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    fetch('/data/technologies.json', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Request failed with ${response.status}`)
        return response.json()
      })
      .then((data) => setTechnologies(data))
      .catch((error) => {
        if (error.name !== 'AbortError') setLoadError(true)
      })
      .finally(() => {
        if (!controller.signal.aborted) setIsLoading(false)
      })

    return () => controller.abort()
  }, [reloadKey])

  const addToStack = (technology) => {
    if (selectedTechnologies.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`)
      return
    }

    setSelectedTechnologies((current) => [...current, technology])
    toast.success(`${technology.name} added to your stack.`)
  }

  const removeFromStack = (technologyId) => {
    const technology = selectedTechnologies.find((item) => item.id === technologyId)
    setSelectedTechnologies((current) =>
      current.filter((technology) => technology.id !== technologyId),
    )
    toast.info(`${technology?.name ?? 'Technology'} removed from your stack.`)
  }

  const removeAllFromStack = () => {
    setSelectedTechnologies([])
    toast.info('Your stack has been cleared.')
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
          hasError={loadError}
          onRetry={() => {
            setIsLoading(true)
            setLoadError(false)
            setReloadKey((current) => current + 1)
          }}
          onAdd={addToStack}
          onRemove={removeFromStack}
          onRemoveAll={removeAllFromStack}
        />
      </main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2400}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App
