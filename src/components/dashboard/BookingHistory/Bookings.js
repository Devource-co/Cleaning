import React, { useState, useEffect } from "react"
import {
  BookingHistory,
  BookingNav,
  BookingHeader,
  BookingContainer,
  SubDiv,
  DropDown,
  UpdateContainer,
  Details,
  VerticalLine,
} from "./BookingHistory.styles"
import {
  BookingLabel,
  BookingInput,
  H1,
  SubmitButton,
} from "../../booking/main.styles"
import Select from "react-select"
import "react-toastify/dist/ReactToastify.css"
import Pagination from "custom_react_pages"
import bookings from "../sample"
import { css } from "emotion"
import mq from "../../../utils/responsiveness"
import Filter from "./Filter"
import firebase from "../../../firebase"

const responsiveStyle = content => css`
  :before {
    content: "${content}";
    font-weight:600;
    ${mq({
      display: ["flex", "flex", "flex", "none"],
    })};
  }
`

const statusOptions = [
  {
    label: "complete",
    value: "complete",
    name: "complete",
  },
  {
    label: "missed",
    value: "missed",
    name: "missed",
  },
  {
    label: "rejected",
    value: "rejected",
    name: "rejected",
  },
]
export default ({
  booking,
  dropDown,
  setDropDown,
  index,
  handleBookingInputChange,
}) => {
  return (
    <>
      <BookingContainer
        key={index}
        onClick={() => {
          dropDown === index ? setDropDown("") : setDropDown(index)
        }}
        className="boooking"
      >
        <SubDiv className={responsiveStyle("Date")}>
          <span>{booking.date}</span>
          <span className="extra">#{booking.createdAt}</span>
        </SubDiv>
        <SubDiv className={responsiveStyle("Type")}>
          <span>{booking.type.label}</span>
          <span className="extra">#{booking.type.value}</span>
        </SubDiv>
        <SubDiv className={responsiveStyle("Customer")}>
          <span>{booking.name}</span>
          <span className="extra">#{booking.name}</span>
        </SubDiv>
        <div className={responsiveStyle("Frequency")}>
          <span>{booking.date}</span>
        </div>
        <div className={responsiveStyle("Address")}>{booking.address}</div>
      </BookingContainer>
      {dropDown === index && (
        <DropDown>
          <Details className="details">
            <div className="detailsHeader">
              <H1>Booking details</H1>
              <span className="extra">#{booking.date}</span>
            </div>
            <div className="detailsBody">
              <div>
                <h5>Header</h5>
                <p>Header</p>
              </div>
              <div>
                <h5>Header</h5>
                <p>Header</p>
              </div>
              <div>
                <h5>Header</h5>
                <p>Header</p>
              </div>
              <div>
                <h5>Header</h5>
                <p>Header</p>
              </div>
            </div>
            <div className="detailsFooter">{booking.address}</div>
          </Details>
          <UpdateContainer className="updateContainer">
            <H1>Update booking details</H1>
            <BookingLabel htmlFor="Status">Status</BookingLabel>
            <Select
              className="select"
              name="Status"
              id="Status"
              options={statusOptions}
              onChange={handleBookingInputChange}
            />
            <BookingLabel htmlFor="price">Estimated budget</BookingLabel>
            <BookingInput
              id="price"
              name="price"
              onChange={handleBookingInputChange}
              type="text"
              placeholder="Enter the price"
            />
            <SubmitButton>Update</SubmitButton>
          </UpdateContainer>
        </DropDown>
      )}
    </>
  )
}
