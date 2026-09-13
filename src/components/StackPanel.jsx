import TechnologyIcon from './TechnologyIcon.jsx'

function StackPanel({ selectedTechnologies, onRemove, onRemoveAll }) {
  const count = selectedTechnologies.length

  return (
    <aside className="stack-panel" aria-labelledby="stack-title">
      <div className="stack-heading">
        <div>
          <h2 id="stack-title">Your Stack</h2>
          <p aria-live="polite">{count ? `${count} ${count === 1 ? 'Technology' : 'Technologies'} Selected` : 'No technologies selected yet.'}</p>
        </div>
        <span className="stack-count">{count}</span>
      </div>

      {count === 0 ? (
        <div className="empty-stack">
          <p>Your stack is empty</p>
        </div>
      ) : (
        <div className="selected-stack">
          <ul>
            {selectedTechnologies.map((technology) => (
              <li key={technology.id}>
                <TechnologyIcon technology={technology} size={30} />
                <div>
                  <strong>{technology.name}</strong>
                  <span>{technology.category}</span>
                </div>
                <button
                  type="button"
                  aria-label={`Remove ${technology.name} from stack`}
                  onClick={() => onRemove(technology.id)}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
          <button
            className="remove-all"
            type="button"
            aria-label={`Remove all ${count} technologies from your stack`}
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  )
}

export default StackPanel
