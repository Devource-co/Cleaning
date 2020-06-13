import React, { useState } from "react"
import { H1, P } from "./main.styles"
import { Header } from "../styles/shared"
import NavBar from "../shared/Header"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { signInUser } from "../../firebase"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '90%',
    minHeight: '300px',
    margin: '2.5rem auto',
    padding: '1rem',
    '& > *': {
      margin: "0.5rem",
      width: " 100%",
    }
  }
}));

export default () => {
  const { card } = useStyles()
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

  return (
    <>
      <Header>
        <NavBar />
        <Container maxWidth="md">
        <Paper className={card} component="form" onSubmit={handleSigninSubmit}>
              <H1>Sign in</H1>
              <P>Please fill the fields below with your login credentials to access the admin pages.</P>
              <TextField id="email" onChange={handleSigninInputChange} type="email" label="email" variant="outlined" />
              <TextField id="password" onChange={handleSigninInputChange} type="password" label="password" variant="outlined" />
              <Button variant="contained" color="primary">
              Log In
            </Button>
        </Paper>
        </Container>
      </Header>
      <ToastContainer />
    </>
  )
}
