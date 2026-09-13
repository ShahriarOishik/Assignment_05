import logoUrl from '../../assets/logo-text.png'

function Brand({ compact = false }) {
  if (compact) {
    return (
      <span className="brand-compact" aria-label="Dev Stack">
        <span className="brand-mark" aria-hidden="true">DS</span>
        <span className="brand-name">DevStack</span>
      </span>
    )
  }

  return (
    <img
      className="brand-image"
      src={logoUrl}
      alt="Dev Stack"
      width="139"
      height="36"
    />
  )
}

export default Brand
