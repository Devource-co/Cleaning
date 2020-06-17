import React, { useState } from "react"
import { css } from "emotion"
import {
  Container,
  ContainerInner,
  BorderTitle,
  AboutDetails,
  AboutVideo,
} from "./about.styles"
import aboutImage from "../../../images/about.svg"
import Collapsable from "./collapsable"
import data from "../../../data/about.data"

const About = () => {
  const [collapse, setCollapse] = useState({
    index: 1,
  })

  const toggle = index =>
    setCollapse(state => ({
      ...state,
      index: state.index === index ? null : index,
    }))

  return (
    <Container id="about">
      <BorderTitle>ABOUT OUR COMPANY</BorderTitle>
      <ContainerInner>
        <AboutVideo>
          <img src={aboutImage} alt="vector two cleaners" />
        </AboutVideo>
        <AboutDetails>
          <p
            className={css`
              padding: 1rem 0rem;
            `}
          >
            Cresit cleaning service ltd. is a small sized organization and do
            not have a large company structure from management to workers. The
            management always oversees the workers and provides enough support
            to carry out a certain task in a professional manner. All our staff
            is highly trained and is chosen for their integrity and work
            experience. We work alongside with people who can provide services
            such as floor stripping and sealing, tile and grout cleaning which
            gives us a competitive advantage over other cleaning service
            providers. We use latest model cleaning equipment, and we use
            environmentally friendly cleaning products. We use a color-coded
            cleaning system, in order to prevent any misuse of chemicals and to
            protect the health and safety of our valuable clients. Staffs are
            educated to notify the management about any work place hazards and
            safety issues in order to prevent future injuries. Our scope is to
            accomplish all cleaning needs, and offer personalized and customized
            service and design a program for each client’s needs
          </p>
          {data.map(({ index, title, content }) => (
            <Collapsable
              index={index}
              key={index}
              title={title}
              content={content}
              collapse={collapse}
              toggle={toggle}
              setCollapse={setCollapse}
            />
          ))}
        </AboutDetails>
      </ContainerInner>
    </Container>
  )
}

export default About
