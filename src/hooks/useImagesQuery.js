  
import { useStaticQuery, graphql } from "gatsby"

export const useImageQuery = () => {
  const query = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cleaner: file(relativePath: { eq: "cleaner.jpg" }) {
          childImageSharp {
            fluid(maxHeight: 3055) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return query
}
