import { useStaticQuery, graphql } from "gatsby"

export const useImageQuery = () => {
  const query = useStaticQuery(
    graphql`
      query {
        banner: file(relativePath: { eq: "banner.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        waves: file(relativePath: {eq: "waves.svg"}) {
          publicURL
        }
      }
    `
  )
  return query
}
