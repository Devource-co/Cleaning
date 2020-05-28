import styled from "@emotion/styled"
import mq from "../../../utils/responsiveness"

export const GraphContainer = styled.div`
  min-height: 100%;
  display: flex;
  overflow-y: auto;
  ${mq({
    width: ["90%", "80%"],
    flexDirection: [
      "column-reverse",
      "column-reverse",
      "column-reverse",
      "row",
    ],
  })};
  align-items: center;
  justify-content: space-between;
  .grapgh {
    height: 350px;
    border-radius: 4px;
    ${mq({
      width: ["100%", "100%", "100%", "62%"],
    })};
    background: #fff;
  }
  .grapgh-sm {
    margin: 10px 0px;
    height: 250px;
    border-radius: 4px;
    ${mq({
      width: ["100%", "100%", "100%", "47%"],
    })};
    background: #fff;
  }
`
export const Quotes = styled.div`
  ${mq({
    width: ["100%", "100%", "100%", "35%"],
  })};
  display: flex;
  flex-direction: column;
  justify-content: space-between !important;
  height: 350px;
  .pie {
    width: 100%;
    border-radius: 4px;
    height: 48% !important;
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-around !important;

    .pieDetails {
      width: 50%;
      margin: auto;
      padding: 5px;
      font-weight: 500;
      div {
        display: flex;
        flex-direction: row;
        justify-content: space-start !important;
      }
    }
    canvas {
      height: 100% !important;
    }
  }
  .quotes {
    width: 100%;
    border-radius: 4px;
    height: 170px !important;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0px 20px;
  }
  .quotesBookings {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .quotations {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
    }
    .bookings {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
    }
  }
  .colorIndicator {
    margin: auto 20px;
    border-radius: 50%;
    width: 18px;
    height: 18px;
  }
`
export const H1 = styled.div`
  font-size: 18px;
  font-weight: 600;
`
export const H2 = styled.div`
  font-size: 16px;
  font-weight: 600;
`
export const Chart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .header {
    padding-top: 5px;
    width: 95%;
    margin: 0px auto;
    .statOverview {
      display: flex;
      flexdirection: row;
      justify-content: space-between;
      .total {
      }
      .oneType {
        display: flex;
        flexdirection: row;
        justify-content: space-between;
      }
    }
  }
  .colorIndicator {
    margin: auto 20px;
    border-radius: 50%;
    width: 18px;
    height: 18px;
  }
`
