import React, { useState } from "react"
import { LoginInput, SubmitButton, H1, LoginLabel } from "./main.styles"
import { Form, Header, Container } from "../styles/shared"
import NavBar from "../shared/navBar"
import { useImageQuery } from "../../hooks/useImagesQuery"
import { signInUser } from "../../firebase"
import Img from "gatsby-image"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default () => {
  const [signInData, setSignInData] = useState({})
  const handleSigninInputChange = e => {
    e.preventDefault()
    const { name, value } = e.target
    setSignInData({ ...signInData, [name]: value })
  }

  const handleSigninSubmit = e => {
    e.preventDefault()

    signInUser(signInData)
  }
  const { logo } = useImageQuery()

  return (
    <>
      <Header>
        <NavBar />
        <Container>
          <Form onSubmit={handleSigninSubmit}>
            <H1>Sign in</H1>
            <LoginLabel htmlFor="email">email</LoginLabel>
            <LoginInput
              id="email"
              name="email"
              onChange={handleSigninInputChange}
              type="email"
              placeholder="Email"
            />
            <LoginLabel htmlFor="password">password</LoginLabel>
            <LoginInput
              id="password"
              name="password"
              onChange={handleSigninInputChange}
              type="password"
              placeholder="Password"
            />
            <SubmitButton type="button" onClick={handleSigninSubmit}>
              Submit
            </SubmitButton>
          </Form>
        </Container>
      </Header>
      <ToastContainer />
    </>
  )
}
