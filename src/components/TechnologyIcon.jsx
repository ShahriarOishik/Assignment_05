import { useState } from 'react'

function TechnologyIcon({ technology, size = 36 }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span
        className="technology-icon-fallback"
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        {technology.name.slice(0, 2).toUpperCase()}
      </span>
    )
  }

  return (
    <img
      className="technology-icon"
      src={technology.icon}
      alt=""
      width={size}
      height={size}
      onError={() => setFailed(true)}
    />
  )
}

export default TechnologyIcon
