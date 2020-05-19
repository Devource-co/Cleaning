import styled from "@emotion/styled"
import Img from "gatsby-image"
import mq from "../../utils/responsiveness"

export const Header = styled.header`
  background-color: rgba(87, 255, 123, 0.1);
  height: 100%;
  position: fixed;
  width: 100%;
`

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  ${mq({
    flexDirection: ["column", "column", "row"],
  })};
  justify-content: space-around;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  ${mq({
    width: ["70%", "30%", "30%", "20%"],
  })};
  & h1 {
    ${mq({
      fontSize: ["15px", "20px", "32px", "40px"],
    })};
    font-weight: 600;
    color: #4040a0;
    margin-bottom: 10px;
  }
  & h6 {
    ${mq({
      fontSize: ["12px", "13px", "14px", "15px"],
    })};
    // font-weight: 600;
    // color: #4040a0;
  }
`

export const Image = styled(Img)`
  bottom: -3rem;
  z-index: -1;
  ${mq({
    width: ["200px", "400px"],
    borderRadius: ["25px 5px 5px 5px", "40px 5px 5px 5px"],
  })};
`

export const BookButton = styled.button`
  background-color: #3e3ea1;
  color: #fff;
  margin-top: 2rem;
  border-radius: 10px;
  ${mq({
    padding: [".5rem 1rem", ".7rem 2rem"],
    fontSize: ["12px", "13px", "14px", "15px"],
  })};
`
export const LoginForm = styled.form`
  z-index: 99999;
  display: flex;
  width: 40%;
  min-height: 50%;
  margin: auto;
  margin-top: 5%;
  flex-direction: column;
  background: inherit;
  ${mq({
    width: ["85%", "55%", "30%"],
  })};
`
export const LoginInput = styled.input`
  width: 100%;
  background: inherit;
  margin: 20px auto;
  padding: 10px 10px;
  outline: none;
  border-bottom: solid 1px #c6c6ca;
  border-radius: 5px;
`
export const H1 = styled.h1`
  font-size: 30px;
  text-align: center;
  color: #4040a0;
`
export const SubmitButton = styled.button`
  background: #3e3ea1;
  width: 100px;
  color: white;
  margin: 0px auto;
  border-radius: 20px;
  text-align: center;
  padding: 10px;
  pointer: cursor !important;
  outline: none;
  border: none;
`
export const LoginLabel = styled.label`
  color: #707074;
`
