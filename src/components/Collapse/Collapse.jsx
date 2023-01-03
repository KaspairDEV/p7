import CollapseCSS from "../Collapse/Collapse.module.css"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { DataLodgings } from "../../Data/DataLodgings"
import iconCollapse from "../Images/icon-collapse.svg"

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className={CollapseCSS.container}>
      <div className={CollapseCSS.title} onClick={() => setIsOpen(false)}>
        {title}
        <img src={iconCollapse} className={CollapseCSS.iconOpen} />
      </div>
      <div className={CollapseCSS.content}>{content}</div>
    </div>
  ) : (
    <div className={CollapseCSS.container}>
      <div className={CollapseCSS.title} onClick={() => setIsOpen(true)}>
        {title}
        <img src={iconCollapse} className={CollapseCSS.icon} />
      </div>
    </div>
  )
}

export default Collapse
