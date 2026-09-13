import { AlertCircle, LoaderCircle, RefreshCw } from 'lucide-react'

function DataState({ type, onRetry }) {
  if (type === 'loading') {
    return (
      <div className="data-state" role="status">
        <LoaderCircle className="loading-spinner" size={34} />
        <strong>Loading technologies</strong>
        <span>Gathering the tools for your stack...</span>
      </div>
    )
  }

  if (type === 'error') {
    return (
      <div className="data-state data-error" role="alert">
        <AlertCircle size={34} />
        <strong>Technologies could not be loaded</strong>
        <span>Check your connection and try again.</span>
        <button type="button" onClick={onRetry}>
          <RefreshCw size={14} /> Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="data-state">
      <AlertCircle size={34} />
      <strong>No technologies found</strong>
      <span>New tools will appear here when they are available.</span>
    </div>
  )
}

export default DataState
