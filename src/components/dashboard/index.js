import React, { useState, useEffect } from "react"
import { Container } from "./main.styles"
import NavBar from "../shared/Header"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import GraphContainer from "./Charts"
import BookingHistory from "./BookingHistory"
import firebase from "../../firebase"

export default () => {
  const [data, setData] = useState([])
  const getUserData = async () => {
    await firebase
      .firestore()
      .collection("client2db")
      .get()
      .then(querySnapshot => {
        const result = querySnapshot.docs.map(doc => doc.data())

        setData(result)
      })
  }

  useEffect(() => {
    getUserData()
  }, [])
  return (
    <>
      <NavBar />
      <Container>
        <GraphContainer
          bookings={data.length && data[0].bookings}
          gallery={data.length && data[0].gallery}
          messages={data.length && data[0].messages}
        />
        <BookingHistory
          bookings={data.length && data[0].bookings}
          gallery={data.length && data[0].gallery}
          messages={data.length && data[0].messages}
        />
        <ToastContainer />
      </Container>
    </>
  )
}
