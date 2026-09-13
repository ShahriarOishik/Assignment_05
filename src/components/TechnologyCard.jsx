import { Check, Plus, Star } from 'lucide-react'

function TechnologyCard({ technology, isSelected, onAdd }) {
  return (
    <article className="technology-card">
      <div className="card-topline">
        <img
          className="technology-icon"
          src={technology.icon}
          alt=""
          width="38"
          height="38"
        />
        <span className={`badge badge-${technology.badgeTone}`}>{technology.badge}</span>
      </div>
      <div className="card-copy">
        <h3>{technology.name}</h3>
        <p>{technology.description}</p>
      </div>
      <div className="technology-meta">
        <span className="category-chip">{technology.category}</span>
        <span>{technology.difficulty}</span>
        <span className="rating"><Star size={13} fill="currentColor" /> {technology.rating}</span>
      </div>
      <button
        className="stack-button"
        type="button"
        disabled={isSelected}
        onClick={() => onAdd(technology)}
      >
        {isSelected ? <Check size={16} /> : <Plus size={16} />}
        {isSelected ? 'Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  )
}

export default TechnologyCard
