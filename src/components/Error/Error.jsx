import ErrorCSS from "../Error/Error.module.css"
import { Link } from "react-router-dom"

function Error() {

  return (
    <div className={ErrorCSS.errorContainer}>
        <div className={ErrorCSS.title}>404</div>
        <div className={ErrorCSS.subtitle}>Oups! La page que vous demandez n'existe pas.</div>
        <Link to="/" className={ErrorCSS.backlink}>Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default Error