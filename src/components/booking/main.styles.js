import styled from "@emotion/styled"
import Img from "gatsby-image"
import mq from "../../utils/responsiveness"

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
    margin-top: 15px;
    .select {
      margin-bottom: 15px;
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
export const TextInput = styled.div`
  position: relative;
  margin-top: 5px;
`;

export const BookingInput = styled.input`
  font: 15px/24px "Lato", Arial, sans-serif;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
  border: 1px solid #ccc;
  padding: 9px 14px 10px;
  transition: 0.4s;
  & ~ .focus-border:before, & ~ .focus-border:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 2px;
    background-color:#3399FF;
    transition: 0.2s;
    transition-delay: 0.2s;
  }
  & ~ .focus-border:after{
    top: auto;
    bottom: 0;
    right: auto;
    left: 0;
    transition-delay: 0.6s;
  }
  & ~ .focus-border i:before,
  & ~ .focus-border i:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 0;
    background-color: #3399ff;
    transition: 0.2s;
  }
  & ~ .focus-border i:after {
    left: auto;
    right: 0;
    top: auto;
    bottom: 0;
    transition-delay: 0.4s;
  }
  &:focus ~ .focus-border:before,
  &:focus ~ .focus-border:after {
    width: 100%;
    transition: 0.2s;
    transition-delay: 0.6s;
  }
  &:focus ~ .focus-border:after {
    transition-delay: 0.2s;
  }
  &:focus ~ .focus-border i:before,
  &:focus ~ .focus-border i:after {
    height: 100%;
    transition: 0.2s;
  }
  &:focus ~ .focus-border i:after {
    transition-delay: 0.4s;
  }
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
