import React from "react"
import { GraphContainer } from "./main.styles"
import "react-toastify/dist/ReactToastify.css"
import NewBookings from "./NewBookings"

import Quotes from "./Quotes"
export default ({ bookings }) => {
  return (
    <>
      <GraphContainer>
        <div className="grapgh">
          <NewBookings bookings={bookings} />
        </div>
        <Quotes bookings={bookings} />
      </GraphContainer>
    </>
  )
}
