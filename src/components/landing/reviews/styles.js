import styled from "@emotion/styled"
import mq from "../../../utils/responsiveness"
import Dialog from '@material-ui/core/Dialog';

export const Container = styled.div`
  margin: 0 auto 0;
  ${mq({
    width: ["90%", "85%", "80%", "75%"],
  })};
  padding: 1rem 0 0.5rem;
  position: relative;
  color: white;
`

export const BorderTitle = styled.h1`
  text-align: left;
  line-height: 20px;
  display: flex;
  position: relative;
  padding: 15px 0;
  text-transform: uppercase;
  color: white;
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
  min-height: 20rem;
  height: auto;
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
export const AddReviewpOPuP = styled(Dialog)`
  // all: unset;
  // top: 0;
  // bottom: 0;
  // left: 0;
  // bottom: 0;
  // right: 0;
  // height: auto;
  // overflow: auto;
  // margin: auto;
  position: absolute;
  background: #4e4e53 !important;
  // z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 20px 20%;
  border-radius: 5px;
  justify-content: space-around;
  
`
export const TextInput = styled.textarea`
  z-index: 1000;
  margin: 20px auto;
  color: #000;
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  margin-top: 5px;
`
export const InputField = styled.input`
  z-index: 1000;
  margin: 20px auto;
  padding: 5px;
  color: #000;
  width: 100%;
  margin-top: 5px;
  border-radius: 5px;
`
export const ActionButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: white;
  .submit {
    background: #00c400;
  }
  .cancel {
    background: #4040a0;
  }
  > button {
    padding: 5px 10px;
    margin: 5px 10px;
    border-radius: 5px;
  }
`
export const PopUpLauncher = styled.span`
  width: 100%;
  text-align: center;
  cursor: pointer;
  :hover {
    text-decoration: underline;
    color: #82cfff;
  }
`
export const ReviewLabel = styled.label``
export const FieldContainer = styled.div``
