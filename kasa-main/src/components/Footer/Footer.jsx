import LogoFooter from "../Images/logo-footer.png"
import FooterCSS from "../Footer/Footer.module.css"

function Footer() {
  return (
      <footer className={FooterCSS.footer}>
        <img src={LogoFooter} alt="Logo de Kasa du footer" className={FooterCSS.logo} />
        <p className={FooterCSS.text}>© 2020 Kasa. All rights reserved</p>
      </footer>
  )
}

export default Footer
