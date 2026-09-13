function DataState({ type, onRetry }) {
  if (type === 'loading') {
    return (
      <div className="data-state" role="status">
        <span className="loading-spinner" aria-hidden="true"></span>
        <strong>Loading technologies</strong>
        <span>Gathering the tools for your stack...</span>
      </div>
    )
  }

  if (type === 'error') {
    return (
      <div className="data-state data-error" role="alert">
        <span className="error-icon" aria-hidden="true">!</span>
        <strong>Technologies could not be loaded</strong>
        <span>Check your connection and try again.</span>
        <button type="button" onClick={onRetry}>
          ↻ Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="data-state">
      <span className="error-icon" aria-hidden="true">!</span>
      <strong>No technologies found</strong>
      <span>New tools will appear here when they are available.</span>
    </div>
  )
}

export default DataState
