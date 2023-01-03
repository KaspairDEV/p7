import React from "react"
import Banner from "../../components/Banner/Banner"
import ImgBannerHome from "../../components/Images/banner-home.jpg"
import Card from "../../components/Card/Card"
import { DataLodgings } from "../../Data/DataLodgings"

export default function Home() {
  const lodgings = DataLodgings.getAllLodgings()
  return (
    <div>
      <Banner src={ImgBannerHome} title={"Chez vous, partout et ailleurs"} alt="Illustration d'une côte"/>
      <Card lodgings={lodgings} />
    </div>
  )
}
