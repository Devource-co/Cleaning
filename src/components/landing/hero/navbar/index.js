import React from 'react';
import { Link } from 'gatsby';
import Img from'gatsby-image';
import { useImageQuery } from '../../../../hooks/useImagesQuery';

export default () => {
  const { logo } = useImageQuery();

  return (
  <div class="nav">
    <input type="checkbox" id="nav-check" />
    <Img className="nav-logo" fluid={logo.childImageSharp.fluid} />
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    
    <div class="nav-links">
      <Link to="/">Home</Link>
      <Link to="/">Gallery</Link>
      <Link to="/">Booking</Link>
      <Link to="/">Contact</Link>
    </div>
  </div>
)
};
