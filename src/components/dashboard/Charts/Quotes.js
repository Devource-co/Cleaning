import React from "react"
import { Quotes, H1, H2 } from "./main.styles"
import "react-toastify/dist/ReactToastify.css"
import PieCHart from "./PieChart"
export default () => {
  return (
    <Quotes>
      <div className="quotes">
        <div>
          <H2>Quotes & Booking values</H2>
        </div>
        <div className="quotesBookings">
          <div className="quotations">
            <div>
              <H1>$25,345,345 </H1>
              <p>Quotes </p>
            </div>
            <div>
              <H1 style={{ color: "green" }}> ↑ 40%</H1>
              <p>Since yesterday </p>
            </div>
          </div>
          <div className="bookings">
            <div>
              <H1>$25,345,345 </H1>
              <p>Bookings </p>
            </div>
            <div>
              <H1 style={{ color: "red" }}>↓ 30% </H1>
              <p>since yesterday </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pie">
        <PieCHart />
        <div className="pieDetails">
          <div>
            <div
              className="colorIndicator"
              style={{ backgroundColor: "blue" }}
            ></div>
            <p>19 Boookings</p>
          </div>
          <div>
            <div
              className="colorIndicator"
              style={{
                backgroundColor: "blue",
              }}
            ></div>
            <p>19 Boookings</p>
          </div>
          <div
            style={{
              margin: "20px ",
              padding: "20px 40px",
              borderTop: "1px solid black",
            }}
          >
            <p>77 Total</p>
          </div>
        </div>
      </div>
    </Quotes>
  )
}
