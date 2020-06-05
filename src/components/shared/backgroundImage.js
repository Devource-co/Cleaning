import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'

const StyledInnerWrapper = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(23, 23, 23, 0.5) !important;
`;

const ArtDirectedBackground = ({ className, children }) => {
  const { mobileImage, desktopImage, ipadImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "bg-review-sm.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 490, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        ipadImage: file(relativePath: { eq: "bg-review.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktopImage: file(relativePath: { eq: "bg-review-lg.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }  
    `
  )
  // Set up the array of image data and `media` keys.
  // You can have as many entries as you'd like.
  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...ipadImage.childImageSharp.fluid,
      media: `(min-width: 600px)`,
    },
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 1000px)`,
    },
  ]

  return (
    <BackgroundImage
      Tag={`section`}
      id={`media-test`}
      className={className}
      fluid={sources}
    >
      <StyledInnerWrapper>
        {children}
      </StyledInnerWrapper>
    </BackgroundImage>
  )
}

const StyledBackground = styled(ArtDirectedBackground)`
  width: 100% !important;
  min-height: 20rem;
  background-size: cover;
  position: relative;
  background-color: rgba(59, 59, 59, 1) !important;
`;

export default StyledBackground;
