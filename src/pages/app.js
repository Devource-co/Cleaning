import React from "react"
import { Router, Redirect } from "@reach/router"
import Profile from "../components/admin"
import Login from "../components/login"

const App = () => (
  <>
    <Router>
      <Redirect from="/app" to="/" />
      <Profile path="/stabeleincefus/profile" />
      <Login path="/stabeleincefus/login" />
    </Router>
  </>
)

export default App