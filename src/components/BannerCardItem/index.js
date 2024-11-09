import './index.css'

const BannerCardItem = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards
  return (
    <li className={`${className}`}>
      <div className="container">
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button type="button" className="button-style">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
