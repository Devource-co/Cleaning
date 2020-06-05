import styled from '@emotion/styled';
import mq from '../../../utils/responsiveness';

export const Container = styled.div`
  margin: 1rem auto 0;
  ${mq({
    width: ['90%', '85%', '80%', '75%']
  })};
  padding: 2rem 0 .5rem;
  display: flex;
  flex-direction: column;
  justify-contnent: space-between;
  align-items: center;
`;

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
      fontSize: ['1rem', '1.25rem', '1.5rem'],
      margin: ['0', '0.5rem 0', '1rem 0'],
    })};
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      height: 5px;
      width: 90px;
      background: #00c400;
    }
`;

export const ContainerInner = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    ${mq({
      flexDirection: ['column', 'row',],
    })};
`;

export const LeftConatainer = styled.div`
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  ${mq({
    width: ['90%', '45%',],
    alignItems: ['center', 'flex-start']
  })};
  & h1 {
    ${mq({
      fontSize: ['.975rem', '1.125rem', '1.25rem'],
      width: ['90%', '70%',]
    })};
    font-weight: 500;
  }
  & h6 {
    margin-top: 1rem;
    ${mq({
      fontSize: ['11px', '13px', '14px'],
      width: ['90%']
    })};
    color: #879196;
    & a {
      text-decoration: underline;
      &:hover {
        text-decoration: none;
        color: #1ea3eb;
      }
    }
    & img {
      width: 100%;

    }
  }
`;

export const FormContainer = styled.form`
  ${mq({
    width: ['90%', '45%',],
  })};
`;

export const InputGroup = styled.div`
  position: relative;
`;

export const TextInput = styled.div`
  position: relative;
`;

export const Label = styled.div`
  margin: .5rem 0;
  ${mq({
    fontSize: ['12px', '13px', '14px'],
  })};
`;

export const InputText = styled.input`
  font: 15px/24px "Lato", Arial, sans-serif;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
  border: 1px solid #ccc;
  padding: 7px 14px 9px;
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
`;

export const TextContainer = styled.textarea`
  font: 15px/24px "Lato", Arial, sans-serif;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
  border: 1px solid #ccc;
  padding: 5px;
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
`;

export const ButtonSend = styled.button`
  margin-top: .5rem;
  background-color: #2176ff;
  color: white;
  float: right;
  border-radius: 5px;
  padding: .5rem 1rem;
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  transition-duration: 0.3s;
  overflow: hidden;
  transition-duration: 0.3s;
  transition-property: color, background-color;
  &:hover, &:focus, &:active {
    background-color: #3272d9;
  }
`;

export const Errors = styled.p`
  color: #ff5ecf;
  margin-top: .5rem;
  font-size: 14px;
`;
