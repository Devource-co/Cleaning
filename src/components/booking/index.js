import React, { useState, useEffect } from "react"
import {
  BookingInput,
  SubmitButton,
  H1,
  BookingLabel,
  BookingForm,
  InputRow,
  Container,
  TextInput,
} from "./main.styles"
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Select from "react-select"
import NavBar from "../shared/Header"
import { useImageQuery } from "../../hooks/useImagesQuery"
import firebase from "../../firebase"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { css } from "emotion"

const typeOptions = [
  {
    label: "office cleaning & janitorial services",
    value: "standard",
    name: "type",
  },
  { label: "carpet cleaning", value: "move in/ move out", name: "type" },
  { label: "post construction", value: "deep", name: "type" },
]
const frequencyOptions = [
  { label: "once", value: "once", name: "frequency" },
  { label: "daily", value: "daily", name: "frequency" },
  { label: "weekly", value: "weekly", name: "frequency" },
  { label: "bi weekly", value: "bi weekly", name: "frequency" },
  { label: "monthly", value: "monthly", name: "frequency" },
]
export default () => {
  const [signInData, setSignInData] = useState({})
  const [bookingData, setBookingData] = useState([])
  const [startDate ] = useState(new Date())

  useEffect(() => {
    getFirestoreData()
  }, [])
  const handleSigninInputChange = e => {
    if (e.target) {
      e.preventDefault()
      const { name, value } = e.target
      setSignInData({ ...signInData, [name]: value })
    } else {
      if (e.name) {
        const { label, value, name } = e
        setSignInData({ ...signInData, [name]: label })
      } else {
        setSignInData({ ...signInData, [e[0].name]: e })
      }
    }
  }

  const getFirestoreData = async () => {
    await firebase
      .firestore()
      .collection("client2db")
      .get()
      .then(querySnapshot => {
        const result = querySnapshot.docs.map(doc => doc.data())
        setBookingData(result)
      })
  }

  const writeFirestore = async () => {
    await firebase
      .firestore()
      .collection("client2db")
      .doc("cleaning")
      .update({
        bookings: [
          ...bookingData[0].bookings,
          { ...signInData, createdAt: startDate.toDateString() },
        ],
      })
  }

  const handleBookingSubmit = e => {
    e.preventDefault()

    writeFirestore()
    getFirestoreData()
  }

  const { logo } = useImageQuery()
  return (
    <>
      <NavBar />
      <Container>
        <BookingForm onSubmit={handleBookingSubmit}>
          <H1
            className={css`
              margin-bottom: 50px;
            `}
          >
            Make a booking
          </H1>
          <InputRow>
            <div className="row">
              <BookingLabel htmlFor="name">Full name</BookingLabel>
              <TextInput>
                <BookingInput
                  id="name"
                  name="name"
                  onChange={handleSigninInputChange}
                  type="text"
                  placeholder="Enter your full name"
                />
                <span className="focus-border">
                  <i></i>
                </span>
              </TextInput>
            </div>
            <div className="row">
              <BookingLabel htmlFor="email">email</BookingLabel>
              <TextInput>
                <BookingInput
                  id="email"
                  name="email"
                  onChange={handleSigninInputChange}
                  type="email"
                  placeholder="Enter your email"
                />
                <span className="focus-border">
                  <i></i>
                </span>
              </TextInput>
            </div>
          </InputRow>
          <InputRow>
            <div className="row">
              <BookingLabel htmlFor="phoneNumber">Phone number</BookingLabel>
              <TextInput>
                <BookingInput
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={handleSigninInputChange}
                  type="text"
                  placeholder="Enter your Phone number"
                />
                <span className="focus-border">
                  <i></i>
                </span>
              </TextInput>
            </div>
            <div className="row">
              <BookingLabel htmlFor="estimatedBudget">
                Estimated budget
              </BookingLabel>
              <TextInput>
                <BookingInput
                  id="estimatedBudget"
                  name="estimatedBudget"
                  onChange={handleSigninInputChange}
                  type="estimatedBudget"
                  placeholder="Enter your estimated budget"
                />
                <span className="focus-border">
                  <i></i>
                </span>
              </TextInput>
            </div>
          </InputRow>

          <InputRow>
            <div className="row">
              <BookingLabel htmlFor="type">Type</BookingLabel>
              <Select
                className="select"
                name="type"
                id="type"
                options={typeOptions}
                onChange={e =>
                  handleSigninInputChange({
                    name: e.name,
                    label: { label: e.label, value: e.value },
                  })
                }
              />
            </div>
            <div className="row">
              <BookingLabel htmlFor="frequency">frequency</BookingLabel>
              <Select
                className="select"
                name="frequency"
                id="frequency"
                options={frequencyOptions}
                onChange={handleSigninInputChange}
              />
            </div>
          </InputRow>
          <InputRow>
            <div className="row">
              <TextField
                id="address"
                label="Address"
                type="address"
                variant="outlined"
                onChange={handleSigninInputChange}
                // className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="row">
               <TextField
                id="date"
                name="date"
                label="Date"
                type="date"
                variant="outlined"
                onChange={handleSigninInputChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </InputRow>
          <InputRow>
            {/* <div style={{ width: "100%" }}>
              <BookingLabel htmlFor="info">Additional information</BookingLabel>
              <textarea
                style={{
                  width: "100%",
                  minHeight: "100px",
                  padding: 10,
                  border: "solid 1px #c6c6ca",
                  marginBottom: "20px",
                }}
                id="info"
                name="info"
                onChange={handleSigninInputChange}
                type="text"
                placeholder="Enter additional information"
                onChange={handleSigninInputChange}
              />
            </div> */}
            <TextField
                id="info"
                name="info"
                label="Additional information"
                type="text"
                multiline
                rows={2}
                rowsMax={4}
                variant="outlined"
                onChange={handleSigninInputChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
          </InputRow>
          <SubmitButton type="button" onClick={handleBookingSubmit}>
            Submit
          </SubmitButton>
        </BookingForm>
      </Container>
      <ToastContainer />
    </>
  )
}
