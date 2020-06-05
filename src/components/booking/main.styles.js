import styled from "@emotion/styled"
import Img from "gatsby-image"
import mq from "../../utils/responsiveness"

export const Header = styled.header`
  background-color: rgba(87, 255, 123, 0.1);
  min-height: 100%;
  position: absolute;
  width: 100%;
  overflow-y: auto;
  margin: auto;
`

export const Container = styled.div`
  color: #25252a;
  background-color: #fff;
  position: absolute;
  min-height: 100%;
  padding-bottom: 70px;
  width: 100%;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  align-items: center;
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
export const BookingForm = styled.form`
  z-index: 99999;
  display: flex;
  overflow-y: auto;
  margin: 0px auto;
  padding: 20px 0px;
  flex-direction: column;
  background: inherit;
  ${mq({
    width: ["85%", "75%", "65%", "55%", "45%"],
  })};
`
export const InputRow = styled.div`
  display: flex;
  width: 100% !important;
  justify-content: space-between;
  ${mq({
    flexDirection: ["column", "column", "row", "row", "row"],
  })};
  .row {
    ${mq({
      width: ["100%", "100%", "49%", "49%", "49%"],
    })};
    .select {
      margin-bottom: 15px;
      margin-top: 5px;
    }
  }
  .react-datepicker-wrapper {
    width: 100%;
    margin-bottom: 15px;
    margin-top: 5px;
    input {
      border: solid 1px #c6c6ca !important;
      width: 100%;
      padding: 10px;
    }
  }
`
export const BookingInput = styled.input`
  width: 100%;
  background: #fff;
  margin-bottom: 15px;
  margin-top: 5px;
  padding: 10px;
  outline: none;
  border: solid 1px #c6c6ca;
  border-radius: 3px;
`

export const H1 = styled.h1`
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  color: #4040a0;
`
export const SubmitButton = styled.button`
  background: #3e3ea1;
  color: white;
  margin: 0px auto;
  border-radius: 20px;
  text-align: center;
  padding: 10px 30px;
  font-size: 15px;
  font-weight:600;
  pointer: cursor !important;
  outline: none;
  border: none;
`
export const BookingLabel = styled.label`
  color: #707074;
`
