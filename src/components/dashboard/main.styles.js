import styled from "@emotion/styled"
import Img from "gatsby-image"
import mq from "../../utils/responsiveness"

export const Container = styled.div`
  color: #25252a;
  background-color: #edefee;
  position: absolute;
  min-height: 90%;
  padding-bottom: 70px;
  width: 100%;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const GraphContainer = styled.div`
  min-height: 100%;
  display: flex;
  overflow-y: auto;
  ${mq({
    width: ["90%", "80%"],
    flexDirection: ["column", "column", "column", "row"],
  })};
  align-items: center;
  justify-content: space-between;
  .grapgh {
    margin: 10px 0px;
    height: 300px;
    border-radius: 4px;
    ${mq({
      width: ["100%", "100%", "100%", "47%"],
    })};
    background: #fff;
  }
  .pie {
    width: 100%;
    border-radius: 4px;
    background: #fff;
  }
`
export const Quotes = styled.div`
  width: 26%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between !important;
  height: 100%;
  div {
    height: 47%;
  }
`
export const BookingHistory = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .boooking:nth-child(2n + 1) {
    background: rgba(64, 64, 160, 0.1);
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
    width: auto;
    margin-right: 50px;
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
  justify-content: space-between;
  flex-direction: row;
  padding: 5px 0px;
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
  ${mq({
    display: ["none", "none", "none", "flex"],
  })};
`
export const BookingContainer = styled.div`
  background: #fff;

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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  ${mq({
    width: ["70%", "60%", "45%", "20%"],
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

export const H1 = styled.h1`
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  color: #4040a0;
`
