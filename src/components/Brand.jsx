import logoUrl from '../../assets/logo-text.png'

function Brand() {
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