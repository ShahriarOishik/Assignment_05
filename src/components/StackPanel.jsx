import { Layers3, X } from 'lucide-react'

function StackPanel({ selectedTechnologies, onRemove, onRemoveAll }) {
  const count = selectedTechnologies.length

  return (
    <aside className="stack-panel" aria-label="Your selected technology stack">
      <div className="stack-heading">
        <div>
          <h2>Your Stack</h2>
          <p>{count ? `${count} ${count === 1 ? 'Technology' : 'Technologies'} Selected` : 'No technologies selected yet.'}</p>
        </div>
        <span className="stack-count">{count}</span>
      </div>

      {count === 0 ? (
        <div className="empty-stack">
          <Layers3 size={30} />
          <p>Your stack is empty.</p>
          <span>Add technologies to start building.</span>
        </div>
      ) : (
        <div className="selected-stack">
          <ul>
            {selectedTechnologies.map((technology) => (
              <li key={technology.id}>
                <img src={technology.icon} alt="" width="30" height="30" />
                <div>
                  <strong>{technology.name}</strong>
                  <span>{technology.category}</span>
                </div>
                <button
                  type="button"
                  aria-label={`Remove ${technology.name} from stack`}
                  onClick={() => onRemove(technology.id)}
                >
                  <X size={18} />
                </button>
              </li>
            ))}
          </ul>
          <button className="remove-all" type="button" onClick={onRemoveAll}>
            Remove All
          </button>
        </div>
      )}
    </aside>
  )
}

export default StackPanel
