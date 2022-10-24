import React from 'react'
import LodgingDetailsCSS from "../../components/LodgingDetails/LodgingDetails.module.css"
import FullStar from "../Images/full-star.png"
import EmptyStar from "../Images/empty-star.png"

function LodgingDetails({ details }) {

    const scaleRating = details.rating
    /*console.log(scaleRating)*/

    const ratingStars = []
    for(let i = 1; i <= 5; i++) {
        if(i <= scaleRating) {
        ratingStars[i] = true
        } else {
           ratingStars[i] = false 
        }
    }
  return (
    <div className={LodgingDetailsCSS.container}>
        <div className={LodgingDetailsCSS.leftDetails}>
            <div className={LodgingDetailsCSS.title}>
                {details.title}
            </div>
            <div className={LodgingDetailsCSS.location}>
                {details.location}
            </div>
            <div className={LodgingDetailsCSS.tags}>
                {details.tags.map((tagsNb) => (
                    <div className={LodgingDetailsCSS.tag} key={tagsNb+details.id}>{tagsNb}</div>
                ))}
            </div>
        </div>
        <div className={LodgingDetailsCSS.rightDetails}>
            <div className={LodgingDetailsCSS.hostInfo}>
                <div className={LodgingDetailsCSS.hostName}>
                {details.host.name}
                </div>
                <div className={LodgingDetailsCSS.pictProfile}>
                    <img src={details.host.picture} alt="photo du propriétaire" className={LodgingDetailsCSS.picture}/>
                </div>
            </div>
            <div className={LodgingDetailsCSS.starsBox}>
                {ratingStars.map((nbStar, index) =>
                <img className={LodgingDetailsCSS.stars} src={nbStar ? FullStar : EmptyStar} alt={nbStar ? "full star" : "empty star"} key={nbStar+details.id+index} />
                )}
            </div>
        </div>
        
    </div>
  )
}

export default LodgingDetails