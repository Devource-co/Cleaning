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
import Booking from "./Bookings"
import Messages from "./Messages"

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
  const [dropDown, setDropDown] = useState("")
  const [updateBookingData, setUpdateBookingData] = useState({})
  const [data, setData] = useState([])
  const [startDate, setStartDate] = useState(new Date())
  const [date, setDate] = useState("")
  const [keyWord, setKeyWord] = useState("")
  const [sort, setSort] = useState("Newest")

  useEffect(() => {
    setData(bookingData || [])
    const dateData = data.filter(
      item => item.createdAt === date || item.date === date
    )
    console.log("pppppppppppppp", keyWord)

    const keyWordData = data.filter(
      item =>
        item.address === keyWord ||
        item.email === keyWord ||
        item.name === keyWord ||
        item.estimatedBudget === keyWord ||
        item.frequency === keyWord ||
        item.phoneNumber === keyWord
    )
    console.log("pppppppppppppp", keyWordData)

    const newest = sort === "Newest" && data.length && data
    const oldest = sort === "Oldest" && data.length && data.reverse()

    newest && setData(newest)

    oldest && setData(oldest)
    date && dateData.length && setData(dateData)
    keyWord && keyWordData.length && setData(keyWordData)
  }, [date, keyWord, head, bookingData, sort])

  const activeNavColor = { color: "#4040a0", borderBottom: "2px solid #4040a0" }
  const handleClickNav = e => {
    e.preventDefault()
    setHead(e.target.value)
  }
  const handleBookingInputChange = e => {
    if (e.target) {
      e.preventDefault()
      const { name, value } = e.target
      setUpdateBookingData({ ...updateBookingData, [name]: value })
    } else {
      if (e.name) {
        const { label, value, name } = e
        setUpdateBookingData({ ...updateBookingData, [name]: label })
      } else {
        setUpdateBookingData({ ...updateBookingData, [e[0].name]: e })
      }
    }
  }
  const storeUpdatedBookingData = () => {
    // firebase
    //   .firestore()
    //   .collection("client2db")
    //   .update({bookingData[dropDown].price:updateBookingData.price})
    console.log("DATA SAVED")
  }

  const handleUpdateBookingSubmit = e => {
    e.preventDefault()
    storeUpdatedBookingData()
    // getUserData()
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
            Bookings
          </button>
          <button
            value={2}
            onClick={handleClickNav}
            style={head == 2 ? activeNavColor : {}}
          >
            Messages
          </button>
        </BookingNav>
        <Filter
          setDate={i => setDate(new Date(i).toString().slice(0, 15))}
          setKeyWord={i => setKeyWord(i)}
          setSort={i => setSort(i)}
          sort={sort}
        />
        <BookingHeader>
          <div>Date</div>
          {head === 1 ? (
            <>
              <div>Type</div>
              <div>Customer</div>
              <div>Frequency</div>
              <div>Address</div>
            </>
          ) : (
            <>
              <div>Email</div>
              <div>Message</div>
            </>
          )}
        </BookingHeader>

        {data.length ? (
          <Pagination
            activePageStyle={{
              backgroundColor: "#3e3ea1",
              color: "#fff",
              border: "solid 1px #3e3ea1",
            }}
            itemsPerPage={5}
            next="next"
            prev="prev"
            data={data}
            pageButtons={10}
            onePage={(booking, index) =>
              head == 1 ? (
                <Booking
                  dropDown={dropDown}
                  setDropDown={item => setDropDown(item)}
                  booking={booking}
                  index={index}
                  handleBookingInputChange={handleBookingInputChange}
                />
              ) : (
                <Messages
                  dropDown={dropDown}
                  setDropDown={item => setDropDown(item)}
                  booking={booking}
                  index={index}
                  handleBookingInputChange={handleBookingInputChange}
                />
              )
            }
          />
        ) : (
          ""
        )}
      </BookingHistory>
    </>
  )
}
