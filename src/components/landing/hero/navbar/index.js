import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useImageQuery } from "../../../../hooks/useImagesQuery"

export default () => {
  const { logo } = useImageQuery()

  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <Img className="nav-logo" fluid={logo.childImageSharp.fluid} />
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}
