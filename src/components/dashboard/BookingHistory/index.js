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
import Fuse from "fuse.js"
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react"
import { Cloudinary as CoreCloudinary, Util } from "cloudinary-core"
import { fetchPhotos, openUploadWidget } from "./CloudinaryService"
import Gallery from "./Gallery"
const responsiveStyle = content => css`
  :before {
    content: "${content}";
    font-weight:600;
    ${mq({
      display: ["flex", "flex", "flex", "none"],
    })};
  }
`

export default ({ bookings, messages, gallery }) => {
  const [head, setHead] = useState(1)
  const [dropDown, setDropDown] = useState("")
  const [updateBookingData, setUpdateBookingData] = useState({})
  const [mainData, setMainData] = useState([])
  const [startDate, setStartDate] = useState(new Date())
  const [keyWord, setKeyWord] = useState("")
  const [sort, setSort] = useState("Newest")
  const [images, setImages] = useState([])

  const fuse = new Fuse(bookings, {
    keys: ["createdAt", "name", "type", "frequency", "date", "address"],
  })
  useEffect(() => {
    const displayData = bookings
    setMainData(displayData || [])
    const data = fuse.search(keyWord)

    const newest = sort === "Newest" && data.length && data
    const oldest = sort === "Oldest" && data.length && data.reverse()

    newest && setMainData(newest)

    oldest && setMainData(oldest)
    keyWord && data.length && setMainData(data)
  }, [keyWord, head, bookings, sort])

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
  const storeUpdatedBookingData = async index => {
    const result = bookings.map((booking, i) => {
      if (i === index) {
        return { ...booking, ...updateBookingData }
      }
      return booking
    })
    await firebase.firestore().collection("client2db").doc("cleaning").update({
      bookings: result,
    })
    console.log("DATA SAVED")
  }

  const handleUpdateBookingSubmit = (e, index) => {
    e.preventDefault()
    storeUpdatedBookingData(index)
  }
  return (
    <>
      <BookingHistory>
        <BookingNav>
          <button
            value={1}
            onClick={() => setHead(1)}
            style={head == 1 ? activeNavColor : {}}
          >
            Bookings
          </button>
          <button
            value={2}
            onClick={() => setHead(2)}
            style={head == 2 ? activeNavColor : {}}
          >
            Messages
          </button>
          <button
            value={3}
            onClick={() => setHead(3)}
            style={head == 3 ? activeNavColor : {}}
          >
            Gallery
          </button>
        </BookingNav>
        {head === 1 && (
          <div>
            <Filter
              setDate={i => setKeyWord(new Date(i).toString().slice(0, 15))}
              setKeyWord={i => setKeyWord(i)}
              setSort={i => setSort(i)}
              sort={sort}
            />
            <BookingHeader>
              <div>Date</div>
              <div>Type</div>
              <div>Customer</div>
              <div>Frequency</div>
              <div>Address</div>
            </BookingHeader>
          </div>
        )}

        {head == 1 && bookings.length ? (
          <Pagination
            activePageStyle={{
              backgroundColor: "#3e3ea1",
              color: "#fff",
              border: "solid 1px #3e3ea1",
            }}
            itemsPerPage={5}
            next="next"
            prev="prev"
            data={bookings}
            pageButtons={10}
            onePage={(booking, index) => (
              <Booking
                dropDown={dropDown}
                setDropDown={item => setDropDown(item)}
                booking={booking}
                index={index}
                handleBookingInputChange={handleBookingInputChange}
                handleUpdateBookingSubmit={handleUpdateBookingSubmit}
              />
            )}
          />
        ) : (
          ""
        )}
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {head == 2 &&
            messages.length &&
            messages.map((message, index) => (
              <Messages
                dropDown={dropDown}
                setDropDown={item => setDropDown(item)}
                message={message}
                index={index}
                handleBookingInputChange={handleBookingInputChange}
              />
            ))}
        </div>
        {head === 3 && <Gallery gallery={gallery ? gallery : []} />}
      </BookingHistory>
    </>
  )
}
