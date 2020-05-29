import React from "react"
import { GraphContainer } from "./main.styles"
import "react-toastify/dist/ReactToastify.css"
import NewBookings from "./NewBookings"

import Quotes from "./Quotes"
export default ({ bookingData }) => {
  return (
    <>
      <GraphContainer>
        <div className="grapgh">
          <NewBookings bookingData={bookingData} />
        </div>
        <Quotes />
      </GraphContainer>
    </>
  )
}
