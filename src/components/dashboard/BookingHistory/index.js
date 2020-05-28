import React, { useState, useEffect } from "react"
import {
  BookingHistory,
  BookingNav,
  BookingHeader,
  SearchContainer,
  BookingContainer,
  SubDiv,
  VerticalLine,
} from "./BookingHistory.styles"
import "react-toastify/dist/ReactToastify.css"
import Pagination from "custom_react_pages"
import bookings from "../sample"
import { css } from "emotion"
import mq from "../../../utils/responsiveness"
import Filter from "./Filter"
const responsiveStyle = content => css`
  :before {
    content: "${content}";
    font-weight:600;
    ${mq({
      display: ["flex", "flex", "flex", "none"],
    })};
  }
`

export default ({ bookingData }) => {
  const [head, setHead] = useState(1)
  const activeNavColor = { color: "#4040a0", borderBottom: "2px solid #4040a0" }
  const handleClickNav = e => {
    e.preventDefault()
    setHead(e.target.value)
  }
  return (
    <>
      <BookingHistory>
        <BookingNav>
          <button
            value={1}
            onClick={handleClickNav}
            style={head == 1 ? activeNavColor : {}}
          >
            New Bookings
          </button>
          <button
            value={2}
            onClick={handleClickNav}
            style={head == 2 ? activeNavColor : {}}
          >
            Previous Bookings
          </button>
          <button
            value={3}
            onClick={handleClickNav}
            style={head == 3 ? activeNavColor : {}}
          >
            Recurring Bookings
          </button>
          <button
            value={4}
            onClick={handleClickNav}
            style={head == 4 ? activeNavColor : {}}
          >
            All Bookings
          </button>
        </BookingNav>
        <Filter />
        <BookingHeader>
          <div>Date</div>
          <div>Type</div>
          <div>Customer</div>
          <div>Frequency</div>
          <div>Address</div>
        </BookingHeader>
        <Pagination
          itemsPerPage={5}
          next="next"
          prev="prev"
          data={bookingData}
          pageButtons={10}
          onePage={booking => (
            <BookingContainer className="boooking">
              <SubDiv className={responsiveStyle("Date")}>
                <span>{booking.date}</span>
                <span className="extra">#{booking.createdAt}</span>
              </SubDiv>
              <SubDiv className={responsiveStyle("Type")}>
                <span>{booking.date}</span>
                <span className="extra">#{booking.createdAt}</span>
              </SubDiv>
              <SubDiv className={responsiveStyle("Customer")}>
                <span>{booking.name}</span>
                <span className="extra">#{booking.createdAt}</span>
              </SubDiv>
              <div className={responsiveStyle("Frequency")}>
                <span>{booking.date}</span>
              </div>
              <div className={responsiveStyle("Address")}>
                {booking.address}
              </div>
            </BookingContainer>
          )}
        />
      </BookingHistory>
    </>
  )
}
