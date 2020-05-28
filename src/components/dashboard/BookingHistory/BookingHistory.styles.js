import styled from "@emotion/styled"
import Img from "gatsby-image"
import mq from "../../../utils/responsiveness"

export const BookingHistory = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  align-items: center;
  text-align: left;
  .boooking:nth-child(2n + 1) {
    background: #fff;
  }
  div {
    ${mq({
      width: ["90%", "80%"],
    })};
  }
`
export const BookingNav = styled.div`
  width: 100%;
  border-bottom: solid 1px #c6c6ca;
  display: flex;
  justify-content: start;
  margin: 20px auto;
  button {
    padding: 10px;
    outline: none;
    font-weight: 600;
    text-align: left;
  }
  ${mq({
    flexDirection: ["column", "column", "column", "row"],
  })};
`
export const Filter = styled.div`
  width: 100%;
`
export const ButtonFilter = styled.div`
  width: 300px !important;
  display: flex;
  flex-direction: row;
  background: #fff !important;
  border: solid 1px #c6c6ca;
  border-radius: 2px;
  margin: 20px 0px;
  button {
    width: 75px;
    padding: 5px;
    outline: none;
    font-size: 11px;
    font-weight: 600;
    text-align: center;
  }
`
export const SearchFilter = styled.div`
  margin: 20px 0px;
  width: 100% !important;
  display: flex;
  justify-content: space-between;
  ${mq({
    flexDirection: ["column", "column", "column", "row"],
  })};
`
export const CategoryContainer = styled.div`
  display: flex;
  padding: 5px 0px;
  text-align: left;
  ${mq({
    flexDirection: ["column", "column", "column", "row"],
  })};
  div {
    margin-right: 50px;
    max-width: 200px;
    h1 {
      font-weight: 600;
    }
    display: flex;
    flex-direction: row !important;
    justify-content: space-between;
  }
  .tooltip {
    width: 150px;
    padding: 10px;
    position: absolute;
    top: 25px;
    background: #fff;
    -webkit-box-shadow: 2px 2px 2px 2px #ccc;
    -moz-box-shadow: 2px 2px 2px 2px #ccc;
    box-shadow: 2px 2px 2px 2px #ccc;
    border: 1px solid #3e3ea1;
    border-radius: 3px;
    display: flex;
    flex-direction: column !important;
    button {
      text-align: left !important;
      padding: 5px;
    }
  }
  .sort {
    width: 110px;
    position: relative;
  }
`
export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  div {
    width: 46%;
  }
`
export const SearchInput = styled.input`
  border: solid 1px #c6c6ca;
  outline: none;
  border-radius: 3px;
  padding: 5px;
  width: 100%;
`
export const BookingHeader = styled.div`
  justify-content: space-between;
  felx-direction: row;
  font-weight: 500;
  text-align: center;
  ${mq({
    display: ["none", "none", "none", "flex"],
  })};
  padding: 10px;
`
export const BookingContainer = styled.div`
  text-align: center;
  font-weight: 450;
  font-size: 12px;
  border: solid 1px #c6c6ca;

  .extra {
    font-style: italic;
    font-size: 11px;
    color: #666671;
  }
  justify-content: space-between;
  ${mq({
    flexDirection: ["column", "column", "column", "row"],
  })};
  display: flex;
  padding: 10px;
  border-radius: 3px;
  width: 100% !important;
`
export const SubDiv = styled.div`
  display: flex;
  flex-direction: column;
`
export const VerticalLine = styled.div`
  border-left: 1px solid #c6c6ca;
  margin: 0px !important;

  border-radius: 0px !important;
  width: 0px !important;
  padding: 0px !important;
`
