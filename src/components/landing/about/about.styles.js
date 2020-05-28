import styled from '@emotion/styled';

export const Container = styled.div`
  background-color: #f5f5f5;
  width: 100%;
`;

export const ContainerInner = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  min-height: 20vh;
`;

export const AboutDetails = styled.div`
  width: 100%;
`;

export const AboutVideo = styled.div``;

export const BorderTitle = styled.h1`
    font-size: 25px;
    text-align: left;
    line-height: 20px;
    display: block;
    position: relative;
    padding: 15px 0;
    text-transform: uppercase;
    color: #2b2b2b;
    font-weight: 700;
    margin: 2rem 0;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 5px;
      width: 90px;
      background: #00c400;
    }
`;
