import './index.css'

const ReusableBanner = props => {
  const {reusableBanner} = props
  const {headerText, description, className} = reusableBanner
  const listItemSty = `eachBox ${className}`
  return (
    <li className={listItemSty}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="pera">{description}</p>
        <button className="showMore" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default ReusableBanner
