import React from "react"
import { useState } from "react"
import SliderCSS from "../Slideshow/Slideshow.module.css"
import leftArrow from "../Images/left-arrow.svg"
import rightArrow from "../Images/right-arrow.svg"

function Slideshow({ images }) {
  /*Set Hook useState for for listening to changes*/
  const [current, setCurrent] = useState(0)

  /*add a const for the lenght of data*/
  const length = images.length

  /*Added function for navigation between images*/
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  

  return (
    <section className={SliderCSS.container}>
      <div className={SliderCSS.slider}>
        <img
          src={images[current]}
          alt={images.title}
          className={SliderCSS.image}
          key={images.id}
        />
      </div>
      <img
        src={leftArrow}
        className={
          images.length === 1 ? SliderCSS.leftArrowNone : SliderCSS.leftArrow
        }
        onClick={prevSlide}
      />
      <div
        className={
          images.length === 1 ? SliderCSS.numbInfoNone : SliderCSS.numbInfo
        }
      >
        {current + 1}/{images.length}
      </div>
      <img
        src={rightArrow}
        className={
          images.length === 1 ? SliderCSS.rightArrowNone : SliderCSS.rightArrow
        }
        onClick={nextSlide}
      />
    </section>
  )
}

export default Slideshow
