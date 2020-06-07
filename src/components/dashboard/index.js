import React, { useState, useEffect } from "react"
import { Container } from "./main.styles"
import NavBar from "../shared/Header"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import GraphContainer from "./Charts"
import BookingHistory from "./BookingHistory"
import firebase from "../../firebase"

export default () => {
  const [bookingData, setBookingData] = useState([])
  const getUserData = async () => {
    await firebase
      .firestore()
      .collection("client2db")
      .get()
      .then(querySnapshot => {
        const result = querySnapshot.docs.map(doc => doc.data())
        setBookingData(result)
      })
  }

  useEffect(() => {
    getUserData()
  }, [])
  return (
    <>
      <NavBar />
      <Container>
        <GraphContainer bookingData={bookingData} />
        <BookingHistory bookingData={bookingData} />
        <ToastContainer />
      </Container>
    </>
  )
}
