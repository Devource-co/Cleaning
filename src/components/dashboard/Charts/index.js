import React from "react"
import { GraphContainer } from "./main.styles"
import "react-toastify/dist/ReactToastify.css"
import Customers from "./Customers"
import Revenue from "./Revenue"
import PieCHart from "./PieChart"
import NewBookings from "./NewBookings"

import Quotes from "./Quotes"
export default ({ bookingData }) => {
  console.log("==========================", bookingData)
  return (
    <>
      <GraphContainer>
        <div className="grapgh">
          <NewBookings />
        </div>
        <Quotes />
      </GraphContainer>
      <GraphContainer>
        <div className="grapgh-sm">
          <Revenue />
        </div>
        <div className="grapgh-sm">
          <Customers />
        </div>
      </GraphContainer>
    </>
  )
}
