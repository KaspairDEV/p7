import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import CardsCSS from "../Card/Card.module.css"

const Card = ({lodgings}) => {
  
  return (
    <div className={CardsCSS.backgroundCards}>
      {lodgings.map((lodging) => (
        <Link to={`/lodgings/${lodging.id}`} key={lodging.id}>
          <div key={lodging.id} className={CardsCSS.card}>
            <img
              src={lodging.cover}
              alt={lodging.title}
              className={CardsCSS.cover}
            />
            <div className={CardsCSS.title}>{lodging.title}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}
/*Proptypes to define the type of props for props security*/
Card.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
}

export default Card
