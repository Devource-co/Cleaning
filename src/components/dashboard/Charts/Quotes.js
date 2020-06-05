import React, { useState } from "react"
import { Quotes, H1, H2 } from "./main.styles"
import "react-toastify/dist/ReactToastify.css"
import PieCHart from "./PieChart"
export default ({ bookings }) => {
  const yesterday = new Date(
    new Date().setDate(new Date().getDate() - 1)
  ).toDateString()
  const today = new Date().toDateString()
  const getPrice = (key, date) => {
    const arr =
      bookings &&
      bookings
        .filter(booking => {
          return date === booking.createdAt
        })
        .map(booking => booking[key])
        .filter(Boolean)
    return arr.length ? arr.reduce((a, b) => Number(a) + Number(b)) : 0
  }
  const getCount = (date, key) =>
    bookings &&
    bookings
      .filter(booking => {
        return date === booking.createdAt
      })
      .map(booking => booking[key])
      .filter(Boolean).length
  const bookingsCount = getCount(today, "price")
  const quotesCount = getCount(today, "estimatedBudget")

  const prevQuotesPrice = bookings && getPrice("estimatedBudget", yesterday)
  const prevBookingPrice = bookings && getPrice("price", yesterday)

  const quotesPrice = bookings && getPrice("estimatedBudget", today)
  const bookingPrice = bookings && getPrice("price", today)

  const quotesChange =
    prevQuotesPrice === 0
      ? 100
      : ((prevQuotesPrice - quotesPrice) * 100) / prevQuotesPrice
  const bookingsChange =
    prevBookingPrice === 0
      ? 100
      : ((prevBookingPrice - bookingPrice) * 100) / prevBookingPrice

  return (
    <Quotes>
      <div className="quotes">
        <div>
          <H2>Quotes & Booking values</H2>
        </div>
        <div className="quotesBookings">
          <div className="quotations">
            <div>
              <H1>KES {quotesPrice} </H1>
              <p>Quotes </p>
            </div>
            <div>
              <H1 style={{ color: quotesChange <= 0 ? "red" : "green" }}>
                {quotesChange <= 0 ? "↓" : "↑"} {quotesChange}%
              </H1>
              <p>Since yesterday </p>
            </div>
          </div>
          <div className="bookings">
            <div>
              <H1>KES {bookingPrice} </H1>
              <p>Bookings </p>
            </div>
            <div>
              <H1 style={{ color: bookingsChange <= 0 ? "red" : "green" }}>
                {bookingsChange <= 0 ? "↓" : "↑"} {bookingsChange}%{" "}
              </H1>
              <p>since yesterday </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pie">
        <PieCHart bookingsCount={bookingsCount} quotesCount={quotesCount} />
        <div className="pieDetails">
          <div>
            <div
              className="colorIndicator"
              style={{ backgroundColor: "blue" }}
            ></div>
            <p>{bookingsCount} Boookings</p>
          </div>
          <div>
            <div
              className="colorIndicator"
              style={{
                backgroundColor: "green",
              }}
            ></div>
            <p>{quotesCount} Quotes</p>
          </div>
          <div
            style={{
              margin: "20px ",
              padding: "20px 40px",
              borderTop: "1px solid black",
            }}
          >
            <p>{quotesCount + bookingsCount} Total</p>
          </div>
        </div>
      </div>
    </Quotes>
  )
}
