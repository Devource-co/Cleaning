import styled from "@emotion/styled"
import mq from "../../utils/responsiveness"

export const Form = styled.form`
z-index: 99999;
display: flex;
width: 40%;
min-height: 50%;
overflow-y: auto;
margin: auto;
padding: 20px 0px;
flex-direction: column;
background: inherit;
${mq({
  width: ["70%", "60%", "50%", "30%"],
})};
`
export const Header = styled.header`
  min-height: 100%;
  position: absolute;
  width: 100%;
  overflow-y: auto;
  margin: auto;
`

export const Container = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  overflow-y: auto;
  ${mq({
    flexDirection: ["column", "column", "row"],
  })};
  justify-content: space-around;
  align-items: center;
`