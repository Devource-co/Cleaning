import React from "react"
import {
  BookingContainer,
  SubDiv,
  DropDown,
  UpdateContainer,
  Details,
} from "./BookingHistory.styles"
import {
  BookingLabel,
  BookingInput,
  H1,
  SubmitButton,
} from "../../booking/main.styles"
import Select from "react-select"
import "react-toastify/dist/ReactToastify.css"
import { css } from "emotion"
import mq from "../../../utils/responsiveness"

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
        <div className={responsiveStyle("Frequency")}>{booking.date}</div>
        <div className={responsiveStyle("Address")}>{booking.address}</div>
        <div className={responsiveStyle("Address")}>{booking.address}</div>
      </BookingContainer>
    </>
  )
}
