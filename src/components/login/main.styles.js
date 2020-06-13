import styled from "@emotion/styled"

export const P = styled.p`
  font-size: 13px;
  margin: 0.7rem auto;
`

export const H1 = styled.h1`
  text-align: left;
  line-height: 20px;
  display: flex;
  position: relative;
  padding: 10px 0;
  text-transform: uppercase;
  color: #2b2b2b;
  font-weight: 700;
  align-items: flex-start;
  justify-content: center;
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 5px;
    width: 90px;
    background: #00c400;
  }
`;
