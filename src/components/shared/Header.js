import React, { useState } from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Img from "gatsby-image"
import { useImageQuery } from "../../hooks/useImagesQuery"

export default () => {
  const { logo } = useImageQuery()
  const [checked, setChecked] = useState(false)
  return (
    <header className="">
      <nav className="nav h-16 flex flex-wrap items-center justify-between px-3 py-4">
        <div className="flex flex-no-shrink items-center">
          <Link className='logo' to="/">
          <Img className="nav-logo" fluid={logo.childImageSharp.fluid} />
          </Link>
        </div>

        <input checked={checked} onChange={() => setChecked(!checked)} className="menu-btn hidden" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon block cursor-pointer lg:hidden px-2 py-4 relative select-none"
          htmlFor="menu-btn"
        >
          <span className="navicon bg-gray-darkest flex items-center relative"></span>
        </label>

        <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
          <li className="border-t md:border-none">
            <Link
              onClick={() => setChecked(!checked)}
              to="/"
              activeClassName="text-blue-600"
              className="block md:inline-block px-3 py-3 no-underline md:hover:underline text-gray-800 hover:text-blue-600 font-semibold"
            >
              Home
            </Link>
          </li>

          <li onClick={() => setChecked(!checked)} className="border-t md:border-none">
            <AnchorLink
              to="/#about"
              title="About"
              className="block md:inline-block px-3 py-3 no-underline md:hover:underline text-gray-800 hover:text-blue-600 font-semibold"
            />
          </li>

          <li onClick={() => setChecked(!checked)} className="border-t md:border-none">
            <AnchorLink
              to="/#services"
              title="Services"
              className="block md:inline-block px-3 py-3 no-underline md:hover:underline text-gray-800 hover:text-blue-600 font-semibold"
            />
          </li>

          <li onClick={() => setChecked(!checked)} className="border-t md:border-none">
            <AnchorLink
              to="/#gallery"
              title="Gallery"
              className="block md:inline-block px-3 py-3 no-underline md:hover:underline text-gray-800 hover:text-blue-600 font-semibold"
            />
          </li>

          <li onClick={() => setChecked(!checked)} className="border-t md:border-none">
            <AnchorLink
              to="/#contact"
              title="Contact"
              className="block md:inline-block px-3 py-3 no-underline md:hover:underline text-gray-800 hover:text-blue-600 font-semibold"
            />
          </li>

          <li className="border-t md:border-none">
            <Link
              onClick={() => setChecked(!checked)}
              to="/booking"
              activeClassName="text-blue-600"
              className="block md:inline-block md:pl-8 px-2 py-3 no-underline md:hover:underline text-gray-800 hover:text-blue-600 font-semibold"
            >
              Book Now
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
