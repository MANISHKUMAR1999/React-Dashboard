//import React from 'react'
import BarChartBox from "../../components/barchartbox/BarChartBox"
import BigChartBox from "../../components/bigChartBox/BigChartBox"
import ChartBox from "../../components/chartbox/ChartBox"
import PieChartBox from "../../components/pieChartBox/PieChartBox"
import Topbox from "../../components/topbox/Topbox"
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data"
import "./home.scss"
const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <Topbox/>
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser}/>
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct}/>
      </div>
      <div className="box box4">
        <PieChartBox/>
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxConversion}/>
      </div>
      <div className="box box6">
      <ChartBox {...chartBoxRevenue}/>
      </div>
      <div className="box box7">
        <BigChartBox/>
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit}/>
      </div>
      <div className="box box9"> <BarChartBox {...barChartBoxRevenue}/></div>
    </div>
  )
}

export default Home