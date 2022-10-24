import { NavLink } from "react-router-dom"
import Logo from "../Images/logo.svg"
import HeaderCSS from "../Header/Header.module.css"

function Header() {

  let activeStyle = {textDecoration: "underline"}

  return (
      <header className={HeaderCSS.header}>
        
        <img src={Logo} alt="Logo de Kasa" className={HeaderCSS.logo} />
        <nav className={HeaderCSS.nav}>
          <NavLink to="/" className={HeaderCSS.homeNav} style={({ isActive }) =>
              isActive ? activeStyle : undefined } end>
            Accueil
          </NavLink>
          <NavLink to="/about" className={HeaderCSS.aboutNav} style={({ isActive }) =>
              isActive ? activeStyle : undefined } end>
            A Propos
          </NavLink>
        </nav>
      </header>
  )
}

export default Header
