import TechnologyIcon from './TechnologyIcon.jsx'

const badgeColor = { Popular: 'blue', Versatile: 'green', Fast: 'orange', 'Full Stack': 'violet', Standard: 'green', 'Top SQL': 'blue', Cache: 'red', Ubiquitous: 'yellow', Essential: 'blue', Robust: 'blue', Modern: 'cyan', Containers: 'blue' }

function TechnologyCard({ technology, isSelected, onAdd }) {
  return (
    <article className={`technology-card${isSelected ? ' selected' : ''}`}>
      <div className="card-topline">
        <TechnologyIcon technology={technology} size={38} />
        <span className={`badge badge-${badgeColor[technology.badge] || 'blue'}`}>{technology.badge}</span>
      </div>
      <div className="card-copy">
        <h3>{technology.name}</h3>
        <p>{technology.description}</p>
      </div>
      <div className="technology-meta">
        <span className="category-chip">{technology.category}</span>
        <span>{technology.difficulty}</span>
        <span className="rating">★ {technology.rating}</span>
      </div>
      <button
        className="stack-button"
        type="button"
        disabled={isSelected}
        aria-pressed={isSelected}
        aria-label={isSelected ? `${technology.name} is in your stack` : `Add ${technology.name} to your stack`}
        onClick={() => onAdd(technology)}
      >
        {isSelected ? '✓ ' : ''}
        {isSelected ? 'Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  )
}

export default TechnologyCard
