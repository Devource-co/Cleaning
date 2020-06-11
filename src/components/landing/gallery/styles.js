import styled from "@emotion/styled"
import mq from "../../../utils/responsiveness"

export const Container = styled.div`
  background-color: #fafafa;
  width: 100%;
  padding: 1rem 1rem;
`

export const BorderTitle = styled.h1`
  text-align: left;
  line-height: 20px;
  display: flex;
  position: relative;
  padding: 15px 0;
  text-transform: uppercase;
  color: #2b2b2b;
  font-weight: 700;
  margin: 2rem 0;
  align-items: flex-start;
  justify-content: center;
  ${mq({
    fontSize: ["1rem", "1.25rem", "1.5rem"],
    margin: ["0", "0.5rem 0", "1rem 0"],
  })};
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 5px;
    width: 90px;
    background: #00c400;
  }
`

export const SlideView = styled.div`
  min-height: 15rem;
  height: auto;
  width: 15rem;
  background-color: grey;
  margin: 2rem 0 !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  & p {
    width: 70%;
    margin: 0 auto;
  }
`
