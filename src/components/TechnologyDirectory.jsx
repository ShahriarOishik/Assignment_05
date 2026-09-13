import DataState from './DataState.jsx'
import StackPanel from './StackPanel.jsx'
import TechnologyCard from './TechnologyCard.jsx'

function TechnologyDirectory({
  technologies,
  selectedTechnologies,
  isLoading,
  hasError,
  onRetry,
  onAdd,
  onRemove,
  onRemoveAll,
}) {
  const selectedIds = new Set(selectedTechnologies.map((technology) => technology.id))

  return (
    <section className="directory-section" id="technologies">
      <span id="projects" aria-hidden="true" />
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Build with confidence</p>
          <h2>Explore the <span className="gradient-text">Technologies</span></h2>
          <p>Pick the right tools and build a stack tailored to your next project.</p>
        </div>

        <div className="directory-layout">
          <div className="technology-grid">
            {isLoading ? (
              <DataState type="loading" />
            ) : hasError ? (
              <DataState type="error" onRetry={onRetry} />
            ) : technologies.length === 0 ? (
              <DataState type="empty" />
            ) : (
              technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isSelected={selectedIds.has(technology.id)}
                  onAdd={onAdd}
                />
              ))
            )}
          </div>
          <StackPanel
            selectedTechnologies={selectedTechnologies}
            onRemove={onRemove}
            onRemoveAll={onRemoveAll}
          />
        </div>
      </div>
    </section>
  )
}

export default TechnologyDirectory
