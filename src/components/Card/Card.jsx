import { Link } from "react-router-dom"
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


export default Card
