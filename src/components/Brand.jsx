import logoUrl from '../../assets/logo-text.png'

function Brand({ compact = false }) {
  if (compact) {
    return <span className="brand-mark" aria-label="Dev Stack">DS</span>
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
